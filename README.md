
# **Sigma Code Documentation**

Sigma Code is a fun, conversational programming language designed for simplicity, readability, and enjoyment. Write code as if you're chatting with your computer!

---

## **Features**

### **1. Printing Messages**
You can print messages to the console with this syntax:
```sigma
Hey computer, print this: "Your message here."
```

**Example**:
```sigma
Hey computer, print this: "Hello, World!"
```

**Output**:
```
Hello, World!
```

---

### **2. Variables**
#### **2.1 Declaring Variables**
Assign values to variables with the `Let` keyword:
```sigma
Let variable_name be value.
```

**Example**:
```sigma
Let x be 10.
Let name be "Sigma Coder".
```

#### **2.2 Using Variables**
You can use variables in other commands:
```sigma
Hey computer, print this: "Hello, " + name + "!"
```

**Output**:
```
Hello, Sigma Coder!
```

---

### **3. Math and Expressions**
You can define variables using expressions with `What's`:
```sigma
What's new_variable? It's expression.
```

**Example**:
```sigma
Let x be 5.
Let y be 10.
What's z? It's x + y.
Hey computer, print this: "The sum is " + z.
```

**Output**:
```
The sum is 15
```

Supported operations:  
- `+` (Addition)  
- `-` (Subtraction)  
- `*` (Multiplication)  
- `/` (Division)

---

### **4. Conditions**
Perform conditional actions with `If` and `Otherwise`:
```sigma
If condition, say: "Message if true."
Otherwise, say: "Message if false."
```

**Example**:
```sigma
Let z be 15.
If z is greater than 10, say: "Z is big!"
Otherwise, say: "Z is small."
```

**Output**:
```
Z is big!
```

Supported conditions:  
- `is equal to`  
- `is not equal to`  
- `is greater than`  
- `is less than`  
- `is greater than or equal to`  
- `is less than or equal to`

---

### **5. Loops**
#### **5.1 While Loops**
Repeat a block of code while a condition is true:
```sigma
While condition, do this:  
    - command 1  
    - command 2
```

**Example**:
```sigma
Let counter start at 1.
While counter is less than 4, do this:  
    - Hey computer, print this: "Counter is " + counter.
    - Add 1 to counter.
```

**Output**:
```
Counter is 1
Counter is 2
Counter is 3
```

---

### **6. Functions**
Define reusable blocks of code with functions:
```sigma
Let's make a function called function_name.  
It takes parameters.  
It does this:  
    - command 1  
    - command 2
```

Call a function with:
```sigma
Call function_name with arguments.
```

**Example**:
```sigma
Let's make a function called greet.  
It takes one thing: name.  
It does this:  
    - Hey computer, print this: "Hey, " + name + "!"

Call greet with "Sigma Coder".
```

**Output**:
```
Hey, Sigma Coder!
```

---

## **Complete Program Examples**

### **Example 1: Basic Chat**
```sigma
Hey computer, print this: "Welcome to Sigma Code!"

Let name be "Sigma Coder".
Hey computer, print this: "Hello, " + name + "!"
```

**Output**:
```
Welcome to Sigma Code!
Hello, Sigma Coder!
```

---

### **Example 2: Math Operations**
```sigma
Let x be 10.
Let y be 5.
What's z? It's x * y.
Hey computer, print this: "The product is " + z.
```

**Output**:
```
The product is 50
```

---

### **Example 3: Loops and Conditions**
```sigma
Let counter start at 1.
While counter is less than 4, do this:  
    - Hey computer, print this: "Counting... I'm at " + counter.
    - Add 1 to counter.

What's total? It's counter * 10.
If total is greater than 30, say: "Wow, that's big!"
Otherwise, say: "Not so big."
```

**Output**:
```
Counting... I'm at 1
Counting... I'm at 2
Counting... I'm at 3
Wow, that's big!
```

---

### **Example 4: Using Functions**
```sigma
Let's make a function called add.  
It takes two things: a, b.  
It does this:  
    - What's sum? It's a + b.
    - Say: "The sum is " + sum.

Call add with 10, 20.
```

**Output**:
```
The sum is 30
```

---

### **Example 5: A Complete Program**
```sigma
Hey computer, print this: "Welcome to Sigma Code!"

Let x be 7.
Let y be 3.
What's z? It's x * y.

Hey computer, print this: "The product is " + z.

If z is greater than 20, say: "Z is big!"
Otherwise, say: "Z is small."

Let counter start at 1.
While counter is less than 4, do this:  
    - Hey computer, print this: "Counter is " + counter.
    - Add 1 to counter.

Let's make a function called greet.  
It takes one thing: name.  
It does this:  
    - Say: "Hello, " + name + "!"

Call greet with "Sigma Coder".
```

**Output**:
```
Welcome to Sigma Code!
The product is 21
Z is big!
Counter is 1
Counter is 2
Counter is 3
Hello, Sigma Coder!
```

---

Feel free to copy and modify this documentation for your project!
