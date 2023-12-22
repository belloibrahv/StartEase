from core.models import School
from serializers import SchoolSerializer

from rest_framework import viewsets

class UserViewSet(viewsets.ModelViewSet):
    queryset = School.objects.all()
    serializer_class = SchoolSerializer
