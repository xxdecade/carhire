from django.http import JsonResponse
from django.contrib.auth.models import User

def forget(request):
    data = request.GET
    username = data.get("username", "").strip()
    password = data.get("password", "").strip()
    password2 = data.get("password2", "").strip()

    try:
        user = User.objects.get(username=username)
    except User.DoesNotExist:
        return JsonResponse({
            'result': "用户不存在"
        })

    if password != password2:
        return JsonResponse({
            'result': "两次密码不一致"
        })

    user.set_password(password)
    user.save()
    return JsonResponse({
        'result': "success"
    })
