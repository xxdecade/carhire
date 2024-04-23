from django.http import JsonResponse
from django.core.exceptions import ObjectDoesNotExist
from hire.models.client.client import Client 

def getinfo(request):
    user = request.user
    if not user.is_authenticated:
        return JsonResponse({
            'result': "用户未登录",
        })
    else:
        try:
            client = Client.objects.get(user=user)
            return JsonResponse({
                'result': "success",
                'username': client.user.username,
                'phone': client.phone,
            })
        except ObjectDoesNotExist:
            return JsonResponse({
                'result': "客户信息不存在",
            })

