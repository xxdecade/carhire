from django.http import JsonResponse
from hire.models.client.client import Client 

def getinfo(request):
    user = request.user
    if not user.is_authenticated:
        return JsonResponse({
            'result': "用户未登录",
        })
    else:
        client = Client.objects.get(user=request.user)
        return JsonResponse({
            'result': "success",
            'username': client.user.username,
            'photo': client.photo,
            'phone': client.phone,
        })