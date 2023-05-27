from rest_framework.decorators import api_view
from api.serializers import *
from rest_framework.response import Response
from rest_framework import status


@api_view(['GET', 'POST'])
def companies(request):

    if request.method == "GET":
        list_of_companies = Company.objects.all()
        serialization = CompanySerializer(list_of_companies, many = True)

        return Response(serialization.data)
    
    if request.method =="POST":
         
          serialization = CompanySerializer1(data=request.data)
          if serialization.is_valid():
              serialization.save()
              return Response(serialization.data)
          return Response(serialization.errors, status.HTTP_400_BAD_REQUEST)
    
    
    
@api_view(['PUT', 'GET', 'DELETE'])
def company_by_id(request, company_id):

    try:
        company = Company.objects.get(id = company_id)
    except Company.DoesNotExist as e:
        return Response({'error':str(e)}, status.HTTP_400_BAD_REQUEST)
    
    
    if request.method == "GET":
          serialization = CompanySerializer1(company)
          return Response(serialization.data)
        
    elif request.method == "PUT":
            
            serialization = CompanySerializer1(instance = company, data=request.data)
            if serialization.is_valid():
                 serialization.save()
                 return Response(serialization.data)
            return Response(serialization.errors , status  = 400)
        
    elif request.method == "DELETE":
         
         company.delete()
         return Response({'deleted': True})



@api_view(['GET'])
def company_vacancies(request, company_id):

    try: 
        company = Company.objects.get(pk = company_id)   
    except Company.DoesNotExist as e:
         return Response({"error":str(e)})
    
    vacancies = company.vacancies.all()
    serializer = VacancySerializer(vacancies, many = True)

    return Response(serializer.data)



@api_view(['GET','POST'])
def vacancies(request):
     
    if request.method == "GET":
         
         vacancies_list = Vacancy.objects.all()
         serialization = VacancySerializer(vacancies_list, many = True)
         return Response(serialization.data)
    
    if request.method == "POST":
         
         serialization = VacancySerializer1(data=request.data)
         if serialization.is_valid():
              serialization.save()
              return Response(serialization.data)
         
         return Response(serialization.errors , status.HTTP_400_BAD_REQUEST)
    

    

@api_view(['GET','DELETE','PUT'])
def vacancy_by_id(request, vacancy_id):
     
    try:
         vacancy = Vacancy.objects.get(id = vacancy_id)
    except Vacancy.DoesNotExist as e:
         return Response({'error':str(e)})
    
    if request.method == "GET":
         
         serialization = VacancySerializer1(vacancy)
         return Response(serialization.data)
    
    elif request.method == "PUT":
            serialization = VacancySerializer1(instance = vacancy, data=request.data)
            if serialization.is_valid():
                 serialization.save()
                 return Response(serialization.data)
            return Response(serialization.errors , status  = 400)
    
    elif request.method == "DELETE":
         vacancy.delete()
         return Response({"deleted":True})
         

         

@api_view(['GET'])
def vacancy_top_ten(request):
     vacancies = Vacancy.objects.order_by("-salary")[:10]
     serialization = VacancySerializer1(vacancies, many = True)
     return Response(serialization)