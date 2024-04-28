from django.db import models
from django.utils import timezone

class Vehicle(models.Model):
    brand = models.CharField(max_length=100)
    model = models.CharField(max_length=100)
    category = models.CharField(max_length=100, choices=[('SUV', 'SUV'), ('Sedan', 'Sedan'), ('Truck', 'Truck'), ('Van', 'Van')])
    is_hired = models.BooleanField(default=False)  
    hired_client = models.ForeignKey('Client', on_delete=models.SET_NULL, null=True, blank=True) 
    hired_date = models.DateField(null=True, blank=True)
    return_date = models.DateField(null=True, blank=True)
    hire_price = models.DecimalField(max_digits=7, decimal_places=2, help_text='单位：元/天')

    def __str__(self):
        return f"{self.brand} {self.model} - {self.category}"

