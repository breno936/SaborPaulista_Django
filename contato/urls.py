from django.urls import path
from . import views

urlpatterns = [
    path("", views.ContatoView.as_view(), name="contato"),

]
