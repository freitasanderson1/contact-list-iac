from django.contrib import admin

from contactlist.models import Contatos

@admin.register(Contatos)
class ContatosAdmin(admin.ModelAdmin):
    list_display = ('nome','celular','email','dataNascimento','imagem')
    search_fields = ('nome','celular','email')
    exclude = ('id',)
    readonly_fields = ('dataCadastro','dataUltimaAlteracao')