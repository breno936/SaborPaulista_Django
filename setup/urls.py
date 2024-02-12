"""
URL configuration for setup project.

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/5.0/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path, include
from django.conf import settings

from django.conf.urls.static import static
from rest_framework import routers, serializers, viewsets
from home.models import Documents, Representantes
import django_filters.rest_framework
from rest_framework import generics
from rest_framework import filters


# Serializers define the API representation.
class DocumentsSerializer(serializers.ModelSerializer):
    class Meta:
        model = Documents 
        fields = '__all__'

# ViewSets define the view behavior.
class DocumentsViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = Documents.objects.all()
    serializer_class = DocumentsSerializer
    filter_backends = [filters.SearchFilter]
    search_fields = ['titulo', 'subtitulo']



class RepresentantesSerializer(serializers.ModelSerializer):
    class Meta:
        model = Representantes 
        fields = '__all__'

# ViewSets define the view behavior.
class RepresentantesViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = Representantes.objects.all()
    serializer_class = RepresentantesSerializer
    filter_backends = [filters.SearchFilter]
    search_fields = ['nome', 'cidade', 'cep']

# Routers provide an easy way of automatically determining the URL conf.
router = routers.DefaultRouter()
router.register(r'documents', DocumentsViewSet)
router.register(r'representantes', RepresentantesViewSet)

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', include('home.urls')),
    path('api/', include(router.urls)),
    path('produtos/', include('products.urls')),
    path('trabalheConosco/', include('trabalheConosco.urls')),
    path('representantes/', include('representantes.urls')),
    path('foodService/', include('foodService.urls')),
    path('documentos/', include('documentos.urls')),
    path('contato/', include('contato.urls')),
] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)

