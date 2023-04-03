from django.shortcuts import render
from django.http import JsonResponse, HttpResponse
from api.models import *


# Create your views here.

products = Product.objects.all()
categories = Category.objects.all()
products_json = [ p.to_json() for p in products]
categories_json = [p.to_json() for p in categories]

def product_list(request):
 
    return JsonResponse(products_json,
    safe=False)


def product(request,id):

    if id in range(1,22):
       return JsonResponse(products_json[id-1])
        

    return HttpResponse("Error. Don't have have like product")


def categories_list(request):

    categories_json = [p.to_json() for p in categories]
    return JsonResponse(categories_json, safe = False)



def category(request, id):

    if id in range(1,22):
       return JsonResponse(categories_json[id-1])
    
    return HttpResponse("Error: Don't have have like category"
    )


    

def products_of_category(request,id):

    if id in range(1,5):
        
        x1 = (id - 1) * 5
        x2 = id * 5
        
        return JsonResponse(
        
            [products_json[i] for i in range(x1 , x2)],

            safe = False
        
        )
    
    return HttpResponse("Error: Don't have like category")
    
   
   


