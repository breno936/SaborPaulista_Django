from django.shortcuts import render
from django.views.generic import View
from .models import Products, Sliderhomes

# Create your views here.

# def home(request):
#     return render(request, "home/home.html")

class HomeView(View):
    print("A" * 100)
    def get(self, request):
        produtos = Products.objects.filter(home_page=True).all()[:6]
        slides = Sliderhomes.objects.filter(visivel=True).all()
        # produtos_dict = {'produtos': produtos  }
        return render(request, "home/home.html", { "produtos" : produtos, "slides" : slides})