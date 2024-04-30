from rest_framework import viewsets
from rest_framework.response import Response
from django.core import serializers
from django.db.models import Q

import time
import json

from contactlist.models import Contatos
from contactlist.serializers import ContatosSerializer

class ContatosApiView(viewsets.ModelViewSet):
    serializer_class = ContatosSerializer

    def get_queryset(self):
        return Contatos.objects.all().order_by('nome')
    
    def retrieve(self, request, *args, **kwargs):
        time.sleep(1)
        termo = kwargs.get('pk').strip()

        queryset = Contatos.objects.filter(
            Q(nome__icontains=termo)|
            Q(email__icontains=termo)|
            Q(celular__icontains=termo)
        )

        Contatos_serialized = ContatosSerializer(queryset, many=True)

        return Response(Contatos_serialized.data)
    
    def create(self, request, *args, **kwargs):

        data = request.POST

        try:
            contato = Contatos.objects.get(
                Q(celular=data.get('celular'))|        
                Q(email=data.get('email'))
            )

            responseData = {'mensagem': 'Já existe um Contato com esse código ou número cadastrado!',}
            status=409

        except:
            contato = Contatos()

            contato.nome = data.get('nome')
            contato.email = data.get('email')
            contato.celular = data.get('celular')
            contato.dataNascimento = data.get('dataNascimento')
            contato.imagem = request.FILES.get('imagem')

            contato.save()

            responseData = {'mensagem': 'Contato Cadastrado!',}
            status=201  
        
        return Response(responseData,status=status)

    def partial_update(self, request, *args, **kwargs):

        data = request.POST

        contato = Contatos.objects.get(id=kwargs.get('pk'))

        contato.nome = data.get('nome')
        contato.email = data.get('email')
        contato.celular = data.get('celular')
        contato.dataNascimento = data.get('dataNascimento')
        contato.imagem = request.FILES.get('imagem', contato.imagem)

        contato.save()

        responseData = {'mensagem': 'Produto Editado!',}
        status=201  

        return Response(responseData,status=status)
    
    def update(self, request, *args, **kwargs):

        data = request.POST

        contato = Contatos.objects.get(id=kwargs.get('pk'))

        contato.nome = data.get('nome')
        contato.email = data.get('email')
        contato.celular = data.get('celular')
        contato.dataNascimento = data.get('dataNascimento')
        contato.imagem = request.FILES.get('imagem', contato.imagem)

        contato.save()
        
        responseData = {'mensagem': 'Produto Editado!',}
        status=201  

        return Response(responseData,status=status)