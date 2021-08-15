from django.shortcuts import render
from rest_framework.serializers import Serializer
from .serializers import StorySerializer
from rest_framework import viewsets
from .models import Story


def index(request):
    return render(request, 'frontend/index.html')

class StoryView(viewsets.ModelViewSet):
    serializer_class = StorySerializer
    queryset = Story.objects.all()