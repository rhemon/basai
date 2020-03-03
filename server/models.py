from django.db import models
from django.contrib.auth.models import User

# Create your models here.
class ExtraUserDetail(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    phone = models.CharField(max_length=100)
    cvfile = models.FileField(upload_to="media/")

class Job(models.Model):
    title = models.CharField(max_length=100)
    company = models.CharField(max_length=100)
    annual_salary = models.DecimalField(decimal_places=2, max_digits=20)
    description = models.TextField()
    post_owner = models.ForeignKey(User, on_delete=models.CASCADE)

class Applicant(models.Model):
    job = models.ForeignKey(Job, on_delete=models.CASCADE)
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    cvfile = models.FileField(upload_to="")
