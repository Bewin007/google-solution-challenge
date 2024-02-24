from rest_framework import serializers
from .models import *

class MyarchiveSerializer(serializers.ModelSerializer):
    class Meta:
        model = Myarchive
        fields = '__all__'
    
    


class LibrarySerializer(serializers.ModelSerializer):
    class Meta:
        model = Library
        fields = '__all__'

