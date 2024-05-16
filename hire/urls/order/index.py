from django.urls import path
from hire.views.order.get_vehicle_info import get_vehicle_info
from hire.views.order.add_vehicle import add_vehicle
from hire.views.order.get_vehicle_byid import get_vehicle_byid
from hire.views.order.edit_vehicle import edit_vehicle
from hire.views.order.delete_vehicle import delete_vehicle

urlpatterns = [
    path('get_vehicle_info/', get_vehicle_info, name='get_vehicle_info'),
    path('add_vehicle/', add_vehicle, name='add_vehicle'),
    path('get_vehicle_byid/<int:vehicle_id>/', get_vehicle_byid, name='get_vehicle_byid'),
    path('edit_vehicle/', edit_vehicle, name='edit_vehicle'),
    path('delete_vehicle/<int:vehicle_id>/', delete_vehicle, name='delete_vehicle'),
]
