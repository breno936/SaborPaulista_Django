from django.contrib import admin
from home.models import *

# Register your models here.
class ItemAdmin(admin.ModelAdmin):
    pass

class CategoriaAdmin(admin.ModelAdmin):
    pass

class ProductAttributesAdmin(admin.ModelAdmin):
    pass

class RepresentantesAdmin(admin.ModelAdmin):
    pass

class CatDocAdmin(admin.ModelAdmin):
    pass

class DocumentsAdmin(admin.ModelAdmin):
    pass

class SliderAdmin(admin.ModelAdmin):
    pass

admin.site.register(Products, ItemAdmin)
admin.site.register(Categorias, CategoriaAdmin)
admin.site.register(ProductsAttributes, ProductAttributesAdmin)
admin.site.register(Representantes, RepresentantesAdmin)
admin.site.register(Documents, DocumentsAdmin)
admin.site.register(Categoriasdocumentos, CatDocAdmin)
admin.site.register(Sliderhomes, SliderAdmin)