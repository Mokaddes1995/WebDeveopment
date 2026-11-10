# Expense Tracker Version 1

print("Welcome to Expense Tracker")

# Store Expense By List

expenses = []

# FR -03

def category_wise_price(data):

    res = {}

    for expense in data:

        category = expense['category']

        price = expense['price']

        res[category] = res.get(category, 0) + price

    return res


# FR -04

def overall_total(data):

    total = 0

    for price in data:

        total += price.get('price', 0)

    return total


# FR -05


def top_category(data):

    category = ''
    
    amount = 0

    for key, value in data.items():

        if amount <= value:

            category = key

            amount = value

    return f"You Spent Most On {category}: {amount} TK"



# FR -01

while True:

    item = input("Item (or 'done' for finshed) : ").capitalize()

    if item == 'Done':

        break

    amount = int(input("Amount: "))

    category = input("Catergory (leave blank for 'other'): ").capitalize()  # Prevent Case Sensiviti

    # FR -02

    if category == '':

        category = 'Other'


    expenses.append(

        {
            "item": item,
            "price": amount,
            'category': category
        }
    )

# FR -07

if len(expenses) == 0:

    print("No Expensens Entered")

else:

    # FR - 06

    category_wise_expense = category_wise_price(expenses)

    total = overall_total(expenses)

    topCategory = top_category(category_wise_expense)

    print()

    print("-" * 6 + " Monthly Report " + "-" * 6)

    for key, value in category_wise_expense.items():

        print(f"{key}: {value:.2f} TK   ({(value * 100 / total):.2f} %)")

    print("-" * 40)

    print(f"Total: {total:.2f}")

    print(topCategory)




