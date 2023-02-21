from rest_framework import generics, mixins, viewsets
from .models import TinyURL
from .serializers import TinyURLSerializer

class TinyURLListCreate(mixins.ListModelMixin, mixins.CreateModelMixin, viewsets.GenericViewSet):
    queryset = TinyURL.objects.all()
    serializer_class = TinyURLSerializer

class TinyURLDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = TinyURL.objects.all()
    serializer_class = TinyURLSerializer