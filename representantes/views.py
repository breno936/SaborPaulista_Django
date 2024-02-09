from django.shortcuts import render, redirect
from django.views.generic import View
from home.models import Representantes, Products
from .forms import RepresentantesForm
from django.core.mail import send_mail, BadHeaderError
from django.http import HttpResponse

# Create your views here.

class RepresentantesView(View):
    def get(self, request):
        form = RepresentantesForm()
        representantes = Representantes.objects.all()
        produtos = Products.objects.all()
        return render(request, "representantes/representantes.html", {"representantes" : representantes, "produtos": produtos, "form" : form})

    def post(self, request):
        print('caiu no post ')
        print('%' * 100)
        form = RepresentantesForm(request.POST)
        if form.is_valid():
            subject = "Contato Representante" 
            full_message = f"""
            Nome: {form.cleaned_data['nome']} \n
            E-mail: {form.cleaned_data['email']} \n
            Telefone: {form.cleaned_data['telefone']} \n
            Cidade: {form.cleaned_data['cidade']} \n
            """
            body = {
            'nome': form.cleaned_data['nome'],
			'email': form.cleaned_data['email'], 
			'telefone':form.cleaned_data['telefone'], 
			'cidade':form.cleaned_data['cidade'], 
			}

            # message = "\n".join(body.values())
            message = full_message

            try:
                send_mail(subject, message, from_email='naoresponda@collegare.com.br', recipient_list=['angeloni.dev@gmail.com'])

            except BadHeaderError:
                return HttpResponse('Invalid header found.')
            
            # return redirect("success")

        representantes = Representantes.objects.all()
        produtos = Products.objects.all()
        return render(request, "representantes/representantes.html", {"representantes" : representantes, "produtos": produtos, "form" : form})

