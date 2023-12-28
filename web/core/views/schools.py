from rest_framework import viewsets

from core.models import School
from core.serializers import SchoolSerializer

class SchoolViewSet(viewsets.ModelViewSet):
    queryset = School.objects.all()
    serializer_class = SchoolSerializer
