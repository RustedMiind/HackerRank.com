my_str = input("Enter The numbers with space separated")

list_of_strings = my_str.split(' ')

list_of_integers = list(map(int, list_of_strings))
print(list_of_integers)

input("thanks")