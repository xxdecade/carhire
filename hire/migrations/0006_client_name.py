# Generated by Django 3.2.8 on 2024-04-23 07:01

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('hire', '0005_remove_client_name'),
    ]

    operations = [
        migrations.AddField(
            model_name='client',
            name='name',
            field=models.CharField(default='', max_length=50),
        ),
    ]