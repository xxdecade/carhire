from django.http import JsonResponse
from hire.models.vehicle.vehicle import Vehicle
from django.utils.dateparse import parse_datetime

def get_vehicle_info(request):
    store = request.GET.get('store')
    time = request.GET.get('time')
    sort_field = request.GET.get('sortField', 'store')  # Default sort by 'store'
    sort_direction = request.GET.get('sortDirection', 'asc')  # Default direction 'asc'

    vehicles = Vehicle.objects.all()

    # Filtering by store
    if store and store != 'all_store':
        vehicles = vehicles.filter(store=store)

    # Sorting
    if sort_direction == 'desc':
        sort_field = '-' + sort_field
    vehicles = vehicles.order_by(sort_field)

    vehicle_list = [
        {
            'id': vehicle.id,
            'store': vehicle.store,
            'brand': vehicle.brand,
            'model': vehicle.model,
            'category': vehicle.get_category_display(),
            'is_hired': vehicle.is_hired,
            'hired_date': vehicle.hired_date.strftime('%Y-%m-%d') if vehicle.hired_date else None,
            'return_date': vehicle.return_date.strftime('%Y-%m-%d') if vehicle.return_date else None,
            'hire_price': float(vehicle.hire_price)  # Ensuring JSON serialization
        } for vehicle in vehicles
    ]
    
    return JsonResponse(vehicle_list, safe=False)
