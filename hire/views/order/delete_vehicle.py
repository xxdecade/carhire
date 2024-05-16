from django.http import JsonResponse
from django.views.decorators.http import require_POST
from hire.models.vehicle.vehicle import Vehicle
from django.views.decorators.csrf import csrf_exempt

@csrf_exempt
@require_POST
def delete_vehicle(request, vehicle_id):
    try:
        vehicle = Vehicle.objects.get(id=vehicle_id)
        vehicle.delete()
        return JsonResponse({'status': 'success', 'message': 'Vehicle deleted successfully.'})
    except Vehicle.DoesNotExist:
        return JsonResponse({'status': 'error', 'message': 'Vehicle not found.'}, status=404)
    except Exception as e:
        return JsonResponse({'status': 'error', 'message': str(e)}, status=500)
