from django.contrib import admin
from api.models import *
# Register your models here.

admin.site.register(Product)
admin.site.register(Category)


# @admin.register(Product)
# class ProductAdimin(admin.ModelAdmin):
#     list_display = ('id', 'name', 'price', 'description', 'count', 'is_active')

# @admin.register(Category)
# class CategoryAdmin(admin.ModelAdmin):
#     list_display = ('id', 'name')


