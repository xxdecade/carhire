from django.db import models
from django.contrib.auth.models import User

class Client(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    sex = models.CharField(max_length=10, choices=[('男', '男'), ('女', '女'), ('未知', '其他')], default='other')
    phone = models.CharField(max_length=15, blank=True, null=True)


    def __str__(self):
        return str(self.user)