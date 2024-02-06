from django.shortcuts import render
from django.views.generic import View

# Create your views here.

class TrabalheConoscoView(View):
    def get(self, request):
        return render(request, "trabalheConosco/trabalheConosco.html")

class SobreNosView(View):
    def get(self, request):
        return render(request, "trabalheConosco/sobreNos.html")