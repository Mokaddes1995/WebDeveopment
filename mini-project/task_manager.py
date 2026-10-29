# Task Manager

print("\nWelcome to Task Manager\n")

3 # Create a Empty List for Stored Task.

tasks = []

# Create a Function For Add Task in Task List

def add_task(task):

    # Remove White Space

    task = task.strip()

    # Control Empty Task

    if not task:

        print("Task cannot be empty!")

        return

    # Add Task
    
    tasks.append(task)

    print(f'\nTask "{task}" Added in Task List.')

# Create a Function for Display Data

def show_tasks():

    print("\n===========Task List=======\n")

    # Control Empty Task

    if not tasks:

        print("No tasks available.\n")

        return

    # Display Task List With Serial

    for i, task in enumerate(tasks, start= 1):

        print(f"{i}. {task}")


def delete_task(index):

    if index > len(tasks) or index < 0:
        
        print(f"{index} out of Range!! or Invalid Task Number!!!\n")

        return

    remove_item = tasks.pop( index - 1)

    print(f"\nTask '{remove_item}' deleted successfully.\n")
     

while True:
    
    print("Select Menu\n")
    
    print("1. Add \n2. Show \n3. Delete \n4. Exit")

    try:

        n = int(input("\nChoice Number: "))


        if n == 1:

            task_number = int(input("\nNumber of Task: "))

            if task_number <= 0:

                print("\nEnter a number greater than 0!")

                continue

            for i in range(task_number):

                add = input("\nEnter your Task: ")

                add_task(add)
            
        elif n == 2:

            show_tasks()

        elif n == 3:

            if not tasks:

                print("\nNo tasks to delete!")

                continue

            show_tasks()

            delete = int(input("\nEnter Task No You Delete: "))

            delete_task(delete)

        elif n == 4:

            print("\nThank you for using Task Manager")

            break

        else:

            print("\nInvalid choice! Please select 1 to 4.")


    except ValueError :

        print("\nEnter Number Only")