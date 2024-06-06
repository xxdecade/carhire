from django.http import JsonResponse
from hire.models.vehicle.vehicle import Vehicle
from django.utils.dateparse import parse_datetime

def get_vehicle_info(request):
    store = request.GET.get('store')
    time = request.GET.get('time')
    
    vehicles = Vehicle.objects.all()
    
    # 过滤店铺
    if store and store != 'all_store':
        vehicles = vehicles.filter(store=store)
    
    
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
