from django.http import JsonResponse
from django.contrib.auth.models import User

def edit_name(request):
    data = request.GET
    newname = data.get("newname", "").strip()

    user = User.objects.get(id=request.user.id)
    user2 = User.objects.filter(username=newname)
    if user2:
        return JsonResponse({
            "result": "用户名已存在", 
        })
    user.username = newname
    user.save()
    return JsonResponse({
        "result": "success", 
    })
    
        
