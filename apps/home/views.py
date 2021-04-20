from django.shortcuts import render

def about(request):
    return render(request, 'home/about.html')

def portfolio(request):
    return render(request, 'home/portfolio.html')

def about_en(request):
    return render(request, 'home/about_en.html')

def portfolio_en(request):
    return render(request, 'home/portfolio_en.html')
