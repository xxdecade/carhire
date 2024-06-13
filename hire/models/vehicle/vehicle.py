from django.db import models
from django.utils import timezone

class Vehicle(models.Model):
    store = models.CharField(max_length=100, choices=[('南京浦口店', '南京浦口店'), ('南京鼓楼店', '南京鼓楼店'), ('南京江宁店', '南京江宁店'), ('南京雨花店', '南京雨花店'), ('南京秦淮店', '南京秦淮店')], default='南京浦口店')
    brand = models.CharField(max_length=100)
    model = models.CharField(max_length=100)
    category = models.CharField(max_length=100, choices=[('SUV', 'SUV'), ('Sedan', 'Sedan'), ('Truck', 'Truck'), ('Van', 'Van')])
    is_hired = models.BooleanField(default=False)  
    hired_client = models.ForeignKey('Client', on_delete=models.SET_NULL, null=True, blank=True) 
    hired_date = models.DateTimeField(null=True, blank=True)
    return_date = models.DateTimeField(null=True, blank=True)
    hire_price = models.DecimalField(max_digits=7, decimal_places=2, help_text='单位：元/天')

    def __str__(self):
        return f"{self.brand} {self.model} - {self.category} ({self.store})"


