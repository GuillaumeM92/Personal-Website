#!/bin/bash
# Nettoyage du VPS (16/09/2026). À lancer depuis le Mac :
#   ssh ionos 'bash -s' < deploy/cleanup-2026-09-16.sh
#
# - retire personal_website (Django), myfamily, test_project et discord_trading_bot
#   (services arrêtés, configs et dossiers ARCHIVÉS dans /root/archive-2026-09-16, rien n'est effacé)
# - gunicorn de grandpy et purbeurre : écoute en local uniquement
# - nginx : masque la version, TLS 1.2/1.3 seulement
# - certificat : réémis sans famille/test-project, anciens certificats expirés supprimés
#   (tout /etc/letsencrypt est sauvegardé avant)
# S'arrête à la première erreur.
set -euo pipefail

B=/root/archive-2026-09-16
S=/home/ubuntu/My-Websites
mkdir -p "$B"/{etc,supervisor,nginx,sites}
[ -f "$B/etc/etc-backup.tgz" ] || tar czf "$B/etc/etc-backup.tgz" /etc/nginx /etc/supervisor /etc/letsencrypt

echo "== 1. Services retirés"
for p in personal_website-gunicorn myfamily-gunicorn test_project-gunicorn discord_trading_bot; do
  supervisorctl stop "$p" >/dev/null 2>&1 || true
  f=/etc/supervisor/conf.d/${p}.conf
  [ -f "$f" ] && mv "$f" "$B/supervisor/"
done

echo "== 2. Gunicorn en local uniquement"
sed -i 's#--bind :8003#--bind 127.0.0.1:8003#' /etc/supervisor/conf.d/grandpy-gunicorn.conf
sed -i 's#--bind :8002#--bind 127.0.0.1:8002#' /etc/supervisor/conf.d/purbeurre-gunicorn.conf
supervisorctl reread
supervisorctl update
sleep 3
supervisorctl status

echo "== 3. nginx"
for f in myfamily test_project; do
  [ -f "/etc/nginx/sites-enabled/$f" ] && mv "/etc/nginx/sites-enabled/$f" "$B/nginx/"
done
[ -f /etc/nginx/sites-available/personal_website.django.bak ] && mv /etc/nginx/sites-available/personal_website.django.bak "$B/nginx/"
sed -i 's/^\s*# server_tokens off;/\tserver_tokens off;/; s/ssl_protocols TLSv1 TLSv1.1 TLSv1.2 TLSv1.3;/ssl_protocols TLSv1.2 TLSv1.3;/' /etc/nginx/nginx.conf
nginx -t
systemctl reload nginx

echo "== 4. Dossiers archivés"
for d in myfamily Test-Project discord_trading_bot Personal-Website; do
  [ -d "$S/$d" ] && mv "$S/$d" "$B/sites/"
done
ls "$S"

echo "== 5. Certificat"
for c in grandpy.guillaume-merle.me guillaume-merle.me purbeurre.guillaume-merle.me \
         test-project.guillaume-merle.me www.grandpy.guillaume-merle.me labouygue.fr guillaume-merle.fr; do
  [ -d "/etc/letsencrypt/live/$c" ] && certbot delete --non-interactive --cert-name "$c"
done
certbot certonly --nginx --non-interactive --key-type ecdsa --cert-name guillaume-merle.fr \
  -d guillaume-merle.fr -d www.guillaume-merle.fr \
  -d labouygue.fr -d www.labouygue.fr \
  -d grandpy.guillaume-merle.fr -d www.grandpy.guillaume-merle.fr \
  -d purbeurre.guillaume-merle.fr -d www.purbeurre.guillaume-merle.fr
sed -i 's#/live/famille.guillaume-merle.fr/#/live/guillaume-merle.fr/#g' /etc/nginx/sites-enabled/*
if grep -rq famille /etc/nginx/sites-enabled/; then echo "famille encore référencé, arrêt"; exit 1; fi
nginx -t
systemctl reload nginx
certbot delete --non-interactive --cert-name famille.guillaume-merle.fr

echo "== Bilan"
supervisorctl status
ss -ltnp | grep gunicorn | awk '{print $4}' | sort -u
certbot certificates 2>/dev/null | grep -E "Certificate Name|Expiry"
echo "OK — archive : $B"
