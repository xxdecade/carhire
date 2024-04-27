from django.urls import path
from hire.views.home.edit_name import edit_name
from hire.views.home.show_name import show_name

urlpatterns = [
    path('show_name/', show_name, name='show_name'),
    path('edit_name/', edit_name, name='edit_name'),
]
