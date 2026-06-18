from django.contrib import admin
from django.urls import path
from core.views import home
from django.conf import settings
from django.conf.urls.static import static
from .views import *
 

urlpatterns = [
     path('',Cafe_Nosch),
     path('Nosche/<int:id>/',product_detail),
     path('drinks/',drinks),
     path('category/<str:name>/',category_detail),
     path('nousch.fr',comingsoon),
     path('oo/',alaki),
     path('menu/',baner),
     path('re/',rezerv2),
     path('login/',login_viwe,name='login'),
     path('register/',singin),
     path("logout/",logout_user,name="logout"),
     path('account/',account,name='account')
]
urlpatterns += static(settings.MEDIA_URL,document_root=settings.MEDIA_ROOT)