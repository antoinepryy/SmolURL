from django.db import models

class TinyURL(models.Model):
    long_url = models.URLField(max_length=2000)
    short_code = models.CharField(max_length=20, unique=True)
    created_at = models.DateTimeField(auto_now_add=True)