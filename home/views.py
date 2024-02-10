from django.shortcuts import render
from django.views.generic import View
from .models import Products, Sliderhomes, Videos

# Create your views here.

# def home(request):
#     return render(request, "home/home.html")

class HomeView(View):
    print("A" * 100)
    def get(self, request):
        produtos = Products.objects.filter(home_page=True).all()[:6]
        slides = Sliderhomes.objects.filter(visivel=True).all()
        video =  Videos.objects.order_by('-pk')[0]
        video.url = video.url.replace('https://www.youtube.com/watch?v=', 'https://www.youtube.com/embed/')
        # produtos_dict = {'produtos': produtos  }
        return render(request, "home/home.html", { "produtos" : produtos, "slides" : slides, "video" : video})