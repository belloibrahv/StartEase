from django.contrib import admin
from django.urls import path, include
from rest_framework import routers

from core.urls import router as core_router

router = routers.DefaultRouter()

router.registry.extend(core_router.registry)

urlpatterns = [
    path("api/", include(router.urls)),
    path("admin/", admin.site.urls),
    path("api-auth/", include('rest_framework.urls'))
]
