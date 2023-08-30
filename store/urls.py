
from django.urls import path
from . import views
urlpatterns = [
	path('', views.index, name="index.html"),
	path('cart.html/', views.cart, name="cart.html"),
	path('shop.html/', views.shop, name="shop.html"),
	path('checkout.html/', views.checkout, name="checkout.html"),
	path('category.html/', views.category, name="category.html"),
	path('about.html/', views.about, name="about.html"),
	path('product.html/', views.product, name="product.html"),
	path('terms-conditions.html/', views.terms_condition, name="terms_conditions.html"),
	path('contact.html/', views.contact, name="contact.html"),
	path('Privacy-Policy.html/', views.privacy_policy, name="Privacy_policy.html"),
	path('p-01.html/', views.p_01, name="p-01.html"),
	path('p-02.html/', views.p_02, name="p-02.html"),
	path('p-03.html/', views.p_03, name="p-03.html"),
	path('p-04.html/', views.p_04, name="p-04.html"),
	path('p-05.html/', views.p_05, name="p-05.html"),
	path('p-06.html/', views.p_06, name="p-06.html"),
]