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
