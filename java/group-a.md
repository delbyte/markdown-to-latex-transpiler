Group A
Assignment No. : 1
Title: Design and Implementation of a Scientific Calculator using Java
Objective
To design and implement a Scientific Calculator using Java programming that performs basic
arithmetic operations and scientific functions such as trigonometric, logarithmic, exponential,
and power calculations.
Theory
A Scientific Calculator is an advanced calculator capable of performing complex mathematical
operations beyond basic arithmetic. Java provides a built-in Math class, which supports various
mathematical functions such as:
 Math.sin(), Math.cos(), Math.tan() for trigonometric operations
 Math.log() for logarithmic calculation
 Math.sqrt() for square root
 Math.pow() for power calculation
 Math.exp() for exponential functions
In this experiment, a menu-driven Java program is developed that allows the user to select the
desired operation and input the required values. The program uses conditional statements,
switch-case, and loops to execute operations repeatedly until the user exits.
Algorithm
1. Start the program.
2. Display a menu of scientific calculator operations.
3. Accept the user’s choice.
4. Read required input values.
5. Perform the selected operation using Java Math functions.
6. Display the result.
7. Ask the user whether to continue.
8. Stop the program.
Menu-driven programs in Java are implemented using a do-while loop to repeatedly display the
menu and a switch-case statement to execute the selected option.

do {
// Display menu
System.out.println("1. Option 1");
System.out.println("2. Option 2");
System.out.println("0. Exit");

// Read user choice
choice = sc.nextInt();

// Execute selected option
switch (choice) {
case 1:
// Statements for Option 1
break;

case 2:
// Statements for Option 2
break;

case 0:
// Exit statement
break;

default:
System.out.println("Invalid choice");
}

} while (choice != 0);

Conclusion
This experiment demonstrates the effective use of Java programming and the Math class to
build a scientific calculator. The program enhances understanding of control structures, user
input handling, and built-in mathematical functions.

Assignment No. 2

Title
Write a program to perform following array operations – addition of numbers, find min/max
element, sort array, search elements, find sum and average of array elements.
Objective
 To understand the concept of arrays in Java.
 To perform basic array operations such as input, display, search, replace, addition, sum,
average, and finding minimum and maximum elements.
 To implement array-based logic using Java syntax.

Theory
1. Declaring an Array
Used to create an array that can store multiple values of the same data type.
Syntax:
int[] arr = new int[size];

2. Getting Data (Input Elements into Array)
Used to store values into the array using a loop.
Syntax:
for(int i = 0; i < size; i++) {
arr[i] = value;
}

3. Displaying Array Elements
Used to access and print all elements of the array.
Syntax:
for(int i = 0; i < size; i++) {
System.out.println(arr[i]);
}

4. Searching an Element in Array
Used to check whether a specific element exists in the array.
Syntax:
for(int i = 0; i < size; i++) {
if(arr[i] == key) {
// element found
}
}

5. Replacing an Element in Array
Used to replace an existing value with a new value.
Syntax:
for(int i = 0; i < size; i++) {
if(arr[i] == oldValue) {
arr[i] = newValue;
}
}

6. Addition of Array Elements (Element-wise / Total)
Used to add values stored in the array.
Syntax:
int sum = 0;
for(int i = 0; i < size; i++) {
sum = sum + arr[i];
}

7. Finding Sum and Average of Array Elements
Used to calculate total and mean of elements.
Syntax:
int sum = 0;
for(int i = 0; i < size; i++) {
sum += arr[i];
}
double average = (double) sum / size;

8. Finding Minimum Element in Array
Used to determine the smallest value in the array.
Syntax:
int min = arr[0];
for(int i = 1; i < size; i++) {
if(arr[i] < min) {

min = arr[i];
}
}

9. Finding Maximum Element in Array
Used to determine the largest value in the array.
Syntax:
int max = arr[0];
for(int i = 1; i < size; i++) {
if(arr[i] > max) {
max = arr[i];
}
}

Conclusion
Thus, basic array operations such as input, display, search, replace, sum, average, minimum, and
maximum were studied and implemented using Java arrays. This experiment helps in
understanding data storage and manipulation using arrays in Java programming.

Assignment No. : 3
Title: Write a JAVA code to invoke getData(), displayData() and searchElement() methods
using array of objects ( student, book, account etc).
Objective
To study and implement the concept of array of objects in Java by creating a class (Student) and
invoking the methods getData(), displayData(), and searchElement() to store, display, and
search records.
Theory
In Java, an array of objects is used when we need to store multiple objects of the same class.
Each element of the array refers to an object. Methods such as getData() are used to accept input,
displayData() to display stored information, and searchElement() to search a particular record
based on a key value.
Syntax
ClassName obj[] = new ClassName[size];
obj[i] = new ClassName();
void getData() { }
void displayData() { }
static void searchElement(ClassName obj[], key) { }

Sample Program Code
import java.util.Scanner;
class Student {
int rollNo;
String name;
void getData() {
Scanner sc = new Scanner(System.in);
System.out.print("Enter Roll No: ");

rollNo = sc.nextInt();
sc.nextLine();
System.out.print("Enter Name: ");
name = sc.nextLine();
}
void displayData() {
System.out.println("Roll No: " + rollNo + ", Name: " + name);
}
static void searchElement(Student s[], int key) {
boolean found = false;
for (Student st : s) {
if (st.rollNo == key) {
st.displayData();
found = true;
break;
}
}
if (!found) {
System.out.println("Student not found.");
}
}
}
public class ArrayOfObjectsDemo {
public static void main(String[] args) {
Scanner sc = new Scanner(System.in);
System.out.print("Enter number of students: ");
int n = sc.nextInt();
Student s[] = new Student[n];
for (int i = 0; i < n; i++) {
s[i] = new Student();
s[i].getData();
}
System.out.println("\nStudent Details:");
for (Student st : s) {
st.displayData();
}
System.out.print("\nEnter roll number to search: ");
int key = sc.nextInt();

Student.searchElement(s, key);
}
}

Conclusion
Thus, the program successfully demonstrates the use of an array of objects in Java. The
methods getData(), displayData(), and searchElement() were implemented to store, display,
and search object data efficiently.

Assignment No. 4
Title
Program to Demonstrate the Use of Access Modifiers in Java Within and Outside the Package
Objective
To understand and implement Java access modifiers (public, protected, default, and
private) and study their accessibility within the same package and outside the package.
Theory
Access modifiers in Java define the visibility and scope of class members such as variables and
methods. Java provides four types of access modifiers:
 private – Accessible only within the same class
 default (no modifier) – Accessible within the same package
 protected – Accessible within the same package and in subclasses outside the package
 public – Accessible from anywhere
By declaring variables with different access modifiers in a class, we can observe their
accessibility rules within the package and outside the package.
Syntax
private dataType variableName;
dataType variableName; // default access
protected dataType variableName;
public dataType variableName;
package packageName;
import packageName.ClassName;
Program Code
Package Definition (Within Package)
package p1;
public class AccessDemo {
public int a = 10;

protected int b = 20;
int c = 30; // default
private int d = 40;
public void display() {
System.out.println("Public: " + a);
System.out.println("Protected: " + b);
System.out.println("Default: " + c);
System.out.println("Private: " + d);
}
}

File 2: Same Package Access
package p1;
public class SamePackage {
public static void main(String[] args) {
AccessDemo obj = new AccessDemo();
System.out.println(obj.a);
System.out.println(obj.b);
System.out.println(obj.c);
// System.out.println(obj.d); // Not accessible
}
}

Outside Package Access
package p2;
import p1.AccessDemo;
public class OutsidePackage extends AccessDemo {
public static void main(String[] args) {
OutsidePackage obj = new OutsidePackage();
System.out.println(obj.a);
System.out.println(obj.b);
// System.out.println(obj.c); // Not accessible
// System.out.println(obj.d); // Not accessible
}
}
Accessibility of Access Modifiers in Java
Access
Modifier

Same
Class

Same
Package

Outside Package
(Subclass)

Outside Package (Non-
Subclass)

private ✓ ✗ ✗ ✗
default ✓ ✓ ✗ ✗
protected ✓ ✓ ✓ ✗
public ✓ ✓ ✓ ✓

Conclusion
Thus, the program successfully demonstrates the working of Java access modifiers. It shows
that public members are accessible everywhere, protected members are accessible within the
package and in subclasses outside the package, default members are accessible only within the
same package, and private members are accessible only within the same class.


