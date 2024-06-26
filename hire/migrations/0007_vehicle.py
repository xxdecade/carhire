# Generated by Django 3.2.8 on 2024-04-28 08:29

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('hire', '0006_client_name'),
    ]

    operations = [
        migrations.CreateModel(
            name='Vehicle',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('brand', models.CharField(max_length=100)),
                ('model', models.CharField(max_length=100)),
                ('category', models.CharField(max_length=100)),
                ('is_hired', models.BooleanField(default=False)),
                ('hired_date', models.DateField(blank=True, null=True)),
                ('hire_price', models.DecimalField(decimal_places=2, max_digits=10)),
                ('hired_client', models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.SET_NULL, to='hire.client')),
            ],
        ),
    ]
