from django.http import JsonResponse
from hire.models.vehicle.vehicle import Vehicle
from django.core import serializers

def get_vehicle_info(request):
    vehicles = Vehicle.objects.all()
    vehicle_list = [
        {
            'id': vehicle.id,
            'store': vehicle.store,
            'brand': vehicle.brand,
            'model': vehicle.model,
            'category': vehicle.get_category_display(),
            'is_hired': vehicle.is_hired,
            'hire_price': vehicle.hire_price
        } for vehicle in vehicles
    ]
    return JsonResponse(vehicle_list, safe=False)
