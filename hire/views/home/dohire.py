from django.http import JsonResponse
from django.utils import timezone
from django.contrib.auth.models import User
from hire.models.vehicle.vehicle import Vehicle
from hire.models.client.client import Client

def hire_vehicle(request, vehicle_id):
    try:
        vehicle = Vehicle.objects.get(id=vehicle_id)
    except Vehicle.DoesNotExist:
        return JsonResponse({'result': 'fail', 'message': 'Vehicle not found.'}, status=404)

    if vehicle.is_hired:
        return JsonResponse({'result': 'fail', 'message': 'Vehicle is already hired.'})

    # 获取当前登录用户，并确保是客户端对象
    client = Client.objects.get(user=request.user)

    # 将客户端对象分配给 hired_client 属性
    vehicle.hired_client = client
    vehicle.is_hired = True
    vehicle.hired_date = timezone.now()
    vehicle.save()

    return JsonResponse({'result': 'success'})

def return_vehicle(request, vehicle_id):
    try:
        vehicle = Vehicle.objects.get(id=vehicle_id)
    except Vehicle.DoesNotExist:
        return JsonResponse({'result': 'fail', 'message': 'Vehicle not found.'}, status=404)

    if not vehicle.is_hired:
        return JsonResponse({'result': 'fail', 'message': 'Vehicle is not currently hired.'})

    vehicle.is_hired = False
    vehicle.return_date = timezone.now()
    vehicle.hired_client = None
    vehicle.save()

    return JsonResponse({'result': 'success'})

def get_user_orders(request):
    client = Client.objects.get(user=request.user)
    vehicles = Vehicle.objects.filter(hired_client=client, is_hired=True)
    vehicle_list = [
        {
            'id': vehicle.id,
            'store': vehicle.store,
            'brand': vehicle.brand,
            'model': vehicle.model,
            'category': vehicle.get_category_display(),
            'hired_date': vehicle.hired_date,
            'hire_price': vehicle.hire_price
        } for vehicle in vehicles
    ]
    return JsonResponse(vehicle_list, safe=False)
