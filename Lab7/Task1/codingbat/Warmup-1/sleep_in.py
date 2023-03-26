def sleep_in(weekday, vacation):
  if not weekday or vacation:
    return True
  else:
    return False


w = input()
v = input()

print(sleep_in(w, v))