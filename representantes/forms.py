# sendemail/forms.py
from django import forms
from django.http import BadHeaderError, HttpResponse
from django.shortcuts import redirect, render
from django.core.mail import send_mail, BadHeaderError
from django_recaptcha.fields import ReCaptchaField
from django_recaptcha.widgets import ReCaptchaV2Checkbox
from django.template.defaultfilters import filesizeformat
from django.core.exceptions import ValidationError

def file_size(value): # add this to some file where you can import it from
    print("caiu na validação")
    print('-' * 100)
    limit = 2 * 1024 * 1024
    print("size === ", value.size)
    if value.size > limit:
        raise ValidationError('File too large. Size should not exceed 2 MiB.')


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
    telefone = forms.CharField(max_length=15, label='', widget=forms.TextInput(attrs={ "class": "form-control my-10 ms", "placeholder": "Telefone"}) )
    email = forms.EmailField(max_length = 100, label='', widget=forms.TextInput(attrs={ "class": "form-control my-10 ms2", "placeholder": "E-mail"}))
    # TIPO_CONTATO = (('', 'Tipo de Contato'), ('1', 'Consumidor'),('2', 'Empresa'),('3', 'Fornecedor'),)
    TIPO_CONTATO = (('', 'Tipo de Contato'), ('Consumidor', 'Consumidor'),('Empresa', 'Empresa'),('Fornecedor', 'Fornecedor'),)
    mensagem = forms.CharField(max_length=300, label='', widget=forms.Textarea(attrs={ "class": "form-control my-10 fs", "placeholder": "Mensagem"}), required=True)
    tipo = forms.ChoiceField(label='', choices=TIPO_CONTATO, widget=forms.Select(attrs={ "class": " my-10 fs", "placeholder": "Mensagem"}), required=True) 
    captcha = ReCaptchaField(label='',  widget=ReCaptchaV2Checkbox( attrs={ "class": "g-recaptcha fs2"} ))


MAX_UPLOAD_SIZE = "5242880"

class TrabalheForm(forms.Form):
    curriculo  = forms.FileField(label='Selecione o arquivo (Arquivos PDF ou Word - Máx. 2Mb)', required=True, widget=forms.FileInput(attrs={ "class": "form-control my-10 fs1", "placeholder": "Curriculo"}))
    nome = forms.CharField(max_length = 50,  label='', widget=forms.TextInput(attrs={ "class": "form-control my-10 fs", "placeholder": "Nome"}))
    telefone = forms.CharField(max_length=15, label='', widget=forms.TextInput(attrs={ "class": "form-control my-10 tr", "placeholder": "Telefone"}) )
    email = forms.EmailField(max_length = 100, label='', widget=forms.TextInput(attrs={ "class": "form-control my-10 tr2", "placeholder": "E-mail"}))
    # TIPO_CONTATO = (('', 'Tipo de Contato'), ('1', 'Consumidor'),('2', 'Empresa'),('3', 'Fornecedor'),)
    TIPO_CONTATO = (('', 'Tipo de Contato'), ('Consumidor', 'Consumidor'),('Empresa', 'Empresa'),('Fornecedor', 'Fornecedor'),)
    mensagem = forms.CharField(max_length=300, label='', widget=forms.Textarea(attrs={ "class": "form-control my-10 fs", "placeholder": "Mensagem"}), required=True)
    # tipo = forms.ChoiceField(label='', choices=TIPO_CONTATO, widget=forms.Select(attrs={ "class": " my-10 fs", "placeholder": "Mensagem"}), required=True) 
    captcha = ReCaptchaField(label='',  widget=ReCaptchaV2Checkbox( attrs={ "class": "g-recaptcha fs2"} ))

    # def clean(self):
    #     self.check_file()
    #     return self.cleaned_data()

    def check_file(self):
        content = self.cleaned_data["curriculo"]
        content_type = content.content_type.split('/')[0]
        if content._size > int(MAX_UPLOAD_SIZE):
            raise forms.ValidationError(_(f"Please keep file size under {filesizeformat(MAX_UPLOAD_SIZE)}. Current file size {filesizeformat(content._size)}"))
        return content