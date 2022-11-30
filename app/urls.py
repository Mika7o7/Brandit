from django.urls import path
from . import views

urlpatterns = [
    path('', views.home, name="home"),
    path('about', views.about, name="about"),
    path('portfolio', views.portfolio, name="portfolio"),
    path('service', views.service, name="service"),
    path('contact', views.contact, name="contact"),
    path('brandit', views.brandit, name="brandit"),
    path('start_project', views.start_project, name="start_project"),
]
