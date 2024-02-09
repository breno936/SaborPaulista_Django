# sendemail/forms.py
from django import forms
from django.http import BadHeaderError, HttpResponse
from django.shortcuts import redirect, render
from django.core.mail import send_mail, BadHeaderError
from django_recaptcha.fields import ReCaptchaField
from django_recaptcha.widgets import ReCaptchaV2Checkbox



class RepresentantesForm(forms.Form):
    # STATUS_CHOICES = (('1', 'Text Post'),('2', 'Image Post'),('3', 'Video Post'),)
    # post_type = forms.ChoiceField(choices=STATUS_CHOICES)

    nome = forms.CharField(max_length = 50,  label='', widget=forms.TextInput(attrs={ "class": "form-control my-10", "placeholder": "Nome"}))
    telefone = forms.CharField(max_length = 50, label='', widget=forms.TextInput(attrs={ "class": "form-control my-10", "placeholder": "Telefone"}) )
    email = forms.EmailField(max_length = 100, label='', widget=forms.TextInput(attrs={ "class": "form-control my-10", "placeholder": "E-mail"}))
    cidade = forms.CharField(max_length = 50,  label='', widget=forms.TextInput(attrs={ "class": "form-control my-10", "placeholder": "Cidade que deseja atuar"}))
    captcha = ReCaptchaField(label='')

class ContatoForm(forms.Form):
    nome = forms.CharField(max_length = 50,  label='', widget=forms.TextInput(attrs={ "class": "form-control my-10 fs", "placeholder": "Nome"}))
    email = forms.EmailField(max_length = 100, label='', widget=forms.TextInput(attrs={ "class": "form-control my-10 ms", "placeholder": "E-mail"}))
    telefone = forms.CharField(max_length=50, label='', widget=forms.TextInput(attrs={ "class": "form-control my-10 ms2", "placeholder": "Telefone"}) )
    # TIPO_CONTATO = (('', 'Tipo de Contato'), ('1', 'Consumidor'),('2', 'Empresa'),('3', 'Fornecedor'),)
    TIPO_CONTATO = (('', 'Tipo de Contato'), ('Consumidor', 'Consumidor'),('Empresa', 'Empresa'),('Fornecedor', 'Fornecedor'),)
    mensagem = forms.CharField(max_length=300, label='', widget=forms.Textarea(attrs={ "class": "form-control my-10 fs", "placeholder": "Mensagem"}), required=True)
    tipo = forms.ChoiceField(label='', choices=TIPO_CONTATO, widget=forms.Select(attrs={ "class": "form-select my-10 fs", "placeholder": "Mensagem"}), required=True) 
    captcha = ReCaptchaField(label='',  widget=ReCaptchaV2Checkbox( attrs={ "class": "g-recaptcha fs2"} ))
