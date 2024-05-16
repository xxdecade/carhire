from django.http import JsonResponse
from django.views.decorators.http import require_http_methods
from hire.models.vehicle.vehicle import Vehicle

def edit_vehicle(request):
    try:
        data = request.GET
        
        # 获取要编辑的车辆的ID，并查询数据库
        vehicle_id = data.get('id')
        vehicle = Vehicle.objects.get(id=vehicle_id)
        
        # 更新车辆信息
        vehicle.brand = data.get('brand', vehicle.brand)
        vehicle.model = data.get('model', vehicle.model)
        vehicle.category = data.get('category', vehicle.category)
        vehicle.hire_price = data.get('hire_price', vehicle.hire_price)
        vehicle.save()
        
        # 返回成功响应
        return JsonResponse({'status': 'success', 'message': 'Vehicle updated successfully.'})
    except Vehicle.DoesNotExist:
        # 如果车辆不存在，返回错误响应
        return JsonResponse({'status': 'error', 'message': 'Vehicle not found.'}, status=404)
    except Exception as e:
        # 如果出现其他错误，返回错误响应
        return JsonResponse({'status': 'error', 'message': str(e)}, status=500)
