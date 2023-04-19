from django.urls import URLPattern, path
from api import views

urlpatterns = [

    path('companies/',views.companies),
    path('companies/<int:company_id>/',views.company_by_id),
    path('companies/<int:company_id>/vacancies/',views.company_vacancies),
    path('vacancies/', views.vacancies),
    path('vacancies/<int:vacancy_id>/',views.vacancy_by_id),
    path('vacancies/top_ten/',views.vacancy_top_ten)

]