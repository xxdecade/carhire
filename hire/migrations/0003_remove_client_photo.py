# Generated by Django 3.2.8 on 2024-04-22 12:03

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('hire', '0002_client_phone'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='client',
            name='photo',
        ),
    ]