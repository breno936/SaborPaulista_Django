from django.urls import path
from . import views

urlpatterns = [
    path("", views.RepresentantesView.as_view(), name="representantes"),

]
