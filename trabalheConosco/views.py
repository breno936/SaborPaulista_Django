from django.shortcuts import render
from django.views.generic import View
from home.models import Parceiros, Galeria
from representantes.forms import TrabalheForm
from django.core.mail import send_mail, BadHeaderError, EmailMessage
from django.http import HttpResponse
# Create your views here.


class TrabalheConoscoView(View):
    def get(self, request):
        form = TrabalheForm()
        return render(request, "trabalheConosco/trabalheConosco.html", {"form": form})

    def post(self, request):
        print('caiu no post ')
        print('%' * 100)
        form = TrabalheForm(request.POST, request.FILES)
        validado = False

        if form.is_valid():

            validado = True
            TIPO_CONTATO = (('', 'Tipo de Contato'), ('Consumidor', 'Consumidor'),('Empresa', 'Empresa'),('Fornecedor', 'Fornecedor'),)
            
            subject = "Trabalhe Conosco via site Sabor Paulista" 
            full_message = f"""
            Nome: {form.cleaned_data['nome']} \n
            E-mail: {form.cleaned_data['email']} \n
            Telefone: {form.cleaned_data['telefone']} \n
            Mensagem: {form.cleaned_data['mensagem']} \n
            """
            body = {
            'nome': form.cleaned_data['nome'],
			'email': form.cleaned_data['email'], 
			'telefone':form.cleaned_data['telefone'], 
			'Mensagem':form.cleaned_data['mensagem'], 
			}

            # message = "\n".join(body.values())
            message = full_message
            email = EmailMessage(subject=subject, body=message, from_email='naoresponda@collegare.com.br', to=['angeloni.dev@gmail.com'])

            # uploaded_file = request.FILES['curriculo'] # file is the name value which you have provided in form for file field
            uploaded_file = form.cleaned_data['curriculo']
            email.attach(uploaded_file.name, uploaded_file.read(), uploaded_file.content_type)

            try:
                email.send()
                # send_mail(subject, message, from_email='naoresponda@collegare.com.br', recipient_list=['angeloni.dev@gmail.com'])
                form = TrabalheForm()

            except BadHeaderError:
                return HttpResponse('Invalid header found.')
            
        return render(request, "foodService/foodService.html", {"form": form, "enviado" : validado})

class SobreNosView(View):
    def get(self, request):
        parceiros = Parceiros.objects.filter(visivel=True).all()
        galeria = Galeria.objects.filter(visivel=True).all()
        return render(request, "trabalheConosco/sobreNos.html", {"parceiros" : parceiros, "galeria": galeria})

    