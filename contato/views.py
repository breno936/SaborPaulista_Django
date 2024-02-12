from django.shortcuts import render
from django.views.generic import View
from representantes.forms import ContatoForm
from django.core.mail import send_mail, BadHeaderError
from django.http import HttpResponse
# Create your views here.

class ContatoView(View):
    def get(self, request):
        form = ContatoForm()

        return render(request, "contato/contato.html", {"form": form})
    def post(self, request):
        validado = False
        form = ContatoForm(request.POST)
        if form.is_valid():
            validado = True

            TIPO_CONTATO = (('', 'Tipo de Contato'), ('Consumidor', 'Consumidor'),('Empresa', 'Empresa'),('Fornecedor', 'Fornecedor'),)

            subject = "Contato Sabor Paulista" 
            full_message = f"""
            Nome: {form.cleaned_data['nome']} \n
            E-mail: {form.cleaned_data['email']} \n
            Telefone: {form.cleaned_data['telefone']} \n
            Mensagem: {form.cleaned_data['mensagem']} \n
            Tipo: {form.cleaned_data['tipo']} \n
            """
            body = {
            'nome': form.cleaned_data['nome'],
			'email': form.cleaned_data['email'], 
			'telefone':form.cleaned_data['telefone'], 
			'Mensagem':form.cleaned_data['mensagem'], 
			'Tipo': form.cleaned_data['tipo'], 
			}

            # message = "\n".join(body.values())
            message = full_message

            try:
                send_mail(subject, message, from_email='naoresponda@collegare.com.br', recipient_list=['angeloni.dev@gmail.com'])
                form = ContatoForm()

            except BadHeaderError:
                return HttpResponse('Invalid header found.')
            
        return render(request, "contato/contato.html", {"form": form, "enviado" : validado})

