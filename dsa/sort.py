# Selection Sort Practice

# Problem 1 — Easy

arr = [5, 3, 8, 1, 2]

n = len(arr)

# Use Selection Sort

for i in range(n - 1):

    min_index = i

    for j in range(i + 1 , n):

        if arr[j] < arr[min_index]:

            min_index = j

    arr[i], arr[min_index] = arr[min_index], arr[i]



print(f"Sorted Arrays: {arr}")



# Problem 2 — Medium

# Declear Function

def sorted_arr(arr):

    n = len(arr)

    for i in range(n - 1): # Total Pass Need 4

        min_index = i

        for j in range(i + 1, n):

            if arr[j] < arr[min_index]:

                min_index = j

        arr[i], arr[min_index] = arr[min_index], arr[i]

        return arr



arr = [29, 10, 14, 37, 13]

sort_array = sorted_arr(arr)

print(f"Sorted Arrayes is : {sort_array}")



# Problem 3 — Coding Challenge


def selection_sort(arr):

    n = len(arr)

    for i in range(n - 1):

        # Find the minimum element

        min_index = i
        
        # Swap it with arr[i]

        for j in range(i + 1, n):

            if arr[j] < arr[min_index]:

                min_index = j

        arr[i], arr[min_index] = arr[min_index], arr[i]

    return arr


arr = [64, 25, 12, 22, 11]

selection = selection_sort(arr)

print(f"Complete Code Array: {selection}")



# Bubble Sort Practice

# Problem 4 — Easy

arr = [5, 1, 4, 2, 8]


n = len(arr)

for i in range(n - 1):

    for j in range(n - i - 1):

        if arr[j] > arr[j+1]:

            arr[j], arr[j+1] = arr[j+1], arr[j]


print(f"Bubble Sort Array: {arr}")


# Problem 5 — Medium

arr = [9, 7, 5, 3, 1]

n = len(arr)

for i in range(n - 1):

    for j in range(n - i - 1):

        if arr[j] > arr[j+1]:

            arr[j], arr[j+1] = arr[j+1], arr[j]


print(f"Ascending Array: {arr}")


# New Challange Activeate



arr = [9, 7, 5, 3, 1]





