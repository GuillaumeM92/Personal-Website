from django.urls import path
from . import views

urlpatterns = [
    path('', views.about, name='about'),
    path('about/', views.about, name='about'),
    path('portfolio/', views.portfolio, name='portfolio'),
    path('about-en/', views.about_en, name='about-en'),
    path('portfolio-en/', views.portfolio_en, name='portfolio-en'),
]
