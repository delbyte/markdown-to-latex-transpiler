Assignment – 6
Title: Implement student class using following concepts:
i)All types of Constructors.
ii) Static variables and instance variable.
iii) Static blocks and instance blocks.
iv)Static methods and instance methods.

Objective: To understand the concepts of constructor, types of constructors, Static variable,
Static blocks, Static methods and instance variables,instance blocks,instance methods.
Theory:
Constructor:
Constructors in Java are a special type of method that can help create an object and assign values
to its instance variables upon its initialization. Constructors has no return values, and they
usually have the same name as the class. Initializing object member variables in constructors is
not required but is advised for quick object setup.
1) Default Constructor in Java
 Default Constructors in Java are powerful tools for initializing fields in a class and object
in Java.
 They are normally declared without any arguments, allowing the compiler to
automatically create the constructor when an instance of the class is created.
 Default Constructors are particularly useful for setting default values, such as 0 and null
where appropriate.
 Additionally, Default Constructors enable developers to allow for custom initialization
code for optional parameter values, allowing them to set up objects with more specific
settings that may be required by the user or program.
 Default Constructors are invaluable components of object-oriented programming and can
help reduce development time and complexity.

Programming in JAVA Lab Manual 2023-24

2

Output:

2.) No argument constructor in Java
 In Java, no argument constructors allow objects to be initialized with no data passed into
them.
 A no-argument constructor is usually used when no information is needed in order to
initialize the object.
 However, this type of constructor can create potential issues if there are certain
conditions that must be met before setting up an object.
 For example, an invariant may need to be set right away or a reference may need to be
provided in order for the object to behave as expected.
 If a no-argument constructor is being utilized and these conditions are not met, there can
sometimes be issues in other parts of the code.

Programming in JAVA Lab Manual 2023-24

3
 It is for this reason that Java developers often opt for more controlled methods of
constructing objects via alternative ways such as overloaded constructors or factory
methods instead of no-argument constructors.

Output:

3.) Parameterized constructor in Java
 Parameterized constructors in Java allow developers to provide more flexibility when
constructing objects.
 These constructors accept arguments that can be used for initializing the object's state.
 Parameterized constructors can be overloaded, allowing more than one version with
different parameter lists to be called for various use cases.
 This is especially helpful for classes that represent complex objects that need to be
initialized from different sets of information.

Programming in JAVA Lab Manual 2023-24

4
 The parameterized constructor also allows subclasses to call the superclass constructor
and provide the necessary information required to create an instance of the subclass,
making it easy to create a hierarchy of objects within programs.
 Parameterized constructors are a key concept laying at the foundation of object-oriented
programming in Java and are incredibly useful when it comes to efficiently creating and
organizing many types of data.

Programming in JAVA Lab Manual 2023-24

5

Output:

Static Variables:
Class variables also known as static variables are declared with the static keyword in a class, but
outside a method, constructor or a block.
Static variables are created when the program starts and destroyed when the program stops.
Static variables can be accessed by calling with the class name ClassName.VariableName.
There would only be one copy of each class variable per class, regardless of how many objects
are created from it.
Instance Variables:
Instance variables are declared in a class, but outside a method, constructor or any block.
Instance variables are created when an object is created with the use of the keyword 'new' and
destroyed when the object is destroyed.
Instance variables can be accessed directly by calling the variable name inside the class.
However, within static methods (when instance variables are given accessibility), they should be
called using the fully qualified name. ObjectReference.VariableName.
Instance variables hold values that must be referenced by more than one method, constructor or
block, or essential parts of an object's state that must be present throughout the class.

Programming in JAVA Lab Manual 2023-24

6

Static Blocks:
Static initializer block or static initialization block, or static clause are some other names for the
static block. Static block code executes only once during the class loading. The static blocks
always execute first before the main() method in Java because the compiler stores them in
memory at the time of class loading and before the object creation.
A class can have multiple static blocks, and they will execute in the same order as they appear in
the class

Programming in JAVA Lab Manual 2023-24

7

Output:

The compiler executes all the static blocks first, and after finishing the static block execution, it
invokes the main() method. The Java compiler makes sure that the execution of static
initialization blocks will be in the same sequence as they appear in the source code.
Static blocks of parent class execute first because the compiler loads parent class before child
class.
Instance Block:
The purpose of the instance initializer block is to initialize the instance data members.
The instance initializer block looks just like the static initializer block, but without
the static keyword:
Static initializer blocks always execute before the instance initialization blocks because static
blocks run at the time of class loading. However, the instance block runs at the time of instance
creation. The Java compiler copies initializer blocks into every constructor. Therefore, multiple
constructors can use this approach to share a block of code:

Programming in JAVA Lab Manual 2023-24

8
The instance initializer blocks execute during every constructor invocation since the compiler
copies the initializer block in the constructor itself.
The compiler executes the parent class’s instance block before executing the current class’s
instance block. The compiler invokes the parent class constructor by super(), and instance blocks
execute at the time of constructor invocation.

Static Methods:
An static method in Java is a method that can be called without creating an object of the class.
We can reference such methods by the class name or direct reference to the object of that class.
Some of the properties of the static method are the following:
 An static method is related to a class rather than an object of the class. We can call the
static method directly without creating an object of the class.
 Static methods are designed in such a way that they can be shared among all objects
created using the same class.
 We cannot override static methods as they are resolved using the static binding by the
compiler during compile time.

Programming in JAVA Lab Manual 2023-24

9

Output:

Instance Methods:
Instance methods are the methods defined under a class and we can call such functions only after
creating an object of that class. In fact, the call to the instance method is made through the
created object itself.
Instance methods generally reside in the permanent generation space section of the heap but the
local variables and parameters have a separate location in the stack memory. We can invoke
instance methods within the same class or from a different class defined under the same package
or different package if the access type allows the same.

Programming in JAVA Lab Manual 2023-24

10

Some of the properties of the instance method are the following:
 Instance methods are related to an object rather than a class as they can be invoked after
creating an object of the class.
 We can override an instance method as they are resolved using dynamic binding during
run time.
 The instance methods are stored in a single memory location.

Output:

Conclusion: In this way we have studied and implemented the concepts of constructor, types of
constructors,Static variable, Static blocks, Static methods and instance variables, instance
blocks,instance methods.

Programming in JAVA Lab Manual 2023-24

11

Group B

Assignment – 7
Title: Create a class with overloaded methods for performing mathematical operations(addition,
subtraction, multiplication and division) for both integers and doubles.Demonstrate these
overloaded methods with different data types.
Objective: To understand the concepts of method overloading and implementing method
overloading.
Theory:
If a class has multiple methods having same name but different in parameters, it is known
as Method Overloading.
If we have to perform only one operation, having same name of the methods increases the
readability of the program.
Suppose you have to perform addition of the given numbers but there can be any number of
arguments, if you write the method such as a(int,int) for two parameters, and b(int,int,int) for
three parameters then it may be difficult for you as well as other programmers to understand the
behavior of the method because its name differs.
So, we perform method overloading to figure out the program quickly.
Advantage of method overloading
Method overloading increases the readability of the program.
Different ways to overload the method
There are two ways to overload the method in java
1. By changing number of arguments
2. By changing the data type
1) Method Overloading: changing no. of arguments
In this example, we have created two methods, first add() method performs addition of two
numbers and second add method performs addition of three numbers.
In this example, we are creating static methods so that we don't need to create instance for calling
methods.

Programming in JAVA Lab Manual 2023-24

12

Output:

Method Overloading: changing data type of arguments
In this example, we have created two methods that differs in data type. The first add method
receives two integer arguments and second add method receives two double arguments.

Programming in JAVA Lab Manual 2023-24

13

Output:

Conclusion: In this way we understood the concept of method overloading and executed
programs on it.

Programming in JAVA Lab Manual 2023-24

14

Group B

Assignment – 8
Title: Write a java program to calculate the area of trianlge, square and circle using function
overloading. Function parameters accept from user.(Use function Overloading concepts and
inheritance)
Objective: To understand the concepts of method overloading ,inheritance implementing
method overloading and inheritance.
Theory:
Inheritance is the process by which one class (the child or subclass) inherits the properties and
behaviors of another class (the parent or superclass). By extending a superclass, the subclass can
use its methods and variables without having to redefine them.
Polymorphism using inheritance can be achieved through method overriding and method
overloading.
Method Overloading: When a class has multiple methods with the same name but different
parameters, it is known as method overloading. In Java, method overloading is done by changing
the number, order, or type of parameters in the method.
Using scanner once can accept the input from the user.
Types of inheritance in java
On the basis of class, there can be three types of inheritance in java: single, multilevel and
hierarchical.
In java programming, multiple and hybrid inheritance is supported through interface only. We
will learn about interfaces later.

Programming in JAVA Lab Manual 2023-24

15

Note: Multiple inheritance is not supported in Java through class.

When one class inherits multiple classes, it is known as multiple inheritance. For Example:

Single Inheritance Example
When a class inherits another class, it is known as a single inheritance. In the example given
below, Dog class inherits the Animal class, so there is the single inheritance.

Programming in JAVA Lab Manual 2023-24

16

Output:
barking...
eating...
Multilevel Inheritance Example
When there is a chain of inheritance, it is known as multilevel inheritance. As you can see in the
example given below, BabyDog class inherits the Dog class which again inherits the Animal
class, so there is a multilevel inheritance.

Programming in JAVA Lab Manual 2023-24

17

Output:
weeping...
barking...
eating...
Hierarchical Inheritance Example
When two or more classes inherits a single class, it is known as hierarchical inheritance. In the
example given below, Dog and Cat classes inherits the Animal class, so there is hierarchical
inheritance.

Programming in JAVA Lab Manual 2023-24

18

Output:
meowing...
eating...

Programming in JAVA Lab Manual 2023-24

19

Programming in JAVA Lab Manual 2023-24

20

Conclusion:
In this manner, we have implemented the function overloading using inheritance.

Programming in JAVA Lab Manual 2023-24

21

Group B

Assignment – 9
Title: Design an abstract class” Shape” with abstract methods for calculating area and perimeter.
Create subclasses for specific shapes(eg:circle,rectangle,triangle) that extend the abstract class
and implement these methods.
Objective: To understand the concepts of abstract method and abstract class and implementing
the same.
Theory:
Data abstraction is the process of hiding certain details and showing only essential information to
the user.
Abstraction can be achieved with either abstract classes or interfaces (which you will learn more
about in the next chapter).
The abstract keyword is a non-access modifier, used for classes and methods:
 Abstract class: is a restricted class that cannot be used to create objects (to access it, it
must be inherited from another class).
 Abstract method: can only be used in an abstract class, and it does not have a body. The
body is provided by the subclass (inherited from).
An abstract class can have both abstract and regular method.

Programming in JAVA Lab Manual 2023-24

22

Output:

Programming in JAVA Lab Manual 2023-24

23

Programming in JAVA Lab Manual 2023-24

24

Programming in JAVA Lab Manual 2023-24

25

Output:

Programming in JAVA Lab Manual 2023-24

26

Group B

Assignment – 10
Title: Define an interface “Employee” with methods for calculating salary and displaying
employee information.Create classes that implement this interface for different types of
employees.(eg Fulltime ,parttime)
Objective: To understand the concepts of Interface and implement the same.
Theory:
A Java interface is like a blueprint of a class. It is an abstract type that specifies the behaviour of
a class. Java interfaces contain static constants and abstract methods. In an interface in Java
programming language, there can only be abstract methods and no method body. It is a
mechanism used to achieve abstraction and multiple inheritance.
In simple words, we can say that an interface program in Java can have variables and abstract
methods, but it can’t have a method body.
A few key points to remember about an interface in Java:
 An interface mentions what a class must do rather than how. Hence, it is known as a
blueprint of the behaviour of a class.
 We identify a type of entity by its behaviour and not its attribute; we define it as an
interface.
 Behaviour is represented as an interface unless each sub-type of a class has that
behaviour.
 It represents the Is-A relationship.
 It doesn’t have a constructor.
 Similar to a class, an interface can have variables and methods. However, methods
declared in an interface are abstract by default.
 Since Java 8, an interface has default and static methods.
 If a class implements an interface without providing method bodies for all specified
functions, it is declared as an abstract.
 Since Java 9, an interface can have private methods.

Programming in JAVA Lab Manual 2023-24

27

Programming in JAVA Lab Manual 2023-24

28

Programming in JAVA Lab Manual 2023-24

29

Programming in JAVA Lab Manual 2023-24

30

Conclusion: In this way, we have studied the interface concept and implemented it

Programming in JAVA Lab Manual 2023-24

31

Assignment
Title: Demonstrating the Use of final Keyword in Java with an Example
Objective:
1. To understand the usage of the final keyword in Java.
2. To demonstrate how the final keyword can be applied to variables, methods, and classes.
3. To explore the effect of using final on variable values, method overriding, and class
inheritance.
Theory:
The final keyword in Java is used to apply restrictions. It can be used in three contexts:
1. Final Variables:
o A variable declared as final cannot have its value changed once initialized. This
makes the variable a constant.
o If a reference variable is marked final, the reference cannot point to a different
object once assigned.

2. Final Methods:
o A method declared as final cannot be overridden by subclasses. This is useful
when you want to ensure that a specific method implementation is used
throughout the inheritance hierarchy.

3. Final Classes:
o A class declared as final cannot be subclassed. This is useful when you want to
prevent inheritance of a class.

Example
class DemoFinal {
// Final variable: Cannot be modified
final int constantValue = 10;
public final void displayMessage() {
constantValue=200;
System.out.println("This is a final method.");
}
}
public class Main {
public static void main(String[] args) {
DemoFinal demo = new DemoFinal();
System.out.println("Constant Value: " + demo.constantValue);
demo.displayMessage();
}
}

Programming in JAVA Lab Manual 2023-24

32

Sample Output

Use of final keyword at method level
class DemoFinal {
// Final variable: Cannot be modified
final int constantValue = 10;
public final void displayMessage() {
System.out.println("This is a final method.");
}
}
class subDemoFinal extends DemoFinal
{
public void displayMessage() {
System.out.println("This is a final method in Subclass.");
}
}
public class Main {
public static void main(String[] args) {
DemoFinal demo = new DemoFinal();
System.out.println("Constant Value: " + demo.constantValue);
demo.displayMessage();
}
}

Programming in JAVA Lab Manual 2023-24

33

Sample Output

Example of final class
final class DemoFinal {
// Final variable: Cannot be modified
final int constantValue = 10;
public final void displayMessage() {
System.out.println("This is a final method.");
}
}
class subDemoFinal extends DemoFinal
{
}
public class Main {
public static void main(String[] args) {
DemoFinal demo = new DemoFinal();
System.out.println("Constant Value: " + demo.constantValue);
demo.displayMessage();
}
}

Programming in JAVA Lab Manual 2023-24

34

Sample Output

Conclusion:
The final keyword in Java ensures immutability, prevents method overriding, and avoids
inheritance, promoting more reliable and secure code. It enforces constraints at the compilation
level, making the program predictable and easier to maintain.