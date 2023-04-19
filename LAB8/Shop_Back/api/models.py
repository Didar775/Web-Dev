from django.db import models

# Create your models here.


class Product(models.Model):
    
    name = models.CharField(max_length=255)
    price = models.FloatField()
    description = models.TextField()
    count = models.IntegerField()
    is_active = models.BooleanField()

    def __str__(self):
        
        return f'{self.id}:{self.name}'

    
    def to_json(self):

        return  {
            
            'id': self.id,
            'name':self.name,
            'price':self.price,
            'descrption':self.description,
            'count':self.count,
            'is_active':self.is_active
        }




class Category(models.Model):
    name = models.CharField(max_length=255)

    class Meta:
       
        verbose_name_plural = 'Categories'
        

   
        

    def to_json(self):
        
        return {

                 'id':self.id,
                'name':self.name
            }