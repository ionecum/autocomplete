from . import views
from django.urls import path
from csv_api.views import process_csv

urlpatterns = [
    path('api/process-csv/', process_csv, name='process_csv'),
    # ... other URL patterns
]