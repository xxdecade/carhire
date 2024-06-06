from django.http import JsonResponse
from django.contrib.auth.decorators import login_required
from hire.models.client.client import Client

@login_required
def show_sex(request):
    client = Client.objects.get(user=request.user)
    return JsonResponse({'result': client.sex})

@login_required
def edit_sex(request):
    newsex = request.GET.get('newsex')
    client = Client.objects.get(user=request.user)
    client.sex = newsex
    client.save()
    return JsonResponse({'result': 'success'})

@login_required
def show_phone(request):
    client = Client.objects.get(user=request.user)
    return JsonResponse({'result': client.phone})

@login_required
def edit_phone(request):
    newphone = request.GET.get('newphone')
    client = Client.objects.get(user=request.user)
    client.phone = newphone
    client.save()
    return JsonResponse({'result': 'success'})
