from django.urls import URLPattern, path

from api import views
urlpatterns = [

    path('companies/', views.CompnanyListAPIView.as_view()),
    path('companies/<int:company_id>/',views.CompanyDetailAPIView().as_view()),
    path('companies/<int:company_id>/vacancies/',views.company_vacancies),
    path('vacancies/', views.VacancyListAPIVeiw.as_view()),
    path('vacancies/<int:vacancy_id>/',views.vacancy_by_id),
    path('vacancies/top_ten/',views.vacancy_top_ten)

]