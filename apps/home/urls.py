from django.urls import path
from . import views

urlpatterns = [
    path('', views.about, name='about'),
    path('about/', views.about, name='about'),
    path('portfolio/', views.portfolio, name='portfolio'),
    # path('resume/', views.resume, name='resume'),
]
