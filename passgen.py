import random

lower="abcdefghijklmnopqrstuvwxyz"
upper="ABCDEFGHIJKLMNOPQRSTUVWXYZ"
symbols="!@#$%^&*():;|\.,?/"
numbers="0123456789"

string=lower+upper+symbols+numbers
length=int(input("Enter the length of your password: "))
password="".join(random.sample(string,length))

print("Your new password is: ",password)