from django.db import models
from django.contrib.auth.models import User

class Myarchive(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    language = models.CharField(max_length=100)
    type = models.CharField(max_length=100)
    date = models.DateField(auto_now_add = True)
    author_name = models.CharField(max_length=100)
    book_name = models.CharField(max_length=100)
    published_date = models.CharField(max_length=100)
    uploaded = models.FileField(upload_to='upload/')
    converted = models.FileField(upload_to='upload/', null=True, blank=True)




class Library(models.Model):
    # user = models.ForeignKey(User, on_delete=models.CASCADE)
    language = models.CharField(max_length=100)
    author_name = models.CharField(max_length=100)
    book_name = models.CharField(max_length=100)
    published_date = models.CharField(max_length=100)
    type = models.CharField(max_length=100)
    date = models.DateField(auto_now_add = True)
    file = models.FileField(upload_to='upload/')


