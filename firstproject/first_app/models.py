from django.db import models

# Create your models here.

class Products(models.Model):
    id = models.CharField(max_length=30,primary_key=True)
    name = models.CharField(max_length=30)
    price = models.CharField(max_length=30)
    
class BaliTouristDestination(models.Model):
    id = models.BigAutoField(primary_key=True)
    place = models.CharField(max_length=255)
    location = models.CharField(max_length=255)
    coordinate = models.CharField(max_length=255)
    rating = models.FloatField()
    reviews_count = models.IntegerField()
    source = models.CharField(max_length=555)
    description = models.CharField(max_length=555)
    fee = models.CharField(max_length=555)
    


