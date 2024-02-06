from django.urls import path
from . import views

urlpatterns = [
    path("", views.FoodServiceView.as_view(), name="foodService"),

]
