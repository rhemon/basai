# Generated by Django 3.0.3 on 2020-03-03 21:16

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('server', '0002_auto_20200303_1220'),
    ]

    operations = [
        migrations.AddField(
            model_name='extrauserdetail',
            name='reset_code',
            field=models.CharField(blank=True, max_length=4, null=True),
        ),
    ]