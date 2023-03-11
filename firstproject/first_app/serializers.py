from rest_framework import serializers
from .models import Products
from .models import BaliTouristDestination

class ProductsSerializers(serializers.ModelSerializer):
    class Meta:
        model = Products
        fields = '__all__'
        
class BaliTouristDestinationSerializers(serializers.ModelSerializer):
    class Meta:
        model = BaliTouristDestination()
        fields = '__all__'