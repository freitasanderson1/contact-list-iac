from rest_framework import viewsets
from rest_framework.response import Response
from django.core import serializers
from django.db.models import Q

import json

from contactlist.models import Contatos
from contactlist.serializers import ContatosSerializer

class ContatosApiView(viewsets.ModelViewSet):
    serializer_class = ContatosSerializer

    def get_queryset(self):
        return Contatos.objects.all().order_by('nome')