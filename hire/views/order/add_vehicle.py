from django.http import JsonResponse
from django.views.decorators.http import require_http_methods
from hire.models.vehicle.vehicle import Vehicle

def add_vehicle(request):
    try:
        data = request.GET
        
        # 创建新的Vehicle实例
        vehicle = Vehicle(
            store=data['store'],
            brand=data['brand'],
            model=data['model'],
            category=data['category'],
            hire_price=data['hire_price']
        )
        
        # 保存到数据库
        vehicle.save()

        # 返回成功响应
        return JsonResponse({'status': 'success', 'message': 'Vehicle added successfully.'})
    except Exception as e:
        # 如果出现错误，返回错误响应
        return JsonResponse({'status': 'error', 'message': str(e)})
    