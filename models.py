# This is an auto-generated Django model module.
# You'll have to do the following manually to clean this up:
#   * Rearrange models' order
#   * Make sure each model has one field with primary_key=True
#   * Make sure each ForeignKey and OneToOneField has `on_delete` set to the desired behavior
#   * Remove `managed = False` lines if you wish to allow Django to create, modify, and delete the table
# Feel free to rename the models, but don't rename db_table values or field names.
from django.db import models


class Aspnetroles(models.Model):
    id = models.AutoField(db_column='Id', primary_key=True)  # Field name made lowercase.
    name = models.TextField(db_column='Name')  # Field name made lowercase.

    class Meta:
        managed = False
        db_table = 'AspNetRoles'


class Aspnetuserclaims(models.Model):
    id = models.AutoField(db_column='Id', primary_key=True)  # Field name made lowercase.
    userid = models.TextField(db_column='UserId', blank=True, null=True)  # Field name made lowercase.
    claimtype = models.TextField(db_column='ClaimType')  # Field name made lowercase.
    claimvalue = models.TextField(db_column='ClaimValue')  # Field name made lowercase.

    class Meta:
        managed = False
        db_table = 'AspNetUserClaims'


class Aspnetuserlogins(models.Model):
    loginprovider = models.TextField(db_column='LoginProvider', primary_key=True)  # Field name made lowercase.
    providerkey = models.TextField(db_column='ProviderKey')  # Field name made lowercase.
    userid = models.ForeignKey('Aspnetusers', models.DO_NOTHING, db_column='UserId')  # Field name made lowercase.

    class Meta:
        managed = False
        db_table = 'AspNetUserLogins'


class Aspnetuserroles(models.Model):
    userid = models.OneToOneField('Aspnetusers', models.DO_NOTHING, db_column='UserId', primary_key=True)  # Field name made lowercase.
    roleid = models.ForeignKey(Aspnetroles, models.DO_NOTHING, db_column='RoleId')  # Field name made lowercase.

    class Meta:
        managed = False
        db_table = 'AspNetUserRoles'


class Aspnetusers(models.Model):
    id = models.TextField(db_column='Id', primary_key=True)  # Field name made lowercase.
    email = models.TextField(db_column='Email', blank=True, null=True)  # Field name made lowercase.
    emailconfirmed = models.IntegerField(db_column='EmailConfirmed')  # Field name made lowercase.
    passwordhash = models.TextField(db_column='PasswordHash')  # Field name made lowercase.
    securitystamp = models.TextField(db_column='SecurityStamp')  # Field name made lowercase.
    phonenumber = models.TextField(db_column='PhoneNumber', blank=True, null=True)  # Field name made lowercase.
    phonenumberconfirmed = models.IntegerField(db_column='PhoneNumberConfirmed', blank=True, null=True)  # Field name made lowercase.
    twofactorenabled = models.IntegerField(db_column='TwoFactorEnabled', blank=True, null=True)  # Field name made lowercase.
    lockoutenddateutc = models.TextField(db_column='LockoutEndDateUtc', blank=True, null=True)  # Field name made lowercase.
    lockoutenabled = models.IntegerField(db_column='LockoutEnabled', blank=True, null=True)  # Field name made lowercase.
    accessfailedcount = models.IntegerField(db_column='AccessFailedCount', blank=True, null=True)  # Field name made lowercase.
    username = models.TextField(db_column='UserName', blank=True, null=True)  # Field name made lowercase.

    class Meta:
        managed = False
        db_table = 'AspNetUsers'


class Categorias(models.Model):
    id = models.AutoField(db_column='Id', primary_key=True)  # Field name made lowercase.
    nome = models.TextField(db_column='Nome')  # Field name made lowercase.

    class Meta:
        managed = False
        db_table = 'Categorias'


class Categoriasdocumentos(models.Model):
    id = models.AutoField(db_column='Id', primary_key=True, blank=True, null=True)  # Field name made lowercase.
    nome = models.TextField(db_column='Nome', blank=True, null=True)  # Field name made lowercase.

    class Meta:
        managed = False
        db_table = 'CategoriasDocumentos'


class Configuracoes(models.Model):
    id = models.AutoField(db_column='Id', primary_key=True, blank=True, null=True)  # Field name made lowercase.
    emaildestino = models.TextField(db_column='EmailDestino', blank=True, null=True)  # Field name made lowercase.
    emailenviar = models.TextField(db_column='EmailEnviar', blank=True, null=True)  # Field name made lowercase.
    senhaenviar = models.TextField(db_column='SenhaEnviar', blank=True, null=True)  # Field name made lowercase.
    stmp = models.TextField(db_column='STMP', blank=True, null=True)  # Field name made lowercase.
    porta = models.IntegerField(db_column='Porta', blank=True, null=True)  # Field name made lowercase.

    class Meta:
        managed = False
        db_table = 'Configuracoes'


class Curriculoes(models.Model):
    id = models.AutoField(db_column='Id', primary_key=True, blank=True, null=True)  # Field name made lowercase.
    file = models.TextField(db_column='File')  # Field name made lowercase.
    nome = models.TextField(db_column='Nome', blank=True, null=True)  # Field name made lowercase.
    email = models.TextField(db_column='Email', blank=True, null=True)  # Field name made lowercase.
    telefone = models.TextField(db_column='Telefone', blank=True, null=True)  # Field name made lowercase.

    class Meta:
        managed = False
        db_table = 'Curriculoes'


class Documents(models.Model):
    id = models.AutoField(db_column='Id', primary_key=True, blank=True, null=True)  # Field name made lowercase.
    titulo = models.TextField(db_column='Titulo', blank=True, null=True)  # Field name made lowercase.
    arquivo = models.TextField(db_column='Arquivo')  # Field name made lowercase.
    subtitulo = models.TextField(db_column='SubTitulo', blank=True, null=True)  # Field name made lowercase.
    categoriaid = models.ForeignKey(Categoriasdocumentos, models.DO_NOTHING, db_column='CategoriaId', blank=True, null=True)  # Field name made lowercase.
    miniatura = models.TextField(db_column='Miniatura', blank=True, null=True)  # Field name made lowercase.

    class Meta:
        managed = False
        db_table = 'Documents'


class Products(models.Model):
    id = models.AutoField(db_column='Id', primary_key=True)  # Field name made lowercase.
    nome = models.TextField(db_column='Nome')  # Field name made lowercase.
    categoriaid = models.ForeignKey(Categorias, models.DO_NOTHING, db_column='CategoriaId')  # Field name made lowercase.
    preco = models.FloatField(db_column='Preco')  # Field name made lowercase.
    img1 = models.TextField(db_column='Img1', blank=True, null=True)  # Field name made lowercase.
    img2 = models.TextField(db_column='Img2', blank=True, null=True)  # Field name made lowercase.
    img3 = models.TextField(db_column='Img3', blank=True, null=True)  # Field name made lowercase.
    descricao = models.TextField(db_column='Descricao', blank=True, null=True)  # Field name made lowercase.
    modopreparo = models.TextField(db_column='ModoPreparo', blank=True, null=True)  # Field name made lowercase.
    conservacao = models.TextField(db_column='Conservacao', blank=True, null=True)  # Field name made lowercase.
    codigobarras = models.TextField(db_column='CodigoBarras', blank=True, null=True)  # Field name made lowercase.
    ingredientes = models.TextField(db_column='Ingredientes', blank=True, null=True)  # Field name made lowercase.
    idnutricional = models.ForeignKey('Tabelanutricionals', models.DO_NOTHING, db_column='IdNutricional', blank=True, null=True)  # Field name made lowercase.

    class Meta:
        managed = False
        db_table = 'Products'


class Productshomes(models.Model):
    id = models.AutoField(db_column='Id', primary_key=True, blank=True, null=True)  # Field name made lowercase.
    nome = models.TextField(db_column='Nome', blank=True, null=True)  # Field name made lowercase.
    categoriaid = models.ForeignKey(Categorias, models.DO_NOTHING, db_column='CategoriaId', blank=True, null=True)  # Field name made lowercase.
    img = models.TextField(db_column='Img', blank=True, null=True)  # Field name made lowercase.
    link = models.TextField(db_column='Link', blank=True, null=True)  # Field name made lowercase.

    class Meta:
        managed = False
        db_table = 'ProductsHomes'


class Representantes(models.Model):
    id = models.AutoField(db_column='Id', primary_key=True)  # Field name made lowercase.
    nome = models.TextField(db_column='Nome')  # Field name made lowercase.
    cidade = models.TextField(db_column='Cidade')  # Field name made lowercase.
    estado = models.TextField(db_column='Estado')  # Field name made lowercase.
    email = models.TextField(db_column='Email')  # Field name made lowercase.
    tel = models.TextField(db_column='Tel', blank=True, null=True)  # Field name made lowercase.
    cel = models.TextField(db_column='Cel')  # Field name made lowercase.
    enderecomaps = models.TextField(db_column='EnderecoMaps', blank=True, null=True)  # Field name made lowercase.

    class Meta:
        managed = False
        db_table = 'Representantes'


class Sliderhomes(models.Model):
    id = models.AutoField(db_column='Id', primary_key=True, blank=True, null=True)  # Field name made lowercase.
    titulo = models.TextField(db_column='Titulo', blank=True, null=True)  # Field name made lowercase.
    subtitulo = models.TextField(db_column='SubTitulo', blank=True, null=True)  # Field name made lowercase.
    linkbotao = models.TextField(db_column='LinkBotao', blank=True, null=True)  # Field name made lowercase.
    ativo = models.IntegerField(db_column='Ativo')  # Field name made lowercase.
    img = models.TextField(db_column='Img', blank=True, null=True)  # Field name made lowercase.
    video = models.TextField(db_column='Video', blank=True, null=True)  # Field name made lowercase.
    textobotao = models.TextField(db_column='TextoBotao', blank=True, null=True)  # Field name made lowercase.

    class Meta:
        managed = False
        db_table = 'SliderHomes'


class Tabelanutricionals(models.Model):
    id = models.AutoField(db_column='Id', primary_key=True, blank=True, null=True)  # Field name made lowercase.
    valorenergetico = models.TextField(db_column='ValorEnergetico', blank=True, null=True)  # Field name made lowercase.
    carboidratostotais = models.TextField(db_column='CarboidratosTotais', blank=True, null=True)  # Field name made lowercase.
    acucarestotais = models.TextField(db_column='AcucaresTotais', blank=True, null=True)  # Field name made lowercase.
    proteinas = models.TextField(db_column='Proteinas', blank=True, null=True)  # Field name made lowercase.
    gordurastotais = models.TextField(db_column='GordurasTotais', blank=True, null=True)  # Field name made lowercase.
    gordurassaturadas = models.TextField(db_column='GordurasSaturadas', blank=True, null=True)  # Field name made lowercase.
    gordurastrans = models.TextField(db_column='GordurasTrans', blank=True, null=True)  # Field name made lowercase.
    fibraalimentar = models.TextField(db_column='FibraAlimentar', blank=True, null=True)  # Field name made lowercase.
    sodio = models.TextField(db_column='Sodio', blank=True, null=True)  # Field name made lowercase.
    infos = models.TextField(db_column='Infos', blank=True, null=True)  # Field name made lowercase.

    class Meta:
        managed = False
        db_table = 'TabelaNutricionals'


class Videos(models.Model):
    id = models.AutoField(db_column='Id', primary_key=True, blank=True, null=True)  # Field name made lowercase.
    nome = models.TextField(db_column='Nome', blank=True, null=True)  # Field name made lowercase.
    url = models.TextField(db_column='Url', blank=True, null=True)  # Field name made lowercase.

    class Meta:
        managed = False
        db_table = 'Videos'
