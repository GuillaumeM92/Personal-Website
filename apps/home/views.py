from django.shortcuts import render

def about(request):
    return render(request, 'home/about.html')

def portfolio(request):
    return render(request, 'home/portfolio.html')

# def resume(request):
#     return render(request, 'home/resume.html')
