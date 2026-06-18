from django.db import models
from django.utils import timezone
from django.contrib.auth.models import User

class Category(models.Model):
    name=models.CharField(max_length=100)

    def __str__(self):
        return self.name


class product(models.Model):
    category=models.ForeignKey(Category, on_delete=models.CASCADE)    
    name=models.CharField(max_length=100)
    price=models.PositiveIntegerField()
    description=models.TextField()
    is_available=models.BooleanField(default=True)
    created_at=models.DateTimeField(auto_now_add=True)

    image=models.ImageField(upload_to='products/')



    def __str__(self):
        return self.name
    



class profile(models.Model):
     user=models.OneToOneField(User, on_delete=models.CASCADE)
     phone=models.CharField(max_length=20)
     

     def __str__(self):
          return self.user.email
     
class Rezerv(models.Model):
        user=models.ForeignKey(User,on_delete=models.CASCADE)
        name=models.CharField(max_length=100)
        phone=models.CharField(max_length=20)
        date=models.DateField()
        time=models.TimeField()
        gusts=models.IntegerField()
        tozih=models.CharField(max_length=100)

        def __str__(self):
            return self.name


            
    