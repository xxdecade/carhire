from django.urls import path, include
from hire.views.index import index

urlpatterns = [
    path("", index, name="index"),
    path("home/", include("hire.urls.home.index")),
    path("detail/", include("hire.urls.detail.index")),
    path("order/", include("hire.urls.order.index")),
]
