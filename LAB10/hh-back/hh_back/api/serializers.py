from rest_framework import serializers
from .models import *



class CompanySerializer(serializers.ModelSerializer):
    class Meta:
        model = Company
        fields = ('id','name', 'description','city','address')



class CompanySerializer1(serializers.Serializer):
    
    id = serializers.IntegerField(read_only = True)
    name = serializers.CharField()
    description = serializers.CharField(req)
    city = serializers.CharField()
    address = serializers.CharField()
    vacancies = VacancySerializer(many=True, source='vacancies')


    def create(self, validated_data):
        company = Company.objects.create(**validated_data)
        return company
    
    
    def update(self, instance, validated_data):
        instance.name = validated_data.get('name', instance.name)
        instance.description = validated_data.get('description', instance.description)
        instance.city= validated_data.get('city', instance.city)
        instance.address = validated_data.get('address', instance.address)

        instance.save()

        return instance






class VacancySerializer(serializers.ModelSerializer):
    class Meta:
        model = Vacancy
        fields = ('id','name', 'description','salary', 'company')



class VacancySerializer1(serializers.Serializer):
    
    id = serializers.IntegerField(read_only = True)
    name = serializers.CharField()
    description = serializers.CharField()
    salary = serializers.FloatField()
    company_id = serializers.IntegerField()
    
    
   


    def create(self, validated_data):
        vacancy = Vacancy.objects.create(**validated_data)
        return vacancy
    
    
    def update(self, instance, validated_data):

        instance.name = validated_data.get('name', instance.name)
        instance.description = validated_data.get('description', instance.description)
        instance.salary= validated_data.get('salary', instance.salary)
        instance.company_id = validated_data.get('company_id', instance.company_id)
       

        instance.save()

        return instance


    