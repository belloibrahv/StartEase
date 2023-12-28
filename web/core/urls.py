from rest_framework import routers
from core.views import SchoolViewSet
from core.user.views import UserViewSet
from core.auth.views import LoginViewSet, RegistrationViewSet, RefreshViewSet

router = routers.DefaultRouter()

# AUTHENTICATION
router.register(r'auth/login', LoginViewSet, basename='auth-login')
router.register(r'auth/refresh', RefreshViewSet, basename='auth-refresh')
router.register(r'auth/register', RegistrationViewSet, basename='auth-register')

# USER
router.register(r'user', UserViewSet, basename='user')

# SCHOOL
router.register(r'schools', SchoolViewSet)

urlpatterns = []
