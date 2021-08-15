from django.contrib import admin
from .models import Story

class StoryAdmin(admin.ModelAdmin):
    list = ('id', 'name', 'description', 'story')

admin.site.register(Story, StoryAdmin)
