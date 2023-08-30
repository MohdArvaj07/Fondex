from django.shortcuts import render
from .models import *

def index(request):
     products = Product.objects.all()
     context = {'products':products}
     return render(request, 'store/index.html', context)


def cart(request):
     if request.user.is_authenticated:
          customer = request.user.customer
          order, created = Order.objects.get_or_create(customer=customer, complete=False)
          items = order.orderitem_set.all()
     else:
          items=[]
          order = {'get_cart_total':0}
     context = {'items':items, 'order':order}
     return render(request, 'store/cart.html', context)

from django.conf import settings
def checkout(request):
     if request.user.is_authenticated:
          customer = request.user.customer
          order, created = Order.objects.get_or_create(customer=customer, complete=False)
          items = order.orderitem_set.all()
     else:
          items=[]
          order = {'get_cart_total':0}
     context = {'items':items, 'order':order}
     return render(request, 'store/checkout.html', context)

def category(request):
     context = {}
     return render(request, 'store/category.html', context)

def contact(request):
     context = {}
     return render(request, 'store/contact.html', context)

def product(request):
     context = {}
     return render(request, 'store/product.html', context)

def privacy_policy(request):
     context = {}
     return render(request, 'store/Privacy-Policy.html', context)

def terms_condition(request):
     context = {}
     return render(request, 'store/terms-conditions.html', context)

def about(request):
     context = {}
     return render(request, 'store/about.html', context)

def shop(request):
     context = {}
     return render(request, 'store/shop.html', context)

def p_01(request):
     context = {}
     return render(request, 'store/p-01.html', context)

def p_02(request):
     context = {}
     return render(request, 'store/p-02.html', context)

def p_03(request):
     context = {}
     return render(request, 'store/p-03.html', context)

def p_04(request):
     context = {}
     return render(request, 'store/p-04.html', context)

def p_05(request):
     context = {}
     return render(request, 'store/p-05.html', context)

def p_06(request):
     context = {}
     return render(request, 'store/p-06.html', context)