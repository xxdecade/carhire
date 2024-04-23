from django.http import JsonResponse
from django.contrib.auth import login
from django.contrib.auth.models import User
from hire.models.client.client import Client

def register(request):
    data = request.GET
    username = data.get("username", "").strip()
    password = data.get("password", "").strip()
    password2 = data.get("password2", "").strip()
    if not username or not password:
        return JsonResponse({
            'result': "用户名和密码不能为空"
        })
    if password != password2:
        return JsonResponse({
            'result': "两次输入的密码不一致"
        })
    if User.objects.filter(username=username).exists():
        return JsonResponse({
            'result': "用户名已存在"
        })
    user = User.objects.create_user(username=username, password=password)
    user.save()
    Client.objects.create(user=user, name=user.username)
    login(request, user)
    return JsonResponse({
        'result': "success"
    })