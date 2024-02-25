from django.contrib import admin
from django.urls import path,include
from .views import *
urlpatterns = [
    # path('admin/', admin.site.urls),
    # path('', include('api.urls')),
    path('',MyarchiveList.as_view()),
    path('library',LibraryView.as_view()),
    path('download/<str:filename>', FileDownloadView.as_view(), name='file_download'),
]