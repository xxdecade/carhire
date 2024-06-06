from django.urls import path
from hire.views.home.edit_name import edit_name
from hire.views.home.show_name import show_name
from hire.views.home.edit_gender_phone import edit_phone
from hire.views.home.edit_gender_phone import edit_sex
from hire.views.home.edit_gender_phone import show_phone
from hire.views.home.edit_gender_phone import show_sex
from hire.views.home.dohire import hire_vehicle 
from hire.views.home.dohire import return_vehicle
from hire.views.home.dohire import get_user_orders

urlpatterns = [
    path('show_name/', show_name, name='show_name'),
    path('edit_name/', edit_name, name='edit_name'),
    path('show_sex', show_sex, name='show_sex'),
    path('edit_sex', edit_sex, name='edit_sex'),
    path('show_phone', show_phone, name='show_phone'),
    path('edit_phone', edit_phone, name='edit_phone'),
    path('hire_vehicle/<int:vehicle_id>/', hire_vehicle, name='hire_vehicle_with_id'),
    path('return_vehicle/<int:vehicle_id>/', return_vehicle, name='return_vehicle_with_id'),
    path('get_user_orders/', get_user_orders, name='get_user_orders_with_id'), 
]
