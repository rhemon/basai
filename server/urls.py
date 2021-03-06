from django.urls import path, include
from knox import views as knox

from .api import *

urlpatterns = [
    # path('api/auth/', include('knox.urls')),
    path('api/auth/login/', login),
    path('api/auth/signup/', signup),
    path('api/auth/logout/', logout),
    path('api/auth/user/', check_user),
    path('api/auth/update/', user_update),
    path('api/job/details/', job_details),
    path('api/job/new/', new_job),
    path('api/job/all/', all_jobs),
    path('api/job/user/', jobs_by_user),
    path('api/auth/cv/', cv),
    path('api/job/apply/', apply_job),
    path('api/job/applicants/', job_applicants),
    path('api/auth/forgot-pass/', forgot_pass),
    path('api/auth/verify-code/', verify_pass_code),
]