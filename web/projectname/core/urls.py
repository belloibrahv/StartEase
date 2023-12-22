from rest_framework import routers

from core.views import SchoolViewSet

router = routers.DefaultRouter()
router.register(r'schools', SchoolViewSet)

urlpatterns = []
