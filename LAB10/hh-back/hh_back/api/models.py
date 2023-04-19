from django.db import models

# Create your models here.

class Company(models.Model):

    class Meta:
         verbose_name = "Companies"
         verbose_name_plural = "Companies"

    name = models.CharField(max_length=100)
    description  = models.TextField()
    city = models.CharField(max_length=100)
    address = models.TextField()

  
    

    def __str__(self) :
        return f'{self.id}:{self.name}'



class Vacancy(models.Model):

    class Meta:
        verbose_name = "Vacancy"
        verbose_name_plural = "Vacancies"

    name = models.CharField(max_length=100)
    description  = models.TextField()
    salary = models.FloatField()
    company = models.ForeignKey(Company, on_delete = models.CASCADE, related_name='vacancies')

    
    

    def __str__(self) :
        return f'{self.id}:{self.name}'

    