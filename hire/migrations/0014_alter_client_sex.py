# Generated by Django 3.2.8 on 2024-06-06 07:26

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('hire', '0013_auto_20240606_1501'),
    ]

    operations = [
        migrations.AlterField(
            model_name='client',
            name='sex',
            field=models.CharField(choices=[('男', '男'), ('女', '女'), ('未知', '其他')], default='other', max_length=10),
        ),
    ]
