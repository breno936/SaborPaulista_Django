from django.shortcuts import render, get_object_or_404
from django.views.generic import View
from home.models import Products, Categorias

# Create your views here.

class ProductsView(View):
    def get(self, request):
        produtos = Products.objects.all()
        categorias = Categorias.objects.all()
        # produtos_dict = {'produtos': produtos  }
        return render(request, "products/products.html", {'produtos': produtos, 'categorias': categorias})

class ProductsDetailView(View):
    def get(self, request, pk):
        produto_info = get_object_or_404(Products, pk=pk)
        return render(request, "products/product-detail.html", {"produto" : produto_info})