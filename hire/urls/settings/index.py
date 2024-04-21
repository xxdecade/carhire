from django.urls import path
from hire.views.settings.getinfo import getinfo
from hire.views.settings.login import signin
from hire.views.settings.logout import signout
from hire.views.settings.register import register
from hire.views.settings.forget import forget

urlpatterns = [
    path('getinfo/', getinfo, name='settings_getinfo'),
    path('login/', signin, name='settings_login'),
    path('logout/', signout, name='settings_logout'),
    path('register/', register, name='settings_register'),
    path('forget/', forget, name='settings_forget'),
]
