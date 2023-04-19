from django.shortcuts import render
from api.models import *
import json
from .serializers import *
from django.views.decorators.csrf import csrf_exempt
from django.http.response import JsonResponse

# Create your views here.



@csrf_exempt
def companies(request):

    if request.method == "GET":
        list_of_companies = Company.objects.all()
        serialization = CompanySerializer(list_of_companies, many = True)

        return JsonResponse(serialization.data, safe=False)
    
    if request.method =="POST":
          data =  json.loads(request.body)
          serialization = CompanySerializer(data=data)
          if serialization.is_valid():
              serialization.save()
              return JsonResponse(serialization.data)
         
          return JsonResponse(serialization.errors, status = 400)

     #     company_name = data.get('name', '')
     #     company_description = data.get('description' ,'')
     #     company_city = data.get('city','')
     #     company_address = data.get('address', '')
     #     company = Company.objects.create(name = company_name, description = company_description, city = company_city,
     #                                      address = company_address)
         
     #     return JsonResponse(company.to_json())
    


@csrf_exempt
def company_by_id(request, company_id):

    try:

        company = Company.objects.get(id = company_id)
     
    except Company.DoesNotExist as e:
        return JsonResponse({'error':str(e)})
    
    
    if request.method == "GET":
          
          serialization = CompanySerializer1(company)

          return JsonResponse(serialization.data)
        
    elif request.method == "PUT":
            data =  json.loads(request.body)
            serialization = CompanySerializer1(instance = company, data=data)
            if serialization.is_valid():
                 serialization.save()
                 return JsonResponse(serialization.data)
            return JsonResponse(serialization.errors , status  = 400)
          #   new_company_name = data.get('name', company.name)
          #   new_company__desc = data.get('description', company.description)
          #   new_company_city = data.get('city', company.city)
          #   new_company_address = data.get('address', company.address)

          #   company.name = new_company_name
          #   company.description = new_company__desc
          #   company.city = new_company_city
          #   company.address = new_company_address

          #   company.save()

          #   return  JsonResponse(company.to_json())
    
    elif request.method == "DELETE":
         
         company.delete()

         return JsonResponse({'deleted': True})



def company_vacancies(request, company_id):

    try: 
        company = Company.objects.get(pk = company_id)   
    except Company.DoesNotExist as e:
         return JsonResponse({"error":str(e)})
    
    vacancies = company.vacancies.all()
    vacancies_json = [v.to_json() for v in vacancies]

    return JsonResponse(vacancies_json, safe=False)


@csrf_exempt
def vacancies(request):
     
    if request.method == "GET":
         
         vacancies_list = Vacancy.objects.all()
         vacancies_json = [v.to_json()  for v in vacancies_list]
         return JsonResponse(vacancies_json, safe=False)
    
    if request.method == "POST":
         
         data = json.loads(request.body)
         vacancy_name = data.get('name','')
         vacancy_des = data.get('description', '')
         vacancy_salary = data.get('salary', '')
         company_id = data.get('company_id','')
         vacancy_company = Company.objects.get(id = company_id)

         vacancy = Vacancy.objects.create(name = vacancy_name, description = vacancy_des, salary = vacancy_salary,
                                          company = vacancy_company)
         
         return JsonResponse(vacancy.to_json(), safe=False)
    

@csrf_exempt
def vacancy_by_id(request, vacancy_id):
     
    try:
         vacancy = Vacancy.objects.get(id = vacancy_id)
    except Vacancy.DoesNotExist as e:
         return JsonResponse({'error':str(e)})
    
    if request.method == "GET":
         
         return JsonResponse(vacancy.to_json())
    
    elif request.method == "DELETE":
         
         vacancy.delete()
         return JsonResponse({"deleted":True})
         

         

def vacancy_top_ten(request):
     
     vacancies = Vacancy.objects.order_by("-salary")[:10]

     vacancies_json = [v.to_json() for v in vacancies]

     return JsonResponse(vacancies_json, safe=False)