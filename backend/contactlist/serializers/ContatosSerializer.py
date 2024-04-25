from rest_framework import serializers
from contactlist.models import Contatos

class ContatosSerializer(serializers.ModelSerializer):

    class Meta:

        model = Contatos
        fields = '__all__'