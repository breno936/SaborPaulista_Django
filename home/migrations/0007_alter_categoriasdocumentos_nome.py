# Generated by Django 4.2.9 on 2024-02-04 21:23

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('home', '0006_representantes_cep'),
    ]

    operations = [
        migrations.AlterField(
            model_name='categoriasdocumentos',
            name='nome',
            field=models.CharField(blank=True, db_column='Nome', max_length=50, null=True),
        ),
    ]