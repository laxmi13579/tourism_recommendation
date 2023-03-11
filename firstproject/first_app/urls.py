from django.urls import path
from first_app import views 

urlpatterns = [
    path('',views.index,name='index'),
    path('rating',views.getListBasedOnRating,name='rating'),
    path('reviews_count',views.getListBasedOnReviewsCount,name='reviews_count'),
    path('ratingandreviews_count',views.getListBasedOnRatingAndReviewsCount,name='ratingandreviews_count'),
    path('location',views.getListBasedOnLocation,name='location'),
    path('fee',views.getListBasedOnFee,name='fee'),
    path('feeandlocation',views.getListBasedOnFeeAndLocation,name='feeandlocation'),
    
    
]


