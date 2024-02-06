from django.urls import path
from . import views

urlpatterns = [
    path("", views.TrabalheConoscoView.as_view(), name="trabalheConosco"),
    path("sobreNos/", views.SobreNosView.as_view(), name="sobreNos")

]
