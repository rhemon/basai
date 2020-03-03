import json
import random
import string

from django.contrib.auth import authenticate
from django.contrib.auth.models import User
from django.core.files import File
from rest_framework import generics, permissions
from rest_framework.decorators import api_view
from rest_framework.exceptions import APIException
from rest_framework.response import Response
from rest_framework.views import APIView
from knox.models import AuthToken
from knox.settings import CONSTANTS

from .models import *

@api_view(["POST"])
def login(request):
    """
    Expects body of the request to contain
    username and password.

    If wrong credential, raises exception.
    """
    data = json.loads(request.body.decode('utf-8'))
    print(data)
    user = authenticate(username=data["username"], password=data["password"])
    if user:
        token = AuthToken.objects.create(user)[1]
        print(token)
        return Response({
            "user": UserSerializer(user).data,
            "token": token
        })
    else:
        raise APIException("Incorrect credentials")

@api_view(['GET'])
def check_user(request):
    """
    Expects request to have a param set in url
    for the token.
    Used to check if user authorized or not.
    Returns "first_name", "last_name", "email" and "phone".
    """
    token = request.GET.get('token')[:CONSTANTS.TOKEN_KEY_LENGTH]
    user = AuthToken.objects.get(token_key=token).user
    phone = ExtraUserDetail.objects.get(user=user).phone
    return Response({
        "first_name": user.first_name,
        "last_name": user.last_name,
        "email": user.email,
        "phone": phone
    })

@api_view(['GET'])
def logout(request):
    """
    Expects request param to have token.
    Logs out user, removing the knox's auth token.
    """
    token = request.GET.get('token')[:CONSTANTS.TOKEN_KEY_LENGTH]
    user = AuthToken.objects.get(token_key=token).delete()
    return Response({})
    

@api_view(['POST'])
def signup(request):
    """
    Create new user.
    Expects request body to container:
    username, first_name, last_name, email, phone, password
    Returns a token, confirming users authorization
    """
    data = json.loads(request.body.decode('utf-8'))
    user = User.objects.create_user(username=data['username'],
            email=data['email'],
            first_name=data['first_name'],
            last_name=data['last_name'],
            password=data['password'])
    extra_details = ExtraUserDetail.objects.create(user=user, phone=data['phone'])
    return Response({
        "token": AuthToken.objects.create(user)[1]
    })


@api_view(['POST'])
def user_update(request):
    """
    Expects user token, first_name
    last_name, email and phone in body. Updates
    the user details based on that.
    """
    data = json.loads(request.body.decode('utf-8'))
    user = AuthToken.objects.get(token_key=data["token"][:CONSTANTS.TOKEN_KEY_LENGTH]).user
    extra = ExtraUserDetail.objects.get(user=user)
    if user:
        user.first_name = data['first_name']
        user.last_name = data['last_name']
        user.email = data['email']
        extra.phone = data['phone']
    user.save()
    extra.save()
    return Response({})

@api_view(['GET', 'POST'])
def job_details(request):
    """
    Use to get and post details for job
    Fetches information of a job based on its id.
    Also updates information from the body of request for given id.
    """
    if request.method == "GET":
        job = Job.objects.get(id=request.GET.get("id"))
        token = request.GET.get("token")[:CONSTANTS.TOKEN_KEY_LENGTH]
        user = AuthToken.objects.get(token_key=token).user
        try:
            applicant = Applicant.objects.get(job=job, user=user)
            applied = True
        except:
            applied = False
        return Response({
            "title": job.title,
            "company": job.company,
            "annual_salary": job.annual_salary,
            "description": job.description,
            "applied": applied,
            "writeauth": user == job.post_owner
        })
    else:
        data = json.loads(request.body.decode('utf-8'))
        token = data["token"][:CONSTANTS.TOKEN_KEY_LENGTH]
        user = AuthToken.objects.get(token_key=token).user
        job = Job.objects.get(id=request.GET.get("id"))
        if job.post_owner != user:
            raise APIException("Unauthorized for change")
        job.title = data["title"]
        job.company = data["company"]
        job.annual_salary = float(data["annual_salary"])
        job.description = data["description"]
        job.save()
        return Response({})

@api_view(['POST'])
def new_job(request):
    """
    Create new job in database based on the data
    provided in request's body.
    """
    data = json.loads(request.body.decode('utf-8'))
    token = data["token"][:CONSTANTS.TOKEN_KEY_LENGTH]
    user = AuthToken.objects.get(token_key=token).user
    print(data)
    job = Job.objects.create(post_owner=user, title=data['title'], company=data['company'],
        annual_salary=float(data['annual_salary']), description=data['description']);
    return Response({})

@api_view(['GET'])
def all_jobs(request):
    """
    Return list of all jobs in id order,
    so in order of added to database.
    Latest will be first.
    """
    jobs = Job.objects.all().order_by("-id")
    res = []
    for each in jobs:
        j = {}
        j['id'] = each.id
        j['title'] = each.title
        j['company'] = each.company
        j['annual_salary'] = each.annual_salary
        res.append(j)
    return Response({"jobs": res})

@api_view(['GET'])
def jobs_by_user(request):
    """
    Find all jobs a user created.
    """
    # data = json.loads(request.body.decode('utf-8'))
    token =request.GET.get("token")[:CONSTANTS.TOKEN_KEY_LENGTH]
    user = AuthToken.objects.get(token_key=token).user
    jobs = Job.objects.filter(post_owner=user)
    res = []
    for each in jobs:
        j = {}
        j['id'] = each.id
        j['title'] = each.title
        j['company'] = each.company
        j['annual_salary'] = each.annual_salary
        res.append(j)
    return Response({"jobs": res})

@api_view(['GET', 'POST'])
def cv(request):
    """
    Getter and Setter for cv file.
    Getter will return a url and file name.
    Poster will update the cvfile.
    """
    if request.method == "POST":
        cvFile = File(request.FILES['cvFile'])
        token = request.POST["token"][:CONSTANTS.TOKEN_KEY_LENGTH]
        user = AuthToken.objects.get(token_key=token).user
        extra = ExtraUserDetail.objects.get(user=user)
        extra.cvfile = cvFile
        extra.save()
        return Response({})
    else:
        token = request.GET["token"][:CONSTANTS.TOKEN_KEY_LENGTH]
        user = AuthToken.objects.get(token_key=token).user
        extra = ExtraUserDetail.objects.get(user=user)
        return Response({
            "cvFileUrl": extra.cvfile.url,
            "cvFileName": extra.cvfile.name[extra.cvfile.name.find("/")+1:]
        })

@api_view(['GET'])
def apply_job(request):
    """
    Apply for a job, given id and token in request's GET dictionary.
    """
    job = Job.objects.get(id=request.GET.get("id"))
    token = request.GET.get("token")[:CONSTANTS.TOKEN_KEY_LENGTH]
    user = AuthToken.objects.get(token_key=token).user
    extra = ExtraUserDetail.objects.get(user=user)
    applicant = Applicant.objects.create(user=user, job=job, cvfile=extra.cvfile)
    return Response({})


@api_view(['GET'])
def job_applicants(request):
    """
    Get list of people who applied to the job with
    given id.
    """
    job = Job.objects.get(id=request.GET.get("id"))
    token = request.GET.get("token")[:CONSTANTS.TOKEN_KEY_LENGTH]
    user = AuthToken.objects.get(token_key=token).user
    if (user == job.post_owner):
        applicants = Applicant.objects.filter(job=job)
        res = []
        for each in applicants:
            r = {}
            r['fname'] = each.user.first_name
            r['lname'] = each.user.last_name
            r['phone'] = ExtraUserDetail.objects.get(user=user).phone
            r['email'] = each.user.email
            r['cvUrl'] = each.cvfile.url
            res.append(r)
        return Response({
            "applicants": res,
            "title": job.title,
            "company": job.company
        })
    raise APIException("Access denied")

@api_view(['POST'])
def forgot_pass(request):
    """
    Given email, generate a random reset key
    and save it in extra user detail.
    Return it in response as "verify_code".
    """
    data = json.loads(request.body.decode('utf-8'))
    user = User.objects.get(email=data['email'])
    extra = ExtraUserDetail.objects.get(user=user)
    reset_code = ''.join(random.choice(string.ascii_uppercase) for i in range(4))
    extra.reset_code = reset_code
    extra.save()
    return Response({"verify_code":reset_code})

@api_view(['POST'])
def verify_pass_code(request):
    """
    With given verify code and email from body,
    check if it matches with preset code.
    If so update user's password with the new one given
    in request's body.
    """
    data = json.loads(request.body.decode('utf-8'))
    user = User.objects.get(email=data['email'])
    extra = ExtraUserDetail.objects.get(user=user)
    if (extra.reset_code == data['verify_code']):
        user.set_password(data['password'])
        user.save()
        extra.reset_code = ""
        extra.save()
        return Response({})
    else:
        raise APIException("Wrong Verify Code")

