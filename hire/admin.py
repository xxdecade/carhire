from django.contrib import admin
from hire.models.client.client import Client
from hire.models.vehicle.vehicle import Vehicle

# Register your models here.
admin.site.register(Client)
admin.site.register(Vehicle)