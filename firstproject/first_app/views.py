from django.shortcuts import render
from django.http import HttpResponse
from django.http import JsonResponse
from rest_framework.response import Response
from rest_framework.decorators import api_view
from .serializers import ProductsSerializers
from .serializers import BaliTouristDestinationSerializers

# Create your views here.
# from .products import products
from first_app.models import Products
from first_app.models import BaliTouristDestination

@api_view()
def index(request):
    return Response('hello world')

@api_view(['GET'])
def getListBasedOnRating(request):
    bali_tourists = BaliTouristDestination.objects.all()
    serializer = BaliTouristDestinationSerializers(bali_tourists, many=True)
    return Response(serializer.data)
 
@api_view(['GET'])
def getListBasedOnReviewsCount(request):
    bali_tourists = BaliTouristDestination.objects.order_by('reviews_count')
    serializer = BaliTouristDestinationSerializers(bali_tourists, many=True)
    return Response(serializer.data)

@api_view(['GET'])
def getListBasedOnRatingAndReviewsCount(request):
    bali_tourists = BaliTouristDestination.objects.order_by('reviews_count','rating')
    serializer = BaliTouristDestinationSerializers(bali_tourists, many=True)
    return Response(serializer.data)

@api_view(['GET'])
def getListBasedOnLocation(request):
    bali_tourists = BaliTouristDestination.objects.order_by('location')
    serializer = BaliTouristDestinationSerializers(bali_tourists, many=True)
    return Response(serializer.data)

@api_view(['GET'])
def getListBasedOnFee(request):
    bali_tourists = BaliTouristDestination.objects.order_by('fee')
    serializer = BaliTouristDestinationSerializers(bali_tourists, many=True)
    return Response(serializer.data)
 
@api_view(['GET'])
def getListBasedOnFeeAndLocation(request):
    bali_tourists = BaliTouristDestination.objects.order_by('fee','location')
    serializer = BaliTouristDestinationSerializers(bali_tourists, many=True)
    return Response(serializer.data)
