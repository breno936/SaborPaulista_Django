from django.shortcuts import render
from django.views.generic import View
from home.models import Representantes
# Create your views here.

class RepresentantesView(View):
    def get(self, request):
        representantes = Representantes.objects.all()
        return render(request, "representantes/representantes.html", {"representantes" : representantes})