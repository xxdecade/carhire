from django.urls import path, include
from hire.views.index import index

urlpatterns = [
    path("", index, name="index"),
    path("home/", include("hire.urls.home.index")),
    path("settings/", include("hire.urls.settings.index")),
    path("order/", include("hire.urls.order.index")),
]
