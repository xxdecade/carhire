from django.http import JsonResponse
from django.contrib.auth.models import User

def show_name(request):
    user = request.user
    return JsonResponse({
        'result': user.username
    })