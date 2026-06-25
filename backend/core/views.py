from django.shortcuts import render,redirect
from django.http import HttpResponse
from .models import *
from django.contrib.auth import authenticate,login,logout
from django.contrib.auth.decorators import login_required
from django.contrib.auth import logout
from django.contrib import messages

def home(request):
    return render(request, 'base.html')

def Cafe_Nosch(request):
    products=product.objects.all()
    return render(request,'base.html',{'products':products})

def product_detail(request,id):
    products = product.objects.get(id=id)
    return render(request,'product_detail.html',{'product':products})

def drinks(request):
    products=product.objects.filter(category__name='Drink')
    return render( request,'drinks.html',{'products':products})

def category_detail(request,name):
    products=product.objects.filter(category__name=name)
    return render(request,'category.html',{'products':products,'category_name':name})

def comingsoon(request):
    return render(request,'nousch-coming-soon.html')

def alaki(request):
    return render(request,'alakii.html')

def baner(requst):
    return render(requst,"menu2.html")
@login_required(login_url="login")                 
def rezerv2(requst):
    
    if requst.method=="POST":
        Rezerv.objects.create(
          user=requst.user,
          name=requst.POST.get('name'),
          phone=requst.POST.get('phone'),
          date=requst.POST.get('date'),
          time=requst.POST.get('time'),
          gusts=requst.POST.get('gusts'),
          tozih=requst.POST.get('tozih')
       
        )
    messages.success(requst,"Votre réservation a été enregistrée avec succès.") 
    return render(requst,"rezarve1.html")                 
print("login viiiiw")
def login_viwe(requst):

    if requst.method=="POST":
        email=requst.POST.get("email")
        password=requst.POST.get("password")

        user=authenticate(
            requst,
            username=email,
            password=password
        )
        
        if user is not None:
            login(requst,user)
            messages.success(requst,"Bienvenue ! Vous êtes connecté")
            print("REDIRECTING")
            return redirect("/")
        else:
            return render(requst,'login.html',{
                "error":":("})
        messages.error(requst,"Nom d'utilisateur ou mot de passe incorrect")         
    return render(requst,"login.html")

def singin(requst):
    if requst.method=="POST":
        firstname=requst.POST.get("firstname")
        lastname=requst.POST.get("lastname")
        email=requst.POST.get("email")
        phone=requst.POST.get("phone")
        password=requst.POST.get("password")
        password2=requst.POST.get("password2")

        if password==password2:
            user=User.objects.create_user(
                username=email,
                email=email,
                password=password,
                first_name=firstname,
                last_name=lastname
            )
            profile.objects.create(
                user=user,
                phone=phone

            )
            messages.success(requst, "Compte créé avec succès.")
    else:
            messages.error(requst, "Veuillez corriger les erreurs du formulaire.")
    return render(requst,'register.html')
@login_required(login_url="login")
def account(requst):
    my_rezerv=Rezerv.objects.filter(
        user=requst.user
    )

    return render(requst,"account.html",{
        "rezervs":my_rezerv
    })

def logout_user(requst):
    logout(requst)
    return redirect("/")