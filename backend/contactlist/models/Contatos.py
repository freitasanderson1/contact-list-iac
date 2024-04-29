from django.db import models

class Contatos(models.Model):
    nome= models.CharField(verbose_name=u'Nome',max_length=255)
    email = models.CharField(u'Email', max_length=255,null=True, unique=True)
    celular = models.CharField('Celular com DDD',max_length=11, null=True, unique=True, blank=True, help_text='Fone de contato com DDD (63) 98765-4321', default=None)
    
    imagem = models.ImageField(u'Imagem do Contato', upload_to="contato", null=True, blank=True, help_text='Imagem que será mostrada em seu Perfil')

    dataNascimento = models.DateField('Data de Nascimento', null=True, blank=True)

    dataCadastro = models.DateTimeField('Data de Cadastro', auto_now_add=True, null=True)
    dataUltimaAlteracao = models.DateTimeField('Última alteração', null=True, blank=True, auto_now=True)

    class Meta:
        verbose_name = 'Contato'
        verbose_name_plural = 'Contatos'
        ordering = ['nome']

    def __str__(self):
        return f'{self.nome} - ({self.celular[0:2]}){self.celular[2:7]}-{self.celular[7:]} - {self.email} '