from django.http import JsonResponse
from hire.models.vehicle.vehicle import Vehicle
from django.core import serializers
from django.forms.models import model_to_dict

def get_vehicle_byid(request, vehicle_id):
    try:
        # 查询数据库，获取特定车辆的信息
        vehicle = Vehicle.objects.get(id=vehicle_id)
        # 序列化车辆数据
        vehicle_data = model_to_dict(vehicle)
        return JsonResponse(vehicle_data, safe=False)
    except Vehicle.DoesNotExist:
        # 如果车辆不存在，返回错误信息
        return JsonResponse({'error': 'Vehicle not found'}, status=404)
    except Exception as e:
        # 如果出现其他错误，返回错误响应
        return JsonResponse({'error': str(e)}, status=500)
