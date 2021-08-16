from django.db import models

class Story(models.Model):
    name = models.CharField(max_length=100)
    description = models.CharField(max_length=500, blank=True)
    story = models.TextField()