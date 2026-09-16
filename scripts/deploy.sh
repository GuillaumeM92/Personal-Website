#!/bin/sh
# Construit le site et l'envoie sur le VPS.
#
#   npm run deploy
#
# Hôte SSH : « ionos » (voir ~/.ssh/config), modifiable avec DEPLOY_HOST=...
set -eu

HOST="${DEPLOY_HOST:-ionos}"
DEST="/var/www/guillaume-merle.fr"

npm run build
rsync -rlz --delete --chmod=D755,F644 dist/ "$HOST:$DEST/"
echo "✓ Déployé sur $HOST:$DEST — https://guillaume-merle.fr"
