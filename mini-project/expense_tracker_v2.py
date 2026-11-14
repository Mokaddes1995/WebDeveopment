import json

import os


print("Welcom to Expen Tracker CLI App")

'''
Open Database.json for Read Database.

if database not exists empty list initiate.

'''

if os.path.exists('database.json'):
    
        with open('database.json', 'r') as file:

            try:
                expenses = json.load(file)

            except (FileNotFoundError, json.JSONDecodeError):

                expenses = []

else:

    expenses = []


# Find Top Category

def category_of_expense(data):

    freq = {}

    for expense in data:

        category = expense["category"]

        amount = expense["amount"]

        freq[category] = freq.get(category, 0) + amount

    return freq


# Take input forom user

while True:

    item = input("Item (or 'done' for finish): ").capitalize()

    if item.lower() == 'done':

        break


    try:
        amount = int(input("Price (Tk): "))

    except ValueError:

        print("Please enter a valid number!")
        
        continue

    category = input("Category (or blank for 'Other'): ").capitalize()

    if category ==  '':

        category = "Other"


    expense = {

        'item' : item,

        'amount' : amount,

        'category' : category
    }

    expenses.append(expense)


with open('database.json', "w") as file:

    json.dump(expenses, file, indent=4)


print(category_of_expense(expenses))