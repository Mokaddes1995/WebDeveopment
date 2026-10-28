print("Welcome to Task Manager")
    
print("Select Menu")
    
print("1. Add, 2. Show, 3. Delete, 4. Exit")


tasks = []

def add_task(task):

    tasks.append(task)

    print(f"Task {task} Added in Task List.")


def show_tasks():

    print(f"===========Task List=======")

    print()

    for i, task in enumerate(tasks):

        print(f"{i + 1}. {task}")

    print()


def delete_task(index):

    if index > len(tasks):
        
        print(f"Index Out of Range")

    else:

        tasks.pop(index)

        print(f"{index} Deleted from Task List")
        

while True:

    try:

        menu = int(input("Choice Number: "))

        if menu == 1:

            n = int(input("Number of Task: "))

            for i in range(n):

                add = input("Enter your Task: ")

                add_task(add)
            
        elif menu == 2:

            show_tasks()

        elif menu == 3:

            delete = int(input("Enter Task No You Deleted: "))

            delete_task(delete)

        elif menu == 4:

            print("Thank you")

            break


    except ValueError :

        print(f"Enter Valid Number from 1 to 4")