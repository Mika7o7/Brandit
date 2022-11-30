from django.shortcuts import render
from .models import Project

# Create your views here.


def home(request):
    return render(request, "templates/home.html")


def about(request):
    return render(request, "templates/about.html")


def service(request):
    return render(request, "templates/service.html")


def contact(request):
    return render(request, "templates/contact.html")


def portfolio(request):
    return render(request, "templates/portfolio.html")


def start_project(request):
    return render(request, "templates/start_project.html")


def brandit(request):
    return render(request, "templates/brandit.html")
