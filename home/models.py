from django.db import models

# Create your models here.
class Categorias(models.Model):
    # id = models.AutoField(db_column='Id', primary_key=True)  # Field name made lowercase.
    nome = models.TextField(db_column='Nome')  # Field name made lowercase.

    class Meta:
        db_table = 'Categorias'
        
    def __str__(self) -> str:
        return self.nome


class Categoriasdocumentos(models.Model):
    # id = models.AutoField(db_column='Id', primary_key=True, blank=True, null=True)  # Field name made lowercase.
    nome = models.CharField(db_column='Nome', blank=True, null=True, max_length=50)  # Field name made lowercase.

    class Meta:
        db_table = 'CategoriasDocumentos'
    
    def __str__(self) -> str:
        return self.nome


class Configuracoes(models.Model):
    # id = models.AutoField(db_column='Id', primary_key=True, blank=True, null=True)  # Field name made lowercase.
    emaildestino = models.TextField(db_column='EmailDestino', blank=True, null=True)  # Field name made lowercase.
    emailenviar = models.TextField(db_column='EmailEnviar', blank=True, null=True)  # Field name made lowercase.
    senhaenviar = models.TextField(db_column='SenhaEnviar', blank=True, null=True)  # Field name made lowercase.
    stmp = models.TextField(db_column='STMP', blank=True, null=True)  # Field name made lowercase.
    porta = models.IntegerField(db_column='Porta', blank=True, null=True)  # Field name made lowercase.

    class Meta:
        db_table = 'Configuracoes'


class Curriculoes(models.Model):
    # id = models.AutoField(db_column='Id', primary_key=True, blank=True, null=True)  # Field name made lowercase.
    file = models.TextField(db_column='File')  # Field name made lowercase.
    nome = models.TextField(db_column='Nome', blank=True, null=True)  # Field name made lowercase.
    email = models.TextField(db_column='Email', blank=True, null=True)  # Field name made lowercase.
    telefone = models.TextField(db_column='Telefone', blank=True, null=True)  # Field name made lowercase.

    class Meta:
        db_table = 'Curriculoes'


class Documents(models.Model):
    # id = models.AutoField(db_column='Id', primary_key=True, blank=True, null=True)  # Field name made lowercase.
    titulo = models.CharField(db_column='Titulo', max_length=50, blank=True, null=True)  # Field name made lowercase.
    # arquivo = models.TextField(db_column='Arquivo')  # Field name made lowercase.
    arquivo = models.FileField(upload_to='anexos/')
    subtitulo = models.CharField(db_column='SubTitulo', blank=True, null=True, max_length=100)  # Field name made lowercase.
    categoriaid = models.ForeignKey(Categoriasdocumentos, models.DO_NOTHING, db_column='CategoriaId', blank=True, null=True)  # Field name made lowercase.
    miniatura = models.ImageField(upload_to='images/', null=True)

    class Meta:
        db_table = 'Documents'

    def __str__(self) -> str:
        return self.titulo


class ProductsAttributes(models.Model):
    atributo = models.CharField(max_length=50)

    def __str__(self) -> str:
        return self.atributo

class Products(models.Model):
    # id = models.AutoField(db_column='Id', primary_key=True)  # Field name made lowercase.
    nome = models.CharField(db_column='Nome', max_length=50)  # Field name made lowercase.
    categoriaid = models.ForeignKey(Categorias, models.DO_NOTHING, db_column='CategoriaId')  # Field name made lowercase.
    preco = models.FloatField(db_column='Preco')  # Field name made lowercase.
    foto_principal = models.ImageField(upload_to='images/')
    foto_secundaria = models.ImageField(upload_to='images/')
    # img1 = models.TextField(db_column='Img1', blank=True, null=True)  # Field name made lowercase.
    # img2 = models.TextField(db_column='Img2', blank=True, null=True)  # Field name made lowercase.
    # img3 = models.TextField(db_column='Img3', blank=True, null=True)  # Field name made lowercase.
    descricao = models.TextField(db_column='Descricao', blank=True, null=True)  # Field name made lowercase.
    modopreparo = models.TextField(db_column='ModoPreparo', blank=True, null=True)  # Field name made lowercase.
    conservacao = models.TextField(db_column='Conservacao', blank=True, null=True)  # Field name made lowercase.
    # codigobarras = models.TextField(db_column='CodigoBarras', blank=True, null=True)  # Field name made lowercase.
    codigobarras = models.ImageField(upload_to='images/', blank=True)
    ingredientes = models.TextField(db_column='Ingredientes', blank=True, null=True)  # Field name made lowercase.
    idnutricional = models.ForeignKey('Tabelanutricionals', models.DO_NOTHING, db_column='IdNutricional', blank=True, null=True)  # Field name made lowercase.
    home_page = models.BooleanField(default=False)
    atributos = models.ManyToManyField(ProductsAttributes)

    class Meta:
        db_table = 'Products'
    
    def __str__(self) -> str:
        return self.nome


class Productshomes(models.Model):
    # id = models.AutoField(db_column='Id', primary_key=True, blank=True, null=True)  # Field name made lowercase.
    nome = models.TextField(db_column='Nome', blank=True, null=True)  # Field name made lowercase.
    categoriaid = models.ForeignKey(Categorias, models.DO_NOTHING, db_column='CategoriaId', blank=True, null=True)  # Field name made lowercase.
    img = models.TextField(db_column='Img', blank=True, null=True)  # Field name made lowercase.
    link = models.TextField(db_column='Link', blank=True, null=True)  # Field name made lowercase.

    class Meta:
        db_table = 'ProductsHomes'


class Representantes(models.Model):
    # id = models.AutoField(db_column='Id', primary_key=True)  # Field name made lowercase.
    nome = models.CharField(db_column='Nome', max_length=50)  # Field name made lowercase.
    endereco = models.CharField(max_length=255)
    cep = models.CharField(max_length=9)
    cidade = models.CharField(db_column='Cidade', max_length=50)  # Field name made lowercase.
    estado = models.CharField(db_column='Estado', max_length=2)  # Field name made lowercase.
    email = models.CharField(db_column='Email', max_length=100)  # Field name made lowercase.
    tel = models.CharField(db_column='Tel', blank=True, null=True, max_length=25)  # Field name made lowercase.
    cel = models.CharField(db_column='Cel', max_length=25)  # Field name made lowercase.
    enderecomaps = models.CharField(db_column='EnderecoMaps', blank=True, null=True, max_length=255)  # Field name made lowercase.

    class Meta:
        db_table = 'Representantes'

    def __str__(self) -> str:
        return self.nome


class Sliderhomes(models.Model):
    # id = models.AutoField(db_column='Id', primary_key=True, blank=True, null=True)  # Field name made lowercase.
    titulo = models.CharField(db_column='Titulo', blank=True, null=True, max_length=50)  # Field name made lowercase.
    subtitulo = models.CharField(db_column='SubTitulo', blank=True, null=True, max_length=50)  # Field name made lowercase.
    linkbotao = models.CharField(db_column='LinkBotao', blank=True, null=True, max_length=255)  # Field name made lowercase.
    visivel = models.BooleanField(default=True)
    # ativo = models.IntegerField(db_column='Ativo')  # Field name made lowercase.
    foto = models.ImageField(upload_to='images/')
    # img = models.TextField(db_column='Img', blank=True, null=True)  # Field name made lowercase.
    # video = models.TextField(db_column='Video', blank=True, null=True)  # Field name made lowercase.
    textobotao = models.CharField(db_column='TextoBotao', blank=True, null=True, max_length=50)  # Field name made lowercase.

    class Meta:
        db_table = 'SliderHomes'
    
    def __str__(self) -> str:
        return self.titulo


class Tabelanutricionals(models.Model):
    # id = models.AutoField(db_column='Id', primary_key=True, blank=True, null=True)  # Field name made lowercase.
    valorenergetico = models.FloatField(db_column='ValorEnergetico', blank=True, null=True)  # Field name made lowercase.
    carboidratostotais = models.FloatField(db_column='CarboidratosTotais', blank=True, null=True)  # Field name made lowercase.
    acucarestotais = models.FloatField(db_column='AcucaresTotais', blank=True, null=True)  # Field name made lowercase.
    proteinas = models.FloatField(db_column='Proteinas', blank=True, null=True)  # Field name made lowercase.
    gordurastotais = models.FloatField(db_column='GordurasTotais', blank=True, null=True)  # Field name made lowercase.
    gordurassaturadas = models.FloatField(db_column='GordurasSaturadas', blank=True, null=True)  # Field name made lowercase.
    gordurastrans = models.FloatField(db_column='GordurasTrans', blank=True, null=True)  # Field name made lowercase.
    fibraalimentar = models.FloatField(db_column='FibraAlimentar', blank=True, null=True)  # Field name made lowercase.
    sodio = models.FloatField(db_column='Sodio', blank=True, null=True)  # Field name made lowercase.
    infos = models.CharField(db_column='Infos', blank=True, null=True, max_length=255)  # Field name made lowercase.

    class Meta:
        db_table = 'TabelaNutricionals'
    
    def __str__(self) -> str:
        return str(self.id) + " - " + self.infos

class ProdutoFotos(models.Model):
    produtoid = models.ForeignKey(Products, on_delete=models.CASCADE)
    foto = models.ImageField(upload_to='images/')

    def __str__(self) -> str:
        return str(self.id)

class Videos(models.Model):
    # id = models.AutoField(db_column='Id', primary_key=True, blank=True, null=True)  # Field name made lowercase.
    nome = models.CharField(db_column='Nome', blank=True, null=True, max_length=100)  # Field name made lowercase.
    url = models.CharField(db_column='Url', blank=True, null=True, max_length=255)  # Field name made lowercase.

    class Meta:
        db_table = 'Videos'
