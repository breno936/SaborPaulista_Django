from django.shortcuts import render
from django.views.generic import View
from home.models import Documents, Categoriasdocumentos

# Create your views here.

class DocumentosView(View):
    def get(self, request):
        documentos = Documents.objects.all()
        categorias = Categoriasdocumentos.objects.all()
        return render(request, "documentos/documentos.html", {"documentos" : documentos, "categorias" : categorias})