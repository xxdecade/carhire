from django.db import models
from django.utils import timezone

class Vehicle(models.Model):
    brand = models.CharField(max_length=100)
    model = models.CharField(max_length=100)
    category = models.CharField(max_length=100)
    is_hired = models.BooleanField(default=False)  # 使用下划线来保持 Python 的命名习惯
    hired_client = models.ForeignKey('Client', on_delete=models.SET_NULL, null=True, blank=True)  # 使用外键关联到 Client 模型
    hired_date = models.DateField(null=True, blank=True)
    hire_price = models.DecimalField(max_digits=10, decimal_places=2)

    def __str__(self):
        return f"{self.brand} {self.model} - {self.category}"

