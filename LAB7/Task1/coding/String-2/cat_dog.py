def cat_dog(str):
    count_cat = str.count('cat')
    count_dog = str.count('dog')
    return count_cat == count_dog

s = input()
print(cat_dog(s))