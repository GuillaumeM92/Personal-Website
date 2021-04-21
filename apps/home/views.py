from django.shortcuts import render

def about(request):
    return render(request, 'home/about.html', {'title': 'À mon sujet'})

def portfolio(request):
    return render(request, 'home/portfolio.html', {'title': 'Mes Projets'})

def about_en(request):
    return render(request, 'home/about_en.html', {'title': 'About Me'})

def portfolio_en(request):
    return render(request, 'home/portfolio_en.html', {'title': 'Portfolio'})
