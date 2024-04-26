from django.http import JsonResponse
from django.contrib.auth.models import User

def edit_name(request):
    data = request.GET
    newname = data.get("username", "").strip()

    user = User.objects.get(username=newname)
    if user is None:
        
