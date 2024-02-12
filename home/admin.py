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

class TabelaNutricionalAdmin(admin.ModelAdmin):
    def has_module_permission(self, request):
        return False


class ProdutoFotosAdmin(admin.ModelAdmin):
    pass

class VideosAdmin(admin.ModelAdmin):
    pass

class ParceirosAdmin(admin.ModelAdmin):
    list_display = ['image_tag',]
    readonly_fields = ['image_tag']

class GaleriaAdmin(admin.ModelAdmin):
    # fields = ['image_tag']
    list_display = ['image_tag',]
    readonly_fields = ['image_tag']

admin.site.register(Products, ItemAdmin)
admin.site.register(Categorias, CategoriaAdmin)
admin.site.register(ProductsAttributes, ProductAttributesAdmin)
admin.site.register(Representantes, RepresentantesAdmin)
admin.site.register(Documents, DocumentsAdmin)
admin.site.register(Categoriasdocumentos, CatDocAdmin)
admin.site.register(Sliderhomes, SliderAdmin)
admin.site.register(Tabelanutricionals, TabelaNutricionalAdmin)
admin.site.register(ProdutoFotos, ProdutoFotosAdmin)
admin.site.register(Videos, VideosAdmin)
admin.site.register(Parceiros, ParceirosAdmin)
admin.site.register(Galeria, GaleriaAdmin)