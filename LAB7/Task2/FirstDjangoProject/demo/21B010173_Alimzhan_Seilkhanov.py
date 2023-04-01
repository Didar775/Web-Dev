ok = True
To_do_list = []


while(ok):
    print("Here is the list:")
    if (len(To_do_list) > 0):
        for item in To_do_list:
            print("\t-",item)
    print("What do you want to add")
    task = input()
    if (task != "nothing"):
        To_do_list.append(task)
    else:
        print("Goodbye!")
        ok = False


