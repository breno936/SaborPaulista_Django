from django.urls import path
from . import views

urlpatterns = [
    path("", views.DocumentosView.as_view(), name="documentos"),

]
