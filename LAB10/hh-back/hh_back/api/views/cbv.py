from rest_framework.views import APIView
from rest_framework.response import Response
from api.models import *
from api.serializers import *
from rest_framework import status


class CompnanyListAPIView(APIView):
    def get(self, request):
        companies = Company.objects.all()
        serializer = CompanySerializer(companies, many = True)
        return Response(serializer.data)
        

    def post(self, request):
        serializer = CompanySerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    

    
class CompanyDetailAPIView(APIView):
    def get_object(self, pk):
        try:
            return Company.objects.get(pk = pk)
        except Company.DoesNotExist as e:
            return Response(str(e), status=status.HTTP_400_BAD_REQUEST)
        
    def get(self, request, company_id):
        instance = self.get_object(company_id)
        serializer = CompanySerializer(instance)
        return Response(serializer.data)

    def put(self,request,company_id):
        instance = self.get_object(company_id)
        serializer = CompanySerializer(instance=instance, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    
    def delete(self, requset, company_id):
        instance = self.get_object(company_id)
        instance.delete()
        return Response({'deleted': True})


class VacancyListAPIVeiw(APIView):
    
    def get(self, request):
        vacancies = Vacancy.objects.all()
        serializer = VacancySerializer(vacancies, many = True)
        return Response(serializer.data)
    
    def post(self, request):
        
        serializer = VacancySerializer1(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    

class VacancyDetailAPIView(APIView):

    def get_object(self,pk):
         try:
            vacancy = Vacancy.objects.get(pk = pk)
            return vacancy
         except Vacancy.DoesNotExist as e:
            return Response(str(e), status=status.HTTP_400_BAD_REQUEST)
         
    def get(self, vacancy_id):
        instance = self.get_object(vacancy_id)
        serializer = VacancySerializer(instance)
        return Response(serializer.data)
    

    def put(self,request, vacancy_id):
        instance = self.get_object(vacancy_id)
        serializer = CompanySerializer(instance=instance, data= request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    
    
    def delete(self,vacancy_id):
        instance = self.get_object(vacancy_id)
        instance.delete()
        return Response({'deleted':True})




