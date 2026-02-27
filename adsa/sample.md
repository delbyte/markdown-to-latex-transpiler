ASSIGNMENT NO. : 1

• Problem Statement:
Write C++ code for merge sort and analyze time complexity.
• Aim:
To understand and implement the Merge Sort algorithm.
• Objective:
1. To implement the Merge Sort algorithm using the divide and conquer
strategy.
2. To analyze its performance in terms of time and space complexity.

• Theory / Background:
What is Sorting?
Sorting is the process of arranging data elements in a specific order. These
elements can be numbers, strings, or any comparable datatype.
Need for Sorting:
• Simplifies searching.
• Helps organize data efficiently.
• Makes data easier to analyze and visualize.
Types of Sorting:
• Internal Sorting
• External Sorting
Merge Sort Overview:
Merge Sort is a divide and conquer algorithm that:
• Splits the input array into smaller subarrays until each contains a single
element.
• Recursively sorts the subarrays.
• Merges the sorted subarrays to produce the final sorted array.
Three Steps in Merge Sort:
1. Divide – The array is divided into two halves recursively until each subarray
contains one element.
2. Conquer – Subarrays are sorted recursively using Merge Sort.
3. Combine – The sorted subarrays are merged to form the final sorted array.
Example:
For an initial array:
[24, 11, 9, 2, 6, 5, 4, 3]
The array is recursively split and merged as follows:

2 | P a g e

Split → [24, 11, 9, 2] and [6, 5, 4, 3]
↓ ↓
[24, 11] [6, 5]
↓ ↓
... and so on ...
Final merged and sorted array → [2, 3, 4, 5, 6, 9, 11, 24]

• Algorithm Steps:
1. Start
2. Divide:
o Find the middle index of the array.
o Divide the array into two halves:
▪ Left subarray → array[low...mid]
▪ Right subarray → array[mid+1...high]

3. Conquer:
o Recursively apply Merge Sort to both halves until single-element
subarrays are achieved.

4. Merge:
o Compare and merge elements of the sorted subarrays to form a single
sorted array.

5. End

• Code:
```cpp
#include <iostream>
#include <vector>

using namespace std;

// Function to merge two sorted subarrays
void merge(vector<int>& arr, int left, int mid, int right) {
    int n1 = mid - left + 1;
    int n2 = right - mid;

    // Create temporary arrays
    vector<int> L(n1);
    vector<int> R(n2);

    // Copy data to temporary arrays
    for (int i = 0; i < n1; i++)
        L[i] = arr[left + i];
    for (int j = 0; j < n2; j++)
        R[j] = arr[mid + 1 + j];

    // Merge the temporary arrays back into arr[left...right]
    int i = 0, j = 0, k = left;
    while (i < n1 && j < n2) {
        if (L[i] <= R[j]) {
            arr[k] = L[i];
            i++;
        } else {
            arr[k] = R[j];
            j++;
        }
        k++;
    }

    // Copy remaining elements of L[], if any
    while (i < n1) {
        arr[k] = L[i];
        i++;
        k++;
    }

    // Copy remaining elements of R[], if any
    while (j < n2) {
        arr[k] = R[j];
        j++;
        k++;
    }
}

// Recursive function to sort the array
void mergeSort(vector<int>& arr, int left, int right) {
    if (left >= right) {
        return; // Base case: single element
    }

    int mid = left + (right - left) / 2;

    // Sort first and second halves
    mergeSort(arr, left, mid);
    mergeSort(arr, mid + 1, right);

    // Merge the sorted halves
    merge(arr, left, mid, right);
}

// Function to print the array
void printArray(const vector<int>& arr) {
    for (int x : arr)
        cout << x << " ";
    cout << endl;
}

int main() {
    vector<int> arr = {12, 11, 13, 5, 6, 7};

    cout << "Original array: ";
    printArray(arr);

    mergeSort(arr, 0, arr.size() - 1);

    cout << "Sorted array:   ";
    printArray(arr);

    return 0;
}
```

• Analysis:
• Time Complexity:
o Best Case: O(n log n)
o Average Case: O(n log n)
o Worst Case: O(n log n)
• Space Complexity: O(n)
• Stability: Yes (Stable sort)

• Conclusion:
Merge Sort is a stable and efficient sorting algorithm. With a consistent time
complexity of O(n log n), it is particularly suitable for sorting large datasets and
offers predictable performance regardless of input.