import{W as l,a,b as r,c as u,h as o}from"./chunk-46TFZ4A7.js";var x={3:[{titleAr:"\u0628\u0631\u0646\u0627\u0645\u062C Hello World \u0628\u0623\u0631\u0628\u0639 \u0644\u063A\u0627\u062A",titleEn:"Hello World in 4 Languages",tabs:[{id:"python",code:`# \u0647\u0630\u0627 \u0647\u0648 \u0623\u0648\u0644 \u0628\u0631\u0646\u0627\u0645\u062C \u2014 \u0646\u0637\u0628\u0639 \u062C\u0645\u0644\u0629 \u0639\u0644\u0649 \u0627\u0644\u0634\u0627\u0634\u0629
print("Hello, World!")
# \u0627\u0644\u0646\u0627\u062A\u062C: Hello, World!`,descriptionAr:"\u0627\u0644\u0625\u062E\u0631\u0627\u062C \u0641\u064A Python",descriptionEn:"Output in Python"},{id:"javascript",code:'console.log("Hello, World!");',descriptionAr:"\u0627\u0644\u0625\u062E\u0631\u0627\u062C \u0641\u064A JavaScript",descriptionEn:"Output in JavaScript"},{id:"java",code:`public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`,descriptionAr:"\u0627\u0644\u0625\u062E\u0631\u0627\u062C \u0641\u064A Java",descriptionEn:"Output in Java"},{id:"cpp",code:`#include <iostream>
using namespace std;

int main() {
    cout << "Hello, World!" << endl;
    return 0;
}`,descriptionAr:"\u0627\u0644\u0625\u062E\u0631\u0627\u062C \u0641\u064A C++",descriptionEn:"Output in C++"}]}],4:[{titleAr:"\u0627\u0644\u062A\u0639\u0644\u064A\u0642\u0627\u062A \u0628\u0623\u0631\u0628\u0639 \u0644\u063A\u0627\u062A",titleEn:"Comments in 4 Languages",tabs:[{id:"python",code:`# This is a single-line comment

# Python does not have multi-line comment syntax
# so you chain # lines like this

name = "Sara"  # inline comment
print(name)`,descriptionAr:"\u0627\u0644\u062A\u0639\u0644\u064A\u0642\u0627\u062A \u0641\u064A Python",descriptionEn:"Comments in Python"},{id:"javascript",code:`// This is a single-line comment

/* This is a
   multi-line comment */

let name = "Sara"; // inline comment
console.log(name);`,descriptionAr:"\u0627\u0644\u062A\u0639\u0644\u064A\u0642\u0627\u062A \u0641\u064A JavaScript",descriptionEn:"Comments in JavaScript"},{id:"java",code:`public class Main {
    public static void main(String[] args) {
        // Single-line comment

        /* Multi-line
           comment */

        String name = "Sara"; // inline comment
        System.out.println(name);
    }
}`,descriptionAr:"\u0627\u0644\u062A\u0639\u0644\u064A\u0642\u0627\u062A \u0641\u064A Java",descriptionEn:"Comments in Java"},{id:"cpp",code:`#include <iostream>
using namespace std;

int main() {
    // Single-line comment

    /* Multi-line
       comment */

    string name = "Sara"; // inline comment
    cout << name << endl;
    return 0;
}`,descriptionAr:"\u0627\u0644\u062A\u0639\u0644\u064A\u0642\u0627\u062A \u0641\u064A C++",descriptionEn:"Comments in C++"}]}],5:[{titleAr:"\u0627\u0644\u0645\u062A\u063A\u064A\u0631\u0627\u062A \u0628\u0623\u0631\u0628\u0639 \u0644\u063A\u0627\u062A",titleEn:"Variables in 4 Languages",tabs:[{id:"python",code:`# \u0646\u064F\u0646\u0634\u0626 \u0645\u062A\u063A\u064A\u0631\u0627\u062A \u062A\u062D\u0645\u0644 \u0642\u064A\u0645\u0627\u064B \u0645\u062E\u062A\u0644\u0641\u0629
name = "Sara"       # \u0646\u0635 (String)
age = 25            # \u0631\u0642\u0645 \u0635\u062D\u064A\u062D (Integer)
is_student = True   # \u0642\u064A\u0645\u0629 \u0645\u0646\u0637\u0642\u064A\u0629 (Boolean)

# \u0646\u0637\u0628\u0639 \u0642\u064A\u0645\u0629 \u0643\u0644 \u0645\u062A\u063A\u064A\u0631
print(name)       # Sara
print(age)        # 25
print(is_student) # True

# \u064A\u0645\u0643\u0646 \u062A\u063A\u064A\u064A\u0631 \u0642\u064A\u0645\u0629 \u0627\u0644\u0645\u062A\u063A\u064A\u0631 \u0641\u064A \u0623\u064A \u0648\u0642\u062A
score = 0         # \u0646\u0628\u062F\u0623 \u0628\u0627\u0644\u0635\u0641\u0631
score = 10        # \u0646\u063A\u064A\u0651\u0631 \u0627\u0644\u0642\u064A\u0645\u0629
score = score + 5 # \u0646\u0636\u064A\u0641 5 \u0639\u0644\u0649 \u0627\u0644\u0642\u064A\u0645\u0629 \u0627\u0644\u062D\u0627\u0644\u064A\u0629
print(score)      # 15`,descriptionAr:"\u0625\u0646\u0634\u0627\u0621 \u0627\u0644\u0645\u062A\u063A\u064A\u0631\u0627\u062A \u0648\u062A\u063A\u064A\u064A\u0631 \u0642\u064A\u0645\u0647\u0627 \u0641\u064A Python",descriptionEn:"Creating and changing variables in Python"},{id:"javascript",code:`let name = "Sara";
let age = 25;
let isStudent = true;

console.log(name);      // Sara
console.log(age);       // 25
console.log(isStudent); // true

// Changing a variable
let score = 0;
score = 10;
score = score + 5;
console.log(score);     // 15`,descriptionAr:"\u0625\u0646\u0634\u0627\u0621 \u0627\u0644\u0645\u062A\u063A\u064A\u0631\u0627\u062A \u0648\u062A\u063A\u064A\u064A\u0631 \u0642\u064A\u0645\u0647\u0627 \u0641\u064A JavaScript",descriptionEn:"Creating and changing variables in JavaScript"},{id:"java",code:`public class Main {
    public static void main(String[] args) {
        String name = "Sara";
        int age = 25;
        boolean isStudent = true;

        System.out.println(name);       // Sara
        System.out.println(age);        // 25
        System.out.println(isStudent);  // true

        // Changing a variable
        int score = 0;
        score = 10;
        score = score + 5;
        System.out.println(score);      // 15
    }
}`,descriptionAr:"\u0625\u0646\u0634\u0627\u0621 \u0627\u0644\u0645\u062A\u063A\u064A\u0631\u0627\u062A \u0648\u062A\u063A\u064A\u064A\u0631 \u0642\u064A\u0645\u0647\u0627 \u0641\u064A Java",descriptionEn:"Creating and changing variables in Java"},{id:"cpp",code:`#include <iostream>
#include <string>
using namespace std;

int main() {
    string name = "Sara";
    int age = 25;
    bool isStudent = true;

    cout << name << endl;       // Sara
    cout << age << endl;        // 25
    cout << isStudent << endl;  // 1 (true)

    // Changing a variable
    int score = 0;
    score = 10;
    score = score + 5;
    cout << score << endl;      // 15
    return 0;
}`,descriptionAr:"\u0625\u0646\u0634\u0627\u0621 \u0627\u0644\u0645\u062A\u063A\u064A\u0631\u0627\u062A \u0648\u062A\u063A\u064A\u064A\u0631 \u0642\u064A\u0645\u0647\u0627 \u0641\u064A C++",descriptionEn:"Creating and changing variables in C++"}]}],6:[{titleAr:"\u0623\u0646\u0648\u0627\u0639 \u0627\u0644\u0628\u064A\u0627\u0646\u0627\u062A \u0628\u0623\u0631\u0628\u0639 \u0644\u063A\u0627\u062A",titleEn:"Data Types in 4 Languages",tabs:[{id:"python",code:`# Integer
age = 25
# Float
price = 9.99
# String
name = "Sara"
# Boolean
is_active = True
# None (null)
empty = None

print(type(age))       # <class 'int'>
print(type(price))     # <class 'float'>
print(type(name))      # <class 'str'>
print(type(is_active)) # <class 'bool'>
print(type(empty))     # <class 'NoneType'>`,descriptionAr:"\u0623\u0646\u0648\u0627\u0639 \u0627\u0644\u0628\u064A\u0627\u0646\u0627\u062A \u0627\u0644\u0623\u0633\u0627\u0633\u064A\u0629 \u0641\u064A Python",descriptionEn:"Basic data types in Python"},{id:"javascript",code:`// Number
let age = 25;
let price = 9.99;
// String
let name = "Sara";
// Boolean
let isActive = true;
// Null & Undefined
let empty = null;
let notDefined;

console.log(typeof age);        // "number"
console.log(typeof name);       // "string"
console.log(typeof isActive);   // "boolean"
console.log(typeof empty);      // "object"
console.log(typeof notDefined); // "undefined"`,descriptionAr:"\u0623\u0646\u0648\u0627\u0639 \u0627\u0644\u0628\u064A\u0627\u0646\u0627\u062A \u0627\u0644\u0623\u0633\u0627\u0633\u064A\u0629 \u0641\u064A JavaScript",descriptionEn:"Basic data types in JavaScript"},{id:"java",code:`public class Main {
    public static void main(String[] args) {
        int age = 25;          // integer
        double price = 9.99;   // decimal
        String name = "Sara";  // text
        boolean isActive = true;
        // null reference
        String empty = null;

        System.out.println(age);       // 25
        System.out.println(price);     // 9.99
        System.out.println(name);      // Sara
        System.out.println(isActive);  // true
        System.out.println(empty);     // null
    }
}`,descriptionAr:"\u0623\u0646\u0648\u0627\u0639 \u0627\u0644\u0628\u064A\u0627\u0646\u0627\u062A \u0627\u0644\u0623\u0633\u0627\u0633\u064A\u0629 \u0641\u064A Java",descriptionEn:"Basic data types in Java"},{id:"cpp",code:`#include <iostream>
#include <string>
using namespace std;

int main() {
    int age = 25;           // integer
    double price = 9.99;    // decimal
    string name = "Sara";   // text
    bool isActive = true;   // boolean
    char grade = 'A';       // single character

    cout << age << endl;        // 25
    cout << price << endl;      // 9.99
    cout << name << endl;       // Sara
    cout << isActive << endl;   // 1
    cout << grade << endl;      // A
    return 0;
}`,descriptionAr:"\u0623\u0646\u0648\u0627\u0639 \u0627\u0644\u0628\u064A\u0627\u0646\u0627\u062A \u0627\u0644\u0623\u0633\u0627\u0633\u064A\u0629 \u0641\u064A C++",descriptionEn:"Basic data types in C++"}]}],7:[{titleAr:"\u0627\u0644\u062B\u0648\u0627\u0628\u062A \u0628\u0623\u0631\u0628\u0639 \u0644\u063A\u0627\u062A",titleEn:"Constants in 4 Languages",tabs:[{id:"python",code:`# Python has no built-in constant keyword
# Convention: use UPPER_CASE names
PI = 3.14159
MAX_USERS = 100
APP_NAME = "MyApp"

print(PI)         # 3.14159
print(MAX_USERS)  # 100`,descriptionAr:"\u0627\u0644\u062B\u0648\u0627\u0628\u062A \u0641\u064A Python (\u0628\u0627\u0644\u0627\u0635\u0637\u0644\u0627\u062D)",descriptionEn:"Constants in Python (by convention)"},{id:"javascript",code:`const PI = 3.14159;
const MAX_USERS = 100;
const APP_NAME = "MyApp";

console.log(PI);        // 3.14159
console.log(MAX_USERS); // 100

// This would cause an ERROR:
// PI = 3; // TypeError: Assignment to constant variable`,descriptionAr:"\u0627\u0644\u062B\u0648\u0627\u0628\u062A \u0641\u064A JavaScript \u0628\u0627\u0633\u062A\u062E\u062F\u0627\u0645 const",descriptionEn:"Constants in JavaScript using const"},{id:"java",code:`public class Main {
    // Class-level constants use static final
    static final double PI = 3.14159;
    static final int MAX_USERS = 100;
    static final String APP_NAME = "MyApp";

    public static void main(String[] args) {
        System.out.println(PI);        // 3.14159
        System.out.println(MAX_USERS); // 100
        // PI = 3; // ERROR: cannot assign to final
    }
}`,descriptionAr:"\u0627\u0644\u062B\u0648\u0627\u0628\u062A \u0641\u064A Java \u0628\u0627\u0633\u062A\u062E\u062F\u0627\u0645 final",descriptionEn:"Constants in Java using final"},{id:"cpp",code:`#include <iostream>
using namespace std;

int main() {
    const double PI = 3.14159;
    const int MAX_USERS = 100;
    const string APP_NAME = "MyApp";

    cout << PI << endl;        // 3.14159
    cout << MAX_USERS << endl; // 100
    // PI = 3; // ERROR: assignment of read-only variable
    return 0;
}`,descriptionAr:"\u0627\u0644\u062B\u0648\u0627\u0628\u062A \u0641\u064A C++ \u0628\u0627\u0633\u062A\u062E\u062F\u0627\u0645 const",descriptionEn:"Constants in C++ using const"}]}],8:[{titleAr:"\u0639\u0645\u0644\u064A\u0627\u062A \u0627\u0644\u0646\u0635\u0648\u0635 \u0628\u0623\u0631\u0628\u0639 \u0644\u063A\u0627\u062A",titleEn:"String Operations in 4 Languages",tabs:[{id:"python",code:`first_name = "Sara"
last_name  = "Ahmed"

# Concatenation
full_name = first_name + " " + last_name
print(full_name)               # Sara Ahmed

# f-string (modern way)
greeting = f"Hello, {first_name}!"
print(greeting)                # Hello, Sara!

# String methods
print(len(full_name))          # 10
print(full_name.upper())       # SARA AHMED
print(full_name.lower())       # sara ahmed
print("Sara" in full_name)     # True`,descriptionAr:"\u0639\u0645\u0644\u064A\u0627\u062A \u0627\u0644\u0646\u0635\u0648\u0635 \u0627\u0644\u0634\u0627\u0626\u0639\u0629 \u0641\u064A Python",descriptionEn:"Common string operations in Python"},{id:"javascript",code:`let firstName = "Sara";
let lastName  = "Ahmed";

// Concatenation
let fullName = firstName + " " + lastName;
console.log(fullName);               // Sara Ahmed

// Template literal
let greeting = \`Hello, \${firstName}!\`;
console.log(greeting);               // Hello, Sara!

// String methods
console.log(fullName.length);        // 10
console.log(fullName.toUpperCase()); // SARA AHMED
console.log(fullName.toLowerCase()); // sara ahmed
console.log(fullName.includes("Sara")); // true`,descriptionAr:"\u0639\u0645\u0644\u064A\u0627\u062A \u0627\u0644\u0646\u0635\u0648\u0635 \u0627\u0644\u0634\u0627\u0626\u0639\u0629 \u0641\u064A JavaScript",descriptionEn:"Common string operations in JavaScript"},{id:"java",code:`public class Main {
    public static void main(String[] args) {
        String firstName = "Sara";
        String lastName  = "Ahmed";

        // Concatenation
        String fullName = firstName + " " + lastName;
        System.out.println(fullName);               // Sara Ahmed

        // String.format
        String greeting = String.format("Hello, %s!", firstName);
        System.out.println(greeting);               // Hello, Sara!

        // String methods
        System.out.println(fullName.length());      // 10
        System.out.println(fullName.toUpperCase()); // SARA AHMED
        System.out.println(fullName.toLowerCase()); // sara ahmed
        System.out.println(fullName.contains("Sara")); // true
    }
}`,descriptionAr:"\u0639\u0645\u0644\u064A\u0627\u062A \u0627\u0644\u0646\u0635\u0648\u0635 \u0627\u0644\u0634\u0627\u0626\u0639\u0629 \u0641\u064A Java",descriptionEn:"Common string operations in Java"},{id:"cpp",code:`#include <iostream>
#include <string>
using namespace std;

int main() {
    string firstName = "Sara";
    string lastName  = "Ahmed";

    // Concatenation
    string fullName = firstName + " " + lastName;
    cout << fullName << endl;               // Sara Ahmed

    // String methods
    cout << fullName.length() << endl;      // 10
    // convert to upper (manual via algorithm)
    string up = fullName;
    for (char& c : up) c = toupper(c);
    cout << up << endl;                     // SARA AHMED

    // Find substring
    bool found = fullName.find("Sara") != string::npos;
    cout << found << endl;                  // 1
    return 0;
}`,descriptionAr:"\u0639\u0645\u0644\u064A\u0627\u062A \u0627\u0644\u0646\u0635\u0648\u0635 \u0627\u0644\u0634\u0627\u0626\u0639\u0629 \u0641\u064A C++",descriptionEn:"Common string operations in C++"}]}],9:[{titleAr:"\u0627\u0644\u0645\u0639\u0627\u0645\u0644\u0627\u062A \u0628\u0623\u0631\u0628\u0639 \u0644\u063A\u0627\u062A",titleEn:"Operators in 4 Languages",tabs:[{id:"python",code:`a, b = 10, 3

# Arithmetic
print(a + b)   # 13
print(a - b)   # 7
print(a * b)   # 30
print(a / b)   # 3.333...
print(a // b)  # 3  (integer division)
print(a % b)   # 1  (remainder)
print(a ** b)  # 1000 (power)

# Comparison
print(a > b)   # True
print(a == b)  # False
print(a != b)  # True

# Logical
print(True and False) # False
print(True or False)  # True
print(not True)       # False`,descriptionAr:"\u062C\u0645\u064A\u0639 \u0623\u0646\u0648\u0627\u0639 \u0627\u0644\u0645\u0639\u0627\u0645\u0644\u0627\u062A \u0641\u064A Python",descriptionEn:"All types of operators in Python"},{id:"javascript",code:`let a = 10, b = 3;

// Arithmetic
console.log(a + b);  // 13
console.log(a - b);  // 7
console.log(a * b);  // 30
console.log(a / b);  // 3.333...
console.log(a % b);  // 1  (remainder)
console.log(a ** b); // 1000 (power)

// Comparison
console.log(a > b);   // true
console.log(a === b); // false
console.log(a !== b); // true

// Logical
console.log(true && false); // false
console.log(true || false); // true
console.log(!true);         // false`,descriptionAr:"\u062C\u0645\u064A\u0639 \u0623\u0646\u0648\u0627\u0639 \u0627\u0644\u0645\u0639\u0627\u0645\u0644\u0627\u062A \u0641\u064A JavaScript",descriptionEn:"All types of operators in JavaScript"},{id:"java",code:`public class Main {
    public static void main(String[] args) {
        int a = 10, b = 3;

        // Arithmetic
        System.out.println(a + b);  // 13
        System.out.println(a - b);  // 7
        System.out.println(a * b);  // 30
        System.out.println(a / b);  // 3 (integer division)
        System.out.println(a % b);  // 1 (remainder)

        // Comparison
        System.out.println(a > b);  // true
        System.out.println(a == b); // false
        System.out.println(a != b); // true

        // Logical
        System.out.println(true && false); // false
        System.out.println(true || false); // true
        System.out.println(!true);         // false
    }
}`,descriptionAr:"\u062C\u0645\u064A\u0639 \u0623\u0646\u0648\u0627\u0639 \u0627\u0644\u0645\u0639\u0627\u0645\u0644\u0627\u062A \u0641\u064A Java",descriptionEn:"All types of operators in Java"},{id:"cpp",code:`#include <iostream>
using namespace std;

int main() {
    int a = 10, b = 3;

    // Arithmetic
    cout << a + b << endl;  // 13
    cout << a - b << endl;  // 7
    cout << a * b << endl;  // 30
    cout << a / b << endl;  // 3 (integer division)
    cout << a % b << endl;  // 1 (remainder)

    // Comparison
    cout << (a > b)  << endl; // 1 (true)
    cout << (a == b) << endl; // 0 (false)
    cout << (a != b) << endl; // 1 (true)

    // Logical
    cout << (true && false) << endl; // 0
    cout << (true || false) << endl; // 1
    cout << (!true) << endl;         // 0
    return 0;
}`,descriptionAr:"\u062C\u0645\u064A\u0639 \u0623\u0646\u0648\u0627\u0639 \u0627\u0644\u0645\u0639\u0627\u0645\u0644\u0627\u062A \u0641\u064A C++",descriptionEn:"All types of operators in C++"}]}],10:[{titleAr:"\u062A\u062D\u0648\u064A\u0644 \u0627\u0644\u0623\u0646\u0648\u0627\u0639 \u0628\u0623\u0631\u0628\u0639 \u0644\u063A\u0627\u062A",titleEn:"Type Casting in 4 Languages",tabs:[{id:"python",code:`# String -> Number
s = "42"
n = int(s)
print(n, type(n))    # 42 <class 'int'>

f = float("3.7")
print(f)             # 3.7

# Number -> String
age = 25
age_str = str(age)
print(age_str, type(age_str))  # 25 <class 'str'>

# To Boolean
print(bool(0))       # False
print(bool(""))      # False
print(bool(1))       # True
print(bool("hi"))    # True`,descriptionAr:"\u062A\u062D\u0648\u064A\u0644 \u0627\u0644\u0623\u0646\u0648\u0627\u0639 \u0641\u064A Python",descriptionEn:"Type conversion in Python"},{id:"javascript",code:`// String -> Number
let str = "42";
let num = Number(str);
console.log(num, typeof num);  // 42 "number"

let int = parseInt("3.7");
console.log(int);              // 3

// Number -> String
let age = 25;
let ageStr = String(age);
console.log(ageStr, typeof ageStr); // "25" "string"

// To Boolean
console.log(Boolean(0));    // false
console.log(Boolean(""));   // false
console.log(Boolean(1));    // true
console.log(Boolean("hi")); // true`,descriptionAr:"\u062A\u062D\u0648\u064A\u0644 \u0627\u0644\u0623\u0646\u0648\u0627\u0639 \u0641\u064A JavaScript",descriptionEn:"Type conversion in JavaScript"},{id:"java",code:`public class Main {
    public static void main(String[] args) {
        // String -> Number
        String s = "42";
        int n = Integer.parseInt(s);
        System.out.println(n);              // 42

        double d = Double.parseDouble("3.7");
        System.out.println(d);             // 3.7

        // Number -> String
        int age = 25;
        String ageStr = String.valueOf(age);
        System.out.println(ageStr);        // "25"

        // int -> double (implicit widening)
        int x = 5;
        double y = x;
        System.out.println(y);             // 5.0

        // double -> int (explicit narrowing)
        double price = 9.99;
        int p = (int) price;
        System.out.println(p);             // 9
    }
}`,descriptionAr:"\u062A\u062D\u0648\u064A\u0644 \u0627\u0644\u0623\u0646\u0648\u0627\u0639 \u0641\u064A Java",descriptionEn:"Type conversion in Java"},{id:"cpp",code:`#include <iostream>
#include <string>
using namespace std;

int main() {
    // String -> Number
    string s = "42";
    int n = stoi(s);
    cout << n << endl;           // 42

    double d = stod("3.7");
    cout << d << endl;           // 3.7

    // Number -> String
    int age = 25;
    string ageStr = to_string(age);
    cout << ageStr << endl;      // "25"

    // int -> double (implicit)
    int x = 5;
    double y = x;
    cout << y << endl;           // 5

    // double -> int (explicit cast)
    double price = 9.99;
    int p = (int) price;
    cout << p << endl;           // 9
    return 0;
}`,descriptionAr:"\u062A\u062D\u0648\u064A\u0644 \u0627\u0644\u0623\u0646\u0648\u0627\u0639 \u0641\u064A C++",descriptionEn:"Type conversion in C++"}]}],11:[{titleAr:"\u0627\u0644\u0625\u062F\u062E\u0627\u0644 \u0648\u0627\u0644\u0625\u062E\u0631\u0627\u062C \u0628\u0623\u0631\u0628\u0639 \u0644\u063A\u0627\u062A",titleEn:"Input & Output in 4 Languages",tabs:[{id:"python",code:`# Output
print("Hello, World!")
print("Sum:", 2 + 3)

# Input
name = input("What is your name? ")
print("Hello,", name + "!")`,descriptionAr:"\u0627\u0644\u0625\u062F\u062E\u0627\u0644 \u0648\u0627\u0644\u0625\u062E\u0631\u0627\u062C \u0641\u064A Python",descriptionEn:"Input and output in Python"},{id:"javascript",code:`// Output
console.log("Hello, World!");
console.log("Sum:", 2 + 3);

// Browser: get user input
let name = prompt("What is your name?");
console.log("Hello, " + name + "!");

// Show a popup
alert("Welcome!");`,descriptionAr:"\u0627\u0644\u0625\u062F\u062E\u0627\u0644 \u0648\u0627\u0644\u0625\u062E\u0631\u0627\u062C \u0641\u064A JavaScript (\u0627\u0644\u0645\u062A\u0635\u0641\u062D)",descriptionEn:"Input and output in JavaScript (browser)"},{id:"java",code:`import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        // Output
        System.out.println("Hello, World!");
        System.out.println("Sum: " + (2 + 3));

        // Input
        Scanner sc = new Scanner(System.in);
        System.out.print("What is your name? ");
        String name = sc.nextLine();
        System.out.println("Hello, " + name + "!");
    }
}`,descriptionAr:"\u0627\u0644\u0625\u062F\u062E\u0627\u0644 \u0648\u0627\u0644\u0625\u062E\u0631\u0627\u062C \u0641\u064A Java",descriptionEn:"Input and output in Java"},{id:"cpp",code:`#include <iostream>
#include <string>
using namespace std;

int main() {
    // Output
    cout << "Hello, World!" << endl;
    cout << "Sum: " << 2 + 3 << endl;

    // Input
    string name;
    cout << "What is your name? ";
    cin >> name;
    cout << "Hello, " << name << "!" << endl;
    return 0;
}`,descriptionAr:"\u0627\u0644\u0625\u062F\u062E\u0627\u0644 \u0648\u0627\u0644\u0625\u062E\u0631\u0627\u062C \u0641\u064A C++",descriptionEn:"Input and output in C++"}]}],12:[{titleAr:"\u0627\u0644\u0634\u0631\u0648\u0637 \u0648\u062C\u0645\u0644 if \u0628\u0623\u0631\u0628\u0639 \u0644\u063A\u0627\u062A",titleEn:"Conditions & if Statements in 4 Languages",tabs:[{id:"python",code:`score = 85  # \u062F\u0631\u062C\u0629 \u0627\u0644\u0637\u0627\u0644\u0628

# \u0646\u0641\u062D\u0635 \u0627\u0644\u0634\u0631\u0637 \u0627\u0644\u0623\u0648\u0644: \u0647\u0644 \u0627\u0644\u062F\u0631\u062C\u0629 90 \u0623\u0648 \u0623\u0643\u062B\u0631\u061F
if score >= 90:
    print("Grade: A")
# \u0625\u0630\u0627 \u0644\u0627\u060C \u0646\u0641\u062D\u0635 \u0627\u0644\u0634\u0631\u0637 \u0627\u0644\u062B\u0627\u0646\u064A
elif score >= 80:
    print("Grade: B")   # \u2190 \u0647\u0630\u0627 \u0633\u064A\u064F\u0637\u0628\u0639 \u0644\u0623\u0646 85 >= 80
elif score >= 70:
    print("Grade: C")
else:
    # \u0625\u0630\u0627 \u0644\u0645 \u064A\u0646\u0637\u0628\u0642 \u0623\u064A \u0634\u0631\u0637\u060C \u0646\u0646\u0641\u0630 \u0647\u0630\u0627
    print("Grade: F")

# \u0637\u0631\u064A\u0642\u0629 \u0645\u062E\u062A\u0635\u0631\u0629 \u0641\u064A \u0633\u0637\u0631 \u0648\u0627\u062D\u062F (Ternary)
age = 20
status = "Adult" if age >= 18 else "Minor"
print(status)  # Adult`,descriptionAr:"\u0627\u0644\u0634\u0631\u0648\u0637 \u0628\u0627\u0633\u062A\u062E\u062F\u0627\u0645 if/elif/else \u0641\u064A Python",descriptionEn:"Conditions using if/elif/else in Python"},{id:"javascript",code:`let score = 85;

if (score >= 90) {
    console.log("Grade: A");
} else if (score >= 80) {
    console.log("Grade: B");
} else if (score >= 70) {
    console.log("Grade: C");
} else {
    console.log("Grade: F");
}
// Output: Grade: B

// Ternary operator
let age = 20;
let status = age >= 18 ? "Adult" : "Minor";
console.log(status); // Adult`,descriptionAr:"\u0627\u0644\u0634\u0631\u0648\u0637 \u0628\u0627\u0633\u062A\u062E\u062F\u0627\u0645 if/else \u0641\u064A JavaScript",descriptionEn:"Conditions using if/else in JavaScript"},{id:"java",code:`public class Main {
    public static void main(String[] args) {
        int score = 85;

        if (score >= 90) {
            System.out.println("Grade: A");
        } else if (score >= 80) {
            System.out.println("Grade: B");
        } else if (score >= 70) {
            System.out.println("Grade: C");
        } else {
            System.out.println("Grade: F");
        }
        // Output: Grade: B

        // Ternary
        int age = 20;
        String status = age >= 18 ? "Adult" : "Minor";
        System.out.println(status); // Adult
    }
}`,descriptionAr:"\u0627\u0644\u0634\u0631\u0648\u0637 \u0628\u0627\u0633\u062A\u062E\u062F\u0627\u0645 if/else \u0641\u064A Java",descriptionEn:"Conditions using if/else in Java"},{id:"cpp",code:`#include <iostream>
using namespace std;

int main() {
    int score = 85;

    if (score >= 90) {
        cout << "Grade: A" << endl;
    } else if (score >= 80) {
        cout << "Grade: B" << endl;
    } else if (score >= 70) {
        cout << "Grade: C" << endl;
    } else {
        cout << "Grade: F" << endl;
    }
    // Output: Grade: B

    // Ternary
    int age = 20;
    string status = age >= 18 ? "Adult" : "Minor";
    cout << status << endl; // Adult
    return 0;
}`,descriptionAr:"\u0627\u0644\u0634\u0631\u0648\u0637 \u0628\u0627\u0633\u062A\u062E\u062F\u0627\u0645 if/else \u0641\u064A C++",descriptionEn:"Conditions using if/else in C++"}]}],13:[{titleAr:"\u0627\u0644\u0645\u0635\u0641\u0648\u0641\u0627\u062A \u0628\u0623\u0631\u0628\u0639 \u0644\u063A\u0627\u062A",titleEn:"Arrays in 4 Languages",tabs:[{id:"python",code:`fruits = ["Apple", "Banana", "Orange"]

# Access elements (0-indexed)
print(fruits[0])  # Apple
print(fruits[1])  # Banana

# Length
print(len(fruits))  # 3

# Add / Remove
fruits.append("Mango")
print(fruits)        # ['Apple','Banana','Orange','Mango']

fruits.pop()
print(fruits)        # ['Apple','Banana','Orange']

# Loop
for fruit in fruits:
    print(fruit)`,descriptionAr:"\u0627\u0644\u0642\u0648\u0627\u0626\u0645 (Lists) \u0641\u064A Python",descriptionEn:"Lists (arrays) in Python"},{id:"javascript",code:`let fruits = ["Apple", "Banana", "Orange"];

// Access elements (0-indexed)
console.log(fruits[0]); // Apple
console.log(fruits[1]); // Banana

// Length
console.log(fruits.length); // 3

// Add / Remove
fruits.push("Mango");
console.log(fruits); // [..., "Mango"]

fruits.pop();
console.log(fruits); // ["Apple","Banana","Orange"]

// Loop
for (let fruit of fruits) {
    console.log(fruit);
}`,descriptionAr:"\u0627\u0644\u0645\u0635\u0641\u0648\u0641\u0627\u062A \u0641\u064A JavaScript",descriptionEn:"Arrays in JavaScript"},{id:"java",code:`import java.util.ArrayList;

public class Main {
    public static void main(String[] args) {
        ArrayList<String> fruits = new ArrayList<>();
        fruits.add("Apple");
        fruits.add("Banana");
        fruits.add("Orange");

        // Access (0-indexed)
        System.out.println(fruits.get(0)); // Apple

        // Size
        System.out.println(fruits.size()); // 3

        // Add / Remove
        fruits.add("Mango");
        fruits.remove(fruits.size() - 1); // removes last

        // Loop
        for (String fruit : fruits) {
            System.out.println(fruit);
        }
    }
}`,descriptionAr:"\u0627\u0644\u0645\u0635\u0641\u0648\u0641\u0627\u062A (ArrayList) \u0641\u064A Java",descriptionEn:"Arrays (ArrayList) in Java"},{id:"cpp",code:`#include <iostream>
#include <vector>
using namespace std;

int main() {
    vector<string> fruits = {"Apple", "Banana", "Orange"};

    // Access (0-indexed)
    cout << fruits[0] << endl; // Apple
    cout << fruits[1] << endl; // Banana

    // Size
    cout << fruits.size() << endl; // 3

    // Add / Remove
    fruits.push_back("Mango");
    fruits.pop_back();          // removes last

    // Loop
    for (string fruit : fruits) {
        cout << fruit << endl;
    }
    return 0;
}`,descriptionAr:"\u0627\u0644\u0645\u062A\u062C\u0647\u0627\u062A (vector) \u0641\u064A C++",descriptionEn:"Vectors (arrays) in C++"}]}],14:[{titleAr:"\u0627\u0644\u062D\u0644\u0642\u0627\u062A \u0627\u0644\u062A\u0643\u0631\u0627\u0631\u064A\u0629 \u0628\u0623\u0631\u0628\u0639 \u0644\u063A\u0627\u062A",titleEn:"Loops in 4 Languages",tabs:[{id:"python",code:`# \u062D\u0644\u0642\u0629 for \u2014 \u062A\u062A\u0643\u0631\u0631 \u0645\u0646 1 \u0625\u0644\u0649 5
for i in range(1, 6):
    print("Count:", i)  # \u062A\u0637\u0628\u0639 \u0627\u0644\u0639\u062F\u062F \u0627\u0644\u062D\u0627\u0644\u064A
# \u0627\u0644\u0646\u0627\u062A\u062C: Count: 1 \u2026 Count: 5

# \u062D\u0644\u0642\u0629 while \u2014 \u062A\u0633\u062A\u0645\u0631 \u0645\u0627 \u062F\u0627\u0645 \u0627\u0644\u0634\u0631\u0637 \u0635\u062D\u064A\u062D\u0627\u064B
count = 0
while count < 3:
    print("Repeat #" + str(count))
    count += 1  # \u0646\u0632\u064A\u062F \u0627\u0644\u0645\u062A\u063A\u064A\u0631 \u0644\u062A\u062C\u0646\u0651\u0628 \u0627\u0644\u062D\u0644\u0642\u0629 \u0627\u0644\u0644\u0627\u0646\u0647\u0627\u0626\u064A\u0629

# break \u064A\u0648\u0642\u0641 \u0627\u0644\u062D\u0644\u0642\u0629 \u2014 continue \u064A\u062A\u062E\u0637\u0649 \u0627\u0644\u062A\u0643\u0631\u0627\u0631 \u0627\u0644\u062D\u0627\u0644\u064A
for i in range(10):
    if i == 3: continue  # \u062A\u062E\u0637\u0651 \u0627\u0644\u0631\u0642\u0645 3
    if i == 6: break     # \u0623\u0648\u0642\u0641 \u0639\u0646\u062F \u0627\u0644\u0631\u0642\u0645 6
    print(i)
# \u0627\u0644\u0646\u0627\u062A\u062C: 0 1 2 4 5`,descriptionAr:"\u0627\u0644\u062D\u0644\u0642\u0627\u062A \u0641\u064A Python",descriptionEn:"Loops in Python"},{id:"javascript",code:`// for loop
for (let i = 1; i <= 5; i++) {
    console.log("Count: " + i);
}
// Count: 1 \u2026 Count: 5

// while loop
let count = 0;
while (count < 3) {
    console.log("Repeat #" + count);
    count++;
}

// break and continue
for (let i = 0; i < 10; i++) {
    if (i === 3) continue; // skip 3
    if (i === 6) break;    // stop at 6
    console.log(i);
}
// 0 1 2 4 5`,descriptionAr:"\u0627\u0644\u062D\u0644\u0642\u0627\u062A \u0641\u064A JavaScript",descriptionEn:"Loops in JavaScript"},{id:"java",code:`public class Main {
    public static void main(String[] args) {
        // for loop
        for (int i = 1; i <= 5; i++) {
            System.out.println("Count: " + i);
        }

        // while loop
        int count = 0;
        while (count < 3) {
            System.out.println("Repeat #" + count);
            count++;
        }

        // break and continue
        for (int i = 0; i < 10; i++) {
            if (i == 3) continue; // skip 3
            if (i == 6) break;    // stop at 6
            System.out.println(i);
        }
        // 0 1 2 4 5
    }
}`,descriptionAr:"\u0627\u0644\u062D\u0644\u0642\u0627\u062A \u0641\u064A Java",descriptionEn:"Loops in Java"},{id:"cpp",code:`#include <iostream>
using namespace std;

int main() {
    // for loop
    for (int i = 1; i <= 5; i++) {
        cout << "Count: " << i << endl;
    }

    // while loop
    int count = 0;
    while (count < 3) {
        cout << "Repeat #" << count << endl;
        count++;
    }

    // break and continue
    for (int i = 0; i < 10; i++) {
        if (i == 3) continue; // skip 3
        if (i == 6) break;    // stop at 6
        cout << i << endl;
    }
    // 0 1 2 4 5
    return 0;
}`,descriptionAr:"\u0627\u0644\u062D\u0644\u0642\u0627\u062A \u0641\u064A C++",descriptionEn:"Loops in C++"}]}],15:[{titleAr:"\u0627\u0644\u062F\u0648\u0627\u0644 \u0628\u0623\u0631\u0628\u0639 \u0644\u063A\u0627\u062A",titleEn:"Functions in 4 Languages",tabs:[{id:"python",code:`# \u062A\u0639\u0631\u064A\u0641 \u062F\u0627\u0644\u0629: def \u0627\u0633\u0645_\u0627\u0644\u062F\u0627\u0644\u0629(\u0627\u0644\u0645\u062F\u062E\u0644\u0627\u062A):
def greet(name):
    # \u0646\u064F\u0631\u062C\u0639 \u0646\u0635\u0627\u064B \u064A\u062D\u062A\u0648\u064A \u0639\u0644\u0649 \u0627\u0644\u0627\u0633\u0645
    return "Hello, " + name + "!"

# \u0627\u0633\u062A\u062F\u0639\u0627\u0621 \u0627\u0644\u062F\u0627\u0644\u0629 \u0645\u0631\u062A\u064A\u0646 \u0628\u0645\u062F\u062E\u0644\u0627\u062A \u0645\u062E\u062A\u0644\u0641\u0629
print(greet("Sara"))   # Hello, Sara!
print(greet("Ahmed"))  # Hello, Ahmed!

# \u062F\u0648\u0627\u0644 \u0628\u0645\u0639\u0627\u0645\u0644\u0627\u062A \u0645\u062A\u0639\u062F\u062F\u0629
def add(a, b):
    return a + b       # \u062A\u064F\u0631\u062C\u0639 \u0645\u062C\u0645\u0648\u0639 \u0627\u0644\u0639\u062F\u062F\u064A\u0646

def multiply(a, b):
    return a * b       # \u062A\u064F\u0631\u062C\u0639 \u062D\u0627\u0635\u0644 \u0627\u0644\u0636\u0631\u0628

print(add(3, 5))       # 8
print(multiply(4, 6))  # 24

# \u062F\u0627\u0644\u0629 \u0633\u0647\u0645\u064A\u0629 \u0645\u062E\u062A\u0635\u0631\u0629 (Lambda)
square = lambda n: n * n   # \u062A\u064F\u0631\u062C\u0639 \u0645\u0631\u0628\u0651\u0639 \u0627\u0644\u0639\u062F\u062F
print(square(7))            # 49`,descriptionAr:"\u0627\u0644\u062F\u0648\u0627\u0644 \u0641\u064A Python",descriptionEn:"Functions in Python"},{id:"javascript",code:`function greet(name) {
    return "Hello, " + name + "!";
}

console.log(greet("Sara"));   // Hello, Sara!
console.log(greet("Ahmed"));  // Hello, Ahmed!

function add(a, b) { return a + b; }
function multiply(a, b) { return a * b; }

console.log(add(3, 5));       // 8
console.log(multiply(4, 6));  // 24

// Arrow function
const square = (n) => n * n;
console.log(square(7));       // 49`,descriptionAr:"\u0627\u0644\u062F\u0648\u0627\u0644 \u0641\u064A JavaScript",descriptionEn:"Functions in JavaScript"},{id:"java",code:`public class Main {
    static String greet(String name) {
        return "Hello, " + name + "!";
    }

    static int add(int a, int b) { return a + b; }
    static int multiply(int a, int b) { return a * b; }

    // No true lambda for standalone \u2014 use a method
    static int square(int n) { return n * n; }

    public static void main(String[] args) {
        System.out.println(greet("Sara"));    // Hello, Sara!
        System.out.println(greet("Ahmed"));   // Hello, Ahmed!
        System.out.println(add(3, 5));        // 8
        System.out.println(multiply(4, 6));   // 24
        System.out.println(square(7));        // 49
    }
}`,descriptionAr:"\u0627\u0644\u062F\u0648\u0627\u0644 \u0641\u064A Java",descriptionEn:"Functions in Java"},{id:"cpp",code:`#include <iostream>
#include <string>
using namespace std;

string greet(string name) {
    return "Hello, " + name + "!";
}

int add(int a, int b) { return a + b; }
int multiply(int a, int b) { return a * b; }
int square(int n) { return n * n; }

int main() {
    cout << greet("Sara") << endl;    // Hello, Sara!
    cout << greet("Ahmed") << endl;   // Hello, Ahmed!
    cout << add(3, 5) << endl;        // 8
    cout << multiply(4, 6) << endl;   // 24
    cout << square(7) << endl;        // 49
    return 0;
}`,descriptionAr:"\u0627\u0644\u062F\u0648\u0627\u0644 \u0641\u064A C++",descriptionEn:"Functions in C++"}]}],16:[{titleAr:"\u0627\u0644\u0646\u0637\u0627\u0642 \u0628\u0623\u0631\u0628\u0639 \u0644\u063A\u0627\u062A",titleEn:"Scope in 4 Languages",tabs:[{id:"python",code:`global_var = "I'm global"

def show_scope():
    local_var = "I'm local"
    print(global_var)  # works
    print(local_var)   # works

show_scope()
print(global_var)      # works
# print(local_var)     # ERROR: name not defined`,descriptionAr:"\u0627\u0644\u0646\u0637\u0627\u0642 \u0641\u064A Python",descriptionEn:"Scope in Python"},{id:"javascript",code:`let globalVar = "I'm global";

function showScope() {
    let localVar = "I'm local";
    console.log(globalVar); // works
    console.log(localVar);  // works
}

showScope();
console.log(globalVar);     // works
// console.log(localVar);   // ERROR!`,descriptionAr:"\u0627\u0644\u0646\u0637\u0627\u0642 \u0641\u064A JavaScript",descriptionEn:"Scope in JavaScript"},{id:"java",code:`public class Main {
    static String globalVar = "I'm global"; // class field

    static void showScope() {
        String localVar = "I'm local";
        System.out.println(globalVar); // works
        System.out.println(localVar);  // works
    }

    public static void main(String[] args) {
        showScope();
        System.out.println(globalVar); // works
        // localVar is not accessible here
    }
}`,descriptionAr:"\u0627\u0644\u0646\u0637\u0627\u0642 \u0641\u064A Java",descriptionEn:"Scope in Java"},{id:"cpp",code:`#include <iostream>
#include <string>
using namespace std;

string globalVar = "I'm global";

void showScope() {
    string localVar = "I'm local";
    cout << globalVar << endl; // works
    cout << localVar << endl;  // works
}

int main() {
    showScope();
    cout << globalVar << endl; // works
    // localVar is not accessible here
    return 0;
}`,descriptionAr:"\u0627\u0644\u0646\u0637\u0627\u0642 \u0641\u064A C++",descriptionEn:"Scope in C++"}]}],17:[{titleAr:"\u0627\u0644\u062A\u0643\u0631\u0627\u0631 \u0627\u0644\u0630\u0627\u062A\u064A \u0628\u0623\u0631\u0628\u0639 \u0644\u063A\u0627\u062A",titleEn:"Recursion in 4 Languages",tabs:[{id:"python",code:`def factorial(n):
    if n <= 1:
        return 1          # Base case
    return n * factorial(n - 1)  # Recursive call

print(factorial(5))  # 120
print(factorial(4))  # 24
print(factorial(1))  # 1`,descriptionAr:"\u0627\u0644\u0645\u0636\u0631\u0648\u0628 \u0628\u0627\u0644\u062A\u0643\u0631\u0627\u0631 \u0627\u0644\u0630\u0627\u062A\u064A \u0641\u064A Python",descriptionEn:"Factorial using recursion in Python"},{id:"javascript",code:`function factorial(n) {
    if (n <= 1) return 1; // Base case
    return n * factorial(n - 1); // Recursive call
}

console.log(factorial(5)); // 120
console.log(factorial(4)); // 24
console.log(factorial(1)); // 1`,descriptionAr:"\u0627\u0644\u0645\u0636\u0631\u0648\u0628 \u0628\u0627\u0644\u062A\u0643\u0631\u0627\u0631 \u0627\u0644\u0630\u0627\u062A\u064A \u0641\u064A JavaScript",descriptionEn:"Factorial using recursion in JavaScript"},{id:"java",code:`public class Main {
    static int factorial(int n) {
        if (n <= 1) return 1;         // Base case
        return n * factorial(n - 1);  // Recursive call
    }

    public static void main(String[] args) {
        System.out.println(factorial(5)); // 120
        System.out.println(factorial(4)); // 24
        System.out.println(factorial(1)); // 1
    }
}`,descriptionAr:"\u0627\u0644\u0645\u0636\u0631\u0648\u0628 \u0628\u0627\u0644\u062A\u0643\u0631\u0627\u0631 \u0627\u0644\u0630\u0627\u062A\u064A \u0641\u064A Java",descriptionEn:"Factorial using recursion in Java"},{id:"cpp",code:`#include <iostream>
using namespace std;

int factorial(int n) {
    if (n <= 1) return 1;         // Base case
    return n * factorial(n - 1);  // Recursive call
}

int main() {
    cout << factorial(5) << endl; // 120
    cout << factorial(4) << endl; // 24
    cout << factorial(1) << endl; // 1
    return 0;
}`,descriptionAr:"\u0627\u0644\u0645\u0636\u0631\u0648\u0628 \u0628\u0627\u0644\u062A\u0643\u0631\u0627\u0631 \u0627\u0644\u0630\u0627\u062A\u064A \u0641\u064A C++",descriptionEn:"Factorial using recursion in C++"}]}],18:[{titleAr:"\u0625\u064A\u062C\u0627\u062F \u0623\u0643\u0628\u0631 \u0631\u0642\u0645 \u0628\u0623\u0631\u0628\u0639 \u0644\u063A\u0627\u062A",titleEn:"Find the Max Number in 4 Languages",tabs:[{id:"python",code:`def find_max(numbers):
    max_val = numbers[0]
    for num in numbers:
        if num > max_val:
            max_val = num
    return max_val

nums = [3, 7, 2, 9, 1, 5]
print(find_max(nums))  # 9`,descriptionAr:"\u0625\u064A\u062C\u0627\u062F \u0623\u0643\u0628\u0631 \u0631\u0642\u0645 \u0641\u064A \u0645\u0635\u0641\u0648\u0641\u0629 \u0641\u064A Python",descriptionEn:"Find max number in array in Python"},{id:"javascript",code:`function findMax(numbers) {
    let max = numbers[0];
    for (let num of numbers) {
        if (num > max) {
            max = num;
        }
    }
    return max;
}

let nums = [3, 7, 2, 9, 1, 5];
console.log(findMax(nums)); // 9`,descriptionAr:"\u0625\u064A\u062C\u0627\u062F \u0623\u0643\u0628\u0631 \u0631\u0642\u0645 \u0641\u064A \u0645\u0635\u0641\u0648\u0641\u0629 \u0641\u064A JavaScript",descriptionEn:"Find max number in array in JavaScript"},{id:"java",code:`public class Main {
    static int findMax(int[] numbers) {
        int max = numbers[0];
        for (int num : numbers) {
            if (num > max) {
                max = num;
            }
        }
        return max;
    }

    public static void main(String[] args) {
        int[] nums = {3, 7, 2, 9, 1, 5};
        System.out.println(findMax(nums)); // 9
    }
}`,descriptionAr:"\u0625\u064A\u062C\u0627\u062F \u0623\u0643\u0628\u0631 \u0631\u0642\u0645 \u0641\u064A \u0645\u0635\u0641\u0648\u0641\u0629 \u0641\u064A Java",descriptionEn:"Find max number in array in Java"},{id:"cpp",code:`#include <iostream>
#include <vector>
using namespace std;

int findMax(vector<int> numbers) {
    int maxVal = numbers[0];
    for (int num : numbers) {
        if (num > maxVal) {
            maxVal = num;
        }
    }
    return maxVal;
}

int main() {
    vector<int> nums = {3, 7, 2, 9, 1, 5};
    cout << findMax(nums) << endl; // 9
    return 0;
}`,descriptionAr:"\u0625\u064A\u062C\u0627\u062F \u0623\u0643\u0628\u0631 \u0631\u0642\u0645 \u0641\u064A \u0645\u0635\u0641\u0648\u0641\u0629 \u0641\u064A C++",descriptionEn:"Find max number in array in C++"}]}],19:[{titleAr:"\u0627\u0644\u0628\u062A\u0627\u062A \u0648\u0627\u0644\u0628\u0627\u064A\u062A\u0627\u062A \u0628\u0623\u0631\u0628\u0639 \u0644\u063A\u0627\u062A",titleEn:"Bits & Bytes in 4 Languages",tabs:[{id:"python",code:`num = 42
# Decimal -> Binary string
print(bin(num))         # 0b101010
print(bin(num)[2:])     # 101010 (no prefix)

# Binary string -> Decimal
binary = "101010"
print(int(binary, 2))   # 42

# Bitwise operators
print(5 & 3)   # 1   (AND)
print(5 | 3)   # 7   (OR)
print(5 ^ 3)   # 6   (XOR)
print(~5)      # -6  (NOT)`,descriptionAr:"\u0627\u0644\u062A\u0639\u0627\u0645\u0644 \u0645\u0639 \u0627\u0644\u0628\u062A\u0627\u062A \u0641\u064A Python",descriptionEn:"Working with bits in Python"},{id:"javascript",code:`let num = 42;
console.log(num.toString(2));        // "101010"
console.log(parseInt("101010", 2));  // 42

// Bitwise operators
console.log(5 & 3);  // 1  (AND)
console.log(5 | 3);  // 7  (OR)
console.log(5 ^ 3);  // 6  (XOR)
console.log(~5);      // -6 (NOT)`,descriptionAr:"\u0627\u0644\u062A\u0639\u0627\u0645\u0644 \u0645\u0639 \u0627\u0644\u0628\u062A\u0627\u062A \u0641\u064A JavaScript",descriptionEn:"Working with bits in JavaScript"},{id:"java",code:`public class Main {
    public static void main(String[] args) {
        int num = 42;
        // Decimal -> Binary
        System.out.println(Integer.toBinaryString(num)); // 101010

        // Binary string -> Decimal
        int back = Integer.parseInt("101010", 2);
        System.out.println(back); // 42

        // Bitwise operators
        System.out.println(5 & 3); // 1  (AND)
        System.out.println(5 | 3); // 7  (OR)
        System.out.println(5 ^ 3); // 6  (XOR)
        System.out.println(~5);    // -6 (NOT)
    }
}`,descriptionAr:"\u0627\u0644\u062A\u0639\u0627\u0645\u0644 \u0645\u0639 \u0627\u0644\u0628\u062A\u0627\u062A \u0641\u064A Java",descriptionEn:"Working with bits in Java"},{id:"cpp",code:`#include <iostream>
#include <bitset>
using namespace std;

int main() {
    int num = 42;
    // Binary representation (8-bit)
    cout << bitset<8>(num) << endl; // 00101010

    // Bitwise operators
    cout << (5 & 3) << endl; // 1  (AND)
    cout << (5 | 3) << endl; // 7  (OR)
    cout << (5 ^ 3) << endl; // 6  (XOR)
    cout << (~5) << endl;     // -6 (NOT)
    return 0;
}`,descriptionAr:"\u0627\u0644\u062A\u0639\u0627\u0645\u0644 \u0645\u0639 \u0627\u0644\u0628\u062A\u0627\u062A \u0641\u064A C++",descriptionEn:"Working with bits in C++"}]}],20:[{titleAr:"\u062A\u062D\u0648\u064A\u0644 \u0627\u0644\u0623\u0631\u0642\u0627\u0645 \u0627\u0644\u062B\u0646\u0627\u0626\u064A\u0629 \u0628\u0623\u0631\u0628\u0639 \u0644\u063A\u0627\u062A",titleEn:"Binary Conversion in 4 Languages",tabs:[{id:"python",code:`def binary_to_decimal(binary):
    return int(binary, 2)

def decimal_to_binary(decimal):
    return bin(decimal)[2:]

print(binary_to_decimal("1010"))  # 10
print(binary_to_decimal("1111"))  # 15
print(decimal_to_binary(10))      # 1010
print(decimal_to_binary(255))     # 11111111`,descriptionAr:"\u062A\u062D\u0648\u064A\u0644 \u0628\u064A\u0646 \u0627\u0644\u062B\u0646\u0627\u0626\u064A \u0648\u0627\u0644\u0639\u0634\u0631\u064A \u0641\u064A Python",descriptionEn:"Convert between binary and decimal in Python"},{id:"javascript",code:`function binaryToDecimal(binary) {
    return parseInt(binary, 2);
}

function decimalToBinary(decimal) {
    return decimal.toString(2);
}

console.log(binaryToDecimal("1010")); // 10
console.log(binaryToDecimal("1111")); // 15
console.log(decimalToBinary(10));     // "1010"
console.log(decimalToBinary(255));    // "11111111"`,descriptionAr:"\u062A\u062D\u0648\u064A\u0644 \u0628\u064A\u0646 \u0627\u0644\u062B\u0646\u0627\u0626\u064A \u0648\u0627\u0644\u0639\u0634\u0631\u064A \u0641\u064A JavaScript",descriptionEn:"Convert between binary and decimal in JavaScript"},{id:"java",code:`public class Main {
    static int binaryToDecimal(String binary) {
        return Integer.parseInt(binary, 2);
    }

    static String decimalToBinary(int decimal) {
        return Integer.toBinaryString(decimal);
    }

    public static void main(String[] args) {
        System.out.println(binaryToDecimal("1010")); // 10
        System.out.println(binaryToDecimal("1111")); // 15
        System.out.println(decimalToBinary(10));      // 1010
        System.out.println(decimalToBinary(255));     // 11111111
    }
}`,descriptionAr:"\u062A\u062D\u0648\u064A\u0644 \u0628\u064A\u0646 \u0627\u0644\u062B\u0646\u0627\u0626\u064A \u0648\u0627\u0644\u0639\u0634\u0631\u064A \u0641\u064A Java",descriptionEn:"Convert between binary and decimal in Java"},{id:"cpp",code:`#include <iostream>
#include <bitset>
#include <string>
using namespace std;

int binaryToDecimal(string binary) {
    return stoi(binary, nullptr, 2);
}

string decimalToBinary(int decimal) {
    if (decimal == 0) return "0";
    string result = "";
    while (decimal > 0) {
        result = to_string(decimal % 2) + result;
        decimal /= 2;
    }
    return result;
}

int main() {
    cout << binaryToDecimal("1010") << endl; // 10
    cout << binaryToDecimal("1111") << endl; // 15
    cout << decimalToBinary(10) << endl;      // 1010
    cout << decimalToBinary(255) << endl;     // 11111111
    return 0;
}`,descriptionAr:"\u062A\u062D\u0648\u064A\u0644 \u0628\u064A\u0646 \u0627\u0644\u062B\u0646\u0627\u0626\u064A \u0648\u0627\u0644\u0639\u0634\u0631\u064A \u0641\u064A C++",descriptionEn:"Convert between binary and decimal in C++"}]}],21:[{titleAr:"\u0627\u0644\u0623\u0631\u0642\u0627\u0645 \u0627\u0644\u0633\u062F\u0627\u0633\u064A\u0629 \u0628\u0623\u0631\u0628\u0639 \u0644\u063A\u0627\u062A",titleEn:"Hexadecimal in 4 Languages",tabs:[{id:"python",code:`# Hex -> Decimal
print(int("FF", 16))   # 255
print(int("1A", 16))   # 26

# Decimal -> Hex
print(hex(255))        # 0xff
print(hex(255)[2:].upper())  # FF

# Hex literals
red   = 0xFF0000
green = 0x00FF00
blue  = 0x0000FF
print(f"Red: {red}, Green: {green}, Blue: {blue}")`,descriptionAr:"\u0627\u0644\u062A\u0639\u0627\u0645\u0644 \u0645\u0639 \u0627\u0644\u0623\u0631\u0642\u0627\u0645 \u0627\u0644\u0633\u062F\u0627\u0633\u064A\u0629 \u0641\u064A Python",descriptionEn:"Working with hexadecimal in Python"},{id:"javascript",code:`// Hex -> Decimal
console.log(parseInt("FF", 16)); // 255
console.log(parseInt("1A", 16)); // 26

// Decimal -> Hex
console.log((255).toString(16)); // "ff"
console.log((26).toString(16));  // "1a"

// Hex colors
const red   = "#FF0000";
const green = "#00FF00";
const blue  = "#0000FF";
console.log(\`Red: \${parseInt("FF",16)}, Green: 0, Blue: 0\`);`,descriptionAr:"\u0627\u0644\u062A\u0639\u0627\u0645\u0644 \u0645\u0639 \u0627\u0644\u0623\u0631\u0642\u0627\u0645 \u0627\u0644\u0633\u062F\u0627\u0633\u064A\u0629 \u0641\u064A JavaScript",descriptionEn:"Working with hexadecimal in JavaScript"},{id:"java",code:`public class Main {
    public static void main(String[] args) {
        // Hex -> Decimal
        System.out.println(Integer.parseInt("FF", 16)); // 255
        System.out.println(Integer.parseInt("1A", 16)); // 26

        // Decimal -> Hex
        System.out.println(Integer.toHexString(255));   // ff
        System.out.println(Integer.toHexString(26));    // 1a

        // Hex literal
        int red = 0xFF0000;
        System.out.println(red); // 16711680
    }
}`,descriptionAr:"\u0627\u0644\u062A\u0639\u0627\u0645\u0644 \u0645\u0639 \u0627\u0644\u0623\u0631\u0642\u0627\u0645 \u0627\u0644\u0633\u062F\u0627\u0633\u064A\u0629 \u0641\u064A Java",descriptionEn:"Working with hexadecimal in Java"},{id:"cpp",code:`#include <iostream>
#include <iomanip>
using namespace std;

int main() {
    // Decimal -> Hex output
    cout << hex << 255 << endl;  // ff
    cout << hex << 26  << endl;  // 1a

    // Hex literal -> decimal
    int val = 0xFF;
    cout << dec << val << endl;  // 255

    // Hex with uppercase
    cout << uppercase << hex << 255 << endl; // FF
    return 0;
}`,descriptionAr:"\u0627\u0644\u062A\u0639\u0627\u0645\u0644 \u0645\u0639 \u0627\u0644\u0623\u0631\u0642\u0627\u0645 \u0627\u0644\u0633\u062F\u0627\u0633\u064A\u0629 \u0641\u064A C++",descriptionEn:"Working with hexadecimal in C++"}]}],22:[{titleAr:"\u0627\u0644\u062C\u0628\u0631 \u0627\u0644\u0645\u0646\u0637\u0642\u064A \u0628\u0623\u0631\u0628\u0639 \u0644\u063A\u0627\u062A",titleEn:"Boolean Algebra in 4 Languages",tabs:[{id:"python",code:`# AND
print(True  and True)   # True
print(True  and False)  # False
print(False and False)  # False

# OR
print(True  or  False)  # True
print(False or  False)  # False

# NOT
print(not True)   # False
print(not False)  # True

# XOR (no built-in \u2014 use !=)
def xor(a, b): return a != b
print(xor(True, False))  # True
print(xor(True, True))   # False`,descriptionAr:"\u062C\u062F\u0627\u0648\u0644 \u0627\u0644\u062D\u0642\u064A\u0642\u0629 \u0641\u064A Python",descriptionEn:"Truth tables in Python"},{id:"javascript",code:`// AND
console.log(true  && true);   // true
console.log(true  && false);  // false
console.log(false && false);  // false

// OR
console.log(true  || false);  // true
console.log(false || false);  // false

// NOT
console.log(!true);   // false
console.log(!false);  // true

// XOR
const xor = (a, b) => a !== b;
console.log(xor(true, false)); // true
console.log(xor(true, true));  // false`,descriptionAr:"\u062C\u062F\u0627\u0648\u0644 \u0627\u0644\u062D\u0642\u064A\u0642\u0629 \u0641\u064A JavaScript",descriptionEn:"Truth tables in JavaScript"},{id:"java",code:`public class Main {
    public static void main(String[] args) {
        // AND
        System.out.println(true  && true);   // true
        System.out.println(true  && false);  // false
        System.out.println(false && false);  // false

        // OR
        System.out.println(true  || false);  // true
        System.out.println(false || false);  // false

        // NOT
        System.out.println(!true);   // false
        System.out.println(!false);  // true

        // XOR
        System.out.println(true  ^ false); // true
        System.out.println(true  ^ true);  // false
    }
}`,descriptionAr:"\u062C\u062F\u0627\u0648\u0644 \u0627\u0644\u062D\u0642\u064A\u0642\u0629 \u0641\u064A Java",descriptionEn:"Truth tables in Java"},{id:"cpp",code:`#include <iostream>
using namespace std;

int main() {
    // AND
    cout << (true  && true)  << endl; // 1
    cout << (true  && false) << endl; // 0
    cout << (false && false) << endl; // 0

    // OR
    cout << (true  || false) << endl; // 1
    cout << (false || false) << endl; // 0

    // NOT
    cout << (!true)  << endl; // 0
    cout << (!false) << endl; // 1

    // XOR
    cout << (true  ^ false) << endl; // 1
    cout << (true  ^ true)  << endl; // 0
    return 0;
}`,descriptionAr:"\u062C\u062F\u0627\u0648\u0644 \u0627\u0644\u062D\u0642\u064A\u0642\u0629 \u0641\u064A C++",descriptionEn:"Truth tables in C++"}]}],23:[{titleAr:"\u0646\u0638\u0627\u0645 \u062F\u0631\u062C\u0627\u062A \u0627\u0644\u0637\u0644\u0627\u0628 \u0628\u0623\u0631\u0628\u0639 \u0644\u063A\u0627\u062A",titleEn:"Student Grade System in 4 Languages",tabs:[{id:"python",code:`def get_letter_grade(score):
    if score >= 90: return "A"
    if score >= 80: return "B"
    if score >= 70: return "C"
    if score >= 60: return "D"
    return "F"

def calculate_average(grades):
    return sum(grades) / len(grades)

def print_report(student_name, grades):
    avg = calculate_average(grades)
    letter = get_letter_grade(avg)
    print("=== Student Report ===")
    print(f"Name:    {student_name}")
    print(f"Grades:  {', '.join(map(str, grades))}")
    print(f"Average: {avg:.2f}")
    print(f"Grade:   {letter}")

print_report("Sara Ahmed",  [92, 78, 85, 90, 88])
print_report("Ali Hassan",  [65, 72, 58, 70, 68])`,descriptionAr:"\u0646\u0638\u0627\u0645 \u062F\u0631\u062C\u0627\u062A \u0627\u0644\u0637\u0644\u0627\u0628 \u0641\u064A Python",descriptionEn:"Student grade system in Python"},{id:"javascript",code:`function getLetterGrade(score) {
    if (score >= 90) return "A";
    if (score >= 80) return "B";
    if (score >= 70) return "C";
    if (score >= 60) return "D";
    return "F";
}

function calculateAverage(grades) {
    return grades.reduce((s, g) => s + g, 0) / grades.length;
}

function printReport(studentName, grades) {
    const avg = calculateAverage(grades);
    console.log("=== Student Report ===");
    console.log("Name:    " + studentName);
    console.log("Grades:  " + grades.join(", "));
    console.log("Average: " + avg.toFixed(2));
    console.log("Grade:   " + getLetterGrade(avg));
}

printReport("Sara Ahmed", [92, 78, 85, 90, 88]);
printReport("Ali Hassan", [65, 72, 58, 70, 68]);`,descriptionAr:"\u0646\u0638\u0627\u0645 \u062F\u0631\u062C\u0627\u062A \u0627\u0644\u0637\u0644\u0627\u0628 \u0641\u064A JavaScript",descriptionEn:"Student grade system in JavaScript"},{id:"java",code:`public class Main {
    static String getLetterGrade(double score) {
        if (score >= 90) return "A";
        if (score >= 80) return "B";
        if (score >= 70) return "C";
        if (score >= 60) return "D";
        return "F";
    }

    static double calculateAverage(int[] grades) {
        int sum = 0;
        for (int g : grades) sum += g;
        return (double) sum / grades.length;
    }

    static void printReport(String name, int[] grades) {
        double avg = calculateAverage(grades);
        System.out.println("=== Student Report ===");
        System.out.println("Name:    " + name);
        System.out.printf("Average: %.2f%n", avg);
        System.out.println("Grade:   " + getLetterGrade(avg));
    }

    public static void main(String[] args) {
        printReport("Sara Ahmed", new int[]{92, 78, 85, 90, 88});
        printReport("Ali Hassan", new int[]{65, 72, 58, 70, 68});
    }
}`,descriptionAr:"\u0646\u0638\u0627\u0645 \u062F\u0631\u062C\u0627\u062A \u0627\u0644\u0637\u0644\u0627\u0628 \u0641\u064A Java",descriptionEn:"Student grade system in Java"},{id:"cpp",code:`#include <iostream>
#include <vector>
#include <numeric>
#include <iomanip>
using namespace std;

string getLetterGrade(double score) {
    if (score >= 90) return "A";
    if (score >= 80) return "B";
    if (score >= 70) return "C";
    if (score >= 60) return "D";
    return "F";
}

double calculateAverage(vector<int> grades) {
    return (double)accumulate(grades.begin(), grades.end(), 0) / grades.size();
}

void printReport(string name, vector<int> grades) {
    double avg = calculateAverage(grades);
    cout << "=== Student Report ===" << endl;
    cout << "Name:    " << name << endl;
    cout << fixed << setprecision(2);
    cout << "Average: " << avg << endl;
    cout << "Grade:   " << getLetterGrade(avg) << endl;
}

int main() {
    printReport("Sara Ahmed", {92, 78, 85, 90, 88});
    printReport("Ali Hassan", {65, 72, 58, 70, 68});
    return 0;
}`,descriptionAr:"\u0646\u0638\u0627\u0645 \u062F\u0631\u062C\u0627\u062A \u0627\u0644\u0637\u0644\u0627\u0628 \u0641\u064A C++",descriptionEn:"Student grade system in C++"}]}],24:[{titleAr:"\u0646\u0638\u0627\u0645 \u0628\u0646\u0643\u064A \u0628\u0633\u064A\u0637 \u0628\u0623\u0631\u0628\u0639 \u0644\u063A\u0627\u062A",titleEn:"Simple Banking System in 4 Languages",tabs:[{id:"python",code:`def create_account(owner, initial_balance=0):
    return {"owner": owner, "balance": initial_balance, "transactions": []}

def deposit(account, amount):
    if amount <= 0:
        print("Invalid amount!")
        return
    account["balance"] += amount
    account["transactions"].append(("deposit", amount))
    print(f"Deposited \${amount}. Balance: \${account['balance']}")

def withdraw(account, amount):
    if amount <= 0:
        print("Invalid amount!")
        return
    if amount > account["balance"]:
        print("Insufficient funds!")
        return
    account["balance"] -= amount
    account["transactions"].append(("withdrawal", amount))
    print(f"Withdrew \${amount}. Balance: \${account['balance']}")

def print_statement(account):
    print(f"\\n=== Account: {account['owner']} ===")
    print(f"Balance: \${account['balance']}")
    for t in account["transactions"]:
        print(f"  {t[0]}: \${t[1]}")

acc = create_account("Sara", 1000)
deposit(acc, 500)
withdraw(acc, 200)
withdraw(acc, 2000)  # Will fail
print_statement(acc)`,descriptionAr:"\u0627\u0644\u0646\u0638\u0627\u0645 \u0627\u0644\u0628\u0646\u0643\u064A \u0641\u064A Python",descriptionEn:"Banking system in Python"},{id:"javascript",code:`function createAccount(owner, initialBalance = 0) {
    return { owner, balance: initialBalance, transactions: [] };
}

function deposit(account, amount) {
    if (amount <= 0) { console.log("Invalid amount!"); return; }
    account.balance += amount;
    account.transactions.push({ type: "deposit", amount });
    console.log(\`Deposited $\${amount}. Balance: $\${account.balance}\`);
}

function withdraw(account, amount) {
    if (amount <= 0) { console.log("Invalid amount!"); return; }
    if (amount > account.balance) { console.log("Insufficient funds!"); return; }
    account.balance -= amount;
    account.transactions.push({ type: "withdrawal", amount });
    console.log(\`Withdrew $\${amount}. Balance: $\${account.balance}\`);
}

let acc = createAccount("Sara", 1000);
deposit(acc, 500);
withdraw(acc, 200);
withdraw(acc, 2000); // Will fail`,descriptionAr:"\u0627\u0644\u0646\u0638\u0627\u0645 \u0627\u0644\u0628\u0646\u0643\u064A \u0641\u064A JavaScript",descriptionEn:"Banking system in JavaScript"},{id:"java",code:`import java.util.ArrayList;

public class Main {
    static double balance = 1000;
    static ArrayList<String> transactions = new ArrayList<>();

    static void deposit(double amount) {
        if (amount <= 0) { System.out.println("Invalid!"); return; }
        balance += amount;
        transactions.add("deposit: $" + amount);
        System.out.printf("Deposited $%.0f. Balance: $%.0f%n", amount, balance);
    }

    static void withdraw(double amount) {
        if (amount <= 0) { System.out.println("Invalid!"); return; }
        if (amount > balance) { System.out.println("Insufficient funds!"); return; }
        balance -= amount;
        transactions.add("withdrawal: $" + amount);
        System.out.printf("Withdrew $%.0f. Balance: $%.0f%n", amount, balance);
    }

    public static void main(String[] args) {
        deposit(500);
        withdraw(200);
        withdraw(2000); // Will fail
        System.out.println("Transactions: " + transactions);
    }
}`,descriptionAr:"\u0627\u0644\u0646\u0638\u0627\u0645 \u0627\u0644\u0628\u0646\u0643\u064A \u0641\u064A Java",descriptionEn:"Banking system in Java"},{id:"cpp",code:`#include <iostream>
#include <vector>
#include <string>
using namespace std;

double balance = 1000;
vector<string> transactions;

void deposit(double amount) {
    if (amount <= 0) { cout << "Invalid!" << endl; return; }
    balance += amount;
    transactions.push_back("deposit: $" + to_string((int)amount));
    cout << "Deposited $" << amount << ". Balance: $" << balance << endl;
}

void withdraw(double amount) {
    if (amount <= 0) { cout << "Invalid!" << endl; return; }
    if (amount > balance) { cout << "Insufficient funds!" << endl; return; }
    balance -= amount;
    transactions.push_back("withdrawal: $" + to_string((int)amount));
    cout << "Withdrew $" << amount << ". Balance: $" << balance << endl;
}

int main() {
    deposit(500);
    withdraw(200);
    withdraw(2000); // Will fail
    cout << "Final balance: $" << balance << endl;
    return 0;
}`,descriptionAr:"\u0627\u0644\u0646\u0638\u0627\u0645 \u0627\u0644\u0628\u0646\u0643\u064A \u0641\u064A C++",descriptionEn:"Banking system in C++"}]}]};var p=[{id:1,part:1,partTitleAr:"\u0627\u0644\u0628\u062F\u0627\u064A\u0629",partTitleEn:"Getting Started",titleAr:"\u0643\u064A\u0641 \u062A\u0639\u0645\u0644 \u0647\u0630\u0647 \u0627\u0644\u062F\u0648\u0631\u0629\u061F",titleEn:"How This Course Works",descriptionAr:"\u062A\u0639\u0631\u0641 \u0639\u0644\u0649 \u0647\u064A\u0643\u0644 \u0627\u0644\u062F\u0648\u0631\u0629 \u0627\u0644\u062A\u062F\u0631\u064A\u0628\u064A\u0629 \u0648\u0645\u0627 \u0633\u062A\u062A\u0639\u0644\u0645\u0647 \u0641\u064A \u0643\u0644 \u0642\u0633\u0645\u060C \u0648\u0643\u064A\u0641 \u062A\u0633\u062A\u0641\u064A\u062F \u0645\u0646 \u0627\u0644\u0645\u062D\u062A\u0648\u0649 \u0628\u0623\u0641\u0636\u0644 \u0637\u0631\u064A\u0642\u0629 \u0645\u0645\u0643\u0646\u0629.",descriptionEn:"Learn how this course is structured, what you'll cover in each section, and how to get the most out of the learning experience.",estimatedTime:"10 min",level:"beginner",icon:"\u{1F3AF}",color:"#58a6ff",conceptsAr:["\u0647\u064A\u0643\u0644 \u0627\u0644\u062F\u0648\u0631\u0629","\u0637\u0631\u064A\u0642\u0629 \u0627\u0644\u062A\u0639\u0644\u0645","\u0627\u0644\u0623\u0647\u062F\u0627\u0641","\u0627\u0644\u0623\u062F\u0648\u0627\u062A \u0627\u0644\u0645\u0637\u0644\u0648\u0628\u0629"],conceptsEn:["Course structure","Learning approach","Goals","Required tools"],conceptDescriptionsAr:["\u0627\u0644\u062F\u0648\u0631\u0629 \u0645\u0642\u0633\u0645\u0629 \u0625\u0644\u0649 8 \u0623\u062C\u0632\u0627\u0621 \u062A\u0628\u062F\u0623 \u0645\u0646 \u0623\u0633\u0627\u0633\u064A\u0627\u062A \u0627\u0644\u0628\u0631\u0645\u062C\u0629 \u0648\u062A\u0635\u0644 \u0625\u0644\u0649 \u0645\u0634\u0627\u0631\u064A\u0639 \u062A\u0637\u0628\u064A\u0642\u064A\u0629 \u0645\u062A\u0643\u0627\u0645\u0644\u0629.","\u0643\u0644 \u0642\u0633\u0645 \u064A\u062C\u0645\u0639 \u0628\u064A\u0646 \u0627\u0644\u0634\u0631\u062D \u0627\u0644\u0646\u0638\u0631\u064A \u0648\u0627\u0644\u0623\u0645\u062B\u0644\u0629 \u0627\u0644\u0639\u0645\u0644\u064A\u0629 \u0644\u062A\u0639\u0632\u064A\u0632 \u0627\u0644\u0641\u0647\u0645 \u0648\u062A\u062B\u0628\u064A\u062A \u0627\u0644\u0645\u0639\u0644\u0648\u0645\u0627\u062A.","\u0627\u0644\u0647\u062F\u0641 \u0647\u0648 \u0628\u0646\u0627\u0621 \u0623\u0633\u0627\u0633 \u0628\u0631\u0645\u062C\u064A \u0645\u062A\u064A\u0646 \u064A\u064F\u0645\u0643\u0651\u0646\u0643 \u0645\u0646 \u0627\u0644\u0627\u0646\u062A\u0642\u0627\u0644 \u0628\u062B\u0642\u0629 \u0625\u0644\u0649 \u0644\u063A\u0627\u062A \u0648\u062A\u062E\u0635\u0635\u0627\u062A \u0623\u0643\u062B\u0631 \u062A\u0642\u062F\u0645\u064B\u0627.","\u0644\u0627 \u062A\u062D\u062A\u0627\u062C \u0625\u0644\u0649 \u062A\u062B\u0628\u064A\u062A \u0623\u064A \u0628\u0631\u0646\u0627\u0645\u062C \u2014 \u0645\u062A\u0635\u0641\u062D \u0627\u0644\u0648\u064A\u0628 \u0648\u062D\u062F\u0647 \u064A\u0643\u0641\u064A \u0644\u0644\u0628\u062F\u0621 \u0641\u0648\u0631\u064B\u0627."],conceptDescriptionsEn:["The course is divided into 8 parts, starting from programming basics and building up to complete hands-on projects.","Each section combines theory and practical examples to reinforce understanding and retention.","The goal is to build a solid programming foundation so you can confidently move on to more advanced languages and specializations.","No software installation needed \u2014 a web browser alone is enough to get started right away."],diagramType:"course-map",codeExamples:[],editorLinks:[],keyPointsAr:["\u0627\u0644\u062F\u0648\u0631\u0629 \u0645\u0642\u0633\u0645\u0629 \u0625\u0644\u0649 8 \u0623\u062C\u0632\u0627\u0621 \u0631\u0626\u064A\u0633\u064A\u0629 \u062A\u063A\u0637\u064A \u0623\u0633\u0627\u0633\u064A\u0627\u062A \u0627\u0644\u0628\u0631\u0645\u062C\u0629","\u0643\u0644 \u0642\u0633\u0645 \u064A\u062D\u062A\u0648\u064A \u0639\u0644\u0649 \u0634\u0631\u062D \u0646\u0638\u0631\u064A \u0648\u0623\u0645\u062B\u0644\u0629 \u0639\u0645\u0644\u064A\u0629","\u064A\u0645\u0643\u0646\u0643 \u062A\u062C\u0631\u0628\u0629 \u0627\u0644\u0643\u0648\u062F \u0645\u0628\u0627\u0634\u0631\u0629 \u0645\u0646 \u062E\u0644\u0627\u0644 \u0627\u0644\u0631\u0648\u0627\u0628\u0637 \u0627\u0644\u0645\u062A\u0648\u0641\u0631\u0629","\u0627\u0644\u062F\u0648\u0631\u0629 \u0645\u0646\u0627\u0633\u0628\u0629 \u0644\u0644\u0645\u0628\u062A\u062F\u0626\u064A\u0646 \u062A\u0645\u0627\u0645\u064B\u0627 \u0628\u062F\u0648\u0646 \u062E\u0644\u0641\u064A\u0629 \u0645\u0633\u0628\u0642\u0629"],keyPointsEn:["The course is split into 8 parts covering programming fundamentals","Each section has theory explanations and practical examples","You can try code directly through the provided online editor links","The course is suitable for absolute beginners with no prior background"],quiz:[{questionAr:"\u0643\u0645 \u0639\u062F\u062F \u0627\u0644\u0623\u062C\u0632\u0627\u0621 \u0627\u0644\u0631\u0626\u064A\u0633\u064A\u0629 \u0641\u064A \u0647\u0630\u0647 \u0627\u0644\u062F\u0648\u0631\u0629\u061F",questionEn:"How many main parts does this course have?",options:["5","6","8","10"],correctIndex:2,explanationAr:"\u0627\u0644\u062F\u0648\u0631\u0629 \u0645\u0642\u0633\u0645\u0629 \u0625\u0644\u0649 8 \u0623\u062C\u0632\u0627\u0621 \u062A\u0628\u062F\u0623 \u0645\u0646 \u0627\u0644\u0623\u0633\u0627\u0633\u064A\u0627\u062A \u0648\u062A\u0635\u0644 \u0625\u0644\u0649 \u0627\u0644\u0645\u0634\u0627\u0631\u064A\u0639 \u0627\u0644\u062A\u0637\u0628\u064A\u0642\u064A\u0629.",explanationEn:"The course is divided into 8 parts, from basics to applied projects."},{questionAr:"\u0647\u0644 \u062A\u062D\u062A\u0627\u062C \u0625\u0644\u0649 \u062A\u062B\u0628\u064A\u062A \u0628\u0631\u0627\u0645\u062C \u0644\u0628\u062F\u0621 \u0647\u0630\u0647 \u0627\u0644\u062F\u0648\u0631\u0629\u061F",questionEn:"Do you need to install software to start this course?",options:["\u0646\u0639\u0645 / Yes","\u0644\u0627 / No","\u0631\u0628\u0645\u0627 / Maybe","\u0623\u062D\u064A\u0627\u0646\u0627\u064B / Sometimes"],correctIndex:1,explanationAr:"\u064A\u0643\u0641\u064A \u0645\u062A\u0635\u0641\u062D \u0627\u0644\u0648\u064A\u0628 \u2014 \u0644\u0627 \u062A\u062D\u062A\u0627\u062C \u0625\u0644\u0649 \u062A\u062B\u0628\u064A\u062A \u0623\u064A \u0634\u064A\u0621.",explanationEn:"A web browser is enough \u2014 no installation needed."}]},{id:2,part:1,partTitleAr:"\u0627\u0644\u0628\u062F\u0627\u064A\u0629",partTitleEn:"Getting Started",titleAr:"\u0645\u0627 \u0647\u064A \u0627\u0644\u0628\u0631\u0645\u062C\u0629 \u062D\u0642\u064B\u0627\u061F",titleEn:"What Is Programming Really?",descriptionAr:"\u0627\u0643\u062A\u0634\u0641 \u0645\u0627 \u062A\u0639\u0646\u064A\u0647 \u0627\u0644\u0628\u0631\u0645\u062C\u0629 \u0641\u0639\u0644\u064B\u0627 \u2014 \u0643\u064A\u0641 \u062A\u062A\u062D\u062F\u062B \u0645\u0639 \u0627\u0644\u062D\u0627\u0633\u0648\u0628 \u0648\u062A\u0639\u0637\u064A\u0647 \u062A\u0639\u0644\u064A\u0645\u0627\u062A \u0644\u062D\u0644 \u0627\u0644\u0645\u0634\u0643\u0644\u0627\u062A.",descriptionEn:"Discover what programming really means \u2014 how you communicate with a computer and give it instructions to solve problems.",estimatedTime:"15 min",level:"beginner",icon:"\u{1F4A1}",color:"#d29922",conceptsAr:["\u0645\u0627 \u0647\u064A \u0627\u0644\u0628\u0631\u0645\u062C\u0629","\u0644\u0645\u0627\u0630\u0627 \u0646\u062A\u0639\u0644\u0645 \u0627\u0644\u0628\u0631\u0645\u062C\u0629","\u0643\u064A\u0641 \u064A\u0641\u0643\u0631 \u0627\u0644\u062D\u0627\u0633\u0648\u0628","\u0627\u0644\u062E\u0648\u0627\u0631\u0632\u0645\u064A\u0629"],conceptsEn:["What is programming","Why learn to code","How computers think","Algorithm"],conceptDescriptionsAr:["\u0627\u0644\u0628\u0631\u0645\u062C\u0629 \u0647\u064A \u0643\u062A\u0627\u0628\u0629 \u062A\u0639\u0644\u064A\u0645\u0627\u062A \u062F\u0642\u064A\u0642\u0629 \u0644\u0644\u062D\u0627\u0633\u0648\u0628 \u0644\u0623\u062F\u0627\u0621 \u0645\u0647\u0645\u0629 \u0645\u0639\u064A\u0646\u0629\u060C \u0645\u062B\u0644\u0645\u0627 \u062A\u0643\u062A\u0628 \u0648\u0635\u0641\u0629 \u0637\u0628\u062E \u062E\u0637\u0648\u0629 \u0628\u062E\u0637\u0648\u0629.","\u0627\u0644\u0628\u0631\u0645\u062C\u0629 \u062A\u0641\u062A\u062D \u0623\u0628\u0648\u0627\u0628 \u0627\u0644\u062A\u0648\u0638\u064A\u0641 \u0648\u0627\u0644\u0625\u0628\u062F\u0627\u0639 \u0648\u0628\u0646\u0627\u0621 \u0627\u0644\u0645\u0646\u062A\u062C\u0627\u062A\u060C \u0648\u062A\u064F\u0633\u062A\u062E\u062F\u0645 \u0641\u064A \u0643\u0644 \u0645\u062C\u0627\u0644 \u0645\u0646 \u0627\u0644\u0637\u0628 \u0625\u0644\u0649 \u0627\u0644\u0641\u0636\u0627\u0621.","\u0627\u0644\u062D\u0627\u0633\u0648\u0628 \u064A\u064F\u0646\u0641\u0651\u0630 \u0627\u0644\u062A\u0639\u0644\u064A\u0645\u0627\u062A \u0628\u0627\u0644\u062A\u0631\u062A\u064A\u0628 \u0627\u0644\u062D\u0631\u0641\u064A \u062F\u0648\u0646 \u062A\u0641\u0633\u064A\u0631 \u2014 \u0644\u0630\u0627 \u064A\u062C\u0628 \u0623\u0646 \u062A\u0643\u0648\u0646 \u0627\u0644\u062A\u0639\u0644\u064A\u0645\u0627\u062A \u0648\u0627\u0636\u062D\u0629 \u062A\u0645\u0627\u0645\u064B\u0627.","\u0627\u0644\u062E\u0648\u0627\u0631\u0632\u0645\u064A\u0629 \u0647\u064A \u0633\u0644\u0633\u0644\u0629 \u062E\u0637\u0648\u0627\u062A \u0645\u0646\u0637\u0642\u064A\u0629 \u0644\u062D\u0644 \u0645\u0634\u0643\u0644\u0629\u060C \u0643\u062E\u0637\u0648\u0627\u062A \u0627\u0644\u0628\u062D\u062B \u0639\u0646 \u0643\u0644\u0645\u0629 \u0641\u064A \u0642\u0627\u0645\u0648\u0633."],conceptDescriptionsEn:["Programming is writing precise instructions for a computer to perform a task \u2014 like writing a recipe step by step.","Coding opens doors to jobs, creativity, and product building, and is used in every field from medicine to space exploration.","Computers execute instructions in exact order with no interpretation \u2014 so instructions must be completely unambiguous.","An algorithm is a logical sequence of steps to solve a problem, like the steps to look up a word in a dictionary."],diagramType:"human-computer",codeExamples:[],editorLinks:[],keyPointsAr:["\u0627\u0644\u0628\u0631\u0645\u062C\u0629 \u0647\u064A \u0625\u0639\u0637\u0627\u0621 \u062A\u0639\u0644\u064A\u0645\u0627\u062A \u062F\u0642\u064A\u0642\u0629 \u0644\u0644\u062D\u0627\u0633\u0648\u0628 \u062E\u0637\u0648\u0629 \u0628\u062E\u0637\u0648\u0629","\u0627\u0644\u062D\u0627\u0633\u0648\u0628 \u064A\u0641\u0647\u0645 \u0641\u0642\u0637 \u0627\u0644\u062A\u0639\u0644\u064A\u0645\u0627\u062A \u0627\u0644\u0648\u0627\u0636\u062D\u0629 \u0648\u0627\u0644\u0645\u062D\u062F\u062F\u0629","\u0627\u0644\u062E\u0648\u0627\u0631\u0632\u0645\u064A\u0629 \u0647\u064A \u0645\u062C\u0645\u0648\u0639\u0629 \u062E\u0637\u0648\u0627\u062A \u0644\u062D\u0644 \u0645\u0634\u0643\u0644\u0629 \u0645\u0639\u064A\u0646\u0629","\u0627\u0644\u0628\u0631\u0645\u062C\u0629 \u062A\u064F\u0633\u062A\u062E\u062F\u0645 \u0641\u064A \u0643\u0644 \u0645\u0643\u0627\u0646: \u0627\u0644\u062A\u0637\u0628\u064A\u0642\u0627\u062A\u060C \u0627\u0644\u0645\u0648\u0627\u0642\u0639\u060C \u0627\u0644\u0623\u0644\u0639\u0627\u0628\u060C \u0648\u0627\u0644\u0630\u0643\u0627\u0621 \u0627\u0644\u0627\u0635\u0637\u0646\u0627\u0639\u064A"],keyPointsEn:["Programming is giving precise step-by-step instructions to a computer","Computers only understand clear and specific instructions","An algorithm is a set of steps to solve a specific problem","Programming is used everywhere: apps, websites, games, and AI"],quiz:[{questionAr:"\u0645\u0627 \u062A\u0639\u0631\u064A\u0641 \u0627\u0644\u0628\u0631\u0645\u062C\u0629\u061F",questionEn:"What is programming?",options:["\u062A\u0635\u0645\u064A\u0645 \u0648\u0627\u062C\u0647\u0627\u062A / Designing interfaces","\u0625\u0639\u0637\u0627\u0621 \u062A\u0639\u0644\u064A\u0645\u0627\u062A \u062F\u0642\u064A\u0642\u0629 \u0644\u0644\u062D\u0627\u0633\u0648\u0628 / Giving precise instructions to a computer","\u0627\u0633\u062A\u062E\u062F\u0627\u0645 \u0627\u0644\u0625\u0646\u062A\u0631\u0646\u062A / Using the internet","\u062A\u0635\u0644\u064A\u062D \u0627\u0644\u0623\u0639\u0637\u0627\u0644 / Fixing hardware"],correctIndex:1,explanationAr:"\u0627\u0644\u0628\u0631\u0645\u062C\u0629 \u0647\u064A \u0643\u062A\u0627\u0628\u0629 \u062A\u0639\u0644\u064A\u0645\u0627\u062A \u062F\u0642\u064A\u0642\u0629 \u0644\u0644\u062D\u0627\u0633\u0648\u0628 \u0644\u0623\u062F\u0627\u0621 \u0645\u0647\u0645\u0629 \u0645\u062D\u062F\u062F\u0629.",explanationEn:"Programming is writing precise instructions for a computer to perform a specific task."},{questionAr:"\u0645\u0627 \u0647\u064A \u0627\u0644\u062E\u0648\u0627\u0631\u0632\u0645\u064A\u0629\u061F",questionEn:"What is an algorithm?",options:["\u0644\u063A\u0629 \u0628\u0631\u0645\u062C\u0629 / A programming language","\u0633\u0644\u0633\u0644\u0629 \u062E\u0637\u0648\u0627\u062A \u0645\u0646\u0637\u0642\u064A\u0629 \u0644\u062D\u0644 \u0645\u0634\u0643\u0644\u0629 / A logical sequence of steps to solve a problem","\u0628\u0631\u0646\u0627\u0645\u062C \u062D\u0627\u0633\u0648\u0628\u064A / A computer program","\u0634\u0627\u0634\u0629 \u0639\u0631\u0636 / A display screen"],correctIndex:1,explanationAr:"\u0627\u0644\u062E\u0648\u0627\u0631\u0632\u0645\u064A\u0629 \u0647\u064A \u0633\u0644\u0633\u0644\u0629 \u062E\u0637\u0648\u0627\u062A \u0645\u0646\u0637\u0642\u064A\u0629 \u0644\u062D\u0644 \u0645\u0634\u0643\u0644\u0629 \u0645\u0639\u064A\u0646\u0629.",explanationEn:"An algorithm is a logical sequence of steps to solve a specific problem."}],challenges:[{titleAr:"\u062A\u062D\u062F\u064A: \u0635\u0641 \u062E\u0648\u0627\u0631\u0632\u0645\u064A\u0629",titleEn:"Challenge: Describe an Algorithm",taskAr:"\u0627\u0643\u062A\u0628 \u062E\u0637\u0648\u0627\u062A \u062E\u0648\u0627\u0631\u0632\u0645\u064A\u0629 \u0644\u0639\u0645\u0644 \u0643\u0648\u0628 \u0634\u0627\u064A (\u0628\u0627\u0644\u0643\u0644\u0627\u0645 \u0627\u0644\u0639\u0627\u062F\u064A\u060C \u0644\u0627 \u062A\u062D\u062A\u0627\u062C \u0643\u0648\u062F).",taskEn:"Write the steps of an algorithm to make a cup of tea (plain language, no code needed).",hintAr:"\u0641\u0643\u0651\u0631: \u0645\u0627 \u0627\u0644\u0645\u062F\u062E\u0644\u0627\u062A\u061F \u0645\u0627 \u0627\u0644\u062E\u0637\u0648\u0627\u062A\u061F \u0645\u0627 \u0627\u0644\u0646\u062A\u064A\u062C\u0629\u061F",hintEn:"Think: What are the inputs? What are the steps? What is the result?",solutionPython:`# \u062E\u0648\u0627\u0631\u0632\u0645\u064A\u0629 \u0639\u0645\u0644 \u0643\u0648\u0628 \u0634\u0627\u064A:
# 1. \u0627\u063A\u0644\u0650 \u0627\u0644\u0645\u0627\u0621
# 2. \u0636\u0639 \u0643\u064A\u0633 \u0627\u0644\u0634\u0627\u064A \u0641\u064A \u0627\u0644\u0643\u0648\u0628
# 3. \u0635\u0628\u0651 \u0627\u0644\u0645\u0627\u0621 \u0627\u0644\u0633\u0627\u062E\u0646
# 4. \u0627\u0646\u062A\u0638\u0631 3 \u062F\u0642\u0627\u0626\u0642
# 5. \u0623\u0632\u0644 \u0643\u064A\u0633 \u0627\u0644\u0634\u0627\u064A
# 6. \u0623\u0636\u0641 \u0627\u0644\u0633\u0643\u0631 \u062D\u0633\u0628 \u0627\u0644\u0631\u063A\u0628\u0629
print("\u0627\u0644\u0634\u0627\u064A \u062C\u0627\u0647\u0632!")`,solutionJs:`// Algorithm: Make a cup of tea
// 1. Boil water
// 2. Place tea bag in cup
// 3. Pour hot water
// 4. Wait 3 minutes
// 5. Remove tea bag
// 6. Add sugar if desired
console.log("Tea is ready!");`}]},{id:3,part:1,partTitleAr:"\u0627\u0644\u0628\u062F\u0627\u064A\u0629",partTitleEn:"Getting Started",titleAr:"\u0627\u0644\u0625\u0639\u062F\u0627\u062F \u0648\u062A\u0634\u063A\u064A\u0644 \u0623\u0648\u0644 \u0643\u0648\u062F",titleEn:"Setting Up & Running Your First Code",descriptionAr:"\u062A\u0639\u0644\u0645 \u0643\u064A\u0641 \u062A\u0647\u064A\u0626 \u0628\u064A\u0626\u0629 \u0627\u0644\u0639\u0645\u0644 \u0648\u062A\u0643\u062A\u0628 \u0648\u062A\u0634\u063A\u0651\u0644 \u0623\u0648\u0644 \u0628\u0631\u0646\u0627\u0645\u062C \u0644\u0643.",descriptionEn:"Learn how to set up your environment and write and run your very first program.",estimatedTime:"20 min",level:"beginner",icon:"\u{1F680}",color:"#3fb950",conceptsAr:["\u0628\u064A\u0626\u0629 \u0627\u0644\u062A\u0637\u0648\u064A\u0631","\u0627\u0644\u0645\u062D\u0631\u0631 \u0627\u0644\u0646\u0635\u064A","\u062A\u0634\u063A\u064A\u0644 \u0627\u0644\u0643\u0648\u062F","Hello World"],conceptsEn:["Development environment","Text editor","Running code","Hello World"],conceptDescriptionsAr:["\u0628\u064A\u0626\u0629 \u0627\u0644\u062A\u0637\u0648\u064A\u0631 \u0647\u064A \u0627\u0644\u0645\u0643\u0627\u0646 \u0627\u0644\u0630\u064A \u062A\u0643\u062A\u0628 \u0641\u064A\u0647 \u0648\u062A\u064F\u0634\u063A\u0651\u0644 \u0627\u0644\u0643\u0648\u062F\u060C \u0648\u062A\u0634\u0645\u0644 \u0627\u0644\u0645\u062D\u0631\u0631 \u0627\u0644\u0646\u0635\u064A \u0648\u0627\u0644\u0645\u062A\u0635\u0641\u062D \u0623\u0648 \u0627\u0644\u0645\u062D\u0637\u0629 \u0627\u0644\u0637\u0631\u0641\u064A\u0629.","\u0627\u0644\u0645\u062D\u0631\u0631 \u0627\u0644\u0646\u0635\u064A \u0643\u0640 VS Code \u064A\u064F\u0645\u064A\u0651\u0632 \u0627\u0644\u0643\u0644\u0645\u0627\u062A \u0628\u0623\u0644\u0648\u0627\u0646 \u0648\u064A\u0633\u0627\u0639\u062F\u0643 \u0639\u0644\u0649 \u0627\u0643\u062A\u0634\u0627\u0641 \u0627\u0644\u0623\u062E\u0637\u0627\u0621 \u0642\u0628\u0644 \u062A\u0634\u063A\u064A\u0644 \u0627\u0644\u0628\u0631\u0646\u0627\u0645\u062C.","\u062A\u0634\u063A\u064A\u0644 \u0627\u0644\u0643\u0648\u062F \u064A\u0639\u0646\u064A \u062A\u0633\u0644\u064A\u0645\u0647 \u0644\u0644\u062D\u0627\u0633\u0648\u0628 \u0644\u062A\u0646\u0641\u064A\u0630\u0647 \u0648\u0625\u0638\u0647\u0627\u0631 \u0646\u062A\u064A\u062C\u062A\u0647 \u0639\u0644\u0649 \u0627\u0644\u0634\u0627\u0634\u0629.","Hello World \u0647\u0648 \u0623\u0628\u0633\u0637 \u0628\u0631\u0646\u0627\u0645\u062C \u0645\u0645\u0643\u0646\u060C \u0648\u064A\u064F\u0633\u062A\u062E\u062F\u0645 \u062A\u0642\u0644\u064A\u062F\u064A\u064B\u0627 \u0644\u0644\u062A\u0623\u0643\u062F \u0623\u0646 \u0627\u0644\u0628\u064A\u0626\u0629 \u062A\u0639\u0645\u0644 \u0628\u0634\u0643\u0644 \u0635\u062D\u064A\u062D."],conceptDescriptionsEn:["A development environment is where you write and run code \u2014 it includes a text editor and a browser or terminal.","A text editor like VS Code highlights keywords with colors and helps you spot errors before running the program.","Running code means handing it to the computer to execute and display its result on the screen.","Hello World is the simplest possible program, traditionally used to confirm that your environment is working correctly."],diagramType:"setup",codeExamples:[{language:"javascript",code:'console.log("Hello, World!");',descriptionAr:"\u0623\u0648\u0644 \u0628\u0631\u0646\u0627\u0645\u062C \u2014 \u064A\u0637\u0628\u0639 \u0631\u0633\u0627\u0644\u0629 \u062A\u0631\u062D\u064A\u0628 \u0641\u064A \u0627\u0644\u0634\u0627\u0634\u0629",descriptionEn:"First program \u2014 prints a welcome message to the screen"},{language:"python",code:'print("Hello, World!")',descriptionAr:"\u0646\u0641\u0633 \u0627\u0644\u0628\u0631\u0646\u0627\u0645\u062C \u0628\u0644\u063A\u0629 \u0628\u0627\u064A\u062B\u0648\u0646",descriptionEn:"Same program in Python"}],editorLinks:[{label:"Programiz JS Editor",url:"https://www.programiz.com/javascript/online-compiler/",language:"javascript"},{label:"Programiz Python Editor",url:"https://www.programiz.com/python-programming/online-compiler/",language:"python"}],keyPointsAr:["\u064A\u0645\u0643\u0646\u0643 \u0627\u0644\u0628\u062F\u0621 \u0628\u0627\u0644\u0628\u0631\u0645\u062C\u0629 \u0628\u062F\u0648\u0646 \u062A\u062B\u0628\u064A\u062A \u0623\u064A \u0634\u064A\u0621 \u2014 \u0627\u0633\u062A\u062E\u062F\u0645 \u0627\u0644\u0645\u062D\u0631\u0631\u0627\u062A \u0627\u0644\u0625\u0644\u0643\u062A\u0631\u0648\u0646\u064A\u0629","console.log() \u0641\u064A JavaScript \u064A\u064F\u0633\u062A\u062E\u062F\u0645 \u0644\u0639\u0631\u0636 \u0627\u0644\u0646\u062A\u0627\u0626\u062C","print() \u0641\u064A Python \u062A\u0624\u062F\u064A \u0646\u0641\u0633 \u0627\u0644\u0648\u0638\u064A\u0641\u0629","Hello World \u0647\u0648 \u062A\u0642\u0644\u064A\u062F \u0642\u062F\u064A\u0645 \u0644\u0623\u0648\u0644 \u0628\u0631\u0646\u0627\u0645\u062C \u062A\u0643\u062A\u0628\u0647 \u0628\u0623\u064A \u0644\u063A\u0629"],keyPointsEn:["You can start coding without installing anything \u2014 use online editors","console.log() in JavaScript is used to display output","print() in Python does the same thing","Hello World is a classic tradition for the first program you write in any language"],quiz:[{questionAr:'\u0643\u064A\u0641 \u062A\u0637\u0628\u0639 "Hello" \u0641\u064A Python\u061F',questionEn:'How do you print "Hello" in Python?',options:['console.log("Hello")','echo("Hello")','print("Hello")','write("Hello")'],correctIndex:2,explanationAr:"\u0641\u064A Python \u0646\u0633\u062A\u062E\u062F\u0645 print() \u0644\u0637\u0628\u0627\u0639\u0629 \u0623\u064A \u0646\u0635 \u0623\u0648 \u0642\u064A\u0645\u0629.",explanationEn:"In Python we use print() to display any text or value."},{questionAr:'\u0643\u064A\u0641 \u062A\u0637\u0628\u0639 "Hello" \u0641\u064A JavaScript\u061F',questionEn:'How do you print "Hello" in JavaScript?',options:['print("Hello")','console.log("Hello")','System.out("Hello")','echo "Hello"'],correctIndex:1,explanationAr:"\u0641\u064A JavaScript \u0646\u0633\u062A\u062E\u062F\u0645 console.log() \u0644\u0637\u0628\u0627\u0639\u0629 \u0627\u0644\u0642\u064A\u0645 \u0641\u064A \u0648\u062D\u062F\u0629 \u0627\u0644\u062A\u062D\u0643\u0645.",explanationEn:"In JavaScript we use console.log() to print values to the console."}],challenges:[{titleAr:"\u062A\u062D\u062F\u064A: \u0628\u0631\u0646\u0627\u0645\u062C\u0643 \u0627\u0644\u0623\u0648\u0644",titleEn:"Challenge: Your First Program",taskAr:"\u0627\u0643\u062A\u0628 \u0628\u0631\u0646\u0627\u0645\u062C\u0627\u064B \u064A\u0637\u0628\u0639 \u0627\u0633\u0645\u0643 \u0639\u0644\u0649 \u0627\u0644\u0634\u0627\u0634\u0629.",taskEn:"Write a program that prints your name to the screen.",hintAr:"\u0627\u0633\u062A\u062E\u062F\u0645 print() \u0641\u064A Python \u0623\u0648 console.log() \u0641\u064A JavaScript",hintEn:"Use print() in Python or console.log() in JavaScript",solutionPython:'print("\u0633\u0627\u0631\u0629")  # \u0636\u0639 \u0627\u0633\u0645\u0643 \u0647\u0646\u0627',solutionJs:'console.log("Sara"); // Put your name here'}],commonMistakes:[{mistakeAr:"\u0646\u0633\u064A\u0627\u0646 \u0639\u0644\u0627\u0645\u0627\u062A \u0627\u0644\u0627\u0642\u062A\u0628\u0627\u0633 \u062D\u0648\u0644 \u0627\u0644\u0646\u0635: print(Hello)",mistakeEn:"Forgetting quotes around text: print(Hello)",fixAr:'\u0627\u0644\u0646\u0635 \u064A\u062C\u0628 \u0623\u0646 \u064A\u0643\u0648\u0646 \u0628\u064A\u0646 \u0639\u0644\u0627\u0645\u0627\u062A \u0627\u0642\u062A\u0628\u0627\u0633: print("Hello")',fixEn:'Text must be wrapped in quotes: print("Hello")'},{mistakeAr:'\u0627\u0644\u062E\u0637\u0623 \u0641\u064A \u0643\u062A\u0627\u0628\u0629 \u0627\u0644\u062F\u0627\u0644\u0629: Print("Hello") \u0628\u062D\u0631\u0641 \u0643\u0628\u064A\u0631',mistakeEn:'Wrong capitalization: Print("Hello") with capital P',fixAr:"Python \u062D\u0633\u0627\u0633\u0629 \u0644\u062D\u0627\u0644\u0629 \u0627\u0644\u0623\u062D\u0631\u0641 \u2014 \u0627\u0643\u062A\u0628 print \u0628\u0623\u062D\u0631\u0641 \u0635\u063A\u064A\u0631\u0629",fixEn:"Python is case-sensitive \u2014 write print in lowercase"}]}];var d=[{id:4,part:1,partTitleAr:"\u0627\u0644\u0628\u062F\u0627\u064A\u0629",partTitleEn:"Getting Started",titleAr:"\u0627\u0644\u062A\u0639\u0644\u064A\u0642\u0627\u062A",titleEn:"Comments",descriptionAr:"\u062A\u0639\u0644\u0645 \u0643\u064A\u0641 \u062A\u0636\u064A\u0641 \u062A\u0639\u0644\u064A\u0642\u0627\u062A \u0641\u064A \u0627\u0644\u0643\u0648\u062F \u0644\u062A\u0648\u0636\u064A\u062D \u0645\u0627 \u062A\u0641\u0639\u0644\u0647\u060C \u0648\u0647\u064A \u0645\u0647\u0645\u0629 \u0644\u0644\u0639\u0645\u0644 \u0636\u0645\u0646 \u0641\u0631\u064A\u0642 \u0623\u0648 \u0644\u0645\u0631\u0627\u062C\u0639\u0629 \u0627\u0644\u0643\u0648\u062F \u0644\u0627\u062D\u0642\u064B\u0627.",descriptionEn:"Learn how to add comments in code to explain what you're doing \u2014 vital for teamwork and future code review.",estimatedTime:"10 min",level:"beginner",icon:"\u{1F4AC}",color:"#bc8cff",conceptsAr:["\u0627\u0644\u062A\u0639\u0644\u064A\u0642 \u0627\u0644\u0633\u0637\u0631\u064A","\u0627\u0644\u062A\u0639\u0644\u064A\u0642 \u0627\u0644\u0645\u062A\u0639\u062F\u062F \u0627\u0644\u0623\u0633\u0637\u0631","\u062A\u0648\u062B\u064A\u0642 \u0627\u0644\u0643\u0648\u062F","\u0642\u0627\u0628\u0644\u064A\u0629 \u0627\u0644\u0642\u0631\u0627\u0621\u0629"],conceptsEn:["Single-line comment","Multi-line comment","Code documentation","Readability"],conceptDescriptionsAr:["\u0627\u0644\u062A\u0639\u0644\u064A\u0642 \u0627\u0644\u0633\u0637\u0631\u064A \u064A\u0628\u062F\u0623 \u0628\u0640 // \u0648\u064A\u063A\u0637\u064A \u0633\u0637\u0631\u064B\u0627 \u0648\u0627\u062D\u062F\u064B\u0627 \u0641\u0642\u0637\u060C \u0648\u064A\u064F\u0633\u062A\u062E\u062F\u0645 \u0644\u0634\u0631\u062D \u0633\u0631\u064A\u0639 \u0644\u0644\u0633\u0637\u0631 \u0627\u0644\u0645\u062C\u0627\u0648\u0631.","\u0627\u0644\u062A\u0639\u0644\u064A\u0642 \u0627\u0644\u0645\u062A\u0639\u062F\u062F \u0627\u0644\u0623\u0633\u0637\u0631 \u064A\u064F\u0643\u062A\u0628 \u0628\u064A\u0646 /* \u0648 */ \u0648\u064A\u064F\u0633\u062A\u062E\u062F\u0645 \u0644\u0634\u0631\u062D \u0645\u0642\u0627\u0637\u0639 \u0643\u0628\u064A\u0631\u0629 \u0623\u0648 \u0625\u062E\u0641\u0627\u0621 \u0643\u0648\u062F \u0645\u0624\u0642\u062A\u064B\u0627.","\u062A\u0648\u062B\u064A\u0642 \u0627\u0644\u0643\u0648\u062F \u064A\u0639\u0646\u064A \u0643\u062A\u0627\u0628\u0629 \u062A\u0639\u0644\u064A\u0642\u0627\u062A \u062A\u0634\u0631\u062D \u0627\u0644\u063A\u0631\u0636 \u0645\u0646 \u0627\u0644\u062F\u0648\u0627\u0644 \u0648\u0627\u0644\u0645\u062A\u063A\u064A\u0631\u0627\u062A \u0644\u0645\u0633\u0627\u0639\u062F\u0629 \u0627\u0644\u0645\u0637\u0648\u0631\u064A\u0646 \u0627\u0644\u0622\u062E\u0631\u064A\u0646.","\u0627\u0644\u0643\u0648\u062F \u0627\u0644\u062C\u064A\u062F \u064A\u0643\u0648\u0646 \u0648\u0627\u0636\u062D\u064B\u0627 \u0628\u0646\u0641\u0633\u0647 \u0644\u0643\u0646 \u0627\u0644\u062A\u0639\u0644\u064A\u0642\u0627\u062A \u062A\u064F\u0633\u0627\u0639\u062F \u0639\u0646\u062F \u0648\u062C\u0648\u062F \u0645\u0646\u0637\u0642 \u0645\u0639\u0642\u062F \u0623\u0648 \u0642\u0631\u0627\u0631\u0627\u062A \u063A\u064A\u0631 \u0648\u0627\u0636\u062D\u0629."],conceptDescriptionsEn:["A single-line comment starts with // and covers one line only, used for a quick explanation next to that line.","A multi-line comment is written between /* and */ and is used to explain large sections or temporarily hide code.","Code documentation means writing comments that explain the purpose of functions and variables to help other developers.","Good code is self-explanatory, but comments help when logic is complex or decisions are not immediately obvious."],diagramType:"comments",codeExamples:[{language:"javascript",code:`// This is a single-line comment

/* This is a
   multi-line comment */

let name = "Sara"; // inline comment
console.log(name);`,descriptionAr:"\u0623\u0646\u0648\u0627\u0639 \u0627\u0644\u062A\u0639\u0644\u064A\u0642\u0627\u062A \u0641\u064A JavaScript",descriptionEn:"Types of comments in JavaScript"}],editorLinks:[{label:"Programiz JS Editor",url:"https://www.programiz.com/javascript/online-compiler/",language:"javascript"}],keyPointsAr:["\u0627\u0644\u062A\u0639\u0644\u064A\u0642\u0627\u062A \u0644\u0627 \u064A\u0631\u0627\u0647\u0627 \u0627\u0644\u062D\u0627\u0633\u0648\u0628 \u0648\u0644\u0627 \u062A\u0624\u062B\u0631 \u0639\u0644\u0649 \u062A\u0646\u0641\u064A\u0630 \u0627\u0644\u0628\u0631\u0646\u0627\u0645\u062C","// \u0644\u0644\u062A\u0639\u0644\u064A\u0642 \u0639\u0644\u0649 \u0633\u0637\u0631 \u0648\u0627\u062D\u062F \u0641\u064A JS \u0648 Python \u0648 C++","/* */ \u0644\u0644\u062A\u0639\u0644\u064A\u0642 \u0639\u0644\u0649 \u0639\u062F\u0629 \u0623\u0633\u0637\u0631","\u0627\u0644\u062A\u0639\u0644\u064A\u0642\u0627\u062A \u0627\u0644\u062C\u064A\u062F\u0629 \u062A\u062C\u0639\u0644 \u0627\u0644\u0643\u0648\u062F \u0633\u0647\u0644 \u0627\u0644\u0641\u0647\u0645 \u0644\u0644\u0622\u062E\u0631\u064A\u0646"],keyPointsEn:["Comments are ignored by the computer and don't affect program execution","// is for single-line comments in JS, Python, and C++","/* */ is for multi-line comments","Good comments make code easy to understand for others"],quiz:[{questionAr:"\u0645\u0627 \u0631\u0645\u0632 \u0627\u0644\u062A\u0639\u0644\u064A\u0642 \u0641\u064A Python\u061F",questionEn:"What is the comment symbol in Python?",options:["//","#","--","/*"],correctIndex:1,explanationAr:"\u0641\u064A Python \u064A\u0628\u062F\u0623 \u0627\u0644\u062A\u0639\u0644\u064A\u0642 \u0628\u0639\u0644\u0627\u0645\u0629 # \u0648\u064A\u0646\u062A\u0647\u064A \u0628\u0646\u0647\u0627\u064A\u0629 \u0627\u0644\u0633\u0637\u0631.",explanationEn:"In Python, comments start with # and end at the end of the line."},{questionAr:"\u0647\u0644 \u064A\u0624\u062B\u0631 \u0627\u0644\u062A\u0639\u0644\u064A\u0642 \u0639\u0644\u0649 \u062A\u0646\u0641\u064A\u0630 \u0627\u0644\u0628\u0631\u0646\u0627\u0645\u062C\u061F",questionEn:"Does a comment affect program execution?",options:["\u0646\u0639\u0645 / Yes","\u0644\u0627 / No","\u0623\u062D\u064A\u0627\u0646\u0627\u064B / Sometimes","\u064A\u0639\u062A\u0645\u062F \u0639\u0644\u0649 \u0627\u0644\u0644\u063A\u0629 / Depends on language"],correctIndex:1,explanationAr:"\u0627\u0644\u062A\u0639\u0644\u064A\u0642\u0627\u062A \u064A\u062A\u062C\u0627\u0647\u0644\u0647\u0627 \u0627\u0644\u062D\u0627\u0633\u0648\u0628 \u062A\u0645\u0627\u0645\u0627\u064B \u0648\u0644\u0627 \u062A\u0624\u062B\u0631 \u0639\u0644\u0649 \u0627\u0644\u0628\u0631\u0646\u0627\u0645\u062C.",explanationEn:"Comments are completely ignored by the computer and don't affect the program."}],challenges:[{titleAr:"\u062A\u062D\u062F\u064A: \u0623\u0636\u0641 \u062A\u0639\u0644\u064A\u0642\u0627\u062A \u0644\u0643\u0648\u062F\u0643",titleEn:"Challenge: Add Comments to Your Code",taskAr:"\u0627\u0643\u062A\u0628 \u0628\u0631\u0646\u0627\u0645\u062C\u0627\u064B \u064A\u062D\u0633\u0628 \u0645\u062C\u0645\u0648\u0639 \u0631\u0642\u0645\u064A\u0646 \u0648\u0623\u0636\u0641 \u062A\u0639\u0644\u064A\u0642\u0627\u064B \u064A\u0634\u0631\u062D \u0643\u0644 \u0633\u0637\u0631.",taskEn:"Write a program that adds two numbers and add a comment explaining each line.",hintAr:"\u0627\u0633\u062A\u062E\u062F\u0645 # \u0644\u0644\u062A\u0639\u0644\u064A\u0642 \u0641\u064A Python \u0623\u0648 // \u0641\u064A JavaScript",hintEn:"Use # for comments in Python or // in JavaScript",solutionPython:`# \u062A\u0639\u0631\u064A\u0641 \u0627\u0644\u0623\u0631\u0642\u0627\u0645
a = 5
b = 3

# \u062D\u0633\u0627\u0628 \u0627\u0644\u0645\u062C\u0645\u0648\u0639
result = a + b

# \u0637\u0628\u0627\u0639\u0629 \u0627\u0644\u0646\u062A\u064A\u062C\u0629
print(result)  # \u0627\u0644\u0646\u0627\u062A\u062C: 8`,solutionJs:`// Define the numbers
let a = 5;
let b = 3;

// Calculate the sum
let result = a + b;

// Print the result
console.log(result); // Output: 8`,expectedOutput:"8"}],commonMistakes:[{mistakeAr:"\u0627\u0633\u062A\u062E\u062F\u0627\u0645 // \u0644\u0644\u062A\u0639\u0644\u064A\u0642 \u0641\u064A Python \u0628\u062F\u0644\u0627\u064B \u0645\u0646 #",mistakeEn:"Using // for comments in Python instead of #",fixAr:"\u0641\u064A Python \u0627\u0633\u062A\u062E\u062F\u0645 # \u0648\u0644\u064A\u0633 // \u2014 \u0623\u0645\u0627 // \u0641\u0647\u064A \u0644\u0640 JavaScript \u0648 C++",fixEn:"In Python use # not // \u2014 // is for JavaScript and C++"}]},{id:5,part:2,partTitleAr:"\u0627\u0644\u0644\u0628\u0646\u0627\u062A \u0627\u0644\u0623\u0633\u0627\u0633\u064A\u0629",partTitleEn:"Core Building Blocks",titleAr:"\u0627\u0644\u0645\u062A\u063A\u064A\u0631\u0627\u062A",titleEn:"Variables",descriptionAr:"\u0627\u0644\u0645\u062A\u063A\u064A\u0631\u0627\u062A \u0647\u064A \u0635\u0646\u0627\u062F\u064A\u0642 \u062A\u062E\u0632\u064A\u0646 \u0627\u0644\u0628\u064A\u0627\u0646\u0627\u062A. \u062A\u0639\u0644\u0645 \u0643\u064A\u0641 \u062A\u064F\u0639\u0631\u0651\u0641 \u0645\u062A\u063A\u064A\u0631\u064B\u0627 \u0648\u062A\u062E\u0632\u0646 \u0641\u064A\u0647 \u0642\u064A\u0645\u0629 \u0648\u062A\u0633\u062A\u062E\u062F\u0645\u0647 \u0641\u064A \u0628\u0631\u0646\u0627\u0645\u062C\u0643.",descriptionEn:"Variables are storage boxes for data. Learn how to declare a variable, store a value, and use it in your program.",estimatedTime:"25 min",level:"beginner",icon:"\u{1F4E6}",color:"#58a6ff",conceptsAr:["\u062A\u0639\u0631\u064A\u0641 \u0627\u0644\u0645\u062A\u063A\u064A\u0631","\u0627\u0644\u062A\u0633\u0645\u064A\u0629","\u0627\u0644\u062A\u0639\u064A\u064A\u0646","\u0627\u0644\u0627\u0633\u062A\u062E\u062F\u0627\u0645"],conceptsEn:["Variable declaration","Naming","Assignment","Usage"],conceptDescriptionsAr:["\u062A\u0639\u0631\u064A\u0641 \u0627\u0644\u0645\u062A\u063A\u064A\u0631 \u064A\u0639\u0646\u064A \u0625\u062E\u0628\u0627\u0631 \u0627\u0644\u062D\u0627\u0633\u0648\u0628 \u0628\u0627\u0633\u0645 \u0627\u0644\u0645\u062A\u063A\u064A\u0631 \u0648\u0646\u0648\u0639\u0647\u060C \u0643\u0640 let age \u0641\u064A JavaScript.","\u0627\u0633\u0645 \u0627\u0644\u0645\u062A\u063A\u064A\u0631 \u064A\u062C\u0628 \u0623\u0646 \u064A\u0643\u0648\u0646 \u0648\u0635\u0641\u064A\u064B\u0627 \u0648\u064A\u0628\u062F\u0623 \u0628\u062D\u0631\u0641\u060C \u0648\u0627\u0635\u0637\u0644\u0627\u062D camelCase \u0634\u0627\u0626\u0639 \u0645\u062B\u0644 firstName.","\u0627\u0644\u062A\u0639\u064A\u064A\u0646 \u064A\u0639\u0646\u064A \u0648\u0636\u0639 \u0642\u064A\u0645\u0629 \u062F\u0627\u062E\u0644 \u0627\u0644\u0645\u062A\u063A\u064A\u0631 \u0628\u0627\u0633\u062A\u062E\u062F\u0627\u0645 \u0639\u0644\u0627\u0645\u0629 = \u0645\u062B\u0644 age = 25.","\u0628\u0639\u062F \u0627\u0644\u062A\u0639\u0631\u064A\u0641 \u0648\u0627\u0644\u062A\u0639\u064A\u064A\u0646 \u064A\u0645\u0643\u0646\u0643 \u0627\u0633\u062A\u062E\u062F\u0627\u0645 \u0627\u0644\u0645\u062A\u063A\u064A\u0631 \u0641\u064A \u0623\u064A \u0645\u0643\u0627\u0646 \u0628\u0643\u062A\u0627\u0628\u0629 \u0627\u0633\u0645\u0647 \u0641\u0642\u0637."],conceptDescriptionsEn:["Variable declaration tells the computer the name of the variable, like let age in JavaScript.","Variable names should be descriptive and start with a letter; camelCase like firstName is the common convention.","Assignment means placing a value into the variable using the = sign, for example age = 25.","After declaring and assigning, you can use the variable anywhere in your code just by writing its name."],diagramType:"variable-box",codeExamples:[{language:"javascript",code:`let name = "Sara";
let age = 25;
let isStudent = true;

console.log(name);      // Sara
console.log(age);       // 25
console.log(isStudent); // true`,descriptionAr:"\u0625\u0646\u0634\u0627\u0621 \u0645\u062A\u063A\u064A\u0631\u0627\u062A \u0648\u0637\u0628\u0627\u0639\u0629 \u0642\u064A\u0645\u0647\u0627",descriptionEn:"Creating variables and printing their values"},{language:"javascript",code:`// Changing a variable's value
let score = 0;
console.log(score); // 0

score = 10;
console.log(score); // 10

score = score + 5;
console.log(score); // 15`,descriptionAr:"\u062A\u063A\u064A\u064A\u0631 \u0642\u064A\u0645\u0629 \u0627\u0644\u0645\u062A\u063A\u064A\u0631",descriptionEn:"Changing the variable value"}],editorLinks:[{label:"Programiz JS Editor",url:"https://www.programiz.com/javascript/online-compiler/",language:"javascript"}],keyPointsAr:["\u0627\u0644\u0645\u062A\u063A\u064A\u0631 = \u0627\u0633\u0645 + \u0642\u064A\u0645\u0629 (\u0643\u0627\u0644\u0635\u0646\u062F\u0648\u0642 \u0645\u0639 \u0645\u0644\u0635\u0642 \u0639\u0644\u064A\u0647)","let \u064A\u064F\u0633\u062A\u062E\u062F\u0645 \u0644\u0625\u0646\u0634\u0627\u0621 \u0645\u062A\u063A\u064A\u0631 \u0642\u0627\u0628\u0644 \u0644\u0644\u062A\u063A\u064A\u064A\u0631 \u0641\u064A JavaScript","\u0627\u0633\u0645 \u0627\u0644\u0645\u062A\u063A\u064A\u0631 \u064A\u062C\u0628 \u0623\u0646 \u064A\u0643\u0648\u0646 \u0648\u0635\u0641\u064A\u064B\u0627 \u0648\u064A\u0628\u062F\u0623 \u0628\u062D\u0631\u0641","\u064A\u0645\u0643\u0646\u0643 \u062A\u063A\u064A\u064A\u0631 \u0642\u064A\u0645\u0629 \u0627\u0644\u0645\u062A\u063A\u064A\u0631 \u0641\u064A \u0623\u064A \u0648\u0642\u062A"],keyPointsEn:["Variable = name + value (like a labeled box)","let is used to create a changeable variable in JavaScript","Variable names should be descriptive and start with a letter","You can change the variable's value at any time"],quiz:[{questionAr:"\u0645\u0627 \u0627\u0644\u0631\u0645\u0632 \u0627\u0644\u0630\u064A \u064A\u064F\u0633\u062A\u062E\u062F\u0645 \u0644\u062A\u0639\u064A\u064A\u0646 \u0642\u064A\u0645\u0629 \u0644\u0645\u062A\u063A\u064A\u0631\u061F",questionEn:"Which symbol is used to assign a value to a variable?",options:["==","=",":=","=>"],correctIndex:1,explanationAr:"\u0627\u0644\u0631\u0645\u0632 = \u064A\u064F\u0633\u062A\u062E\u062F\u0645 \u0644\u0644\u062A\u0639\u064A\u064A\u0646\u060C \u0628\u064A\u0646\u0645\u0627 == \u064A\u064F\u0633\u062A\u062E\u062F\u0645 \u0644\u0644\u0645\u0642\u0627\u0631\u0646\u0629.",explanationEn:"= is for assignment, while == is for comparison."},{questionAr:"\u0645\u0627 \u0642\u064A\u0645\u0629 score \u0628\u0639\u062F \u062A\u0646\u0641\u064A\u0630: score = 5; score = score + 3\u061F",questionEn:"What is the value of score after: score = 5; score = score + 3?",options:["5","3","8","53"],correctIndex:2,explanationAr:"score = 5 \u062B\u0645 \u0646\u0636\u064A\u0641 3 \u0641\u062A\u0635\u0628\u062D 8.",explanationEn:"score starts at 5, then 5 + 3 = 8."},{questionAr:"\u0623\u064A \u0645\u0646 \u0627\u0644\u062A\u0627\u0644\u064A \u0627\u0633\u0645 \u0645\u062A\u063A\u064A\u0631 \u0635\u062D\u064A\u062D\u061F",questionEn:"Which of the following is a valid variable name?",options:["2name","my-name","myName","my name"],correctIndex:2,explanationAr:"\u0623\u0633\u0645\u0627\u0621 \u0627\u0644\u0645\u062A\u063A\u064A\u0631\u0627\u062A \u0644\u0627 \u062A\u0628\u062F\u0623 \u0628\u0631\u0642\u0645 \u0648\u0644\u0627 \u062A\u062D\u062A\u0648\u064A \u0639\u0644\u0649 \u0645\u0633\u0627\u0641\u0627\u062A \u0623\u0648 \u0634\u0631\u0637\u0627\u062A.",explanationEn:"Variable names cannot start with a number or contain spaces or hyphens."}],commonMistakes:[{mistakeAr:'\u0627\u0633\u062A\u062E\u062F\u0627\u0645 \u0627\u0633\u0645 \u0645\u062A\u063A\u064A\u0631 \u064A\u0628\u062F\u0623 \u0628\u0623\u0631\u0642\u0627\u0645: let 2name = "Sara"',mistakeEn:'Using a variable name that starts with a number: let 2name = "Sara"',fixAr:'\u0623\u0633\u0645\u0627\u0621 \u0627\u0644\u0645\u062A\u063A\u064A\u0631\u0627\u062A \u064A\u062C\u0628 \u0623\u0646 \u062A\u0628\u062F\u0623 \u0628\u062D\u0631\u0641 \u0623\u0648 _  \u0645\u062B\u0644: let name2 = "Sara"',fixEn:'Variable names must start with a letter or _ like: let name2 = "Sara"'},{mistakeAr:"\u0627\u0644\u062E\u0644\u0637 \u0628\u064A\u0646 = \u0648 == : if (x = 5) \u0628\u062F\u0644\u0627\u064B \u0645\u0646 if (x == 5)",mistakeEn:"Confusing = with == : if (x = 5) instead of if (x == 5)",fixAr:"= \u064A\u064F\u0639\u064A\u0651\u0646 \u0642\u064A\u0645\u0629\u060C \u0623\u0645\u0627 == \u0623\u0648 === \u0641\u064A\u064F\u0642\u0627\u0631\u0646 \u0642\u064A\u0645\u062A\u064A\u0646",fixEn:"= assigns a value, while == or === compares two values"}],challenges:[{titleAr:"\u062A\u062D\u062F\u064A: \u0635\u0641 \u0639\u0646 \u0646\u0641\u0633\u0643",titleEn:"Challenge: Describe Yourself",taskAr:"\u0623\u0646\u0634\u0626 3 \u0645\u062A\u063A\u064A\u0631\u0627\u062A: \u0627\u0633\u0645\u0643\u060C \u0639\u0645\u0631\u0643\u060C \u0648\u0645\u062F\u064A\u0646\u062A\u0643\u060C \u062B\u0645 \u0627\u0637\u0628\u0639\u0647\u0627.",taskEn:"Create 3 variables: your name, age, and city, then print them.",hintAr:'\u0627\u0633\u062A\u062E\u062F\u0645 name = "..." \u0648 age = ... \u0648 city = "..."',hintEn:'Use name = "..." and age = ... and city = "..."',solutionPython:`name = "Sara"
age = 22
city = "Riyadh"

print(name)
print(age)
print(city)`,solutionJs:`let name = "Sara";
let age = 22;
let city = "Riyadh";

console.log(name);
console.log(age);
console.log(city);`}]},{id:6,part:2,partTitleAr:"\u0627\u0644\u0644\u0628\u0646\u0627\u062A \u0627\u0644\u0623\u0633\u0627\u0633\u064A\u0629",partTitleEn:"Core Building Blocks",titleAr:"\u0623\u0646\u0648\u0627\u0639 \u0627\u0644\u0628\u064A\u0627\u0646\u0627\u062A",titleEn:"Data Types",descriptionAr:"\u0627\u0643\u062A\u0634\u0641 \u0627\u0644\u0623\u0646\u0648\u0627\u0639 \u0627\u0644\u0645\u062E\u062A\u0644\u0641\u0629 \u0644\u0644\u0628\u064A\u0627\u0646\u0627\u062A: \u0627\u0644\u0623\u0631\u0642\u0627\u0645\u060C \u0627\u0644\u0646\u0635\u0648\u0635\u060C \u0627\u0644\u0642\u064A\u0645 \u0627\u0644\u0645\u0646\u0637\u0642\u064A\u0629\u060C \u0648\u063A\u064A\u0631\u0647\u0627.",descriptionEn:"Discover the different types of data: numbers, strings, booleans, and more.",estimatedTime:"30 min",level:"beginner",icon:"\u{1F522}",color:"#d29922",conceptsAr:["Number (\u0631\u0642\u0645)","String (\u0646\u0635)","Boolean (\u0645\u0646\u0637\u0642\u064A)","Null & Undefined","Array (\u0645\u0635\u0641\u0648\u0641\u0629)","Object (\u0643\u0627\u0626\u0646)"],conceptsEn:["Number","String","Boolean","Null & Undefined","Array","Object"],conceptDescriptionsAr:["Number \u064A\u0645\u062B\u0644 \u0623\u064A \u0642\u064A\u0645\u0629 \u0631\u0642\u0645\u064A\u0629 \u0635\u062D\u064A\u062D\u0629 \u0623\u0648 \u0639\u0634\u0631\u064A\u0629 \u0645\u062B\u0644 42 \u0623\u0648 3.14\u060C \u0648\u064A\u062F\u0639\u0645 \u0627\u0644\u0639\u0645\u0644\u064A\u0627\u062A \u0627\u0644\u062D\u0633\u0627\u0628\u064A\u0629 \u0645\u0628\u0627\u0634\u0631\u0629.",'String \u0647\u0648 \u0623\u064A \u0646\u0635 \u0628\u064A\u0646 \u0639\u0644\u0627\u0645\u0627\u062A \u0627\u0642\u062A\u0628\u0627\u0633 \u0645\u062B\u0644 "\u0645\u0631\u062D\u0628\u0627"\u060C \u0648\u064A\u0645\u0643\u0646 \u062F\u0645\u062C\u0647 \u0623\u0648 \u0627\u0644\u0628\u062D\u062B \u0641\u064A\u0647 \u0623\u0648 \u062A\u0642\u0637\u064A\u0639\u0647.',"Boolean \u064A\u062D\u0645\u0644 \u0642\u064A\u0645\u0629 \u0648\u0627\u062D\u062F\u0629 \u0645\u0646 \u0627\u062B\u0646\u062A\u064A\u0646 \u0641\u0642\u0637: true \u0623\u0648 false\u060C \u0648\u064A\u064F\u0633\u062A\u062E\u062F\u0645 \u0641\u064A \u0627\u0644\u0634\u0631\u0648\u0637 \u0648\u0627\u0644\u0645\u0642\u0627\u0631\u0646\u0627\u062A.",'Null \u062A\u0639\u0646\u064A "\u0642\u064A\u0645\u0629 \u0641\u0627\u0631\u063A\u0629 \u0645\u0642\u0635\u0648\u062F\u0629"\u060C \u0628\u064A\u0646\u0645\u0627 Undefined \u062A\u0639\u0646\u064A "\u0644\u0645 \u062A\u064F\u0639\u0637\u064E \u0642\u064A\u0645\u0629 \u0628\u0639\u062F".',"Array \u0645\u0635\u0641\u0648\u0641\u0629 \u062A\u064F\u062E\u0632\u0651\u0646 \u0642\u0627\u0626\u0645\u0629 \u0645\u0631\u062A\u0628\u0629 \u0645\u0646 \u0627\u0644\u0642\u064A\u0645 \u064A\u0645\u0643\u0646 \u0627\u0644\u0648\u0635\u0648\u0644 \u0625\u0644\u064A\u0647\u0627 \u0628\u0627\u0644\u0641\u0647\u0631\u0633 \u0645\u062B\u0644 [0] \u0648[1].",'Object \u0643\u0627\u0626\u0646 \u064A\u064F\u062E\u0632\u0651\u0646 \u0628\u064A\u0627\u0646\u0627\u062A \u0643\u0623\u0632\u0648\u0627\u062C \u0645\u0641\u062A\u0627\u062D-\u0642\u064A\u0645\u0629 \u0645\u062B\u0644 { name: "Sara", age: 25 }.'],conceptDescriptionsEn:["Number represents any integer or decimal value like 42 or 3.14, and directly supports arithmetic operations.",'String is any text wrapped in quotes like "hello", and can be concatenated, searched, or sliced.',"Boolean holds one of only two values: true or false, and is used in conditions and comparisons.",'Null means "intentionally empty value", while Undefined means "no value has been assigned yet".',"Array stores an ordered list of values accessible by index like [0] and [1].",'Object stores data as key-value pairs like { name: "Sara", age: 25 }.'],diagramType:"data-types",codeExamples:[{language:"javascript",code:`// Number
let age = 25;
let price = 9.99;

// String
let name = "Sara";
let city = 'Riyadh';

// Boolean
let isActive = true;
let hasAccount = false;

// Null & Undefined
let empty = null;
let notDefined;

console.log(typeof age);       // "number"
console.log(typeof name);      // "string"
console.log(typeof isActive);  // "boolean"
console.log(typeof empty);     // "object"
console.log(typeof notDefined);// "undefined"`,descriptionAr:"\u062C\u0645\u064A\u0639 \u0623\u0646\u0648\u0627\u0639 \u0627\u0644\u0628\u064A\u0627\u0646\u0627\u062A \u0627\u0644\u0623\u0633\u0627\u0633\u064A\u0629 \u0641\u064A JavaScript",descriptionEn:"All basic data types in JavaScript"}],editorLinks:[{label:"Programiz JS Editor",url:"https://www.programiz.com/javascript/online-compiler/",language:"javascript"}],keyPointsAr:["Number: \u0623\u064A \u0631\u0642\u0645 \u0635\u062D\u064A\u062D \u0623\u0648 \u0639\u0634\u0631\u064A","String: \u0623\u064A \u0646\u0635 \u0628\u064A\u0646 \u0639\u0644\u0627\u0645\u0627\u062A \u0627\u0642\u062A\u0628\u0627\u0633","Boolean: \u0642\u064A\u0645\u0629 \u0645\u0646\u0637\u0642\u064A\u0629 true \u0623\u0648 false \u0641\u0642\u0637","typeof \u064A\u064F\u062E\u0628\u0631\u0643 \u0628\u0646\u0648\u0639 \u0627\u0644\u0628\u064A\u0627\u0646\u0627\u062A \u0644\u0623\u064A \u0642\u064A\u0645\u0629"],keyPointsEn:["Number: any integer or decimal","String: any text wrapped in quotes","Boolean: logical value \u2014 only true or false","typeof tells you the data type of any value"],quiz:[{questionAr:'\u0645\u0627 \u0646\u0648\u0639 \u0627\u0644\u0642\u064A\u0645\u0629 "\u0645\u0631\u062D\u0628\u0627"\u061F',questionEn:'What is the type of "\u0645\u0631\u062D\u0628\u0627"?',options:["Number","Boolean","String","Array"],correctIndex:2,explanationAr:"\u0623\u064A \u0646\u0635 \u0628\u064A\u0646 \u0639\u0644\u0627\u0645\u0627\u062A \u0627\u0642\u062A\u0628\u0627\u0633 \u0647\u0648 \u0645\u0646 \u0646\u0648\u0639 String.",explanationEn:"Any text wrapped in quotes is of type String."},{questionAr:"\u0645\u0627 \u0646\u0648\u0639 \u0627\u0644\u0642\u064A\u0645\u0629 true\u061F",questionEn:"What is the type of true?",options:["String","Number","Boolean","Null"],correctIndex:2,explanationAr:"true \u0648 false \u0647\u0645\u0627 \u0627\u0644\u0642\u064A\u0645\u062A\u0627\u0646 \u0627\u0644\u0648\u062D\u064A\u062F\u062A\u0627\u0646 \u0644\u0646\u0648\u0639 Boolean.",explanationEn:"true and false are the only two values of type Boolean."},{questionAr:"\u0645\u0627 \u0646\u0648\u0639 \u0627\u0644\u0642\u064A\u0645\u0629 42\u061F",questionEn:"What is the type of 42?",options:["String","Number","Boolean","Object"],correctIndex:1,explanationAr:"\u0627\u0644\u0623\u0631\u0642\u0627\u0645 \u0627\u0644\u0635\u062D\u064A\u062D\u0629 \u0648\u0627\u0644\u0639\u0634\u0631\u064A\u0629 \u0643\u0644\u0647\u0627 \u0645\u0646 \u0646\u0648\u0639 Number.",explanationEn:"Integer and decimal numbers are all of type Number."}],challenges:[{titleAr:"\u062A\u062D\u062F\u064A: \u0645\u0639\u0631\u0651\u0641 \u0627\u0644\u0623\u0646\u0648\u0627\u0639",titleEn:"Challenge: Type Identifier",taskAr:"\u0623\u0646\u0634\u0626 \u0645\u062A\u063A\u064A\u0631\u0627\u062A \u0644\u0643\u0644 \u0646\u0648\u0639 (\u0631\u0642\u0645\u060C \u0646\u0635\u060C \u0645\u0646\u0637\u0642\u064A) \u062B\u0645 \u0627\u0637\u0628\u0639 \u0646\u0648\u0639 \u0643\u0644 \u0645\u0646\u0647\u0627 \u0628\u0627\u0633\u062A\u062E\u062F\u0627\u0645 typeof.",taskEn:"Create a variable of each type (number, string, boolean) then print the type of each using typeof.",hintAr:"\u0627\u0633\u062A\u062E\u062F\u0645 typeof myVariable \u0644\u0645\u0639\u0631\u0641\u0629 \u0627\u0644\u0646\u0648\u0639",hintEn:"Use typeof myVariable to find the type",solutionPython:`age = 25
name = "Sara"
is_student = True

print(type(age))        # <class 'int'>
print(type(name))       # <class 'str'>
print(type(is_student)) # <class 'bool'>`,solutionJs:`let age = 25;
let name = "Sara";
let isStudent = true;

console.log(typeof age);       // "number"
console.log(typeof name);      // "string"
console.log(typeof isStudent); // "boolean"`}],commonMistakes:[{mistakeAr:"\u0643\u062A\u0627\u0628\u0629 \u0627\u0644\u0646\u0635 \u0628\u062F\u0648\u0646 \u0639\u0644\u0627\u0645\u0627\u062A \u0627\u0642\u062A\u0628\u0627\u0633: let name = Sara",mistakeEn:"Writing text without quotes: let name = Sara",fixAr:'\u0627\u0644\u0646\u0635 \u062F\u0627\u0626\u0645\u0627\u064B \u0628\u064A\u0646 \u0639\u0644\u0627\u0645\u0627\u062A \u0627\u0642\u062A\u0628\u0627\u0633: let name = "Sara"',fixEn:'Text always needs quotes: let name = "Sara"'},{mistakeAr:'\u0627\u0644\u062E\u0644\u0637 \u0628\u064A\u0646 null \u0648 undefined \u2014 \u0643\u0644\u0627\u0647\u0645\u0627 \u064A\u0639\u0646\u064A "\u0644\u0627 \u0642\u064A\u0645\u0629" \u0644\u0643\u0646 \u0644\u0623\u0633\u0628\u0627\u0628 \u0645\u062E\u062A\u0644\u0641\u0629',mistakeEn:'Confusing null and undefined \u2014 both mean "no value" but for different reasons',fixAr:"null = \u0623\u0646\u062A \u0627\u062E\u062A\u0631\u062A \u0623\u0646\u0647 \u0641\u0627\u0631\u063A. undefined = \u0644\u0645 \u062A\u064F\u0639\u0637\u064E \u0642\u064A\u0645\u0629 \u0628\u0639\u062F.",fixEn:"null = you chose to leave it empty. undefined = no value assigned yet."}]},{id:7,part:2,partTitleAr:"\u0627\u0644\u0644\u0628\u0646\u0627\u062A \u0627\u0644\u0623\u0633\u0627\u0633\u064A\u0629",partTitleEn:"Core Building Blocks",titleAr:"\u0627\u0644\u062B\u0648\u0627\u0628\u062A",titleEn:"Constants",descriptionAr:"\u0627\u0644\u062B\u0648\u0627\u0628\u062A \u0645\u062B\u0644 \u0627\u0644\u0645\u062A\u063A\u064A\u0631\u0627\u062A \u0644\u0643\u0646 \u0642\u064A\u0645\u062A\u0647\u0627 \u0644\u0627 \u062A\u062A\u063A\u064A\u0631. \u062A\u0639\u0644\u0645 \u0645\u062A\u0649 \u062A\u0633\u062A\u062E\u062F\u0645 const \u0628\u062F\u0644\u064B\u0627 \u0645\u0646 let.",descriptionEn:"Constants are like variables but their value cannot change. Learn when to use const instead of let.",estimatedTime:"15 min",level:"beginner",icon:"\u{1F512}",color:"#f85149",conceptsAr:["const \u0641\u064A JavaScript","\u0627\u0644\u0641\u0631\u0642 \u0628\u064A\u0646 let \u0648 const","\u0645\u062A\u0649 \u062A\u0633\u062A\u062E\u062F\u0645 \u0643\u0644 \u0645\u0646\u0647\u0645\u0627","\u0627\u0644\u062B\u0648\u0627\u0628\u062A \u0641\u064A Python"],conceptsEn:["const in JavaScript","Difference between let and const","When to use each","Constants in Python"],conceptDescriptionsAr:["const \u064A\u064F\u0639\u0631\u0651\u0641 \u062B\u0627\u0628\u062A\u064B\u0627 \u0644\u0627 \u064A\u0645\u0643\u0646 \u0625\u0639\u0627\u062F\u0629 \u062A\u0639\u064A\u064A\u0646\u0647 \u0628\u0639\u062F \u062A\u062D\u062F\u064A\u062F \u0642\u064A\u0645\u062A\u0647 \u0627\u0644\u0623\u0648\u0644\u0649.","let \u062A\u0633\u0645\u062D \u0628\u062A\u063A\u064A\u064A\u0631 \u0627\u0644\u0642\u064A\u0645\u0629 \u0644\u0627\u062D\u0642\u064B\u0627\u060C \u0623\u0645\u0627 const \u0641\u062A\u0645\u0646\u0639 \u0623\u064A \u0625\u0639\u0627\u062F\u0629 \u062A\u0639\u064A\u064A\u0646 \u0648\u062A\u0633\u0628\u0628 \u062E\u0637\u0623\u064B.","\u0627\u0633\u062A\u062E\u062F\u0645 const \u0643\u062E\u064A\u0627\u0631 \u0627\u0641\u062A\u0631\u0627\u0636\u064A \u0648\u0627\u0646\u062A\u0642\u0644 \u0625\u0644\u0649 let \u0641\u0642\u0637 \u0639\u0646\u062F\u0645\u0627 \u062A\u0639\u0631\u0641 \u0623\u0646 \u0627\u0644\u0642\u064A\u0645\u0629 \u0633\u062A\u062A\u063A\u064A\u0631.","\u0641\u064A Python \u0644\u0627 \u064A\u0648\u062C\u062F \u0643\u0644\u0645\u0629 \u0645\u0641\u062A\u0627\u062D\u064A\u0629 \u0644\u0644\u062B\u0648\u0627\u0628\u062A\u060C \u0644\u0643\u0646 \u0627\u0644\u0627\u0635\u0637\u0644\u0627\u062D \u064A\u0642\u0636\u064A \u0628\u0643\u062A\u0627\u0628\u0629 \u0627\u0644\u0627\u0633\u0645 \u0628\u0623\u062D\u0631\u0641 \u0643\u0628\u064A\u0631\u0629 \u0645\u062B\u0644 MAX_SIZE."],conceptDescriptionsEn:["const defines a constant that cannot be reassigned after its initial value is set.","let allows changing the value later, while const prevents any reassignment and throws an error.","Use const as your default choice and switch to let only when you know the value will change.","Python has no constant keyword, but convention is to write the name in UPPER_CASE like MAX_SIZE."],diagramType:"constant-lock",codeExamples:[{language:"javascript",code:`const PI = 3.14159;
const MAX_USERS = 100;
const APP_NAME = "MyApp";

console.log(PI);       // 3.14159
console.log(MAX_USERS);// 100

// This will cause an ERROR:
// PI = 3; // TypeError: Assignment to constant variable`,descriptionAr:"\u062A\u0639\u0631\u064A\u0641 \u0627\u0644\u062B\u0648\u0627\u0628\u062A \u0648\u0645\u0627 \u064A\u062D\u062F\u062B \u0639\u0646\u062F \u0645\u062D\u0627\u0648\u0644\u0629 \u062A\u063A\u064A\u064A\u0631\u0647\u0627",descriptionEn:"Defining constants and what happens when you try to change them"}],editorLinks:[{label:"Programiz JS Editor",url:"https://www.programiz.com/javascript/online-compiler/",language:"javascript"}],keyPointsAr:["const \u062A\u064F\u0639\u0631\u0651\u0641 \u062B\u0627\u0628\u062A\u064B\u0627 \u0644\u0627 \u064A\u0645\u0643\u0646 \u0625\u0639\u0627\u062F\u0629 \u062A\u0639\u064A\u064A\u0646\u0647","\u0627\u0633\u062A\u062E\u062F\u0645 const \u0628\u0634\u0643\u0644 \u0627\u0641\u062A\u0631\u0627\u0636\u064A\u060C \u0648\u063A\u064A\u0651\u0631 \u0625\u0644\u0649 let \u0639\u0646\u062F \u0627\u0644\u062D\u0627\u062C\u0629","\u0627\u0644\u062B\u0648\u0627\u0628\u062A \u062A\u062C\u0639\u0644 \u0627\u0644\u0643\u0648\u062F \u0623\u0643\u062B\u0631 \u0648\u0636\u0648\u062D\u064B\u0627 \u0648\u0623\u0645\u0627\u0646\u064B\u0627","\u0627\u0644\u0627\u0635\u0637\u0644\u0627\u062D: \u0627\u0643\u062A\u0628 \u0623\u0633\u0645\u0627\u0621 \u0627\u0644\u062B\u0648\u0627\u0628\u062A \u0628\u0623\u062D\u0631\u0641 \u0643\u0628\u064A\u0631\u0629 \u0645\u062B\u0644 MAX_SIZE"],keyPointsEn:["const defines a constant that cannot be reassigned","Use const by default, switch to let when you need to change the value","Constants make code clearer and safer","Convention: write constant names in UPPER_CASE like MAX_SIZE"],quiz:[{questionAr:"\u0645\u0627 \u0627\u0644\u0641\u0631\u0642 \u0628\u064A\u0646 let \u0648 const\u061F",questionEn:"What is the difference between let and const?",options:["\u0644\u0627 \u0641\u0631\u0642 / No difference","let \u0642\u0627\u0628\u0644 \u0644\u0644\u062A\u063A\u064A\u064A\u0631\u060C const \u062B\u0627\u0628\u062A / let is changeable, const is fixed","const \u0623\u0633\u0631\u0639 / const is faster","let \u0623\u0643\u0628\u0631 \u062D\u062C\u0645\u0627\u064B / let is larger in size"],correctIndex:1,explanationAr:"let \u064A\u0633\u0645\u062D \u0628\u062A\u063A\u064A\u064A\u0631 \u0627\u0644\u0642\u064A\u0645\u0629\u060C \u0628\u064A\u0646\u0645\u0627 const \u062A\u0645\u0646\u0639 \u0625\u0639\u0627\u062F\u0629 \u0627\u0644\u062A\u0639\u064A\u064A\u0646 \u0646\u0647\u0627\u0626\u064A\u0627\u064B.",explanationEn:"let allows changing the value, while const prevents any reassignment."},{questionAr:"\u0645\u0627 \u0627\u0644\u0627\u0635\u0637\u0644\u0627\u062D \u0627\u0644\u0635\u062D\u064A\u062D \u0644\u062A\u0633\u0645\u064A\u0629 \u0627\u0644\u062B\u0627\u0628\u062A MAX_SIZE\u061F",questionEn:"What naming convention is correct for the constant MAX_SIZE?",options:["maxSize","max_size","MAX_SIZE","MaxSize"],correctIndex:2,explanationAr:"\u0627\u0644\u062B\u0648\u0627\u0628\u062A \u062A\u064F\u0643\u062A\u0628 \u0628\u0623\u062D\u0631\u0641 \u0643\u0628\u064A\u0631\u0629 \u0645\u0639 \u0641\u0635\u0644 \u0627\u0644\u0643\u0644\u0645\u0627\u062A \u0628\u0640 _ \u062D\u0633\u0628 \u0627\u0644\u0627\u0635\u0637\u0644\u0627\u062D.",explanationEn:"Constants are written in UPPER_CASE with _ separating words by convention."}],challenges:[{titleAr:"\u062A\u062D\u062F\u064A: \u062B\u0648\u0627\u0628\u062A \u0627\u0644\u062A\u0637\u0628\u064A\u0642",titleEn:"Challenge: App Constants",taskAr:"\u0623\u0646\u0634\u0626 \u062B\u0648\u0627\u0628\u062A \u0644\u0627\u0633\u0645 \u0627\u0644\u062A\u0637\u0628\u064A\u0642 \u0648\u0646\u0633\u062E\u062A\u0647 \u0648\u0639\u062F\u062F \u0627\u0644\u0645\u0633\u062A\u062E\u062F\u0645\u064A\u0646 \u0627\u0644\u0623\u0642\u0635\u0649\u060C \u062B\u0645 \u0627\u0637\u0628\u0639\u0647\u0627.",taskEn:"Create constants for the app name, version, and max users, then print them.",hintAr:'\u0627\u0633\u062A\u062E\u062F\u0645 const APP_NAME = "..." \u0648 const VERSION = ...',hintEn:'Use const APP_NAME = "..." and const VERSION = ...',solutionPython:`APP_NAME = "MyApp"
VERSION = 1.0
MAX_USERS = 100

print(APP_NAME)
print(VERSION)
print(MAX_USERS)`,solutionJs:`const APP_NAME = "MyApp";
const VERSION = 1.0;
const MAX_USERS = 100;

console.log(APP_NAME);
console.log(VERSION);
console.log(MAX_USERS);`}],commonMistakes:[{mistakeAr:"\u0645\u062D\u0627\u0648\u0644\u0629 \u062A\u063A\u064A\u064A\u0631 \u0642\u064A\u0645\u0629 const: const PI = 3.14; PI = 3;",mistakeEn:"Trying to change a const value: const PI = 3.14; PI = 3;",fixAr:"\u0625\u0630\u0627 \u0627\u062D\u062A\u062C\u062A \u062A\u063A\u064A\u064A\u0631 \u0627\u0644\u0642\u064A\u0645\u0629 \u0627\u0633\u062A\u062E\u062F\u0645 let \u0628\u062F\u0644\u0627\u064B \u0645\u0646 const",fixEn:"If you need to change the value, use let instead of const"}]},{id:8,part:2,partTitleAr:"\u0627\u0644\u0644\u0628\u0646\u0627\u062A \u0627\u0644\u0623\u0633\u0627\u0633\u064A\u0629",partTitleEn:"Core Building Blocks",titleAr:"\u0627\u0644\u0646\u0635\u0648\u0635 (Strings)",titleEn:"Strings",descriptionAr:"\u0627\u0644\u0646\u0635 \u0647\u0648 \u0633\u0644\u0633\u0644\u0629 \u0645\u0646 \u0627\u0644\u0623\u062D\u0631\u0641. \u062A\u0639\u0644\u0645 \u0643\u064A\u0641 \u062A\u0646\u0634\u0626 \u0627\u0644\u0646\u0635\u0648\u0635 \u0648\u062A\u0639\u062F\u0651\u0644\u0647\u0627 \u0648\u062A\u062F\u0645\u062C\u0647\u0627.",descriptionEn:"A string is a sequence of characters. Learn how to create, modify, and combine strings.",estimatedTime:"30 min",level:"beginner",icon:"\u{1F4DD}",color:"#bc8cff",conceptsAr:["\u0625\u0646\u0634\u0627\u0621 \u0627\u0644\u0646\u0635","\u062F\u0645\u062C \u0627\u0644\u0646\u0635\u0648\u0635","\u0637\u0648\u0644 \u0627\u0644\u0646\u0635","\u0627\u0644\u0628\u062D\u062B \u062F\u0627\u062E\u0644 \u0627\u0644\u0646\u0635","Template Literals"],conceptsEn:["Creating strings","Concatenation","String length","Searching strings","Template Literals"],conceptDescriptionsAr:["\u064A\u0645\u0643\u0646 \u0625\u0646\u0634\u0627\u0621 \u0627\u0644\u0646\u0635 \u0628\u0639\u0644\u0627\u0645\u0627\u062A \u0627\u0642\u062A\u0628\u0627\u0633 \u0645\u0641\u0631\u062F\u0629 ' '\u060C \u0645\u0632\u062F\u0648\u062C\u0629 \" \"\u060C \u0623\u0648 \u062E\u0644\u0641\u064A\u0629 ` ` \u0644\u062F\u0639\u0645 \u0627\u0644\u062A\u0639\u0628\u064A\u0631\u0627\u062A.",'\u062F\u0645\u062C \u0627\u0644\u0646\u0635\u0648\u0635 \u064A\u0639\u0646\u064A \u0631\u0628\u0637\u0647\u0627 \u0645\u0639\u064B\u0627 \u0628\u0627\u0633\u062A\u062E\u062F\u0627\u0645 + \u0645\u062B\u0644 "Hello" + " " + "World".',".length \u062E\u0627\u0635\u064A\u0629 \u062A\u064F\u0639\u0637\u064A\u0643 \u0639\u062F\u062F \u0627\u0644\u0623\u062D\u0631\u0641 \u0641\u064A \u0627\u0644\u0646\u0635 \u0628\u0645\u0627 \u0641\u064A\u0647\u0627 \u0627\u0644\u0645\u0633\u0627\u0641\u0627\u062A.",".includes() \u062A\u064F\u0631\u062C\u0639 true \u0625\u0630\u0627 \u0648\u064F\u062C\u062F \u0627\u0644\u0646\u0635 \u0627\u0644\u0645\u0628\u062D\u0648\u062B \u0639\u0646\u0647 \u062F\u0627\u062E\u0644 \u0627\u0644\u0646\u0635 \u0627\u0644\u0623\u0635\u0644\u064A.","Template Literals \u062A\u064F\u062A\u064A\u062D \u062A\u0636\u0645\u064A\u0646 \u0645\u062A\u063A\u064A\u0631\u0627\u062A \u062F\u0627\u062E\u0644 \u0627\u0644\u0646\u0635 \u0645\u0628\u0627\u0634\u0631\u0629 \u0628\u0635\u064A\u063A\u0629 ${variable}."],conceptDescriptionsEn:["Strings can be created with single ' ', double \" \", or backtick ` ` quotes \u2014 backticks support expressions.",'Concatenation means joining strings together using + like "Hello" + " " + "World".',".length is a property that gives you the number of characters in the string, including spaces.",".includes() returns true if the searched text exists inside the original string.","Template Literals let you embed variables directly inside a string using ${variable} syntax."],diagramType:"string-chars",codeExamples:[{language:"javascript",code:`let firstName = "Sara";
let lastName  = "Ahmed";

// Concatenation
let fullName = firstName + " " + lastName;
console.log(fullName); // Sara Ahmed

// Template literal (modern way)
let greeting = \`Hello, \${firstName}!\`;
console.log(greeting); // Hello, Sara!

// String properties and methods
console.log(fullName.length);        // 10
console.log(fullName.toUpperCase()); // SARA AHMED
console.log(fullName.toLowerCase()); // sara ahmed
console.log(fullName.includes("Sara")); // true`,descriptionAr:"\u0627\u0644\u0639\u0645\u0644\u064A\u0627\u062A \u0627\u0644\u0634\u0627\u0626\u0639\u0629 \u0639\u0644\u0649 \u0627\u0644\u0646\u0635\u0648\u0635",descriptionEn:"Common string operations"}],editorLinks:[{label:"Programiz JS Editor",url:"https://www.programiz.com/javascript/online-compiler/",language:"javascript"}],keyPointsAr:["\u0627\u0644\u0646\u0635 \u064A\u064F\u0643\u062A\u0628 \u0628\u064A\u0646 \u0639\u0644\u0627\u0645\u0627\u062A \u0627\u0642\u062A\u0628\u0627\u0633 \u0645\u0641\u0631\u062F\u0629 \u0623\u0648 \u0645\u0632\u062F\u0648\u062C\u0629 \u0623\u0648 \u062E\u0644\u0641\u064A\u0629","\u062F\u0645\u062C \u0627\u0644\u0646\u0635\u0648\u0635 \u0628\u0627\u0633\u062A\u062E\u062F\u0627\u0645 + \u0623\u0648 Template Literals",".length \u064A\u064F\u0639\u0637\u064A\u0643 \u0639\u062F\u062F \u0627\u0644\u0623\u062D\u0631\u0641 \u0641\u064A \u0627\u0644\u0646\u0635","\u0627\u0644\u0646\u0635\u0648\u0635 \u0641\u064A JavaScript \u063A\u064A\u0631 \u0642\u0627\u0628\u0644\u0629 \u0644\u0644\u062A\u063A\u064A\u064A\u0631 \u0645\u0628\u0627\u0634\u0631\u0629"],keyPointsEn:["Strings are written between single, double, or backtick quotes","Concatenate strings using + or Template Literals",".length gives you the number of characters in the string","Strings in JavaScript are immutable (you create new ones)"],quiz:[{questionAr:'\u0645\u0627 \u0646\u0627\u062A\u062C "Hello" + " " + "World"\u061F',questionEn:'What is the result of "Hello" + " " + "World"?',options:['"HelloWorld"','"Hello World"',"\u062E\u0637\u0623 / Error",'"Hello" "World"'],correctIndex:1,explanationAr:"\u0639\u0645\u0644\u064A\u0629 + \u062A\u062F\u0645\u062C \u0627\u0644\u0646\u0635\u0648\u0635 \u0645\u0639\u0627\u064B \u0645\u0639 \u0627\u0644\u062D\u0641\u0627\u0638 \u0639\u0644\u0649 \u0627\u0644\u0645\u0633\u0627\u0641\u0629.",explanationEn:"The + operator concatenates strings while preserving the space."},{questionAr:'\u0645\u0627 \u0637\u0648\u0644 \u0627\u0644\u0646\u0635 "\u0645\u0631\u062D\u0628\u0627"\u061F (5 \u0623\u062D\u0631\u0641)',questionEn:'What is the length of "hello"?',options:["4","5","6","0"],correctIndex:1,explanationAr:'"hello" \u064A\u062D\u062A\u0648\u064A \u0639\u0644\u0649 5 \u0623\u062D\u0631\u0641.',explanationEn:'"hello" contains 5 characters.'},{questionAr:"\u0643\u064A\u0641 \u062A\u0643\u062A\u0628 \u0645\u062A\u063A\u064A\u0631\u0627\u064B \u062F\u0627\u062E\u0644 \u0646\u0635 \u0628\u0640 Template Literal\u061F",questionEn:"How do you embed a variable in a Template Literal?",options:["${name}","#{name}","{name}","$(name)"],correctIndex:0,explanationAr:"Template Literals \u062A\u0633\u062A\u062E\u062F\u0645 ${} \u0644\u062A\u0636\u0645\u064A\u0646 \u0627\u0644\u0645\u062A\u063A\u064A\u0631\u0627\u062A.",explanationEn:"Template Literals use ${} to embed variables."}],challenges:[{titleAr:"\u062A\u062D\u062F\u064A: \u0628\u0637\u0627\u0642\u0629 \u062A\u0639\u0631\u064A\u0641",titleEn:"Challenge: ID Card",taskAr:"\u0623\u0646\u0634\u0626 \u0645\u062A\u063A\u064A\u0631\u0627\u062A \u0644\u0627\u0633\u0645\u0643 \u0648\u0639\u0645\u0631\u0643 \u0648\u0645\u062F\u064A\u0646\u062A\u0643 \u062B\u0645 \u0627\u0637\u0628\u0639 \u062C\u0645\u0644\u0629 \u0648\u0627\u062D\u062F\u0629 \u062A\u062C\u0645\u0639\u0647\u0645 \u0628\u0627\u0633\u062A\u062E\u062F\u0627\u0645 Template Literal.",taskEn:"Create variables for your name, age, and city, then print one sentence combining them using a Template Literal.",hintAr:"\u0627\u0633\u062A\u062E\u062F\u0645: `\u0627\u0633\u0645\u064A ${name} \u0648\u0639\u0645\u0631\u064A ${age} \u0648\u0623\u0633\u0643\u0646 \u0641\u064A ${city}`",hintEn:"Use: `My name is ${name}, I am ${age} and I live in ${city}`",solutionPython:`name = "Sara"
age = 22
city = "Riyadh"

print(f"\u0627\u0633\u0645\u064A {name} \u0648\u0639\u0645\u0631\u064A {age} \u0648\u0623\u0633\u0643\u0646 \u0641\u064A {city}")`,solutionJs:'let name = "Sara";\nlet age = 22;\nlet city = "Riyadh";\n\nconsole.log(`My name is ${name}, I am ${age} and I live in ${city}`);'}],commonMistakes:[{mistakeAr:'\u0646\u0633\u064A\u0627\u0646 \u0625\u063A\u0644\u0627\u0642 \u0639\u0644\u0627\u0645\u0629 \u0627\u0644\u0627\u0642\u062A\u0628\u0627\u0633: let name = "Sara',mistakeEn:'Forgetting to close the quote: let name = "Sara',fixAr:'\u0643\u0644 \u0639\u0644\u0627\u0645\u0629 \u0627\u0642\u062A\u0628\u0627\u0633 \u0641\u062A\u062D \u064A\u062C\u0628 \u0623\u0646 \u064A\u0642\u0627\u0628\u0644\u0647\u0627 \u0625\u063A\u0644\u0627\u0642: let name = "Sara"',fixEn:'Every opening quote must have a closing quote: let name = "Sara"'},{mistakeAr:"\u0627\u0633\u062A\u062E\u062F\u0627\u0645 + \u0628\u062F\u0644\u0627\u064B \u0645\u0646 ${} \u062F\u0627\u062E\u0644 Template Literal: `Hello + name`",mistakeEn:"Using + instead of ${} inside Template Literal: `Hello + name`",fixAr:"\u062F\u0627\u062E\u0644 backticks \u0627\u0633\u062A\u062E\u062F\u0645 ${name} \u0648\u0644\u064A\u0633 + name",fixEn:"Inside backticks use ${name} not + name"}]},{id:9,part:2,partTitleAr:"\u0627\u0644\u0644\u0628\u0646\u0627\u062A \u0627\u0644\u0623\u0633\u0627\u0633\u064A\u0629",partTitleEn:"Core Building Blocks",titleAr:"\u0627\u0644\u0639\u0645\u0644\u064A\u0627\u062A \u0627\u0644\u062D\u0633\u0627\u0628\u064A\u0629 \u0648\u0627\u0644\u0645\u0646\u0637\u0642\u064A\u0629",titleEn:"Operators",descriptionAr:"\u062A\u0639\u0644\u0645 \u0627\u0644\u0645\u0639\u0627\u0645\u0644\u0627\u062A \u0627\u0644\u062D\u0633\u0627\u0628\u064A\u0629 \u0648\u0627\u0644\u0645\u0642\u0627\u0631\u0646\u0629 \u0648\u0627\u0644\u0645\u0646\u0637\u0642\u064A\u0629 \u0627\u0644\u062A\u064A \u062A\u064F\u0645\u0643\u0651\u0646\u0643 \u0645\u0646 \u0625\u062C\u0631\u0627\u0621 \u0627\u0644\u0639\u0645\u0644\u064A\u0627\u062A \u0641\u064A \u0628\u0631\u0627\u0645\u062C\u0643.",descriptionEn:"Learn arithmetic, comparison, and logical operators that let you perform operations in your programs.",estimatedTime:"30 min",level:"beginner",icon:"\u2795",color:"#3fb950",conceptsAr:["\u0627\u0644\u0639\u0645\u0644\u064A\u0627\u062A \u0627\u0644\u062D\u0633\u0627\u0628\u064A\u0629","\u0639\u0645\u0644\u064A\u0627\u062A \u0627\u0644\u0645\u0642\u0627\u0631\u0646\u0629","\u0627\u0644\u0639\u0645\u0644\u064A\u0627\u062A \u0627\u0644\u0645\u0646\u0637\u0642\u064A\u0629","\u0623\u0648\u0644\u0648\u064A\u0629 \u0627\u0644\u0639\u0645\u0644\u064A\u0627\u062A"],conceptsEn:["Arithmetic operators","Comparison operators","Logical operators","Operator precedence"],conceptDescriptionsAr:["\u0627\u0644\u0639\u0645\u0644\u064A\u0627\u062A \u0627\u0644\u062D\u0633\u0627\u0628\u064A\u0629 \u062A\u0634\u0645\u0644 + - * / % ** \u0648\u062A\u0639\u0645\u0644 \u0639\u0644\u0649 \u0627\u0644\u0623\u0631\u0642\u0627\u0645 \u0645\u062B\u0644 \u0627\u0644\u0631\u064A\u0627\u0636\u064A\u0627\u062A \u062A\u0645\u0627\u0645\u064B\u0627.","\u0639\u0645\u0644\u064A\u0627\u062A \u0627\u0644\u0645\u0642\u0627\u0631\u0646\u0629 \u0645\u062B\u0644 === \u0648!== \u0648> \u0648< \u062A\u064F\u0642\u0627\u0631\u0646 \u0642\u064A\u0645\u062A\u064A\u0646 \u0648\u062A\u064F\u0639\u064A\u062F \u062F\u0627\u0626\u0645\u064B\u0627 true \u0623\u0648 false.","\u0627\u0644\u0639\u0645\u0644\u064A\u0627\u062A \u0627\u0644\u0645\u0646\u0637\u0642\u064A\u0629 && \u0648|| \u0648! \u062A\u064F\u062F\u0645\u062C \u0634\u0631\u0648\u0637\u064B\u0627 \u0645\u062A\u0639\u062F\u062F\u0629 \u0641\u064A \u062A\u0639\u0628\u064A\u0631 \u0648\u0627\u062D\u062F.","\u0623\u0648\u0644\u0648\u064A\u0629 \u0627\u0644\u0639\u0645\u0644\u064A\u0627\u062A \u062A\u062D\u062F\u062F \u0623\u064A\u0647\u0627 \u062A\u064F\u0646\u0641\u064E\u0651\u0630 \u0623\u0648\u0644\u064B\u0627 \u2014 \u0627\u0644\u0636\u0631\u0628 \u0648\u0627\u0644\u0642\u0633\u0645\u0629 \u0642\u0628\u0644 \u0627\u0644\u062C\u0645\u0639 \u0648\u0627\u0644\u0637\u0631\u062D."],conceptDescriptionsEn:["Arithmetic operators include + - * / % ** and work on numbers exactly like in mathematics.","Comparison operators like === !== > < compare two values and always return true or false.","Logical operators && || ! combine multiple conditions into a single expression.","Operator precedence determines which operation runs first \u2014 multiplication and division before addition and subtraction."],diagramType:"operators",codeExamples:[{language:"javascript",code:`// Arithmetic
let a = 10, b = 3;
console.log(a + b);  // 13
console.log(a - b);  // 7
console.log(a * b);  // 30
console.log(a / b);  // 3.333...
console.log(a % b);  // 1  (remainder)
console.log(a ** b); // 1000 (power)

// Comparison (returns boolean)
console.log(a > b);   // true
console.log(a === b); // false
console.log(a !== b); // true

// Logical
console.log(true && false); // false
console.log(true || false); // true
console.log(!true);         // false`,descriptionAr:"\u062C\u0645\u064A\u0639 \u0623\u0646\u0648\u0627\u0639 \u0627\u0644\u0645\u0639\u0627\u0645\u0644\u0627\u062A \u0641\u064A JavaScript",descriptionEn:"All types of operators in JavaScript"}],editorLinks:[{label:"Programiz JS Editor",url:"https://www.programiz.com/javascript/online-compiler/",language:"javascript"}],keyPointsAr:["% \u0647\u0648 \u0628\u0627\u0642\u064A \u0627\u0644\u0642\u0633\u0645\u0629 \u2014 \u0645\u0641\u064A\u062F \u062C\u062F\u064B\u0627 \u0641\u064A \u0627\u0644\u0628\u0631\u0645\u062C\u0629","=== \u064A\u062A\u062D\u0642\u0642 \u0645\u0646 \u0627\u0644\u0642\u064A\u0645\u0629 \u0648\u0627\u0644\u0646\u0648\u0639 \u0645\u0639\u064B\u0627 (\u0623\u0641\u0636\u0644 \u0645\u0646 ==)",'&& \u064A\u0639\u0646\u064A "\u0648"\u060C || \u064A\u0639\u0646\u064A "\u0623\u0648"\u060C ! \u064A\u0639\u0646\u064A "\u0644\u064A\u0633"',"\u0627\u0644\u0639\u0645\u0644\u064A\u0627\u062A \u0627\u0644\u062D\u0633\u0627\u0628\u064A\u0629 \u0644\u0647\u0627 \u0623\u0648\u0644\u0648\u064A\u0629 \u0645\u062B\u0644 \u0627\u0644\u0631\u064A\u0627\u0636\u064A\u0627\u062A"],keyPointsEn:["% is the remainder \u2014 very useful in programming","=== checks value AND type (better than ==)",'&& means "and", || means "or", ! means "not"',"Arithmetic operators follow the same precedence as math"],quiz:[{questionAr:"\u0645\u0627 \u0646\u0627\u062A\u062C 10 % 3\u061F",questionEn:"What is the result of 10 % 3?",options:["3","1","0","3.33"],correctIndex:1,explanationAr:"10 % 3 = 1 \u0644\u0623\u0646 10 = 3\xD73 + 1\u060C \u0641\u0627\u0644\u0628\u0627\u0642\u064A \u0647\u0648 1.",explanationEn:"10 % 3 = 1 because 10 = 3\xD73 + 1, so the remainder is 1."},{questionAr:"\u0645\u0627 \u0627\u0644\u0641\u0631\u0642 \u0628\u064A\u0646 == \u0648 ===\u061F",questionEn:"What is the difference between == and ===?",options:["\u0644\u0627 \u0641\u0631\u0642 / No difference","=== \u064A\u0642\u0627\u0631\u0646 \u0627\u0644\u0642\u064A\u0645\u0629 \u0648\u0627\u0644\u0646\u0648\u0639\u060C == \u064A\u0642\u0627\u0631\u0646 \u0627\u0644\u0642\u064A\u0645\u0629 \u0641\u0642\u0637 / === compares value and type, == compares value only","== \u0623\u062F\u0642 / == is more precise","=== \u0644\u0644\u0646\u0635\u0648\u0635 \u0641\u0642\u0637 / === is for strings only"],correctIndex:1,explanationAr:"=== \u064A\u062A\u062D\u0642\u0642 \u0645\u0646 \u0627\u0644\u0642\u064A\u0645\u0629 \u0648\u0627\u0644\u0646\u0648\u0639 \u0645\u0639\u0627\u064B \u2014 \u0623\u0643\u062B\u0631 \u062F\u0642\u0629 \u0648\u0623\u0641\u0636\u0644 \u0627\u0633\u062A\u062E\u062F\u0627\u0645\u0627\u064B.",explanationEn:"=== checks both value and type \u2014 more precise and better to use."},{questionAr:"\u0645\u0627 \u0646\u0627\u062A\u062C true && false\u061F",questionEn:"What is the result of true && false?",options:["true","false","null","undefined"],correctIndex:1,explanationAr:"AND (&&) \u064A\u064F\u0639\u0637\u064A true \u0641\u0642\u0637 \u0625\u0630\u0627 \u0643\u0644\u0627 \u0627\u0644\u0637\u0631\u0641\u064A\u0646 true.",explanationEn:"AND (&&) gives true only when both sides are true."}],challenges:[{titleAr:"\u062A\u062D\u062F\u064A: \u0622\u0644\u0629 \u062D\u0627\u0633\u0628\u0629 \u0628\u0633\u064A\u0637\u0629",titleEn:"Challenge: Simple Calculator",taskAr:"\u0623\u0646\u0634\u0626 \u0645\u062A\u063A\u064A\u0631\u064A\u0646 a=15 \u0648 b=4 \u062B\u0645 \u0627\u0637\u0628\u0639 \u0646\u0627\u062A\u062C \u0627\u0644\u062C\u0645\u0639 \u0648\u0627\u0644\u0637\u0631\u062D \u0648\u0627\u0644\u0636\u0631\u0628 \u0648\u0627\u0644\u0642\u0633\u0645\u0629 \u0648\u0627\u0644\u0628\u0627\u0642\u064A.",taskEn:"Create two variables a=15 and b=4, then print the result of addition, subtraction, multiplication, division, and remainder.",hintAr:"\u0627\u0633\u062A\u062E\u062F\u0645 +\u060C -\u060C *\u060C /\u060C % \u0628\u0627\u0644\u062A\u0631\u062A\u064A\u0628",hintEn:"Use +, -, *, /, % in order",solutionPython:`a = 15
b = 4

print(a + b)  # 19
print(a - b)  # 11
print(a * b)  # 60
print(a / b)  # 3.75
print(a % b)  # 3`,solutionJs:`let a = 15;
let b = 4;

console.log(a + b); // 19
console.log(a - b); // 11
console.log(a * b); // 60
console.log(a / b); // 3.75
console.log(a % b); // 3`}],commonMistakes:[{mistakeAr:"\u0627\u0633\u062A\u062E\u062F\u0627\u0645 = \u0644\u0644\u0645\u0642\u0627\u0631\u0646\u0629 \u0628\u062F\u0644\u0627\u064B \u0645\u0646 == \u0623\u0648 ===",mistakeEn:"Using = for comparison instead of == or ===",fixAr:"= \u0644\u0644\u062A\u0639\u064A\u064A\u0646 \u0641\u0642\u0637\u060C \u0627\u0633\u062A\u062E\u062F\u0645 === \u0644\u0644\u0645\u0642\u0627\u0631\u0646\u0629: if (x === 5)",fixEn:"= is for assignment only, use === for comparison: if (x === 5)"},{mistakeAr:"\u0646\u0633\u064A\u0627\u0646 \u0623\u0646 \u0627\u0644\u0642\u0633\u0645\u0629 \u0642\u062F \u062A\u0639\u0637\u064A \u0639\u062F\u062F\u0627\u064B \u0639\u0634\u0631\u064A\u0627\u064B: 10 / 3 = 3.33",mistakeEn:"Forgetting division may give a decimal: 10 / 3 = 3.33",fixAr:"\u0625\u0630\u0627 \u0623\u0631\u062F\u062A \u0627\u0644\u0642\u0633\u0645\u0629 \u0627\u0644\u0635\u062D\u064A\u062D\u0629 \u0627\u0633\u062A\u062E\u062F\u0645 Math.floor() \u0623\u0648 // \u0641\u064A Python",fixEn:"For integer division use Math.floor() in JS or // in Python"}]},{id:10,part:2,partTitleAr:"\u0627\u0644\u0644\u0628\u0646\u0627\u062A \u0627\u0644\u0623\u0633\u0627\u0633\u064A\u0629",partTitleEn:"Core Building Blocks",titleAr:"\u062A\u062D\u0648\u064A\u0644 \u0627\u0644\u0623\u0646\u0648\u0627\u0639",titleEn:"Type Casting",descriptionAr:"\u062A\u0639\u0644\u0645 \u0643\u064A\u0641 \u062A\u062D\u0648\u0651\u0644 \u0627\u0644\u0628\u064A\u0627\u0646\u0627\u062A \u0645\u0646 \u0646\u0648\u0639 \u0625\u0644\u0649 \u0622\u062E\u0631 \u2014 \u0645\u0646 \u0631\u0642\u0645 \u0625\u0644\u0649 \u0646\u0635 \u0648\u0628\u0627\u0644\u0639\u0643\u0633.",descriptionEn:"Learn how to convert data from one type to another \u2014 from number to string and back.",estimatedTime:"20 min",level:"beginner",icon:"\u{1F504}",color:"#58a6ff",conceptsAr:["\u0627\u0644\u062A\u062D\u0648\u064A\u0644 \u0627\u0644\u0635\u0631\u064A\u062D","\u0627\u0644\u062A\u062D\u0648\u064A\u0644 \u0627\u0644\u0636\u0645\u0646\u064A","String()","Number()","parseInt() \u0648 parseFloat()"],conceptsEn:["Explicit conversion","Implicit conversion","String()","Number()","parseInt() and parseFloat()"],conceptDescriptionsAr:['\u0627\u0644\u062A\u062D\u0648\u064A\u0644 \u0627\u0644\u0635\u0631\u064A\u062D \u064A\u0639\u0646\u064A \u0623\u0646\u062A \u062A\u0637\u0644\u0628\u0647 \u0628\u0648\u0636\u0648\u062D \u0645\u062B\u0644 Number("42") \u0623\u0648 String(99).','\u0627\u0644\u062A\u062D\u0648\u064A\u0644 \u0627\u0644\u0636\u0645\u0646\u064A \u064A\u062D\u062F\u062B \u062A\u0644\u0642\u0627\u0626\u064A\u064B\u0627 \u0645\u062B\u0644 "5" + 1 \u064A\u064F\u0639\u0637\u064A "51" \u0644\u0623\u0646 JavaScript \u062A\u062D\u0648\u0651\u0644 \u0627\u0644\u0631\u0642\u0645 \u0644\u0646\u0635.',"String() \u062A\u064F\u062D\u0648\u0651\u0644 \u0623\u064A \u0642\u064A\u0645\u0629 \u0625\u0644\u0649 \u0646\u0635 \u0628\u0645\u0627 \u0641\u064A\u0647\u0627 \u0627\u0644\u0623\u0631\u0642\u0627\u0645 \u0648\u0627\u0644\u0642\u064A\u0645 \u0627\u0644\u0645\u0646\u0637\u0642\u064A\u0629.","Number() \u062A\u064F\u062D\u0648\u0651\u0644 \u0627\u0644\u0646\u0635 \u0625\u0644\u0649 \u0631\u0642\u0645\u060C \u0648\u062A\u064F\u0639\u064A\u062F NaN \u0625\u0630\u0627 \u0643\u0627\u0646 \u0627\u0644\u0646\u0635 \u063A\u064A\u0631 \u0631\u0642\u0645\u064A.","parseInt() \u062A\u0623\u062E\u0630 \u0627\u0644\u062C\u0632\u0621 \u0627\u0644\u0635\u062D\u064A\u062D \u0641\u0642\u0637\u060C \u0648 parseFloat() \u062A\u0623\u062E\u0630 \u0627\u0644\u0631\u0642\u0645 \u0628\u0643\u0627\u0645\u0644 \u062E\u0627\u0646\u0627\u062A \u0627\u0644\u0639\u0634\u0631\u064A\u0629."],conceptDescriptionsEn:['Explicit conversion means you request it directly, like Number("42") or String(99).','Implicit conversion happens automatically, like "5" + 1 gives "51" because JavaScript converts the number to a string.',"String() converts any value to a string, including numbers and booleans.","Number() converts a string to a number, and returns NaN if the string is not numeric.","parseInt() takes only the integer part, while parseFloat() keeps all decimal digits."],diagramType:"type-cast",codeExamples:[{language:"javascript",code:`// To Number
let str = "42";
let num = Number(str);
console.log(num, typeof num); // 42 "number"

let int = parseInt("3.7");
console.log(int); // 3

let float = parseFloat("3.7");
console.log(float); // 3.7

// To String
let age = 25;
let ageStr = String(age);
console.log(ageStr, typeof ageStr); // "25" "string"

// To Boolean
console.log(Boolean(0));   // false
console.log(Boolean(""));  // false
console.log(Boolean(1));   // true
console.log(Boolean("hi")); // true`,descriptionAr:"\u062A\u062D\u0648\u064A\u0644 \u0627\u0644\u0623\u0646\u0648\u0627\u0639 \u0641\u064A JavaScript",descriptionEn:"Type conversion in JavaScript"}],editorLinks:[{label:"Programiz JS Editor",url:"https://www.programiz.com/javascript/online-compiler/",language:"javascript"}],keyPointsAr:['Number("42") \u064A\u062D\u0648\u0644 \u0627\u0644\u0646\u0635 "42" \u0625\u0644\u0649 \u0631\u0642\u0645 42','String(25) \u064A\u062D\u0648\u0644 \u0627\u0644\u0631\u0642\u0645 25 \u0625\u0644\u0649 \u0646\u0635 "25"','\u0627\u0644\u0642\u064A\u0645 \u0627\u0644\u0641\u0627\u0631\u063A\u0629 (0, "", null) \u062A\u062A\u062D\u0648\u0644 \u0625\u0644\u0649 false',"parseInt \u062A\u0623\u062E\u0630 \u0627\u0644\u062C\u0632\u0621 \u0627\u0644\u0635\u062D\u064A\u062D \u0641\u0642\u0637 \u0645\u0646 \u0627\u0644\u0646\u0635 \u0627\u0644\u0631\u0642\u0645\u064A"],keyPointsEn:['Number("42") converts the string "42" to number 42','String(25) converts number 25 to string "25"','Empty values (0, "", null) convert to false',"parseInt takes only the integer part of a numeric string"],quiz:[{questionAr:'\u0645\u0627 \u0646\u0627\u062A\u062C Number("42")\u061F',questionEn:'What is the result of Number("42")?',options:['"42"',"42","NaN","undefined"],correctIndex:1,explanationAr:"Number() \u064A\u062D\u0648\u0644 \u0627\u0644\u0646\u0635 \u0627\u0644\u0631\u0642\u0645\u064A \u0625\u0644\u0649 \u0631\u0642\u0645 \u062D\u0642\u064A\u0642\u064A.",explanationEn:"Number() converts a numeric string to an actual number."},{questionAr:'\u0645\u0627 \u0646\u0627\u062A\u062C Number("hello")\u061F',questionEn:'What is the result of Number("hello")?',options:["0",'"hello"',"NaN","\u062E\u0637\u0623 / Error"],correctIndex:2,explanationAr:"\u0625\u0630\u0627 \u0644\u0645 \u064A\u0643\u0646 \u0627\u0644\u0646\u0635 \u0631\u0642\u0645\u0627\u064B \u062A\u064F\u0639\u064A\u062F Number() \u0627\u0644\u0642\u064A\u0645\u0629 NaN (\u0644\u064A\u0633 \u0631\u0642\u0645\u0627\u064B).",explanationEn:"If the string is not numeric, Number() returns NaN (Not a Number)."}],challenges:[{titleAr:"\u062A\u062D\u062F\u064A: \u062A\u062D\u0648\u064A\u0644 \u0648\u062D\u0633\u0627\u0628",titleEn:"Challenge: Convert and Calculate",taskAr:'\u0644\u062F\u064A\u0643 \u0639\u0645\u0631 \u0643\u0646\u0635: age = "25". \u062D\u0648\u0651\u0644\u0647 \u0644\u0631\u0642\u0645 \u062B\u0645 \u0623\u0636\u0641 5 \u0625\u0644\u064A\u0647 \u0648\u0627\u0637\u0628\u0639 \u0627\u0644\u0646\u062A\u064A\u062C\u0629.',taskEn:'You have an age as string: age = "25". Convert it to a number, add 5, and print the result.',hintAr:"\u0627\u0633\u062A\u062E\u062F\u0645 int() \u0641\u064A Python \u0623\u0648 Number() \u0641\u064A JavaScript",hintEn:"Use int() in Python or Number() in JavaScript",solutionPython:`age = "25"
age_num = int(age)
result = age_num + 5
print(result)  # 30`,solutionJs:`let age = "25";
let ageNum = Number(age);
let result = ageNum + 5;
console.log(result); // 30`,expectedOutput:"30"}],commonMistakes:[{mistakeAr:'\u0625\u0636\u0627\u0641\u0629 \u0631\u0642\u0645 \u0644\u0646\u0635: "5" + 1 = "51" \u0648\u0644\u064A\u0633 6',mistakeEn:'Adding a number to a string: "5" + 1 = "51" not 6',fixAr:'\u062D\u0648\u0651\u0644 \u0627\u0644\u0646\u0635 \u0644\u0631\u0642\u0645 \u0623\u0648\u0644\u0627\u064B: Number("5") + 1 = 6',fixEn:'Convert the string first: Number("5") + 1 = 6'},{mistakeAr:"\u0627\u0644\u0627\u0639\u062A\u0645\u0627\u062F \u0639\u0644\u0649 \u062A\u062D\u0648\u064A\u0644 \u0636\u0645\u0646\u064A \u063A\u064A\u0631 \u0645\u062A\u0648\u0642\u0639",mistakeEn:"Relying on unexpected implicit conversion",fixAr:"\u0627\u0633\u062A\u062E\u062F\u0645 \u062F\u0627\u0626\u0645\u0627\u064B \u0627\u0644\u062A\u062D\u0648\u064A\u0644 \u0627\u0644\u0635\u0631\u064A\u062D \u0645\u062B\u0644 Number() \u0648 String() \u0644\u062A\u062C\u0646\u0628 \u0627\u0644\u0645\u0641\u0627\u062C\u0622\u062A",fixEn:"Always use explicit conversion like Number() and String() to avoid surprises"}]},{id:11,part:2,partTitleAr:"\u0627\u0644\u0644\u0628\u0646\u0627\u062A \u0627\u0644\u0623\u0633\u0627\u0633\u064A\u0629",partTitleEn:"Core Building Blocks",titleAr:"\u0627\u0644\u0625\u062F\u062E\u0627\u0644 \u0648\u0627\u0644\u0625\u062E\u0631\u0627\u062C",titleEn:"Input and Output",descriptionAr:"\u062A\u0639\u0644\u0645 \u0643\u064A\u0641 \u062A\u062A\u0644\u0642\u0649 \u0645\u062F\u062E\u0644\u0627\u062A \u0645\u0646 \u0627\u0644\u0645\u0633\u062A\u062E\u062F\u0645 \u0648\u062A\u0639\u0631\u0636 \u0646\u062A\u0627\u0626\u062C \u0639\u0644\u0649 \u0627\u0644\u0634\u0627\u0634\u0629.",descriptionEn:"Learn how to receive input from the user and display results on the screen.",estimatedTime:"20 min",level:"beginner",icon:"\u2328\uFE0F",color:"#d29922",conceptsAr:["console.log()","prompt()","alert()","\u0627\u0644\u0625\u062F\u062E\u0627\u0644 \u0641\u064A Node.js","\u0627\u0644\u0625\u062F\u062E\u0627\u0644 \u0641\u064A Python"],conceptsEn:["console.log()","prompt()","alert()","Input in Node.js","Input in Python"],conceptDescriptionsAr:["console.log() \u062A\u0637\u0628\u0639 \u0623\u064A \u0642\u064A\u0645\u0629 \u0641\u064A \u0648\u062D\u062F\u0629 \u062A\u062D\u0643\u0645 \u0627\u0644\u0645\u0637\u0648\u0631 \u0648\u0647\u064A \u0627\u0644\u0623\u062F\u0627\u0629 \u0627\u0644\u0623\u0633\u0627\u0633\u064A\u0629 \u0644\u062A\u062A\u0628\u0639 \u0633\u064A\u0631 \u0627\u0644\u0628\u0631\u0646\u0627\u0645\u062C.","prompt() \u062A\u0641\u062A\u062D \u0646\u0627\u0641\u0630\u0629 \u062D\u0648\u0627\u0631 \u0641\u064A \u0627\u0644\u0645\u062A\u0635\u0641\u062D \u062A\u0637\u0644\u0628 \u0646\u0635\u064B\u0627 \u0645\u0646 \u0627\u0644\u0645\u0633\u062A\u062E\u062F\u0645 \u0648\u062A\u064F\u0639\u064A\u062F\u0647 \u0643\u0640 String.","alert() \u062A\u0639\u0631\u0636 \u0631\u0633\u0627\u0644\u0629 \u0641\u064A \u0646\u0627\u0641\u0630\u0629 \u0645\u0646\u0628\u062B\u0642\u0629 \u0628\u0627\u0644\u0645\u062A\u0635\u0641\u062D \u0648\u062A\u0646\u062A\u0638\u0631 \u0627\u0644\u0645\u0633\u062A\u062E\u062F\u0645 \u062D\u062A\u0649 \u064A\u063A\u0644\u0642\u0647\u0627.","\u0641\u064A Node.js \u064A\u0645\u0643\u0646 \u0642\u0631\u0627\u0621\u0629 \u0627\u0644\u0625\u062F\u062E\u0627\u0644 \u0639\u0628\u0631 readline \u0623\u0648 \u0645\u0643\u062A\u0628\u0627\u062A \u062E\u0627\u0631\u062C\u064A\u0629 \u0644\u0623\u0646 prompt() \u063A\u064A\u0631 \u0645\u062A\u0627\u062D\u0629.","\u0641\u064A Python \u062A\u0633\u062A\u062E\u062F\u0645 \u062F\u0627\u0644\u0629 input() \u0644\u0642\u0631\u0627\u0621\u0629 \u0646\u0635 \u0645\u0646 \u0627\u0644\u0645\u0633\u062A\u062E\u062F\u0645 \u0641\u064A \u0633\u0637\u0631 \u0627\u0644\u0623\u0648\u0627\u0645\u0631 \u0648\u062A\u064F\u0639\u064A\u062F\u0647 \u062F\u0627\u0626\u0645\u064B\u0627 \u0643\u0640 str."],conceptDescriptionsEn:["console.log() prints any value to the developer console and is the primary tool for tracking program flow.","prompt() opens a dialog box in the browser asking the user for text and returns it as a String.","alert() displays a message in a browser popup and waits for the user to close it.","In Node.js, input is read via readline or external libraries since prompt() is not available.","In Python, the input() function reads text from the user on the command line and always returns a str."],diagramType:"io",codeExamples:[{language:"javascript",code:`// Output
console.log("Hello, World!");
console.log("Sum:", 2 + 3);

// In a browser \u2014 get user input
let name = prompt("What is your name?");
console.log("Hello, " + name + "!");

// Show a popup
alert("Welcome!");`,descriptionAr:"\u0627\u0644\u0625\u062F\u062E\u0627\u0644 \u0648\u0627\u0644\u0625\u062E\u0631\u0627\u062C \u0641\u064A \u0627\u0644\u0645\u062A\u0635\u0641\u062D",descriptionEn:"Input and output in the browser"},{language:"python",code:`# Output
print("Hello, World!")
print("Sum:", 2 + 3)

# Input
name = input("What is your name? ")
print("Hello,", name + "!")`,descriptionAr:"\u0627\u0644\u0625\u062F\u062E\u0627\u0644 \u0648\u0627\u0644\u0625\u062E\u0631\u0627\u062C \u0641\u064A Python",descriptionEn:"Input and output in Python"}],editorLinks:[{label:"Programiz JS Editor",url:"https://www.programiz.com/javascript/online-compiler/",language:"javascript"},{label:"Programiz Python Editor",url:"https://www.programiz.com/python-programming/online-compiler/",language:"python"}],keyPointsAr:["console.log() \u064A\u0637\u0628\u0639 \u0641\u064A \u0648\u062D\u062F\u0629 \u0627\u0644\u062A\u062D\u0643\u0645 (console)","prompt() \u064A\u0641\u062A\u062D \u0646\u0627\u0641\u0630\u0629 \u0644\u0625\u062F\u062E\u0627\u0644 \u0646\u0635 \u0641\u064A \u0627\u0644\u0645\u062A\u0635\u0641\u062D","input() \u0641\u064A Python \u064A\u0642\u0631\u0623 \u0646\u0635\u064B\u0627 \u0645\u0646 \u0627\u0644\u0645\u0633\u062A\u062E\u062F\u0645","\u062C\u0645\u064A\u0639 \u0645\u062F\u062E\u0644\u0627\u062A prompt() \u0648 input() \u062A\u064F\u0631\u062C\u0639 \u0646\u0635\u064B\u0627 \u2014 \u062D\u0648\u0651\u0644\u0647\u0627 \u0625\u0630\u0627 \u0627\u062D\u062A\u062C\u062A \u0631\u0642\u0645\u064B\u0627"],keyPointsEn:["console.log() prints to the developer console","prompt() opens a dialog to get text input in the browser","input() in Python reads text from the user","All prompt() and input() values are strings \u2014 convert them if you need a number"],quiz:[{questionAr:"\u0645\u0627 \u0646\u0648\u0639 \u0627\u0644\u0642\u064A\u0645\u0629 \u0627\u0644\u062A\u064A \u062A\u064F\u0639\u064A\u062F\u0647\u0627 input() \u0641\u064A Python\u061F",questionEn:"What type does Python's input() always return?",options:["Number","Boolean","String","\u064A\u0639\u062A\u0645\u062F / Depends"],correctIndex:2,explanationAr:"input() \u062A\u064F\u0639\u064A\u062F \u062F\u0627\u0626\u0645\u0627\u064B String \u2014 \u062D\u062A\u0649 \u0644\u0648 \u0643\u062A\u0628 \u0627\u0644\u0645\u0633\u062A\u062E\u062F\u0645 \u0631\u0642\u0645\u0627\u064B.",explanationEn:"input() always returns a String \u2014 even if the user types a number."},{questionAr:"\u0645\u0627 \u0627\u0644\u0641\u0631\u0642 \u0628\u064A\u0646 console.log() \u0648 alert()\u061F",questionEn:"What is the difference between console.log() and alert()?",options:["\u0644\u0627 \u0641\u0631\u0642 / No difference","console.log \u0641\u064A \u0648\u062D\u062F\u0629 \u0627\u0644\u062A\u062D\u0643\u0645\u060C alert \u0646\u0627\u0641\u0630\u0629 \u0645\u0646\u0628\u062B\u0642\u0629 / console.log in console, alert in popup","alert \u0623\u0633\u0631\u0639 / alert is faster","console.log \u0644\u0644\u0623\u062E\u0637\u0627\u0621 \u0641\u0642\u0637 / console.log is for errors only"],correctIndex:1,explanationAr:"console.log \u062A\u0637\u0628\u0639 \u0641\u064A \u0648\u062D\u062F\u0629 \u0627\u0644\u062A\u062D\u0643\u0645 \u0628\u064A\u0646\u0645\u0627 alert \u062A\u0641\u062A\u062D \u0646\u0627\u0641\u0630\u0629 \u0645\u0646\u0628\u062B\u0642\u0629.",explanationEn:"console.log prints in the console while alert opens a popup window."}],challenges:[{titleAr:"\u062A\u062D\u062F\u064A: \u0627\u062D\u0633\u0628 \u0639\u0645\u0631\u0643",titleEn:"Challenge: Calculate Your Age",taskAr:"\u0627\u0637\u0644\u0628 \u0645\u0646 \u0627\u0644\u0645\u0633\u062A\u062E\u062F\u0645 \u0633\u0646\u0629 \u0645\u064A\u0644\u0627\u062F\u0647 \u062B\u0645 \u0627\u062D\u0633\u0628 \u0639\u0645\u0631\u0647 \u0648\u0627\u0637\u0628\u0639\u0647.",taskEn:"Ask the user for their birth year, then calculate and print their age.",hintAr:"\u0627\u0644\u0639\u0645\u0631 = 2025 - \u0633\u0646\u0629 \u0627\u0644\u0645\u064A\u0644\u0627\u062F. \u062A\u0630\u0643\u0631 \u062A\u062D\u0648\u064A\u0644 \u0627\u0644\u0625\u062F\u062E\u0627\u0644 \u0644\u0631\u0642\u0645!",hintEn:"Age = 2025 - birth year. Remember to convert input to a number!",solutionPython:`birth_year = int(input("\u0623\u062F\u062E\u0644 \u0633\u0646\u0629 \u0645\u064A\u0644\u0627\u062F\u0643: "))
age = 2025 - birth_year
print(f"\u0639\u0645\u0631\u0643 \u0647\u0648 {age} \u0633\u0646\u0629")`,solutionJs:`let birthYear = Number(prompt("Enter your birth year:"));
let age = 2025 - birthYear;
console.log("Your age is " + age);`}],commonMistakes:[{mistakeAr:"\u0645\u062D\u0627\u0648\u0644\u0629 \u062C\u0645\u0639 \u0645\u062F\u062E\u0644 \u0631\u0642\u0645\u064A \u0645\u0628\u0627\u0634\u0631\u0629: age = input(); total = age + 5",mistakeEn:"Trying to add numeric input directly: age = input(); total = age + 5",fixAr:"\u062D\u0648\u0651\u0644 \u0627\u0644\u0645\u062F\u062E\u0644 \u0644\u0631\u0642\u0645 \u0623\u0648\u0644\u0627\u064B: age = int(input()) \u062B\u0645 total = age + 5",fixEn:"Convert input to number first: age = int(input()) then total = age + 5"}]}];var m=[{id:12,part:3,partTitleAr:"\u0627\u062A\u062E\u0627\u0630 \u0627\u0644\u0642\u0631\u0627\u0631\u0627\u062A \u0648\u0627\u0644\u062A\u0643\u0631\u0627\u0631",partTitleEn:"Making Decisions & Repeating Work",titleAr:"\u0627\u0644\u0634\u0631\u0648\u0637 \u0648\u062C\u0645\u0644 if",titleEn:"Conditions and If Statements",descriptionAr:"\u062A\u0639\u0644\u0645 \u0643\u064A\u0641 \u062A\u062C\u0639\u0644 \u0628\u0631\u0646\u0627\u0645\u062C\u0643 \u064A\u062A\u062E\u0630 \u0642\u0631\u0627\u0631\u0627\u062A \u0628\u0646\u0627\u0621\u064B \u0639\u0644\u0649 \u0634\u0631\u0648\u0637 \u0645\u0639\u064A\u0646\u0629 \u0628\u0627\u0633\u062A\u062E\u062F\u0627\u0645 if/else.",descriptionEn:"Learn how to make your program take decisions based on conditions using if/else.",estimatedTime:"35 min",level:"beginner",icon:"\u{1F500}",color:"#f85149",conceptsAr:["if","else","else if","\u0627\u0644\u062A\u0639\u0628\u064A\u0631\u0627\u062A \u0627\u0644\u0634\u0631\u0637\u064A\u0629","switch"],conceptsEn:["if","else","else if","Conditional expressions","switch"],conceptDescriptionsAr:["if \u062A\u064F\u0646\u0641\u0651\u0630 \u0643\u062A\u0644\u0629 \u0627\u0644\u0643\u0648\u062F \u0641\u0642\u0637 \u0625\u0630\u0627 \u0643\u0627\u0646 \u0627\u0644\u0634\u0631\u0637 \u0628\u064A\u0646 \u0627\u0644\u0642\u0648\u0633\u064A\u0646 \u064A\u064F\u0642\u064A\u064E\u0651\u0645 \u0625\u0644\u0649 true.","else \u062A\u064F\u0646\u0641\u0651\u0630 \u0643\u062A\u0644\u0629 \u0628\u062F\u064A\u0644\u0629 \u0639\u0646\u062F\u0645\u0627 \u064A\u0643\u0648\u0646 \u0634\u0631\u0637 if \u062E\u0627\u0637\u0626\u064B\u0627\u060C \u0648\u0647\u064A \u0627\u062E\u062A\u064A\u0627\u0631\u064A\u0629.","else if \u062A\u064F\u062A\u064A\u062D \u0641\u062D\u0635 \u0634\u0631\u0648\u0637 \u0625\u0636\u0627\u0641\u064A\u0629 \u0628\u0627\u0644\u062A\u0631\u062A\u064A\u0628 \u062D\u062A\u0649 \u064A\u062A\u062D\u0642\u0642 \u0623\u062D\u062F\u0647\u0627 \u0623\u0648 \u062A\u064F\u0646\u0641\u064E\u0651\u0630 else \u0641\u064A \u0627\u0644\u0646\u0647\u0627\u064A\u0629.","\u0627\u0644\u0639\u0627\u0645\u0644 \u0627\u0644\u062B\u0644\u0627\u062B\u064A condition ? valueIfTrue : valueIfFalse \u0645\u062E\u062A\u0635\u0631 \u0645\u0646\u0627\u0633\u0628 \u0644\u0644\u0634\u0631\u0648\u0637 \u0627\u0644\u0628\u0633\u064A\u0637\u0629.","switch \u064A\u064F\u0642\u0627\u0631\u0646 \u0645\u062A\u063A\u064A\u0631\u064B\u0627 \u0628\u0642\u0627\u0626\u0645\u0629 \u0642\u064A\u0645 \u062B\u0627\u0628\u062A\u0629 \u0648\u064A\u0646\u062A\u0642\u0644 \u0625\u0644\u0649 \u0627\u0644\u062D\u0627\u0644\u0629 \u0627\u0644\u0645\u0637\u0627\u0628\u0642\u0629 \u0645\u0628\u0627\u0634\u0631\u0629."],conceptDescriptionsEn:["if executes a block of code only when the condition in parentheses evaluates to true.","else runs an alternative block when the if condition is false, and is optional.","else if lets you check additional conditions in order until one matches, or else runs at the end.","The ternary operator condition ? valueIfTrue : valueIfFalse is a compact form suited for simple conditions.","switch compares a variable against a list of fixed values and jumps directly to the matching case."],diagramType:"flowchart",codeExamples:[{language:"javascript",code:`let score = 85;

if (score >= 90) {
  console.log("Grade: A");
} else if (score >= 80) {
  console.log("Grade: B");
} else if (score >= 70) {
  console.log("Grade: C");
} else {
  console.log("Grade: F");
}
// Output: Grade: B`,descriptionAr:"\u0646\u0638\u0627\u0645 \u062F\u0631\u062C\u0627\u062A \u0628\u0627\u0633\u062A\u062E\u062F\u0627\u0645 if/else if/else",descriptionEn:"Grading system using if/else if/else"},{language:"javascript",code:`// Ternary operator (short if/else)
let age = 20;
let status = age >= 18 ? "Adult" : "Minor";
console.log(status); // Adult`,descriptionAr:"\u0627\u0644\u0639\u0627\u0645\u0644 \u0627\u0644\u062B\u0644\u0627\u062B\u064A \u2014 \u0637\u0631\u064A\u0642\u0629 \u0645\u062E\u062A\u0635\u0631\u0629 \u0644\u0640 if/else",descriptionEn:"Ternary operator \u2014 a shorthand for if/else"}],editorLinks:[{label:"Programiz JS Editor",url:"https://www.programiz.com/javascript/online-compiler/",language:"javascript"}],keyPointsAr:["if \u064A\u0646\u0641\u0651\u0630 \u0627\u0644\u0643\u0648\u062F \u0641\u0642\u0637 \u0625\u0630\u0627 \u0643\u0627\u0646 \u0627\u0644\u0634\u0631\u0637 \u0635\u062D\u064A\u062D\u064B\u0627 (true)","else \u064A\u0646\u0641\u0651\u0630 \u0627\u0644\u0643\u0648\u062F \u0625\u0630\u0627 \u0643\u0627\u0646 \u0627\u0644\u0634\u0631\u0637 \u062E\u0627\u0637\u0626\u064B\u0627 (false)","else if \u064A\u062A\u064A\u062D \u0641\u062D\u0635 \u0634\u0631\u0648\u0637 \u0625\u0636\u0627\u0641\u064A\u0629","\u0627\u0644\u0639\u0627\u0645\u0644 \u0627\u0644\u062B\u0644\u0627\u062B\u064A ? : \u0645\u0641\u064A\u062F \u0644\u0644\u062D\u0627\u0644\u0627\u062A \u0627\u0644\u0628\u0633\u064A\u0637\u0629"],keyPointsEn:["if executes code only when the condition is true","else executes code when the condition is false","else if lets you check additional conditions","The ternary operator ? : is useful for simple cases"],quiz:[{questionAr:"\u0645\u0627\u0630\u0627 \u064A\u064F\u0646\u0641\u0651\u0630 \u0627\u0644\u0643\u0648\u062F \u062F\u0627\u062E\u0644 else\u061F",questionEn:"When does the code inside else execute?",options:["\u062F\u0627\u0626\u0645\u0627\u064B / Always","\u0639\u0646\u062F\u0645\u0627 \u064A\u0643\u0648\u0646 \u0627\u0644\u0634\u0631\u0637 \u0635\u062D\u064A\u062D\u0627\u064B / When condition is true","\u0639\u0646\u062F\u0645\u0627 \u064A\u0643\u0648\u0646 \u0627\u0644\u0634\u0631\u0637 \u062E\u0627\u0637\u0626\u0627\u064B / When condition is false","\u0644\u0627 \u064A\u064F\u0646\u0641\u0651\u0630 \u0623\u0628\u062F\u0627\u064B / Never"],correctIndex:2,explanationAr:"else \u064A\u0639\u0645\u0644 \u0641\u0642\u0637 \u0639\u0646\u062F\u0645\u0627 \u064A\u0643\u0648\u0646 \u0634\u0631\u0637 if \u062E\u0627\u0637\u0626\u0627\u064B (false).",explanationEn:"else runs only when the if condition is false."},{questionAr:'\u0645\u0627 \u0646\u0627\u062A\u062C: x = 15; "\u0643\u0628\u064A\u0631" if x > 10 else "\u0635\u063A\u064A\u0631"\u061F',questionEn:'What is the output of: x = 15; "big" if x > 10 else "small"?',options:['"\u0635\u063A\u064A\u0631" / "small"','"\u0643\u0628\u064A\u0631" / "big"',"\u062E\u0637\u0623 / Error","15"],correctIndex:1,explanationAr:'15 > 10 \u0635\u062D\u064A\u062D\u0629 \u0641\u064A\u064F\u0631\u062C\u0639 "\u0643\u0628\u064A\u0631".',explanationEn:'15 > 10 is true so it returns "big".'},{questionAr:"\u0643\u0645 \u0634\u0631\u0637\u0627\u064B \u064A\u0645\u0643\u0646\u0643 \u0625\u0636\u0627\u0641\u0629 \u0628\u0640 else if\u061F",questionEn:"How many else if conditions can you add?",options:["\u0648\u0627\u062D\u062F \u0641\u0642\u0637 / Only one","\u0627\u062B\u0646\u0627\u0646 \u0641\u0642\u0637 / Only two","\u062B\u0644\u0627\u062B\u0629 / Three","\u0628\u0644\u0627 \u062D\u062F / Unlimited"],correctIndex:3,explanationAr:"\u064A\u0645\u0643\u0646\u0643 \u0625\u0636\u0627\u0641\u0629 \u0623\u064A \u0639\u062F\u062F \u0645\u0646 else if \u062D\u0633\u0628 \u0627\u0644\u062D\u0627\u062C\u0629.",explanationEn:"You can add as many else if blocks as needed."}],commonMistakes:[{mistakeAr:"\u0646\u0633\u064A\u0627\u0646 \u0627\u0644\u0646\u0642\u0637\u062A\u064A\u0646 : \u0628\u0639\u062F if \u0641\u064A Python: if x > 5",mistakeEn:"Forgetting the colon : after if in Python: if x > 5",fixAr:"\u0641\u064A Python \u064A\u062C\u0628 \u0648\u0636\u0639 : \u0628\u0639\u062F \u0627\u0644\u0634\u0631\u0637: if x > 5:",fixEn:"In Python the colon is required after the condition: if x > 5:"},{mistakeAr:"\u0627\u0633\u062A\u062E\u062F\u0627\u0645 = \u0628\u062F\u0644\u0627\u064B \u0645\u0646 == \u0641\u064A \u0627\u0644\u0634\u0631\u0637: if (x = 5)",mistakeEn:"Using = instead of == in the condition: if (x = 5)",fixAr:"\u0627\u0644\u0634\u0631\u0637 \u064A\u062D\u062A\u0627\u062C == \u0623\u0648 === \u0648\u0644\u064A\u0633 = : if (x === 5)",fixEn:"Conditions need == or === not = : if (x === 5)"}],challenges:[{titleAr:"\u062A\u062D\u062F\u064A: \u0641\u0627\u062D\u0635 \u0627\u0644\u0639\u0645\u0631",titleEn:"Challenge: Age Checker",taskAr:"\u0627\u0643\u062A\u0628 \u0628\u0631\u0646\u0627\u0645\u062C\u0627\u064B \u064A\u062D\u062F\u062F \u0625\u0630\u0627 \u0643\u0627\u0646 \u0627\u0644\u0634\u062E\u0635 \u0637\u0641\u0644\u0627\u064B (\u0623\u0642\u0644 \u0645\u0646 13)\u060C \u0645\u0631\u0627\u0647\u0642\u0627\u064B (13-17)\u060C \u0623\u0648 \u0628\u0627\u0644\u063A\u0627\u064B (18+).",taskEn:"Write a program that determines if a person is a child (under 13), teen (13-17), or adult (18+).",hintAr:"\u0627\u0633\u062A\u062E\u062F\u0645 if / elif / else \u0645\u0639 \u0639\u0645\u0631 \u0645\u062D\u062F\u062F",hintEn:"Use if / elif / else with a specific age value",solutionPython:`age = 16

if age < 13:
    print("\u0637\u0641\u0644 / Child")
elif age < 18:
    print("\u0645\u0631\u0627\u0647\u0642 / Teen")
else:
    print("\u0628\u0627\u0644\u063A / Adult")`,solutionJs:`let age = 16;

if (age < 13) {
    console.log("Child");
} else if (age < 18) {
    console.log("Teen");
} else {
    console.log("Adult");
}`,expectedOutput:"Teen"}]},{id:13,part:3,partTitleAr:"\u0627\u062A\u062E\u0627\u0630 \u0627\u0644\u0642\u0631\u0627\u0631\u0627\u062A \u0648\u0627\u0644\u062A\u0643\u0631\u0627\u0631",partTitleEn:"Making Decisions & Repeating Work",titleAr:"\u0627\u0644\u0645\u0635\u0641\u0648\u0641\u0627\u062A",titleEn:"Arrays",descriptionAr:"\u0627\u0644\u0645\u0635\u0641\u0648\u0641\u0629 \u062A\u064F\u062E\u0632\u0651\u0646 \u0639\u062F\u0629 \u0642\u064A\u0645 \u0641\u064A \u0645\u062A\u063A\u064A\u0631 \u0648\u0627\u062D\u062F. \u062A\u0639\u0644\u0645 \u0643\u064A\u0641 \u062A\u0646\u0634\u0626\u0647\u0627 \u0648\u062A\u0635\u0644 \u0625\u0644\u0649 \u0639\u0646\u0627\u0635\u0631\u0647\u0627 \u0648\u062A\u0639\u062F\u0651\u0644\u0647\u0627.",descriptionEn:"An array stores multiple values in one variable. Learn how to create, access, and modify arrays.",estimatedTime:"35 min",level:"beginner",icon:"\u{1F4CB}",color:"#bc8cff",conceptsAr:["\u0625\u0646\u0634\u0627\u0621 \u0627\u0644\u0645\u0635\u0641\u0648\u0641\u0629","\u0627\u0644\u0641\u0647\u0631\u0633\u0629","\u0625\u0636\u0627\u0641\u0629 \u0648\u062D\u0630\u0641 \u0639\u0646\u0627\u0635\u0631","\u0627\u0644\u062A\u0643\u0631\u0627\u0631 \u0639\u0644\u0649 \u0627\u0644\u0645\u0635\u0641\u0648\u0641\u0629","\u0637\u0631\u0642 \u0627\u0644\u0645\u0635\u0641\u0648\u0641\u0627\u062A"],conceptsEn:["Creating arrays","Indexing","Adding and removing elements","Iterating arrays","Array methods"],conceptDescriptionsAr:['\u062A\u064F\u0646\u0634\u0623 \u0627\u0644\u0645\u0635\u0641\u0648\u0641\u0629 \u0628\u0648\u0636\u0639 \u0627\u0644\u0642\u064A\u0645 \u0628\u064A\u0646 \u0642\u0648\u0633\u064A\u0646 \u0645\u0631\u0628\u0639\u064A\u0646 \u0645\u062B\u0644 ["Apple", "Banana", "Orange"].',"\u0627\u0644\u0641\u0647\u0631\u0633\u0629 \u062A\u0628\u062F\u0623 \u0645\u0646 0\u060C \u0641\u0627\u0644\u0639\u0646\u0635\u0631 \u0627\u0644\u0623\u0648\u0644 \u0641\u064A fruits[0] \u0648\u0627\u0644\u062B\u0627\u0646\u064A \u0641\u064A fruits[1].","push() \u064A\u064F\u0636\u064A\u0641 \u0639\u0646\u0635\u0631\u064B\u0627 \u0641\u064A \u0627\u0644\u0646\u0647\u0627\u064A\u0629\u060C pop() \u064A\u062D\u0630\u0641 \u0645\u0646 \u0627\u0644\u0646\u0647\u0627\u064A\u0629\u060C \u0648unshift/shift \u064A\u0639\u0645\u0644\u0627\u0646 \u0639\u0644\u0649 \u0627\u0644\u0628\u062F\u0627\u064A\u0629.","\u062D\u0644\u0642\u0629 for...of \u062A\u064F\u0645\u0631\u0651\u0631 \u0639\u0628\u0631 \u0643\u0644 \u0639\u0646\u0635\u0631 \u0628\u0627\u0644\u062A\u0631\u062A\u064A\u0628 \u0648\u0647\u064A \u0623\u0633\u0647\u0644 \u0637\u0631\u064A\u0642\u0629 \u0644\u0644\u062A\u0643\u0631\u0627\u0631 \u0639\u0644\u0649 \u0645\u0635\u0641\u0648\u0641\u0629.","\u0637\u0631\u0642 \u0645\u062B\u0644 .map() \u0648.filter() \u0648.find() \u062A\u064F\u062A\u064A\u062D \u062A\u062D\u0648\u064A\u0644 \u0627\u0644\u0645\u0635\u0641\u0648\u0641\u0629 \u0623\u0648 \u062A\u0635\u0641\u064A\u062A\u0647\u0627 \u0628\u0643\u0648\u062F \u0623\u0642\u0644."],conceptDescriptionsEn:['An array is created by placing values inside square brackets like ["Apple", "Banana", "Orange"].',"Indexing starts at 0, so the first element is at fruits[0] and the second at fruits[1].","push() adds to the end, pop() removes from the end, while unshift/shift work on the beginning.","A for...of loop iterates over every element in order and is the easiest way to loop through an array.","Methods like .map(), .filter(), and .find() let you transform or filter an array with less code."],diagramType:"array-visual",codeExamples:[{language:"javascript",code:`let fruits = ["Apple", "Banana", "Orange"];

// Accessing elements (0-indexed)
console.log(fruits[0]); // Apple
console.log(fruits[1]); // Banana
console.log(fruits[2]); // Orange

// Array length
console.log(fruits.length); // 3

// Add to end
fruits.push("Mango");
console.log(fruits); // ["Apple","Banana","Orange","Mango"]

// Remove from end
fruits.pop();
console.log(fruits); // ["Apple","Banana","Orange"]

// Loop through array
for (let fruit of fruits) {
  console.log(fruit);
}`,descriptionAr:"\u0627\u0644\u0639\u0645\u0644\u064A\u0627\u062A \u0627\u0644\u0623\u0633\u0627\u0633\u064A\u0629 \u0639\u0644\u0649 \u0627\u0644\u0645\u0635\u0641\u0648\u0641\u0627\u062A",descriptionEn:"Basic array operations"}],editorLinks:[{label:"Programiz JS Editor",url:"https://www.programiz.com/javascript/online-compiler/",language:"javascript"}],keyPointsAr:["\u0627\u0644\u0645\u0635\u0641\u0648\u0641\u0629 \u062A\u0628\u062F\u0623 \u0628\u0627\u0644\u0641\u0647\u0631\u0633 0 \u0648\u0644\u064A\u0633 1","push() \u064A\u0636\u064A\u0641 \u0639\u0646\u0635\u0631\u064B\u0627 \u0641\u064A \u0627\u0644\u0646\u0647\u0627\u064A\u0629\u060C pop() \u064A\u062D\u0630\u0641 \u0645\u0646 \u0627\u0644\u0646\u0647\u0627\u064A\u0629",".length \u064A\u064F\u0639\u0637\u064A\u0643 \u0639\u062F\u062F \u0627\u0644\u0639\u0646\u0627\u0635\u0631 \u0641\u064A \u0627\u0644\u0645\u0635\u0641\u0648\u0641\u0629","\u064A\u0645\u0643\u0646\u0643 \u062A\u062E\u0632\u064A\u0646 \u0623\u0646\u0648\u0627\u0639 \u0645\u062E\u062A\u0644\u0641\u0629 \u0641\u064A \u0646\u0641\u0633 \u0627\u0644\u0645\u0635\u0641\u0648\u0641\u0629"],keyPointsEn:["Arrays are 0-indexed (first element is at index 0, not 1)","push() adds to the end, pop() removes from the end",".length gives you the number of elements","You can store different types in the same array"],quiz:[{questionAr:"\u0645\u0627 \u0641\u0647\u0631\u0633 \u0627\u0644\u0639\u0646\u0635\u0631 \u0627\u0644\u0623\u0648\u0644 \u0641\u064A \u0627\u0644\u0645\u0635\u0641\u0648\u0641\u0629\u061F",questionEn:"What is the index of the first element in an array?",options:["1","0","-1","\u064A\u0639\u062A\u0645\u062F / Depends"],correctIndex:1,explanationAr:"\u0627\u0644\u0645\u0635\u0641\u0648\u0641\u0627\u062A \u062A\u0628\u062F\u0623 \u0628\u0627\u0644\u0641\u0647\u0631\u0633 0\u060C \u0641\u0623\u0648\u0644 \u0639\u0646\u0635\u0631 \u0641\u064A fruits[0].",explanationEn:"Arrays are 0-indexed, so the first element is at fruits[0]."},{questionAr:"\u0645\u0627 \u0627\u0644\u062F\u0627\u0644\u0629 \u0627\u0644\u062A\u064A \u062A\u0636\u064A\u0641 \u0639\u0646\u0635\u0631\u0627\u064B \u0641\u064A \u0646\u0647\u0627\u064A\u0629 \u0627\u0644\u0645\u0635\u0641\u0648\u0641\u0629\u061F",questionEn:"Which method adds an element to the end of an array?",options:["add()","append()","push()","insert()"],correctIndex:2,explanationAr:"push() \u062A\u0636\u064A\u0641 \u0639\u0646\u0635\u0631\u0627\u064B \u0641\u064A \u0646\u0647\u0627\u064A\u0629 \u0627\u0644\u0645\u0635\u0641\u0648\u0641\u0629 \u0641\u064A JavaScript.",explanationEn:"push() adds an element to the end of an array in JavaScript."},{questionAr:"\u0645\u0627 \u0637\u0648\u0644 \u0627\u0644\u0645\u0635\u0641\u0648\u0641\u0629 [1, 2, 3, 4]\u061F",questionEn:"What is the length of [1, 2, 3, 4]?",options:["3","4","5","0"],correctIndex:1,explanationAr:"\u0627\u0644\u0645\u0635\u0641\u0648\u0641\u0629 \u062A\u062D\u062A\u0648\u064A \u0639\u0644\u0649 4 \u0639\u0646\u0627\u0635\u0631 \u0644\u0630\u0627 .length = 4.",explanationEn:"The array has 4 elements so .length = 4."}],challenges:[{titleAr:"\u062A\u062D\u062F\u064A: \u0642\u0627\u0626\u0645\u0629 \u0627\u0644\u0645\u0647\u0627\u0645",titleEn:"Challenge: Task List",taskAr:"\u0623\u0646\u0634\u0626 \u0645\u0635\u0641\u0648\u0641\u0629 \u0628\u0640 3 \u0645\u0647\u0627\u0645\u060C \u0623\u0636\u0641 \u0645\u0647\u0645\u0629 \u0631\u0627\u0628\u0639\u0629\u060C \u0627\u062D\u0630\u0641 \u0627\u0644\u0623\u0648\u0644\u0649\u060C \u062B\u0645 \u0627\u0637\u0628\u0639 \u062C\u0645\u064A\u0639 \u0627\u0644\u0645\u0647\u0627\u0645.",taskEn:"Create an array with 3 tasks, add a 4th task, remove the first one, then print all tasks.",hintAr:"\u0627\u0633\u062A\u062E\u062F\u0645 push() \u0644\u0644\u0625\u0636\u0627\u0641\u0629 \u0648 pop() \u0644\u0644\u062D\u0630\u0641 \u0645\u0646 \u0627\u0644\u0646\u0647\u0627\u064A\u0629 \u0623\u0648 shift() \u0644\u0644\u062D\u0630\u0641 \u0645\u0646 \u0627\u0644\u0628\u062F\u0627\u064A\u0629",hintEn:"Use push() to add and pop() to remove from end or shift() to remove from beginning",solutionPython:`tasks = ["\u0642\u0631\u0627\u0621\u0629", "\u062A\u0645\u0631\u064A\u0646", "\u0645\u0630\u0627\u0643\u0631\u0629"]
tasks.append("\u0646\u0648\u0645")
tasks.pop(0)  # \u062D\u0630\u0641 \u0627\u0644\u0623\u0648\u0644

for task in tasks:
    print(task)`,solutionJs:`let tasks = ["Read", "Exercise", "Study"];
tasks.push("Sleep");
tasks.shift(); // Remove first

for (let task of tasks) {
    console.log(task);
}`}],commonMistakes:[{mistakeAr:"\u0627\u0644\u0648\u0635\u0648\u0644 \u0644\u0639\u0646\u0635\u0631 \u0628\u0641\u0647\u0631\u0633 \u063A\u064A\u0631 \u0645\u0648\u062C\u0648\u062F: fruits[5] \u0641\u064A \u0645\u0635\u0641\u0648\u0641\u0629 \u0628\u0640 3 \u0639\u0646\u0627\u0635\u0631",mistakeEn:"Accessing element with out-of-range index: fruits[5] in a 3-element array",fixAr:"\u0633\u062A\u062D\u0635\u0644 \u0639\u0644\u0649 undefined \u2014 \u062A\u062D\u0642\u0642 \u0645\u0646 .length \u0642\u0628\u0644 \u0627\u0644\u0648\u0635\u0648\u0644 \u0628\u0641\u0647\u0631\u0633",fixEn:"You get undefined \u2014 check .length before accessing by index"},{mistakeAr:"\u0627\u0644\u0628\u062F\u0621 \u0628\u0627\u0644\u0641\u0647\u0631\u0633 1: fruits[1] \u0644\u0644\u0639\u0646\u0635\u0631 \u0627\u0644\u0623\u0648\u0644",mistakeEn:"Starting at index 1: fruits[1] for the first element",fixAr:"\u0627\u0644\u0645\u0635\u0641\u0648\u0641\u0627\u062A \u062A\u0628\u062F\u0623 \u0645\u0646 0 \u2014 \u0627\u0644\u0639\u0646\u0635\u0631 \u0627\u0644\u0623\u0648\u0644 \u062F\u0627\u0626\u0645\u0627\u064B \u0641\u064A [0]",fixEn:"Arrays start at 0 \u2014 the first element is always at [0]"}]},{id:14,part:3,partTitleAr:"\u0627\u062A\u062E\u0627\u0630 \u0627\u0644\u0642\u0631\u0627\u0631\u0627\u062A \u0648\u0627\u0644\u062A\u0643\u0631\u0627\u0631",partTitleEn:"Making Decisions & Repeating Work",titleAr:"\u0627\u0644\u062D\u0644\u0642\u0627\u062A \u0627\u0644\u062A\u0643\u0631\u0627\u0631\u064A\u0629",titleEn:"Loops",descriptionAr:"\u0627\u0644\u062D\u0644\u0642\u0627\u062A \u062A\u064F\u062A\u064A\u062D \u0644\u0643 \u062A\u0643\u0631\u0627\u0631 \u062A\u0646\u0641\u064A\u0630 \u0627\u0644\u0643\u0648\u062F \u0639\u062F\u0629 \u0645\u0631\u0627\u062A. \u062A\u0639\u0644\u0645 for \u0648while \u0648\u0643\u064A\u0641 \u062A\u062E\u062A\u0627\u0631 \u0627\u0644\u0645\u0646\u0627\u0633\u0628.",descriptionEn:"Loops let you repeat code multiple times. Learn for and while loops and how to choose the right one.",estimatedTime:"40 min",level:"beginner",icon:"\u{1F501}",color:"#3fb950",conceptsAr:["for loop","while loop","do...while","break \u0648 continue","\u0627\u0644\u062A\u0643\u0631\u0627\u0631 \u0639\u0644\u0649 \u0627\u0644\u0645\u0635\u0641\u0648\u0641\u0627\u062A"],conceptsEn:["for loop","while loop","do...while","break and continue","Iterating arrays"],conceptDescriptionsAr:["\u062D\u0644\u0642\u0629 for \u062A\u064F\u0639\u0631\u0651\u0641 \u0645\u062A\u063A\u064A\u0631 \u0639\u062F\u0627\u062F \u0648\u0634\u0631\u0637 \u0625\u064A\u0642\u0627\u0641 \u0648\u062E\u0637\u0648\u0629 \u062A\u062D\u062F\u064A\u062B \u0641\u064A \u0633\u0637\u0631 \u0648\u0627\u062D\u062F \u0645\u062B\u0644 for(let i=0; i<5; i++).","\u062D\u0644\u0642\u0629 while \u062A\u062A\u0643\u0631\u0631 \u0637\u0627\u0644\u0645\u0627 \u0627\u0644\u0634\u0631\u0637 \u0635\u062D\u064A\u062D \u2014 \u0645\u0641\u064A\u062F\u0629 \u062D\u064A\u0646 \u0644\u0627 \u062A\u0639\u0631\u0641 \u0639\u062F\u062F \u0627\u0644\u062A\u0643\u0631\u0627\u0631\u0627\u062A \u0645\u0633\u0628\u0642\u064B\u0627.","do...while \u062A\u064F\u0646\u0641\u0651\u0630 \u0627\u0644\u0643\u062A\u0644\u0629 \u0645\u0631\u0629 \u0648\u0627\u062D\u062F\u0629 \u0639\u0644\u0649 \u0627\u0644\u0623\u0642\u0644 \u062B\u0645 \u062A\u062A\u062D\u0642\u0642 \u0645\u0646 \u0627\u0644\u0634\u0631\u0637 \u0641\u064A \u0643\u0644 \u062A\u0643\u0631\u0627\u0631 \u062A\u0627\u0644\u064D.","break \u064A\u064F\u062E\u0631\u062C\u0643 \u0645\u0646 \u0627\u0644\u062D\u0644\u0642\u0629 \u0641\u0648\u0631\u064B\u0627\u060C \u0648continue \u064A\u062A\u062C\u0627\u0648\u0632 \u0627\u0644\u062A\u0643\u0631\u0627\u0631 \u0627\u0644\u062D\u0627\u0644\u064A \u0648\u064A\u0646\u062A\u0642\u0644 \u0644\u0644\u062A\u0627\u0644\u064A.","for...of \u062A\u064F\u0643\u0631\u0631 \u0639\u0644\u0649 \u0639\u0646\u0627\u0635\u0631 \u0627\u0644\u0645\u0635\u0641\u0648\u0641\u0629 \u0645\u0628\u0627\u0634\u0631\u0629 \u062F\u0648\u0646 \u0627\u0644\u062D\u0627\u062C\u0629 \u0644\u0645\u062A\u063A\u064A\u0631 \u0639\u062F\u0627\u062F."],conceptDescriptionsEn:["A for loop defines a counter variable, a stop condition, and an update step all in one line like for(let i=0; i<5; i++).","A while loop repeats as long as the condition is true \u2014 useful when you don't know the number of iterations in advance.","do...while executes the block at least once, then checks the condition on each subsequent iteration.","break exits the loop immediately, while continue skips the current iteration and moves to the next one.","for...of iterates over array elements directly without needing a counter variable."],diagramType:"loop-diagram",codeExamples:[{language:"javascript",code:`// for loop
for (let i = 1; i <= 5; i++) {
  console.log("Count: " + i);
}
// Count: 1
// Count: 2
// Count: 3
// Count: 4
// Count: 5`,descriptionAr:"\u062D\u0644\u0642\u0629 for \u2014 \u062A\u064F\u0639\u062F\u0651 \u0645\u0646 1 \u0625\u0644\u0649 5",descriptionEn:"for loop \u2014 counts from 1 to 5"},{language:"javascript",code:`// while loop
let count = 0;
while (count < 3) {
  console.log("Repeat #" + count);
  count++;
}

// break and continue
for (let i = 0; i < 10; i++) {
  if (i === 3) continue; // skip 3
  if (i === 6) break;    // stop at 6
  console.log(i);
}
// 0, 1, 2, 4, 5`,descriptionAr:"\u062D\u0644\u0642\u0629 while \u0648 \u0627\u0633\u062A\u062E\u062F\u0627\u0645 break \u0648continue",descriptionEn:"while loop and using break and continue"}],editorLinks:[{label:"Programiz JS Editor",url:"https://www.programiz.com/javascript/online-compiler/",language:"javascript"}],keyPointsAr:["for \u0645\u0646\u0627\u0633\u0628\u0629 \u0639\u0646\u062F\u0645\u0627 \u062A\u0639\u0631\u0641 \u0639\u062F\u062F \u0627\u0644\u062A\u0643\u0631\u0627\u0631\u0627\u062A \u0645\u0633\u0628\u0642\u064B\u0627","while \u0645\u0646\u0627\u0633\u0628\u0629 \u0639\u0646\u062F\u0645\u0627 \u062A\u062A\u0643\u0631\u0631 \u062D\u062A\u0649 \u062A\u062A\u062D\u0642\u0642 \u062D\u0627\u0644\u0629 \u0645\u0639\u064A\u0646\u0629","break \u064A\u0648\u0642\u0641 \u0627\u0644\u062D\u0644\u0642\u0629 \u0643\u0644\u064A\u064B\u0627","continue \u064A\u062A\u062C\u0627\u0648\u0632 \u0627\u0644\u062A\u0643\u0631\u0627\u0631 \u0627\u0644\u062D\u0627\u0644\u064A \u0648\u064A\u0646\u062A\u0642\u0644 \u0644\u0644\u062A\u0627\u0644\u064A"],keyPointsEn:["for is best when you know the number of iterations in advance","while is best when you repeat until a condition is met","break stops the loop entirely","continue skips the current iteration and moves to the next"],quiz:[{questionAr:"\u0643\u0645 \u0645\u0631\u0629 \u062A\u062A\u0643\u0631\u0631: for i in range(3)?",questionEn:"How many times does: for i in range(3) repeat?",options:["2","3","4","0"],correctIndex:1,explanationAr:"range(3) \u064A\u064F\u0646\u062A\u062C 0, 1, 2 \u2014 \u0623\u064A 3 \u062A\u0643\u0631\u0627\u0631\u0627\u062A.",explanationEn:"range(3) produces 0, 1, 2 \u2014 that is 3 iterations."},{questionAr:"\u0645\u0627 \u0627\u0644\u0641\u0631\u0642 \u0628\u064A\u0646 break \u0648continue\u061F",questionEn:"What is the difference between break and continue?",options:["\u0644\u0627 \u0641\u0631\u0642 / No difference","break \u064A\u0648\u0642\u0641 \u0627\u0644\u062D\u0644\u0642\u0629\u060C continue \u064A\u062A\u062E\u0637\u0649 \u0627\u0644\u062A\u0643\u0631\u0627\u0631 \u0627\u0644\u062D\u0627\u0644\u064A / break stops the loop, continue skips current","continue \u064A\u0648\u0642\u0641 \u0627\u0644\u062D\u0644\u0642\u0629 / continue stops the loop","break \u064A\u064F\u0643\u0631\u0631 / break repeats"],correctIndex:1,explanationAr:"break \u064A\u062E\u0631\u062C \u0645\u0646 \u0627\u0644\u062D\u0644\u0642\u0629 \u0643\u0644\u064A\u0627\u064B\u060C continue \u064A\u062A\u062E\u0637\u0649 \u0641\u0642\u0637 \u0627\u0644\u062A\u0643\u0631\u0627\u0631 \u0627\u0644\u062D\u0627\u0644\u064A.",explanationEn:"break exits the entire loop; continue only skips the current iteration."},{questionAr:"\u0645\u062A\u0649 \u0646\u0633\u062A\u062E\u062F\u0645 while \u0628\u062F\u0644\u0627\u064B \u0645\u0646 for\u061F",questionEn:"When do we use while instead of for?",options:["\u062F\u0627\u0626\u0645\u0627\u064B / Always","\u0639\u0646\u062F\u0645\u0627 \u0644\u0627 \u0646\u0639\u0631\u0641 \u0639\u062F\u062F \u0627\u0644\u062A\u0643\u0631\u0627\u0631\u0627\u062A \u0645\u0633\u0628\u0642\u0627\u064B / When we don't know the count in advance","\u0639\u0646\u062F\u0645\u0627 \u0646\u0639\u0631\u0641 \u0627\u0644\u0639\u062F\u062F / When we know the count","\u0623\u0628\u062F\u0627\u064B / Never"],correctIndex:1,explanationAr:"while \u0645\u0646\u0627\u0633\u0628\u0629 \u0639\u0646\u062F\u0645\u0627 \u062A\u0643\u0648\u0646 \u062D\u0627\u0644\u0629 \u0627\u0644\u062A\u0648\u0642\u0641 \u063A\u064A\u0631 \u0645\u0639\u0631\u0648\u0641\u0629 \u0645\u0633\u0628\u0642\u0627\u064B.",explanationEn:"while is ideal when the stopping condition is not known in advance."}],commonMistakes:[{mistakeAr:"\u062D\u0644\u0642\u0629 \u0644\u0627\u0646\u0647\u0627\u0626\u064A\u0629: while True \u0628\u062F\u0648\u0646 break",mistakeEn:"Infinite loop: while True without break",fixAr:"\u062A\u0623\u0643\u062F \u062F\u0627\u0626\u0645\u0627\u064B \u0623\u0646 \u0634\u0631\u0637 \u0627\u0644\u0625\u064A\u0642\u0627\u0641 \u0633\u064A\u062A\u062D\u0642\u0642 \u0641\u064A \u0627\u0644\u0646\u0647\u0627\u064A\u0629",fixEn:"Always make sure the stop condition will eventually be met"},{mistakeAr:"\u0646\u0633\u064A\u0627\u0646 \u062A\u062D\u062F\u064A\u062B \u0645\u062A\u063A\u064A\u0631 \u0627\u0644\u0639\u062F\u0627\u062F \u0641\u064A while: count \u0644\u0627 \u064A\u062A\u063A\u064A\u0631",mistakeEn:"Forgetting to update the counter in while: count never changes",fixAr:"\u062A\u0630\u0643\u0631 \u0632\u064A\u0627\u062F\u0629 \u0627\u0644\u0639\u062F\u0627\u062F: count++ \u0623\u0648 count += 1",fixEn:"Remember to increment: count++ or count += 1"}],challenges:[{titleAr:"\u062A\u062D\u062F\u064A: \u0627\u0637\u0628\u0639 \u0627\u0644\u0623\u0631\u0642\u0627\u0645 \u0627\u0644\u0632\u0648\u062C\u064A\u0629",titleEn:"Challenge: Print Even Numbers",taskAr:"\u0627\u0637\u0628\u0639 \u062C\u0645\u064A\u0639 \u0627\u0644\u0623\u0631\u0642\u0627\u0645 \u0627\u0644\u0632\u0648\u062C\u064A\u0629 \u0645\u0646 1 \u0625\u0644\u0649 20.",taskEn:"Print all even numbers from 1 to 20.",hintAr:"\u0627\u0633\u062A\u062E\u062F\u0645 for \u0645\u0639 range(1, 21) \u0648\u0634\u0631\u0637 if num % 2 == 0",hintEn:"Use for with range(1, 21) and check if num % 2 == 0",solutionPython:`for num in range(1, 21):
    if num % 2 == 0:
        print(num)`,solutionJs:`for (let num = 1; num <= 20; num++) {
    if (num % 2 === 0) {
        console.log(num);
    }
}`}]}];var g=[{id:15,part:4,partTitleAr:"\u062A\u0646\u0638\u064A\u0645 \u0627\u0644\u0643\u0648\u062F",partTitleEn:"Organizing Code",titleAr:"\u0627\u0644\u062F\u0648\u0627\u0644 (Functions)",titleEn:"Functions",descriptionAr:"\u0627\u0644\u062F\u0648\u0627\u0644 \u062A\u064F\u062A\u064A\u062D \u0644\u0643 \u062A\u062C\u0645\u064A\u0639 \u0645\u062C\u0645\u0648\u0639\u0629 \u0645\u0646 \u0627\u0644\u062A\u0639\u0644\u064A\u0645\u0627\u062A \u0641\u064A \u0643\u062A\u0644\u0629 \u0648\u0627\u062D\u062F\u0629 \u0642\u0627\u0628\u0644\u0629 \u0644\u0625\u0639\u0627\u062F\u0629 \u0627\u0644\u0627\u0633\u062A\u062E\u062F\u0627\u0645.",descriptionEn:"Functions let you group a set of instructions into a reusable block of code.",estimatedTime:"40 min",level:"beginner",icon:"\u2699\uFE0F",color:"#58a6ff",conceptsAr:["\u062A\u0639\u0631\u064A\u0641 \u0627\u0644\u062F\u0627\u0644\u0629","\u0627\u0644\u0645\u0639\u0627\u0645\u0644\u0627\u062A (Parameters)","\u0627\u0644\u0642\u064A\u0645\u0629 \u0627\u0644\u0645\u064F\u0639\u0627\u062F\u0629 (Return)","\u062F\u0648\u0627\u0644 \u0627\u0644\u0633\u0647\u0645","\u0625\u0639\u0627\u062F\u0629 \u0627\u0644\u0627\u0633\u062A\u062E\u062F\u0627\u0645"],conceptsEn:["Function definition","Parameters","Return value","Arrow functions","Reusability"],conceptDescriptionsAr:["\u062A\u064F\u0639\u0631\u064E\u0651\u0641 \u0627\u0644\u062F\u0627\u0644\u0629 \u0628\u0643\u0644\u0645\u0629 function \u062B\u0645 \u0627\u0644\u0627\u0633\u0645 \u0648\u0627\u0644\u0623\u0642\u0648\u0627\u0633 \u0648\u0627\u0644\u0643\u062A\u0644\u0629 \u0645\u062B\u0644 function greet() { }.","\u0627\u0644\u0645\u0639\u0627\u0645\u0644\u0627\u062A \u0647\u064A \u0645\u062A\u063A\u064A\u0631\u0627\u062A \u0648\u0647\u0645\u064A\u0629 \u0641\u064A \u062A\u0639\u0631\u064A\u0641 \u0627\u0644\u062F\u0627\u0644\u0629 \u062A\u0633\u062A\u0642\u0628\u0644 \u0627\u0644\u0642\u064A\u0645 \u0627\u0644\u0641\u0639\u0644\u064A\u0629 \u0639\u0646\u062F \u0627\u0633\u062A\u062F\u0639\u0627\u0626\u0647\u0627.","return \u062A\u064F\u0639\u064A\u062F \u0642\u064A\u0645\u0629 \u0645\u0646 \u0627\u0644\u062F\u0627\u0644\u0629 \u0625\u0644\u0649 \u0645\u0643\u0627\u0646 \u0627\u0644\u0627\u0633\u062A\u062F\u0639\u0627\u0621 \u0648\u062A\u0648\u0642\u0641 \u062A\u0646\u0641\u064A\u0630 \u0627\u0644\u062F\u0627\u0644\u0629 \u0641\u0648\u0631\u064B\u0627.","\u062F\u0648\u0627\u0644 \u0627\u0644\u0633\u0647\u0645 (=>) \u0635\u064A\u063A\u0629 \u0623\u062D\u062F\u062B \u0648\u0623\u0642\u0635\u0631 \u0645\u062B\u0644 const add = (a, b) => a + b.","\u0625\u0639\u0627\u062F\u0629 \u0627\u0644\u0627\u0633\u062A\u062E\u062F\u0627\u0645 \u062A\u0639\u0646\u064A \u0643\u062A\u0627\u0628\u0629 \u0627\u0644\u0643\u0648\u062F \u0645\u0631\u0629 \u0648\u0627\u062D\u062F\u0629 \u0648\u0627\u0633\u062A\u062F\u0639\u0627\u0624\u0647 \u0641\u064A \u0623\u0645\u0627\u0643\u0646 \u0645\u062A\u0639\u062F\u062F\u0629 \u0628\u062F\u0644\u064B\u0627 \u0645\u0646 \u0627\u0644\u062A\u0643\u0631\u0627\u0631."],conceptDescriptionsEn:["A function is defined with the function keyword, then its name, parentheses, and a block like function greet() { }.","Parameters are placeholder variables in the function definition that receive actual values when the function is called.","return sends a value back to the caller and immediately stops the function's execution.","Arrow functions (=>) are a newer, shorter syntax like const add = (a, b) => a + b.","Reusability means writing code once and calling it in multiple places instead of repeating it."],diagramType:"function-box",codeExamples:[{language:"javascript",code:`function greet(name) {
  return "Hello, " + name + "!";
}

console.log(greet("Sara"));  // Hello, Sara!
console.log(greet("Ahmed")); // Hello, Ahmed!`,descriptionAr:"\u062F\u0627\u0644\u0629 \u0628\u0633\u064A\u0637\u0629 \u062A\u0633\u062A\u0642\u0628\u0644 \u0627\u0633\u0645\u064B\u0627 \u0648\u062A\u0631\u062C\u0639 \u062A\u062D\u064A\u0629",descriptionEn:"A simple function that takes a name and returns a greeting"},{language:"javascript",code:`// Function with multiple parameters
function add(a, b) {
  return a + b;
}

function multiply(a, b) {
  return a * b;
}

console.log(add(3, 5));      // 8
console.log(multiply(4, 6)); // 24

// Arrow function (modern syntax)
const square = (n) => n * n;
console.log(square(7)); // 49`,descriptionAr:"\u062F\u0648\u0627\u0644 \u0628\u0645\u0639\u0627\u0645\u0644\u0627\u062A \u0645\u062A\u0639\u062F\u062F\u0629 \u0648\u062F\u0648\u0627\u0644 \u0627\u0644\u0633\u0647\u0645",descriptionEn:"Functions with multiple parameters and arrow functions"}],editorLinks:[{label:"Programiz JS Editor",url:"https://www.programiz.com/javascript/online-compiler/",language:"javascript"}],keyPointsAr:["\u0627\u0644\u062F\u0627\u0644\u0629 \u062A\u064F\u0639\u0631\u064E\u0651\u0641 \u0645\u0631\u0629 \u0648\u0627\u062D\u062F\u0629 \u0648\u062A\u064F\u0633\u062A\u062F\u0639\u0649 \u0639\u062F\u0629 \u0645\u0631\u0627\u062A","\u0627\u0644\u0645\u0639\u0627\u0645\u0644\u0627\u062A \u0647\u064A \u0627\u0644\u0645\u062F\u062E\u0644\u0627\u062A \u0627\u0644\u062A\u064A \u062A\u0633\u062A\u0642\u0628\u0644\u0647\u0627 \u0627\u0644\u062F\u0627\u0644\u0629","return \u062A\u064F\u0648\u0642\u0641 \u0627\u0644\u062F\u0627\u0644\u0629 \u0648\u062A\u0631\u062C\u0639 \u0642\u064A\u0645\u0629","\u062F\u0648\u0627\u0644 \u0627\u0644\u0633\u0647\u0645 (=>) \u0647\u064A \u0637\u0631\u064A\u0642\u0629 \u0623\u062D\u062F\u062B \u0648\u0623\u0642\u0635\u0631 \u0644\u0643\u062A\u0627\u0628\u0629 \u0627\u0644\u062F\u0648\u0627\u0644"],keyPointsEn:["A function is defined once and called many times","Parameters are the inputs the function receives","return stops the function and sends back a value","Arrow functions (=>) are a newer, shorter way to write functions"],quiz:[{questionAr:"\u0645\u0627 \u0627\u0644\u0643\u0644\u0645\u0629 \u0627\u0644\u0645\u0641\u062A\u0627\u062D\u064A\u0629 \u0644\u062A\u0639\u0631\u064A\u0641 \u062F\u0627\u0644\u0629 \u0641\u064A Python\u061F",questionEn:"What keyword defines a function in Python?",options:["function","def","fn","func"],correctIndex:1,explanationAr:"\u0641\u064A Python \u0646\u0633\u062A\u062E\u062F\u0645 def \u0645\u062A\u0628\u0648\u0639\u0629 \u0628\u0627\u0633\u0645 \u0627\u0644\u062F\u0627\u0644\u0629.",explanationEn:"In Python we use def followed by the function name."},{questionAr:"\u0645\u0627 \u0642\u064A\u0645\u0629: add(3, 4) \u0625\u0630\u0627 \u0643\u0627\u0646\u062A: def add(a, b): return a + b\u061F",questionEn:"What is the value of add(3, 4) if: def add(a, b): return a + b?",options:["34","7","\u062E\u0637\u0623 / Error","12"],correctIndex:1,explanationAr:"3 + 4 = 7",explanationEn:"3 + 4 = 7"},{questionAr:"\u0645\u0627\u0630\u0627 \u062A\u0641\u0639\u0644 return \u062F\u0627\u062E\u0644 \u062F\u0627\u0644\u0629\u061F",questionEn:"What does return do inside a function?",options:["\u062A\u064F\u0643\u0631\u0631 \u0627\u0644\u062F\u0627\u0644\u0629 / Repeats the function","\u062A\u064F\u0648\u0642\u0641 \u0627\u0644\u062F\u0627\u0644\u0629 \u0648\u062A\u064F\u0631\u062C\u0639 \u0642\u064A\u0645\u0629 / Stops the function and returns a value","\u062A\u0637\u0628\u0639 \u0639\u0644\u0649 \u0627\u0644\u0634\u0627\u0634\u0629 / Prints to screen","\u062A\u062D\u0630\u0641 \u0627\u0644\u062F\u0627\u0644\u0629 / Deletes the function"],correctIndex:1,explanationAr:"return \u062A\u0648\u0642\u0641 \u062A\u0646\u0641\u064A\u0630 \u0627\u0644\u062F\u0627\u0644\u0629 \u0648\u062A\u0631\u0633\u0644 \u0627\u0644\u0642\u064A\u0645\u0629 \u0625\u0644\u0649 \u0645\u0643\u0627\u0646 \u0627\u0644\u0627\u0633\u062A\u062F\u0639\u0627\u0621.",explanationEn:"return stops the function and sends the value back to the caller."}],commonMistakes:[{mistakeAr:"\u0627\u0633\u062A\u062F\u0639\u0627\u0621 \u0627\u0644\u062F\u0627\u0644\u0629 \u0642\u0628\u0644 \u062A\u0639\u0631\u064A\u0641\u0647\u0627 \u0641\u064A Python",mistakeEn:"Calling a function before defining it in Python",fixAr:"\u0641\u064A Python \u064A\u062C\u0628 \u062A\u0639\u0631\u064A\u0641 \u0627\u0644\u062F\u0627\u0644\u0629 \u0642\u0628\u0644 \u0627\u0633\u062A\u062F\u0639\u0627\u0626\u0647\u0627 \u0641\u064A \u0627\u0644\u0643\u0648\u062F",fixEn:"In Python the function must be defined before it is called"},{mistakeAr:"\u0646\u0633\u064A\u0627\u0646 return: \u0627\u0644\u062F\u0627\u0644\u0629 \u0644\u0627 \u062A\u064F\u0639\u064A\u062F \u0634\u064A\u0626\u0627\u064B",mistakeEn:"Forgetting return: function returns nothing",fixAr:"\u0625\u0630\u0627 \u0623\u0631\u062F\u062A \u0627\u0633\u062A\u062E\u062F\u0627\u0645 \u0646\u062A\u064A\u062C\u0629 \u0627\u0644\u062F\u0627\u0644\u0629 \u062A\u0623\u0643\u062F \u0645\u0646 \u0625\u0636\u0627\u0641\u0629 return",fixEn:"If you want to use the result, make sure to add return"}],challenges:[{titleAr:"\u062A\u062D\u062F\u064A: \u062F\u0627\u0644\u0629 \u0627\u0644\u062D\u0633\u0627\u0628",titleEn:"Challenge: Calculator Function",taskAr:"\u0627\u0643\u062A\u0628 \u062F\u0627\u0644\u0629 \u062A\u062D\u0633\u0628 \u0645\u0633\u0627\u062D\u0629 \u0627\u0644\u0645\u0633\u062A\u0637\u064A\u0644 (\u0627\u0644\u0637\u0648\u0644 \xD7 \u0627\u0644\u0639\u0631\u0636) \u0648\u062A\u0639\u064A\u062F \u0627\u0644\u0646\u062A\u064A\u062C\u0629.",taskEn:"Write a function that calculates the area of a rectangle (length \xD7 width) and returns the result.",hintAr:"def area(length, width): return ...",hintEn:"def area(length, width): return ...",solutionPython:`def area(length, width):
    return length * width

print(area(5, 3))   # 15
print(area(10, 4))  # 40`,solutionJs:`function area(length, width) {
    return length * width;
}

console.log(area(5, 3));   // 15
console.log(area(10, 4));  // 40`,expectedOutput:`15
40`}]},{id:16,part:4,partTitleAr:"\u062A\u0646\u0638\u064A\u0645 \u0627\u0644\u0643\u0648\u062F",partTitleEn:"Organizing Code",titleAr:"\u0627\u0644\u0646\u0637\u0627\u0642 (Scope)",titleEn:"Scope",descriptionAr:"\u0627\u0644\u0646\u0637\u0627\u0642 \u064A\u062D\u062F\u062F \u0623\u064A\u0646 \u064A\u0645\u0643\u0646\u0643 \u0627\u0644\u0648\u0635\u0648\u0644 \u0625\u0644\u0649 \u0645\u062A\u063A\u064A\u0631 \u0645\u0639\u064A\u0646. \u062A\u0639\u0644\u0645 \u0627\u0644\u0641\u0631\u0642 \u0628\u064A\u0646 \u0627\u0644\u0646\u0637\u0627\u0642 \u0627\u0644\u0645\u062D\u0644\u064A \u0648\u0627\u0644\u0639\u0627\u0645.",descriptionEn:"Scope defines where you can access a variable. Learn the difference between local and global scope.",estimatedTime:"25 min",level:"intermediate",icon:"\u{1F52D}",color:"#d29922",conceptsAr:["\u0627\u0644\u0646\u0637\u0627\u0642 \u0627\u0644\u0639\u0627\u0645 (Global)","\u0627\u0644\u0646\u0637\u0627\u0642 \u0627\u0644\u0645\u062D\u0644\u064A (Local)","\u0646\u0637\u0627\u0642 \u0627\u0644\u0643\u062A\u0644\u0629 (Block)","\u0631\u0641\u0639 \u0627\u0644\u0645\u062A\u063A\u064A\u0631\u0627\u062A (Hoisting)"],conceptsEn:["Global scope","Local scope","Block scope","Hoisting"],conceptDescriptionsAr:["\u0627\u0644\u0645\u062A\u063A\u064A\u0631 \u0627\u0644\u0639\u0627\u0645 \u0645\u064F\u0639\u0631\u064E\u0651\u0641 \u062E\u0627\u0631\u062C \u0623\u064A \u062F\u0627\u0644\u0629 \u0623\u0648 \u0643\u062A\u0644\u0629 \u0648\u064A\u0645\u0643\u0646 \u0627\u0644\u0648\u0635\u0648\u0644 \u0625\u0644\u064A\u0647 \u0645\u0646 \u0623\u064A \u0645\u0643\u0627\u0646 \u0641\u064A \u0627\u0644\u0645\u0644\u0641.","\u0627\u0644\u0645\u062A\u063A\u064A\u0631 \u0627\u0644\u0645\u062D\u0644\u064A \u0645\u064F\u0639\u0631\u064E\u0651\u0641 \u062F\u0627\u062E\u0644 \u062F\u0627\u0644\u0629 \u0648\u0644\u0627 \u064A\u0645\u0643\u0646 \u0627\u0644\u0648\u0635\u0648\u0644 \u0625\u0644\u064A\u0647 \u0645\u0646 \u062E\u0627\u0631\u062C\u0647\u0627 \u2014 \u064A\u064F\u062A\u0644\u0641 \u0639\u0646\u062F \u0627\u0646\u062A\u0647\u0627\u0621 \u0627\u0644\u062F\u0627\u0644\u0629.","let \u0648 const \u0644\u0647\u0627 \u0646\u0637\u0627\u0642 \u0627\u0644\u0643\u062A\u0644\u0629 {} \u0628\u0645\u0639\u0646\u0649 \u0644\u0627 \u064A\u0645\u0643\u0646 \u0627\u0644\u0648\u0635\u0648\u0644 \u0625\u0644\u064A\u0647\u0627 \u062E\u0627\u0631\u062C \u0627\u0644\u0623\u0642\u0648\u0627\u0633 \u0627\u0644\u062A\u064A \u0639\u064F\u0631\u0651\u0641\u062A \u0641\u064A\u0647\u0627.","Hoisting \u0647\u064A \u0633\u0644\u0648\u0643 JavaScript \u0627\u0644\u062A\u0644\u0642\u0627\u0626\u064A \u0628\u0646\u0642\u0644 \u062A\u0639\u0631\u064A\u0641\u0627\u062A var \u0648\u0627\u0644\u062F\u0648\u0627\u0644 \u0625\u0644\u0649 \u0623\u0639\u0644\u0649 \u0646\u0637\u0627\u0642\u0647\u0627 \u2014 \u062A\u062C\u0646\u0651\u0628 \u0627\u0644\u0627\u0639\u062A\u0645\u0627\u062F \u0639\u0644\u064A\u0647."],conceptDescriptionsEn:["A global variable is defined outside any function or block and can be accessed from anywhere in the file.","A local variable is defined inside a function and cannot be accessed from outside it \u2014 it is destroyed when the function ends.","let and const have block scope {}, meaning they cannot be accessed outside the braces where they were defined.","Hoisting is JavaScript's automatic behavior of moving var declarations and function definitions to the top of their scope \u2014 avoid relying on it."],diagramType:"scope-diagram",codeExamples:[{language:"javascript",code:`// Global scope
let globalVar = "I'm global";

function showScope() {
  // Local scope
  let localVar = "I'm local";
  console.log(globalVar); // works: "I'm global"
  console.log(localVar);  // works: "I'm local"
}

showScope();
console.log(globalVar); // works
// console.log(localVar); // ERROR! Not accessible here`,descriptionAr:"\u0645\u062B\u0627\u0644 \u0639\u0644\u0649 \u0627\u0644\u0646\u0637\u0627\u0642 \u0627\u0644\u0639\u0627\u0645 \u0648\u0627\u0644\u0645\u062D\u0644\u064A",descriptionEn:"Example of global and local scope"}],editorLinks:[{label:"Programiz JS Editor",url:"https://www.programiz.com/javascript/online-compiler/",language:"javascript"}],keyPointsAr:["\u0627\u0644\u0645\u062A\u063A\u064A\u0631 \u0627\u0644\u0639\u0627\u0645 \u064A\u0645\u0643\u0646 \u0627\u0644\u0648\u0635\u0648\u0644 \u0625\u0644\u064A\u0647 \u0645\u0646 \u0623\u064A \u0645\u0643\u0627\u0646 \u0641\u064A \u0627\u0644\u0628\u0631\u0646\u0627\u0645\u062C","\u0627\u0644\u0645\u062A\u063A\u064A\u0631 \u0627\u0644\u0645\u062D\u0644\u064A \u064A\u0645\u0643\u0646 \u0627\u0644\u0648\u0635\u0648\u0644 \u0625\u0644\u064A\u0647 \u0641\u0642\u0637 \u062F\u0627\u062E\u0644 \u0627\u0644\u062F\u0627\u0644\u0629 \u0623\u0648 \u0627\u0644\u0643\u062A\u0644\u0629 \u0627\u0644\u062A\u064A \u0639\u064F\u0631\u0651\u0641 \u0641\u064A\u0647\u0627","let \u0648 const \u0644\u0647\u0627 \u0646\u0637\u0627\u0642 \u0627\u0644\u0643\u062A\u0644\u0629 {}","\u062A\u062C\u0646\u0651\u0628 \u0627\u0644\u0645\u062A\u063A\u064A\u0631\u0627\u062A \u0627\u0644\u0639\u0627\u0645\u0629 \u0642\u062F\u0631 \u0627\u0644\u0625\u0645\u0643\u0627\u0646"],keyPointsEn:["Global variables are accessible from anywhere in the program","Local variables are only accessible inside the function or block where they's defined","let and const have block scope {}","Avoid global variables as much as possible"],quiz:[{questionAr:"\u0623\u064A\u0646 \u064A\u0645\u0643\u0646 \u0627\u0644\u0648\u0635\u0648\u0644 \u0644\u0644\u0645\u062A\u063A\u064A\u0631 \u0627\u0644\u0645\u062D\u0644\u064A\u061F",questionEn:"Where can a local variable be accessed?",options:["\u0641\u064A \u0623\u064A \u0645\u0643\u0627\u0646 / Anywhere","\u062F\u0627\u062E\u0644 \u0627\u0644\u062F\u0627\u0644\u0629 \u0627\u0644\u062A\u064A \u0639\u064F\u0631\u0651\u0641 \u0641\u064A\u0647\u0627 \u0641\u0642\u0637 / Only inside the function where it was defined","\u0641\u064A \u0627\u0644\u0645\u0644\u0641 \u0643\u0644\u0647 / Throughout the file","\u0641\u064A \u0627\u0644\u0643\u0644\u0627\u0633\u0627\u062A \u0641\u0642\u0637 / Only in classes"],correctIndex:1,explanationAr:"\u0627\u0644\u0645\u062A\u063A\u064A\u0631 \u0627\u0644\u0645\u062D\u0644\u064A \u064A\u0645\u0643\u0646 \u0627\u0644\u0648\u0635\u0648\u0644 \u0625\u0644\u064A\u0647 \u0641\u0642\u0637 \u0645\u0646 \u062F\u0627\u062E\u0644 \u0627\u0644\u062F\u0627\u0644\u0629 \u0623\u0648 \u0627\u0644\u0643\u062A\u0644\u0629 \u0627\u0644\u062A\u064A \u0639\u064F\u0631\u0651\u0641 \u0641\u064A\u0647\u0627.",explanationEn:"A local variable can only be accessed from inside the function or block where it was defined."},{questionAr:"\u0645\u0627\u0630\u0627 \u064A\u062D\u062F\u062B \u0639\u0646\u062F \u0645\u062D\u0627\u0648\u0644\u0629 \u0627\u0644\u0648\u0635\u0648\u0644 \u0644\u0645\u062A\u063A\u064A\u0631 \u0645\u062D\u0644\u064A \u0645\u0646 \u062E\u0627\u0631\u062C \u062F\u0627\u0644\u062A\u0647\u061F",questionEn:"What happens when you try to access a local variable from outside its function?",options:["\u064A\u064F\u0639\u064A\u062F null","\u064A\u064F\u0639\u064A\u062F 0","\u062E\u0637\u0623 ReferenceError / ReferenceError","\u064A\u0639\u0645\u0644 \u0628\u0634\u0643\u0644 \u0637\u0628\u064A\u0639\u064A"],correctIndex:2,explanationAr:"\u0633\u062A\u062D\u0635\u0644 \u0639\u0644\u0649 ReferenceError \u0644\u0623\u0646 \u0627\u0644\u0645\u062A\u063A\u064A\u0631 \u063A\u064A\u0631 \u0645\u0639\u0631\u0651\u0641 \u0641\u064A \u0647\u0630\u0627 \u0627\u0644\u0646\u0637\u0627\u0642.",explanationEn:"You get a ReferenceError because the variable is not defined in that scope."}],challenges:[{titleAr:"\u062A\u062D\u062F\u064A: \u0627\u0644\u0646\u0637\u0627\u0642 \u0641\u064A \u0627\u0644\u0645\u0645\u0627\u0631\u0633\u0629",titleEn:"Challenge: Scope in Practice",taskAr:'\u0627\u0643\u062A\u0628 \u062F\u0627\u0644\u0629 \u062A\u062D\u0633\u0628 \u0636\u0631\u064A\u0628\u0629 15% \u0639\u0644\u0649 \u0633\u0639\u0631 \u0645\u0627. \u0627\u0644\u0645\u062A\u063A\u064A\u0631 "tax_rate" \u064A\u062C\u0628 \u0623\u0646 \u064A\u0643\u0648\u0646 \u062F\u0627\u062E\u0644 \u0627\u0644\u062F\u0627\u0644\u0629 (\u0645\u062D\u0644\u064A).',taskEn:'Write a function that calculates 15% tax on a price. The "tax_rate" variable should be local to the function.',hintAr:"\u0639\u0631\u0651\u0641 tax_rate \u062F\u0627\u062E\u0644 \u0627\u0644\u062F\u0627\u0644\u0629 \u0646\u0641\u0633\u0647\u0627",hintEn:"Define tax_rate inside the function itself",solutionPython:`def calculate_tax(price):
    tax_rate = 0.15  # \u0645\u062A\u063A\u064A\u0631 \u0645\u062D\u0644\u064A
    return price * tax_rate

print(calculate_tax(100))  # 15.0
print(calculate_tax(200))  # 30.0`,solutionJs:`function calculateTax(price) {
    const taxRate = 0.15; // local variable
    return price * taxRate;
}

console.log(calculateTax(100)); // 15
console.log(calculateTax(200)); // 30`,expectedOutput:`15
30`}],commonMistakes:[{mistakeAr:"\u0627\u0644\u0627\u0639\u062A\u0645\u0627\u062F \u0639\u0644\u0649 \u0645\u062A\u063A\u064A\u0631\u0627\u062A \u0639\u0627\u0645\u0629 \u0643\u062B\u064A\u0631\u0629 \u2014 \u064A\u062C\u0639\u0644 \u0627\u0644\u0643\u0648\u062F \u0635\u0639\u0628 \u0627\u0644\u0641\u0647\u0645 \u0648\u0627\u0644\u062A\u0635\u062D\u064A\u062D",mistakeEn:"Relying on many global variables \u2014 makes code hard to understand and debug",fixAr:"\u0645\u0631\u0651\u0631 \u0627\u0644\u0642\u064A\u0645 \u0643\u0645\u0639\u0627\u0645\u0644\u0627\u062A \u0644\u0644\u062F\u0648\u0627\u0644 \u0628\u062F\u0644\u0627\u064B \u0645\u0646 \u0627\u0633\u062A\u062E\u062F\u0627\u0645 \u0645\u062A\u063A\u064A\u0631\u0627\u062A \u0639\u0627\u0645\u0629",fixEn:"Pass values as function parameters instead of using global variables"}]},{id:17,part:4,partTitleAr:"\u062A\u0646\u0638\u064A\u0645 \u0627\u0644\u0643\u0648\u062F",partTitleEn:"Organizing Code",titleAr:"\u0627\u0644\u062A\u0643\u0631\u0627\u0631 \u0627\u0644\u0630\u0627\u062A\u064A (Recursion)",titleEn:"Recursion",descriptionAr:"\u0627\u0644\u062A\u0643\u0631\u0627\u0631 \u0627\u0644\u0630\u0627\u062A\u064A \u0647\u0648 \u0639\u0646\u062F\u0645\u0627 \u062A\u0633\u062A\u062F\u0639\u064A \u0627\u0644\u062F\u0627\u0644\u0629 \u0646\u0641\u0633\u0647\u0627. \u0645\u0641\u0647\u0648\u0645 \u0642\u0648\u064A \u0644\u062D\u0644 \u0627\u0644\u0645\u0634\u0643\u0644\u0627\u062A \u0627\u0644\u062A\u064A \u062A\u062A\u0643\u0631\u0631 \u0628\u0637\u0628\u064A\u0639\u062A\u0647\u0627.",descriptionEn:"Recursion is when a function calls itself. A powerful concept for solving problems that repeat by nature.",estimatedTime:"40 min",level:"intermediate",icon:"\u{1F300}",color:"#bc8cff",conceptsAr:["\u0627\u0644\u062D\u0627\u0644\u0629 \u0627\u0644\u0623\u0633\u0627\u0633\u064A\u0629 (Base Case)","\u0627\u0644\u0627\u0633\u062A\u062F\u0639\u0627\u0621 \u0627\u0644\u0630\u0627\u062A\u064A","\u0645\u0643\u062F\u0633 \u0627\u0644\u0627\u0633\u062A\u062F\u0639\u0627\u0621","\u0645\u0642\u0627\u0631\u0646\u0629 \u0645\u0639 \u0627\u0644\u062D\u0644\u0642\u0627\u062A"],conceptsEn:["Base case","Recursive call","Call stack","Comparison with loops"],conceptDescriptionsAr:["\u0627\u0644\u062D\u0627\u0644\u0629 \u0627\u0644\u0623\u0633\u0627\u0633\u064A\u0629 \u0647\u064A \u0627\u0644\u0634\u0631\u0637 \u0627\u0644\u0630\u064A \u064A\u064F\u0648\u0642\u0641 \u0627\u0644\u062A\u0643\u0631\u0627\u0631 \u0627\u0644\u0630\u0627\u062A\u064A \u2014 \u0628\u062F\u0648\u0646\u0647 \u062A\u0633\u062A\u0645\u0631 \u0627\u0644\u062F\u0627\u0644\u0629 \u0625\u0644\u0649 \u0627\u0644\u0623\u0628\u062F.","\u0627\u0644\u0627\u0633\u062A\u062F\u0639\u0627\u0621 \u0627\u0644\u0630\u0627\u062A\u064A \u0647\u0648 \u0642\u064A\u0627\u0645 \u0627\u0644\u062F\u0627\u0644\u0629 \u0628\u0646\u062F\u0627\u0621 \u0646\u0641\u0633\u0647\u0627 \u0628\u0645\u0639\u0627\u0645\u0644\u0627\u062A \u0623\u0635\u063A\u0631 \u0641\u064A \u0643\u0644 \u0645\u0631\u0629 \u062D\u062A\u0649 \u062A\u0635\u0644 \u0644\u0644\u062D\u0627\u0644\u0629 \u0627\u0644\u0623\u0633\u0627\u0633\u064A\u0629.","\u0645\u0643\u062F\u0633 \u0627\u0644\u0627\u0633\u062A\u062F\u0639\u0627\u0621 \u064A\u062A\u062A\u0628\u0639 \u0643\u0644 \u0627\u0633\u062A\u062F\u0639\u0627\u0621 \u0645\u0639\u0644\u0642 \u2014 \u062A\u0631\u0627\u0643\u0645 \u0643\u062B\u064A\u0631 \u0645\u0646 \u0627\u0644\u0627\u0633\u062A\u062F\u0639\u0627\u0621\u0627\u062A \u064A\u064F\u0633\u0628\u0628 Stack Overflow.","\u0627\u0644\u062A\u0643\u0631\u0627\u0631 \u0627\u0644\u0630\u0627\u062A\u064A \u0623\u0646\u064A\u0642 \u0644\u0644\u0645\u0634\u0643\u0644\u0627\u062A \u0643\u0627\u0644\u0645\u0636\u0631\u0648\u0628 \u0648\u0634\u062C\u0631\u0629 \u0627\u0644\u0645\u062C\u0644\u062F\u0627\u062A\u060C \u0628\u064A\u0646\u0645\u0627 \u0627\u0644\u062D\u0644\u0642\u0627\u062A \u0623\u0643\u062B\u0631 \u0643\u0641\u0627\u0621\u0629 \u0641\u064A \u0627\u0644\u0630\u0627\u0643\u0631\u0629."],conceptDescriptionsEn:["The base case is the condition that stops the recursion \u2014 without it the function runs forever.","The recursive call is the function calling itself with smaller arguments each time until the base case is reached.","The call stack tracks every pending call \u2014 too many stacked calls causes a Stack Overflow error.","Recursion is elegant for problems like factorial and folder trees, while loops are more memory-efficient."],diagramType:"recursion",codeExamples:[{language:"javascript",code:`// Factorial: 5! = 5 * 4 * 3 * 2 * 1 = 120
function factorial(n) {
  if (n <= 1) return 1; // Base case
  return n * factorial(n - 1); // Recursive call
}

console.log(factorial(5)); // 120
console.log(factorial(4)); // 24
console.log(factorial(1)); // 1`,descriptionAr:"\u062D\u0633\u0627\u0628 \u0627\u0644\u0645\u0636\u0631\u0648\u0628 \u0628\u0627\u0644\u062A\u0643\u0631\u0627\u0631 \u0627\u0644\u0630\u0627\u062A\u064A",descriptionEn:"Calculating factorial using recursion"}],editorLinks:[{label:"Programiz JS Editor",url:"https://www.programiz.com/javascript/online-compiler/",language:"javascript"}],keyPointsAr:["\u0643\u0644 \u062F\u0627\u0644\u0629 \u062A\u0643\u0631\u0627\u0631\u064A\u0629 \u064A\u062C\u0628 \u0623\u0646 \u062A\u062D\u062A\u0648\u064A \u0639\u0644\u0649 \u062D\u0627\u0644\u0629 \u0623\u0633\u0627\u0633\u064A\u0629 \u062A\u064F\u0648\u0642\u0641 \u0627\u0644\u062A\u0643\u0631\u0627\u0631","\u0628\u062F\u0648\u0646 \u0627\u0644\u062D\u0627\u0644\u0629 \u0627\u0644\u0623\u0633\u0627\u0633\u064A\u0629 \u0633\u062A\u062D\u0635\u0644 \u0639\u0644\u0649 \u062D\u0644\u0642\u0629 \u0644\u0627\u0646\u0647\u0627\u0626\u064A\u0629 (Stack Overflow)","\u0627\u0644\u062A\u0643\u0631\u0627\u0631 \u0627\u0644\u0630\u0627\u062A\u064A \u0645\u0641\u064A\u062F \u0644\u0644\u0645\u0634\u0643\u0644\u0627\u062A \u0643\u0627\u0644\u0645\u0636\u0631\u0648\u0628 \u0648\u0623\u0639\u062F\u0627\u062F \u0641\u064A\u0628\u0648\u0646\u0627\u062A\u0634\u064A","\u0645\u0639\u0638\u0645 \u0627\u0644\u0645\u0634\u0643\u0644\u0627\u062A \u0627\u0644\u062A\u0643\u0631\u0627\u0631\u064A\u0629 \u064A\u0645\u0643\u0646 \u062D\u0644\u0647\u0627 \u0628\u062D\u0644\u0642\u0627\u062A \u0623\u064A\u0636\u064B\u0627"],keyPointsEn:["Every recursive function must have a base case that stops the recursion","Without a base case you'll get infinite recursion (Stack Overflow)","Recursion is useful for problems like factorial and Fibonacci numbers","Most recursive problems can also be solved with loops"],quiz:[{questionAr:"\u0645\u0627 \u0627\u0644\u062D\u0627\u0644\u0629 \u0627\u0644\u0623\u0633\u0627\u0633\u064A\u0629 (Base Case) \u0641\u064A \u0627\u0644\u062A\u0643\u0631\u0627\u0631 \u0627\u0644\u0630\u0627\u062A\u064A\u061F",questionEn:"What is the base case in recursion?",options:["\u0623\u0648\u0644 \u0627\u0633\u062A\u062F\u0639\u0627\u0621 \u0644\u0644\u062F\u0627\u0644\u0629 / The first function call","\u0627\u0644\u0634\u0631\u0637 \u0627\u0644\u0630\u064A \u064A\u0648\u0642\u0641 \u0627\u0644\u062A\u0643\u0631\u0627\u0631 / The condition that stops the recursion","\u0627\u0644\u0627\u0633\u062A\u062F\u0639\u0627\u0621 \u0627\u0644\u0630\u0627\u062A\u064A / The self-call","\u0642\u064A\u0645\u0629 \u0627\u0644\u0639\u0648\u062F\u0629 / The return value"],correctIndex:1,explanationAr:"\u0627\u0644\u062D\u0627\u0644\u0629 \u0627\u0644\u0623\u0633\u0627\u0633\u064A\u0629 \u0647\u064A \u0627\u0644\u0634\u0631\u0637 \u0627\u0644\u0630\u064A \u064A\u064F\u0648\u0642\u0641 \u0627\u0644\u062A\u0643\u0631\u0627\u0631 \u0627\u0644\u0630\u0627\u062A\u064A \u2014 \u0628\u062F\u0648\u0646\u0647\u0627 \u0633\u062A\u062D\u0635\u0644 \u0639\u0644\u0649 \u062D\u0644\u0642\u0629 \u0644\u0627\u0646\u0647\u0627\u0626\u064A\u0629.",explanationEn:"The base case is the condition that stops the recursion \u2014 without it you get infinite recursion."},{questionAr:"\u0645\u0627 \u0646\u0627\u062A\u062C factorial(4) \u0625\u0630\u0627 \u0643\u0627\u0646\u062A factorial(n) = n * factorial(n-1)\u061F",questionEn:"What is factorial(4) if factorial(n) = n * factorial(n-1)?",options:["12","16","24","8"],correctIndex:2,explanationAr:"4! = 4 \xD7 3 \xD7 2 \xD7 1 = 24",explanationEn:"4! = 4 \xD7 3 \xD7 2 \xD7 1 = 24"}],challenges:[{titleAr:"\u062A\u062D\u062F\u064A: \u0645\u062C\u0645\u0648\u0639 \u062A\u0643\u0631\u0627\u0631\u064A",titleEn:"Challenge: Recursive Sum",taskAr:"\u0627\u0643\u062A\u0628 \u062F\u0627\u0644\u0629 \u062A\u0643\u0631\u0627\u0631\u064A\u0629 \u062A\u062D\u0633\u0628 \u0645\u062C\u0645\u0648\u0639 \u0627\u0644\u0623\u0631\u0642\u0627\u0645 \u0645\u0646 1 \u0625\u0644\u0649 n.",taskEn:"Write a recursive function that calculates the sum of numbers from 1 to n.",hintAr:"sum(n) = n + sum(n-1), \u0627\u0644\u062D\u0627\u0644\u0629 \u0627\u0644\u0623\u0633\u0627\u0633\u064A\u0629: sum(0) = 0",hintEn:"sum(n) = n + sum(n-1), base case: sum(0) = 0",solutionPython:`def sum_to_n(n):
    if n == 0:  # Base case
        return 0
    return n + sum_to_n(n - 1)

print(sum_to_n(5))  # 15 (1+2+3+4+5)`,solutionJs:`function sumToN(n) {
    if (n === 0) return 0; // Base case
    return n + sumToN(n - 1);
}

console.log(sumToN(5)); // 15`,expectedOutput:"15"}],commonMistakes:[{mistakeAr:"\u0646\u0633\u064A\u0627\u0646 \u0627\u0644\u062D\u0627\u0644\u0629 \u0627\u0644\u0623\u0633\u0627\u0633\u064A\u0629 \u2014 \u062A\u0633\u0628\u0628 Stack Overflow",mistakeEn:"Forgetting the base case \u2014 causes Stack Overflow",fixAr:"\u0643\u0644 \u062F\u0627\u0644\u0629 \u062A\u0643\u0631\u0627\u0631\u064A\u0629 \u064A\u062C\u0628 \u0623\u0646 \u062A\u062D\u062A\u0648\u064A \u0639\u0644\u0649 \u0634\u0631\u0637 \u0625\u064A\u0642\u0627\u0641 \u0648\u0627\u0636\u062D",fixEn:"Every recursive function must have a clear stopping condition"}]}];var h=[{id:18,part:5,partTitleAr:"\u0627\u0644\u062A\u0641\u0643\u064A\u0631 \u0643\u0645\u0628\u0631\u0645\u062C",partTitleEn:"Thinking Like a Programmer",titleAr:"\u0623\u0633\u0627\u0633\u064A\u0627\u062A \u062D\u0644 \u0627\u0644\u0645\u0634\u0643\u0644\u0627\u062A",titleEn:"Problem Solving Basics",descriptionAr:"\u062A\u0639\u0644\u0645 \u0645\u0646\u0647\u062C\u064A\u0629 \u0627\u0644\u062A\u0641\u0643\u064A\u0631 \u0641\u064A \u0627\u0644\u0645\u0634\u0643\u0644\u0627\u062A \u0627\u0644\u0628\u0631\u0645\u062C\u064A\u0629 \u0648\u0643\u064A\u0641 \u062A\u062D\u0648\u0651\u0644 \u0645\u062A\u0637\u0644\u0628\u0627\u062A \u0625\u0644\u0649 \u0643\u0648\u062F \u064A\u0639\u0645\u0644.",descriptionEn:"Learn how to think about programming problems and convert requirements into working code.",estimatedTime:"45 min",level:"intermediate",icon:"\u{1F9E9}",color:"#3fb950",conceptsAr:["\u062A\u062D\u0644\u064A\u0644 \u0627\u0644\u0645\u0634\u0643\u0644\u0629","\u062A\u0642\u0633\u064A\u0645 \u0627\u0644\u0645\u0634\u0643\u0644\u0629","Pseudocode","\u0627\u062E\u062A\u0628\u0627\u0631 \u0627\u0644\u062D\u0644","\u062A\u062D\u0633\u064A\u0646 \u0627\u0644\u0643\u0648\u062F"],conceptsEn:["Problem analysis","Breaking down problems","Pseudocode","Testing solutions","Code optimization"],conceptDescriptionsAr:["\u062A\u062D\u0644\u064A\u0644 \u0627\u0644\u0645\u0634\u0643\u0644\u0629 \u064A\u0639\u0646\u064A \u0641\u0647\u0645 \u0627\u0644\u0645\u062F\u062E\u0644\u0627\u062A \u0648\u0627\u0644\u0645\u062E\u0631\u062C\u0627\u062A \u0627\u0644\u0645\u0637\u0644\u0648\u0628\u0629 \u0648\u0627\u0644\u0642\u064A\u0648\u062F \u0642\u0628\u0644 \u0643\u062A\u0627\u0628\u0629 \u0623\u064A \u0633\u0637\u0631 \u0643\u0648\u062F.","\u062A\u0642\u0633\u064A\u0645 \u0627\u0644\u0645\u0634\u0643\u0644\u0629 \u064A\u0639\u0646\u064A \u062A\u062C\u0632\u0626\u062A\u0647\u0627 \u0625\u0644\u0649 \u0645\u0647\u0627\u0645 \u0635\u063A\u064A\u0631\u0629 \u064A\u0645\u0643\u0646 \u062D\u0644 \u0643\u0644 \u0645\u0646\u0647\u0627 \u0639\u0644\u0649 \u062D\u062F\u0629 \u062B\u0645 \u062A\u062C\u0645\u064A\u0639\u0647\u0627.","Pseudocode \u0647\u0648 \u0648\u0635\u0641 \u0634\u0628\u0647-\u0628\u0631\u0645\u062C\u064A \u0628\u0627\u0644\u0644\u063A\u0629 \u0627\u0644\u0637\u0628\u064A\u0639\u064A\u0629 \u064A\u064F\u0633\u0627\u0639\u062F\u0643 \u0639\u0644\u0649 \u0627\u0644\u062A\u062E\u0637\u064A\u0637 \u0642\u0628\u0644 \u0627\u0644\u0643\u062A\u0627\u0628\u0629 \u0627\u0644\u0641\u0639\u0644\u064A\u0629.","\u0627\u062E\u062A\u0628\u0627\u0631 \u0627\u0644\u062D\u0644 \u064A\u0634\u0645\u0644 \u062A\u062C\u0631\u0628\u0629 \u062D\u0627\u0644\u0627\u062A \u0637\u0628\u064A\u0639\u064A\u0629 \u0648\u062D\u0627\u0644\u0627\u062A \u062D\u0627\u0641\u0629 \u0645\u062B\u0644 \u0645\u062F\u062E\u0644 \u0641\u0627\u0631\u063A \u0623\u0648 \u0631\u0642\u0645 \u0633\u0627\u0644\u0628.","\u062A\u062D\u0633\u064A\u0646 \u0627\u0644\u0643\u0648\u062F \u064A\u0639\u0646\u064A \u062A\u0642\u0644\u064A\u0644 \u0627\u0644\u062A\u0643\u0631\u0627\u0631 \u0648\u0627\u0644\u062A\u0639\u0642\u064A\u062F \u0628\u0639\u062F \u0623\u0646 \u064A\u0639\u0645\u0644 \u0627\u0644\u062D\u0644 \u0627\u0644\u0623\u0648\u0644\u064A \u0628\u0634\u0643\u0644 \u0635\u062D\u064A\u062D."],conceptDescriptionsEn:["Problem analysis means understanding the required inputs, outputs, and constraints before writing any line of code.","Breaking down problems means splitting them into small tasks, solving each one separately, then assembling the solution.","Pseudocode is a semi-programming description in natural language that helps you plan before actual writing.","Testing the solution includes trying normal cases and edge cases like empty input or a negative number.","Code optimization means reducing repetition and complexity after the initial solution is working correctly."],diagramType:"problem-solving",codeExamples:[{language:"javascript",code:`// Problem: Find the largest number in an array
// Step 1: Start with first element as largest
// Step 2: Compare with each element
// Step 3: Update if larger found

function findMax(numbers) {
  let max = numbers[0];
  for (let num of numbers) {
    if (num > max) {
      max = num;
    }
  }
  return max;
}

let nums = [3, 7, 2, 9, 1, 5];
console.log(findMax(nums)); // 9`,descriptionAr:"\u062D\u0644 \u0645\u0634\u0643\u0644\u0629 \u0625\u064A\u062C\u0627\u062F \u0623\u0643\u0628\u0631 \u0631\u0642\u0645 \u0641\u064A \u0645\u0635\u0641\u0648\u0641\u0629 \u062E\u0637\u0648\u0629 \u0628\u062E\u0637\u0648\u0629",descriptionEn:'Solving the "find max number" problem step by step'}],editorLinks:[{label:"Programiz JS Editor",url:"https://www.programiz.com/javascript/online-compiler/",language:"javascript"}],keyPointsAr:["\u0627\u0641\u0647\u0645 \u0627\u0644\u0645\u0634\u0643\u0644\u0629 \u0623\u0648\u0644\u064B\u0627 \u0642\u0628\u0644 \u0623\u0646 \u062A\u0643\u062A\u0628 \u0623\u064A \u0643\u0648\u062F","\u0642\u0633\u0651\u0645 \u0627\u0644\u0645\u0634\u0643\u0644\u0629 \u0627\u0644\u0643\u0628\u064A\u0631\u0629 \u0625\u0644\u0649 \u0645\u0634\u0643\u0644\u0627\u062A \u0635\u063A\u064A\u0631\u0629 \u0623\u0628\u0633\u0637","\u0627\u0643\u062A\u0628 Pseudocode (\u0643\u0648\u062F \u0648\u0647\u0645\u064A) \u0644\u062A\u0646\u0638\u064A\u0645 \u0623\u0641\u0643\u0627\u0631\u0643","\u0627\u062E\u062A\u0628\u0631 \u0627\u0644\u062D\u0644 \u0628\u062D\u0627\u0644\u0627\u062A \u0645\u062E\u062A\u0644\u0641\u0629 \u0645\u0646\u0647\u0627 \u062D\u0627\u0644\u0627\u062A \u0627\u0644\u062D\u0627\u0641\u0629"],keyPointsEn:["Understand the problem first before writing any code","Break large problems into smaller, simpler sub-problems","Write Pseudocode to organize your thoughts","Test your solution with different cases including edge cases"],quiz:[{questionAr:"\u0645\u0627 \u0647\u0648 Pseudocode\u061F",questionEn:"What is Pseudocode?",options:["\u0644\u063A\u0629 \u0628\u0631\u0645\u062C\u0629 \u062C\u062F\u064A\u062F\u0629 / A new programming language","\u0648\u0635\u0641 \u0644\u0644\u062E\u0648\u0627\u0631\u0632\u0645\u064A\u0629 \u0628\u0644\u063A\u0629 \u0637\u0628\u064A\u0639\u064A\u0629 / Algorithm description in natural language","\u0643\u0648\u062F \u0644\u0627 \u064A\u0639\u0645\u0644 / Code that does not work","\u0631\u0633\u0645 \u0628\u064A\u0627\u0646\u064A / A diagram"],correctIndex:1,explanationAr:"Pseudocode \u0647\u0648 \u0648\u0635\u0641 \u0634\u0628\u0647-\u0628\u0631\u0645\u062C\u064A \u0628\u0627\u0644\u0644\u063A\u0629 \u0627\u0644\u0637\u0628\u064A\u0639\u064A\u0629 \u064A\u064F\u0633\u0627\u0639\u062F\u0643 \u0639\u0644\u0649 \u0627\u0644\u062A\u062E\u0637\u064A\u0637.",explanationEn:"Pseudocode is a natural language algorithm description that helps you plan."},{questionAr:"\u0645\u0627 \u0623\u0648\u0644 \u062E\u0637\u0648\u0629 \u0641\u064A \u062D\u0644 \u0623\u064A \u0645\u0634\u0643\u0644\u0629 \u0628\u0631\u0645\u062C\u064A\u0629\u061F",questionEn:"What is the first step in solving any programming problem?",options:["\u0627\u0643\u062A\u0628 \u0627\u0644\u0643\u0648\u062F \u0645\u0628\u0627\u0634\u0631\u0629 / Write code immediately","\u0627\u0628\u062D\u062B \u0641\u064A Google / Search Google","\u0627\u0641\u0647\u0645 \u0627\u0644\u0645\u0634\u0643\u0644\u0629 \u0623\u0648\u0644\u0627\u064B / Understand the problem first","\u0627\u062E\u062A\u0631 \u0627\u0644\u0644\u063A\u0629 / Choose the language"],correctIndex:2,explanationAr:"\u0641\u0647\u0645 \u0627\u0644\u0645\u0634\u0643\u0644\u0629 \u0647\u0648 \u0623\u0633\u0627\u0633 \u0623\u064A \u062D\u0644 \u0635\u062D\u064A\u062D \u2014 \u0627\u0642\u0631\u0623 \u0627\u0644\u0645\u062A\u0637\u0644\u0628\u0627\u062A \u062C\u064A\u062F\u0627\u064B \u0642\u0628\u0644 \u0623\u064A \u0634\u064A\u0621.",explanationEn:"Understanding the problem is the foundation of any correct solution \u2014 read the requirements carefully first."}],challenges:[{titleAr:"\u062A\u062D\u062F\u064A: \u0627\u0643\u062A\u0628 Pseudocode",titleEn:"Challenge: Write Pseudocode",taskAr:"\u0627\u0643\u062A\u0628 Pseudocode \u0644\u0628\u0631\u0646\u0627\u0645\u062C \u064A\u062C\u062F \u0623\u0643\u0628\u0631 \u0639\u062F\u062F \u0641\u064A \u0642\u0627\u0626\u0645\u0629\u060C \u062B\u0645 \u0646\u0641\u0651\u0630\u0647.",taskEn:"Write Pseudocode for a program that finds the largest number in a list, then implement it.",hintAr:'\u0627\u0628\u062F\u0623 \u0628\u0640: "\u0627\u0641\u062A\u0631\u0627\u0636 \u0623\u0646 \u0623\u0648\u0644 \u0639\u0646\u0635\u0631 \u0647\u0648 \u0627\u0644\u0623\u0643\u0628\u0631\u060C \u062B\u0645 \u0642\u0627\u0631\u0646 \u0643\u0644 \u0639\u0646\u0635\u0631..."',hintEn:'Start with: "Assume the first element is the largest, then compare each element..."',solutionPython:`# Pseudocode:
# 1. \u0636\u0639 \u0623\u0648\u0644 \u0639\u0646\u0635\u0631 \u0643\u0640 max
# 2. \u0644\u0643\u0644 \u0639\u0646\u0635\u0631 \u0641\u064A \u0627\u0644\u0642\u0627\u0626\u0645\u0629
#    \u0625\u0630\u0627 \u0643\u0627\u0646 \u0623\u0643\u0628\u0631 \u0645\u0646 max: \u062D\u062F\u0651\u062B max
# 3. \u0623\u0639\u062F max

def find_max(numbers):
    max_val = numbers[0]
    for num in numbers:
        if num > max_val:
            max_val = num
    return max_val

print(find_max([3, 7, 2, 9, 1]))  # 9`,solutionJs:`// Pseudocode:
// 1. Set first element as max
// 2. For each element in array
//    If larger than max: update max
// 3. Return max

function findMax(numbers) {
    let max = numbers[0];
    for (let num of numbers) {
        if (num > max) max = num;
    }
    return max;
}

console.log(findMax([3, 7, 2, 9, 1])); // 9`,expectedOutput:"9"}],commonMistakes:[{mistakeAr:"\u0627\u0644\u0643\u062A\u0627\u0628\u0629 \u0645\u0628\u0627\u0634\u0631\u0629 \u0628\u062F\u0648\u0646 \u062A\u062E\u0637\u064A\u0637 \u2014 \u064A\u0646\u062A\u062C \u0643\u0648\u062F \u0635\u0639\u0628 \u0627\u0644\u062A\u0635\u062D\u064A\u062D",mistakeEn:"Coding immediately without planning \u2014 results in hard-to-debug code",fixAr:"\u062E\u0635\u0635 \u062F\u0642\u064A\u0642\u062A\u064A\u0646 \u0644\u0643\u062A\u0627\u0628\u0629 Pseudocode \u2014 \u062A\u0648\u0641\u0651\u0631 \u0648\u0642\u062A\u0627\u064B \u0623\u0637\u0648\u0644 \u0641\u064A \u0627\u0644\u062A\u0635\u062D\u064A\u062D",fixEn:"Spend 2 minutes writing Pseudocode \u2014 it saves more time in debugging"},{mistakeAr:"\u0639\u062F\u0645 \u0627\u062E\u062A\u0628\u0627\u0631 \u0627\u0644\u062D\u0627\u0644\u0627\u062A \u0627\u0644\u062D\u0627\u0641\u0629 \u0645\u062B\u0644 \u0642\u0627\u0626\u0645\u0629 \u0641\u0627\u0631\u063A\u0629 \u0623\u0648 \u0631\u0642\u0645 \u0633\u0627\u0644\u0628",mistakeEn:"Not testing edge cases like empty list or negative number",fixAr:"\u0627\u062E\u062A\u0628\u0631 \u062F\u0627\u0626\u0645\u0627\u064B: \u0627\u0644\u0645\u062F\u062E\u0644 \u0627\u0644\u0641\u0627\u0631\u063A\u060C \u0627\u0644\u0642\u064A\u0645 \u0627\u0644\u0643\u0628\u064A\u0631\u0629\u060C \u0648\u0627\u0644\u0642\u064A\u0645 \u0627\u0644\u0633\u0627\u0644\u0628\u0629",fixEn:"Always test: empty input, large values, and negative values"}]}];var f=[{id:19,part:6,partTitleAr:"\u062E\u0644\u0641 \u0627\u0644\u0643\u0648\u0627\u0644\u064A\u0633 (\u0627\u062E\u062A\u064A\u0627\u0631\u064A)",partTitleEn:"Under the Hood (Optional)",titleAr:"\u0627\u0644\u0628\u062A\u0627\u062A \u0648\u0627\u0644\u0628\u0627\u064A\u062A\u0627\u062A",titleEn:"Bits and Bytes",descriptionAr:"\u0627\u0643\u062A\u0634\u0641 \u0643\u064A\u0641 \u064A\u062E\u0632\u0646 \u0627\u0644\u062D\u0627\u0633\u0648\u0628 \u0643\u0644 \u0634\u064A\u0621 \u0643\u0623\u0631\u0642\u0627\u0645 \u062B\u0646\u0627\u0626\u064A\u0629 \u2014 \u0628\u062A\u0627\u062A \u0648\u0628\u0627\u064A\u062A\u0627\u062A.",descriptionEn:"Discover how computers store everything as binary numbers \u2014 bits and bytes.",estimatedTime:"30 min",level:"intermediate",icon:"\u{1F4BE}",color:"#f85149",conceptsAr:["\u0627\u0644\u0628\u062A (Bit)","\u0627\u0644\u0628\u0627\u064A\u062A (Byte)","\u0627\u0644\u0643\u064A\u0644\u0648\u0628\u0627\u064A\u062A \u0648\u0627\u0644\u0645\u064A\u062C\u0627\u0628\u0627\u064A\u062A","\u062A\u0645\u062B\u064A\u0644 \u0627\u0644\u0628\u064A\u0627\u0646\u0627\u062A"],conceptsEn:["Bit","Byte","Kilobyte and Megabyte","Data representation"],conceptDescriptionsAr:["\u0627\u0644\u0628\u062A \u0647\u0648 \u0623\u0635\u063A\u0631 \u0648\u062D\u062F\u0629 \u0628\u064A\u0627\u0646\u0627\u062A \u0641\u064A \u0627\u0644\u062D\u0627\u0633\u0648\u0628 \u0648\u0644\u0627 \u064A\u0645\u0643\u0646\u0647 \u062A\u062E\u0632\u064A\u0646 \u0633\u0648\u0649 \u0642\u064A\u0645\u0629 \u0648\u0627\u062D\u062F\u0629 \u0645\u0646 \u0627\u062B\u0646\u062A\u064A\u0646: 0 \u0623\u0648 1.","\u0627\u0644\u0628\u0627\u064A\u062A \u064A\u062A\u0643\u0648\u0646 \u0645\u0646 8 \u0628\u062A\u0627\u062A \u0648\u064A\u0645\u0643\u0646\u0647 \u062A\u0645\u062B\u064A\u0644 256 \u0642\u064A\u0645\u0629 \u0645\u062E\u062A\u0644\u0641\u0629 \u0645\u0646 0 \u0625\u0644\u0649 255\u060C \u0648\u064A\u0643\u0641\u064A \u0644\u062A\u062E\u0632\u064A\u0646 \u062D\u0631\u0641 \u0648\u0627\u062D\u062F.","\u0627\u0644\u0643\u064A\u0644\u0648\u0628\u0627\u064A\u062A = 1024 \u0628\u0627\u064A\u062A\u060C \u0648\u0627\u0644\u0645\u064A\u062C\u0627\u0628\u0627\u064A\u062A = 1024 \u0643\u064A\u0644\u0648\u0628\u0627\u064A\u062A \u2014 \u0647\u0630\u0647 \u0627\u0644\u0648\u062D\u062F\u0627\u062A \u062A\u0635\u0641 \u062D\u062C\u0645 \u0627\u0644\u0645\u0644\u0641\u0627\u062A \u0648\u0627\u0644\u0630\u0627\u0643\u0631\u0629.","\u0643\u0644 \u0645\u0627 \u064A\u062E\u0632\u0651\u0646\u0647 \u0627\u0644\u062D\u0627\u0633\u0648\u0628 \u2014 \u0646\u0635\u0648\u0635 \u0648\u0635\u0648\u0631 \u0648\u0635\u0648\u062A \u2014 \u064A\u064F\u062D\u0648\u064E\u0651\u0644 \u0641\u064A \u0627\u0644\u0646\u0647\u0627\u064A\u0629 \u0625\u0644\u0649 \u0633\u0644\u0633\u0644\u0629 \u0645\u0646 0 \u06481."],conceptDescriptionsEn:["A bit is the smallest unit of data in a computer and can only store one of two values: 0 or 1.","A byte consists of 8 bits and can represent 256 different values from 0 to 255 \u2014 enough to store a single character.","A kilobyte = 1024 bytes, and a megabyte = 1024 kilobytes \u2014 these units describe file and memory sizes.","Everything a computer stores \u2014 text, images, audio \u2014 is ultimately converted into a sequence of 0s and 1s."],diagramType:"bits-bytes",codeExamples:[{language:"javascript",code:`// Convert number to binary
let num = 42;
console.log(num.toString(2)); // "101010"

// Convert binary string to number
let binary = "101010";
console.log(parseInt(binary, 2)); // 42

// Bitwise operators
console.log(5 & 3);  // 1  (AND)
console.log(5 | 3);  // 7  (OR)
console.log(5 ^ 3);  // 6  (XOR)
console.log(~5);      // -6 (NOT)`,descriptionAr:"\u0627\u0644\u062A\u0639\u0627\u0645\u0644 \u0645\u0639 \u0627\u0644\u0623\u0631\u0642\u0627\u0645 \u0627\u0644\u062B\u0646\u0627\u0626\u064A\u0629 \u0641\u064A JavaScript",descriptionEn:"Working with binary numbers in JavaScript"}],editorLinks:[{label:"Programiz JS Editor",url:"https://www.programiz.com/javascript/online-compiler/",language:"javascript"}],keyPointsAr:["\u0627\u0644\u0628\u062A \u0647\u0648 \u0623\u0635\u063A\u0631 \u0648\u062D\u062F\u0629 \u0644\u0644\u0628\u064A\u0627\u0646\u0627\u062A: 0 \u0623\u0648 1","8 \u0628\u062A\u0627\u062A = 1 \u0628\u0627\u064A\u062A\u060C 1024 \u0628\u0627\u064A\u062A = 1 \u0643\u064A\u0644\u0648\u0628\u0627\u064A\u062A","\u0627\u0644\u062D\u0631\u0648\u0641 \u0648\u0627\u0644\u0623\u0631\u0642\u0627\u0645 \u0648\u0627\u0644\u0635\u0648\u0631 \u0643\u0644\u0647\u0627 \u0645\u062E\u0632\u0646\u0629 \u0643\u0628\u062A\u0627\u062A","ASCII \u0647\u0648 \u0645\u0639\u064A\u0627\u0631 \u062A\u062D\u0648\u064A\u0644 \u0627\u0644\u0623\u062D\u0631\u0641 \u0625\u0644\u0649 \u0623\u0631\u0642\u0627\u0645"],keyPointsEn:["A bit is the smallest unit of data: 0 or 1","8 bits = 1 byte, 1024 bytes = 1 kilobyte","Characters, numbers, and images are all stored as bits","ASCII is a standard for converting characters to numbers"],quiz:[{questionAr:"\u0643\u0645 \u0628\u062A \u064A\u0633\u0627\u0648\u064A \u0628\u0627\u064A\u062A \u0648\u0627\u062D\u062F\u061F",questionEn:"How many bits equal one byte?",options:["4","8","16","32"],correctIndex:1,explanationAr:"\u0627\u0644\u0628\u0627\u064A\u062A \u064A\u062A\u0643\u0648\u0646 \u0645\u0646 8 \u0628\u062A\u0627\u062A \u2014 \u0647\u0630\u0627 \u0645\u0639\u064A\u0627\u0631 \u062B\u0627\u0628\u062A \u0641\u064A \u0639\u0644\u0645 \u0627\u0644\u062D\u0627\u0633\u0648\u0628.",explanationEn:"A byte consists of 8 bits \u2014 this is a fixed standard in computer science."},{questionAr:"\u0645\u0627 \u0623\u0643\u0628\u0631 \u0642\u064A\u0645\u0629 \u064A\u0645\u0643\u0646 \u062A\u0645\u062B\u064A\u0644\u0647\u0627 \u0641\u064A \u0628\u0627\u064A\u062A \u0648\u0627\u062D\u062F\u061F",questionEn:"What is the maximum value representable in one byte?",options:["128","256","255","127"],correctIndex:2,explanationAr:"\u0628\u0627\u064A\u062A \u0648\u0627\u062D\u062F = 8 \u0628\u062A\u0627\u062A = 2^8 = 256 \u0642\u064A\u0645\u0629 \u0645\u0646 0 \u0625\u0644\u0649 255.",explanationEn:"One byte = 8 bits = 2^8 = 256 values from 0 to 255."}],challenges:[{titleAr:"\u062A\u062D\u062F\u064A: \u0627\u0644\u0639\u0645\u0644\u064A\u0627\u062A \u0639\u0644\u0649 \u0627\u0644\u0628\u062A\u0627\u062A",titleEn:"Challenge: Bitwise Operations",taskAr:"\u0627\u0633\u062A\u062E\u062F\u0645 \u0639\u0645\u0644\u064A\u0629 AND \u0627\u0644\u062B\u0646\u0627\u0626\u064A\u0629 \u0639\u0644\u0649 5 \u0648 3 \u062B\u0645 \u0627\u0637\u0628\u0639 \u0627\u0644\u0646\u062A\u064A\u062C\u0629 \u0648\u0641\u0633\u0651\u0631\u0647\u0627.",taskEn:"Use bitwise AND on 5 and 3, print the result and explain why.",hintAr:"5 = 101 \u0648 3 = 011 \u0628\u0627\u0644\u062B\u0646\u0627\u0626\u064A. AND \u062A\u0636\u0639 1 \u0641\u0642\u0637 \u062D\u064A\u062B \u0643\u0644\u0627\u0647\u0645\u0627 1",hintEn:"5 = 101 and 3 = 011 in binary. AND puts 1 only where both are 1",solutionPython:`a = 5   # 101 \u0628\u0627\u0644\u062B\u0646\u0627\u0626\u064A
b = 3   # 011 \u0628\u0627\u0644\u062B\u0646\u0627\u0626\u064A

result = a & b  # 001 = 1
print(result)   # 1
print(bin(a))   # 0b101
print(bin(b))   # 0b011
print(bin(result))  # 0b1`,solutionJs:`let a = 5;  // 101 in binary
let b = 3;  // 011 in binary

let result = a & b; // 001 = 1
console.log(result);      // 1
console.log(a.toString(2)); // "101"
console.log(b.toString(2)); // "011"`}],commonMistakes:[{mistakeAr:"\u0627\u0644\u062E\u0644\u0637 \u0628\u064A\u0646 \u0627\u0644\u0643\u064A\u0644\u0648\u0628\u0627\u064A\u062A (1024) \u0648\u0627\u0644\u0643\u064A\u0644\u0648 (1000) \u0641\u064A \u0627\u0644\u0633\u064A\u0627\u0642\u0627\u062A \u0627\u0644\u0645\u062E\u062A\u0644\u0641\u0629",mistakeEn:"Confusing kilobyte (1024) and kilo (1000) in different contexts",fixAr:"\u0641\u064A \u0639\u0644\u0645 \u0627\u0644\u062D\u0627\u0633\u0648\u0628: 1 \u0643\u064A\u0644\u0648\u0628\u0627\u064A\u062A = 1024 \u0628\u0627\u064A\u062A. \u0641\u064A \u0627\u0644\u062A\u0633\u0648\u064A\u0642 \u0623\u062D\u064A\u0627\u0646\u0627\u064B \u064A\u0633\u062A\u062E\u062F\u0645\u0648\u0646 1000.",fixEn:"In computer science: 1 KB = 1024 bytes. In marketing they sometimes use 1000."}]},{id:20,part:6,partTitleAr:"\u062E\u0644\u0641 \u0627\u0644\u0643\u0648\u0627\u0644\u064A\u0633 (\u0627\u062E\u062A\u064A\u0627\u0631\u064A)",partTitleEn:"Under the Hood (Optional)",titleAr:"\u0627\u0644\u0623\u0631\u0642\u0627\u0645 \u0627\u0644\u062B\u0646\u0627\u0626\u064A\u0629",titleEn:"Binary Numbers",descriptionAr:"\u062A\u0639\u0644\u0645 \u0646\u0638\u0627\u0645 \u0627\u0644\u0623\u0639\u062F\u0627\u062F \u0627\u0644\u062B\u0646\u0627\u0626\u064A\u0629 (\u0627\u0644\u0642\u0627\u0639\u062F\u0629 2) \u0648\u0643\u064A\u0641 \u062A\u062D\u0648\u0651\u0644 \u0628\u064A\u0646\u0647 \u0648\u0628\u064A\u0646 \u0627\u0644\u0646\u0638\u0627\u0645 \u0627\u0644\u0639\u0634\u0631\u064A.",descriptionEn:"Learn the binary number system (base 2) and how to convert between binary and decimal.",estimatedTime:"35 min",level:"intermediate",icon:"01",color:"#58a6ff",conceptsAr:["\u0627\u0644\u0642\u0627\u0639\u062F\u0629 2","\u0627\u0644\u062A\u062D\u0648\u064A\u0644 \u0645\u0646 \u0639\u0634\u0631\u064A \u0625\u0644\u0649 \u062B\u0646\u0627\u0626\u064A","\u0627\u0644\u062A\u062D\u0648\u064A\u0644 \u0645\u0646 \u062B\u0646\u0627\u0626\u064A \u0625\u0644\u0649 \u0639\u0634\u0631\u064A","\u0627\u0644\u062C\u0645\u0639 \u0627\u0644\u062B\u0646\u0627\u0626\u064A"],conceptsEn:["Base 2","Decimal to binary","Binary to decimal","Binary addition"],conceptDescriptionsAr:["\u0627\u0644\u0646\u0638\u0627\u0645 \u0627\u0644\u062B\u0646\u0627\u0626\u064A \u0642\u0627\u0639\u062F\u062A\u0647 2 \u2014 \u0643\u0644 \u062E\u0627\u0646\u0629 \u062A\u0645\u062B\u0644 \u0636\u0639\u0641 \u0627\u0644\u062E\u0627\u0646\u0629 \u0627\u0644\u062A\u064A \u0639\u0644\u0649 \u064A\u0645\u064A\u0646\u0647\u0627 (1\u060C 2\u060C 4\u060C 8\u060C 16...).","\u0644\u062A\u062D\u0648\u064A\u0644 \u0639\u0634\u0631\u064A \u0625\u0644\u0649 \u062B\u0646\u0627\u0626\u064A \u0642\u0633\u0651\u0645 \u0627\u0644\u0631\u0642\u0645 \u0639\u0644\u0649 2 \u0628\u0627\u0633\u062A\u0645\u0631\u0627\u0631 \u0648\u0627\u062C\u0645\u0639 \u0628\u0627\u0642\u064A\u0627\u062A \u0627\u0644\u0642\u0633\u0645\u0629 \u0645\u0646 \u0627\u0644\u0623\u062E\u064A\u0631 \u0644\u0644\u0623\u0648\u0644.","\u0644\u062A\u062D\u0648\u064A\u0644 \u062B\u0646\u0627\u0626\u064A \u0625\u0644\u0649 \u0639\u0634\u0631\u064A \u0627\u0636\u0631\u0628 \u0643\u0644 \u0631\u0642\u0645 \u0628\u0642\u0648\u0629 2 \u0627\u0644\u0645\u0642\u0627\u0628\u0644\u0629 \u0644\u062E\u0627\u0646\u062A\u0647 \u062B\u0645 \u0627\u062C\u0645\u0639 \u0627\u0644\u0646\u062A\u0627\u0626\u062C.","\u0627\u0644\u062C\u0645\u0639 \u0627\u0644\u062B\u0646\u0627\u0626\u064A \u064A\u0639\u0645\u0644 \u0643\u0627\u0644\u062C\u0645\u0639 \u0627\u0644\u0639\u0634\u0631\u064A \u0644\u0643\u0646 \u064A\u062D\u0645\u0644 1 \u0639\u0646\u062F \u062A\u062C\u0627\u0648\u0632 1+1 (\u0644\u0623\u0646 2 \u0628\u0627\u0644\u062B\u0646\u0627\u0626\u064A = 10)."],conceptDescriptionsEn:["The binary system has base 2 \u2014 each position represents double the position to its right (1, 2, 4, 8, 16...).","To convert decimal to binary, repeatedly divide by 2 and collect the remainders from last to first.","To convert binary to decimal, multiply each digit by its corresponding power of 2 then sum the results.","Binary addition works like decimal addition but carries 1 when 1+1 is reached (since 2 in binary = 10)."],diagramType:"binary-converter",codeExamples:[{language:"javascript",code:`// Binary to Decimal
function binaryToDecimal(binary) {
  return parseInt(binary, 2);
}

// Decimal to Binary
function decimalToBinary(decimal) {
  return decimal.toString(2);
}

console.log(binaryToDecimal("1010")); // 10
console.log(binaryToDecimal("1111")); // 15
console.log(decimalToBinary(10));     // "1010"
console.log(decimalToBinary(255));    // "11111111"`,descriptionAr:"\u062A\u062D\u0648\u064A\u0644 \u0628\u064A\u0646 \u0627\u0644\u0646\u0638\u0627\u0645 \u0627\u0644\u062B\u0646\u0627\u0626\u064A \u0648\u0627\u0644\u0639\u0634\u0631\u064A",descriptionEn:"Converting between binary and decimal"}],editorLinks:[{label:"Programiz JS Editor",url:"https://www.programiz.com/javascript/online-compiler/",language:"javascript"}],keyPointsAr:["\u0627\u0644\u0646\u0638\u0627\u0645 \u0627\u0644\u062B\u0646\u0627\u0626\u064A \u064A\u0633\u062A\u062E\u062F\u0645 \u0631\u0642\u0645\u064A\u0646 \u0641\u0642\u0637: 0 \u0648 1","\u0643\u0644 \u062E\u0627\u0646\u0629 \u0641\u064A \u0627\u0644\u0646\u0638\u0627\u0645 \u0627\u0644\u062B\u0646\u0627\u0626\u064A \u062A\u0645\u062B\u0644 \u0642\u0648\u0629 \u0645\u0646 \u0642\u0648\u0649 2","1010 \u0628\u0627\u0644\u062B\u0646\u0627\u0626\u064A = 10 \u0628\u0627\u0644\u0639\u0634\u0631\u064A","11111111 \u0628\u0627\u0644\u062B\u0646\u0627\u0626\u064A = 255 \u0628\u0627\u0644\u0639\u0634\u0631\u064A (\u0623\u0643\u0628\u0631 \u0642\u064A\u0645\u0629 \u0641\u064A \u0628\u0627\u064A\u062A \u0648\u0627\u062D\u062F)"],keyPointsEn:["Binary system uses only two digits: 0 and 1","Each position in binary represents a power of 2","1010 in binary = 10 in decimal","11111111 in binary = 255 in decimal (max value in one byte)"],quiz:[{questionAr:"\u0645\u0627 \u0642\u064A\u0645\u0629 1010 \u0628\u0627\u0644\u0646\u0638\u0627\u0645 \u0627\u0644\u062B\u0646\u0627\u0626\u064A \u0628\u0627\u0644\u0639\u0634\u0631\u064A\u061F",questionEn:"What is the decimal value of binary 1010?",options:["2","8","10","12"],correctIndex:2,explanationAr:"1010 = 1\xD78 + 0\xD74 + 1\xD72 + 0\xD71 = 8 + 2 = 10",explanationEn:"1010 = 1\xD78 + 0\xD74 + 1\xD72 + 0\xD71 = 8 + 2 = 10"},{questionAr:"\u0645\u0627 \u062A\u0645\u062B\u064A\u0644 \u0627\u0644\u0631\u0642\u0645 5 \u0628\u0627\u0644\u0646\u0638\u0627\u0645 \u0627\u0644\u062B\u0646\u0627\u0626\u064A\u061F",questionEn:"What is the binary representation of 5?",options:["100","101","110","111"],correctIndex:1,explanationAr:"5 = 4 + 1 = 1\xD74 + 0\xD72 + 1\xD71 = 101 \u0628\u0627\u0644\u062B\u0646\u0627\u0626\u064A",explanationEn:"5 = 4 + 1 = 1\xD74 + 0\xD72 + 1\xD71 = 101 in binary"}],challenges:[{titleAr:"\u062A\u062D\u062F\u064A: \u0645\u062D\u0648\u0651\u0644 \u062B\u0646\u0627\u0626\u064A/\u0639\u0634\u0631\u064A",titleEn:"Challenge: Binary/Decimal Converter",taskAr:"\u0627\u0643\u062A\u0628 \u062F\u0627\u0644\u062A\u064A\u0646: \u0627\u0644\u0623\u0648\u0644\u0649 \u062A\u062D\u0648\u0644 \u0645\u0646 \u0639\u0634\u0631\u064A \u0644\u062B\u0646\u0627\u0626\u064A\u060C \u0648\u0627\u0644\u062B\u0627\u0646\u064A\u0629 \u0628\u0627\u0644\u0639\u0643\u0633. \u0627\u062E\u062A\u0628\u0631\u0647\u0645\u0627 \u0628\u0627\u0644\u0623\u0631\u0642\u0627\u0645 10 \u0648 255.",taskEn:"Write two functions: one converts decimal to binary, and one converts binary to decimal. Test them with 10 and 255.",hintAr:"\u0627\u0633\u062A\u062E\u062F\u0645 bin() \u0641\u064A Python \u0623\u0648 toString(2) \u0641\u064A JavaScript",hintEn:"Use bin() in Python or toString(2) in JavaScript",solutionPython:`def to_binary(n):
    return bin(n)[2:]  # \u0646\u0632\u064A\u0644 \u0627\u0644\u0640 0b \u0645\u0646 \u0627\u0644\u0628\u062F\u0627\u064A\u0629

def to_decimal(b):
    return int(b, 2)

print(to_binary(10))   # "1010"
print(to_binary(255))  # "11111111"
print(to_decimal("1010"))   # 10
print(to_decimal("11111111"))  # 255`,solutionJs:`function toBinary(n) {
    return n.toString(2);
}

function toDecimal(b) {
    return parseInt(b, 2);
}

console.log(toBinary(10));    // "1010"
console.log(toBinary(255));   // "11111111"
console.log(toDecimal("1010"));    // 10
console.log(toDecimal("11111111")); // 255`}],commonMistakes:[{mistakeAr:"\u0627\u0644\u062E\u0644\u0637 \u0628\u064A\u0646 \u0645\u0648\u0636\u0639 \u0627\u0644\u0623\u0631\u0642\u0627\u0645 \u2014 \u0623\u0647\u0645 \u062E\u0627\u0646\u0629 \u0647\u064A \u0627\u0644\u064A\u0633\u0627\u0631",mistakeEn:"Confusing digit positions \u2014 the most significant bit is on the left",fixAr:"\u0641\u064A 1010: \u0627\u0644\u064A\u0633\u0627\u0631 = 8\u060C \u062B\u0645 4\u060C \u062B\u0645 2\u060C \u062B\u0645 1 (\u0645\u0646 \u0627\u0644\u064A\u0633\u0627\u0631 \u0644\u0644\u064A\u0645\u064A\u0646)",fixEn:"In 1010: left = 8, then 4, then 2, then 1 (left to right)"}]},{id:21,part:6,partTitleAr:"\u062E\u0644\u0641 \u0627\u0644\u0643\u0648\u0627\u0644\u064A\u0633 (\u0627\u062E\u062A\u064A\u0627\u0631\u064A)",partTitleEn:"Under the Hood (Optional)",titleAr:"\u0627\u0644\u0623\u0631\u0642\u0627\u0645 \u0627\u0644\u0633\u062F\u0627\u0633\u064A\u0629 \u0639\u0634\u0631\u064A\u0629",titleEn:"Hexadecimal Numbers",descriptionAr:"\u0627\u0644\u0646\u0638\u0627\u0645 \u0627\u0644\u0633\u062F\u0627\u0633\u064A \u0639\u0634\u0631\u064A (\u0627\u0644\u0642\u0627\u0639\u062F\u0629 16) \u064A\u064F\u0633\u062A\u062E\u062F\u0645 \u0643\u062B\u064A\u0631\u064B\u0627 \u0641\u064A \u0627\u0644\u0628\u0631\u0645\u062C\u0629 \u0644\u0644\u062A\u0639\u0627\u0645\u0644 \u0645\u0639 \u0627\u0644\u0630\u0627\u0643\u0631\u0629 \u0648\u0627\u0644\u0623\u0644\u0648\u0627\u0646.",descriptionEn:"Hexadecimal (base 16) is widely used in programming for memory addresses and colors.",estimatedTime:"30 min",level:"intermediate",icon:"\u{1F3A8}",color:"#d29922",conceptsAr:["\u0627\u0644\u0642\u0627\u0639\u062F\u0629 16","\u0623\u0631\u0642\u0627\u0645 A-F","\u0627\u0644\u062A\u062D\u0648\u064A\u0644","\u0627\u0644\u0623\u0644\u0648\u0627\u0646 \u0641\u064A CSS","\u0639\u0646\u0627\u0648\u064A\u0646 \u0627\u0644\u0630\u0627\u0643\u0631\u0629"],conceptsEn:["Base 16","Digits A-F","Conversion","Colors in CSS","Memory addresses"],conceptDescriptionsAr:["\u0627\u0644\u0646\u0638\u0627\u0645 \u0627\u0644\u0633\u062F\u0627\u0633\u064A \u0639\u0634\u0631\u064A \u0642\u0627\u0639\u062F\u062A\u0647 16 \u2014 \u0643\u0644 \u062E\u0627\u0646\u0629 \u062A\u0645\u062B\u0644 16 \u0636\u0639\u0641 \u0627\u0644\u062E\u0627\u0646\u0629 \u0627\u0644\u062A\u064A \u0639\u0644\u0649 \u064A\u0645\u064A\u0646\u0647\u0627.","\u0627\u0644\u0623\u0631\u0642\u0627\u0645 10\u201315 \u062A\u064F\u0645\u062B\u064E\u0651\u0644 \u0628\u0627\u0644\u062D\u0631\u0648\u0641 A\u2013F\u060C \u0625\u0630 A=10 \u0648B=11 \u062D\u062A\u0649 F=15 \u0644\u062A\u0648\u0641\u064A\u0631 \u0631\u0645\u0632 \u0648\u0627\u062D\u062F \u0644\u0643\u0644 \u0642\u064A\u0645\u0629.",'FF \u0628\u0627\u0644\u0633\u062F\u0627\u0633\u064A \u064A\u0633\u0627\u0648\u064A 255 \u0628\u0627\u0644\u0639\u0634\u0631\u064A \u2014 \u0633\u0647\u0644 \u0627\u0644\u062A\u062D\u0648\u064A\u0644 \u0639\u0628\u0631 parseInt("FF", 16) \u0641\u064A JavaScript.',"\u0623\u0644\u0648\u0627\u0646 CSS \u0643\u0640 #FF5733 \u0645\u0643\u0648\u0651\u0646\u0629 \u0645\u0646 \u062B\u0644\u0627\u062B\u0629 \u0623\u0632\u0648\u0627\u062C \u0633\u062F\u0627\u0633\u064A\u0629 \u062A\u064F\u0645\u062B\u0651\u0644 \u0642\u0646\u0648\u0627\u062A \u0627\u0644\u0623\u062D\u0645\u0631 \u0648\u0627\u0644\u0623\u062E\u0636\u0631 \u0648\u0627\u0644\u0623\u0632\u0631\u0642.","\u0639\u0646\u0627\u0648\u064A\u0646 \u0627\u0644\u0630\u0627\u0643\u0631\u0629 \u0648\u0642\u064A\u0645 \u0627\u0644\u0630\u0627\u0643\u0631\u0629 \u062A\u064F\u0639\u0631\u0636 \u0639\u0627\u062F\u0629\u064B \u0628\u0627\u0644\u0633\u062F\u0627\u0633\u064A \u0644\u0623\u0646\u0647 \u0623\u0642\u0635\u0631 \u0645\u0646 \u0627\u0644\u062B\u0646\u0627\u0626\u064A \u0648\u0623\u0633\u0647\u0644 \u0642\u0631\u0627\u0621\u0629\u064B."],conceptDescriptionsEn:["The hexadecimal system has base 16 \u2014 each position represents 16 times the position to its right.","Numbers 10\u201315 are represented by letters A\u2013F, where A=10 and B=11 up to F=15, giving one symbol per value.",'FF in hex equals 255 in decimal \u2014 easy to convert via parseInt("FF", 16) in JavaScript.',"CSS colors like #FF5733 consist of three hex pairs representing the Red, Green, and Blue channels.","Memory addresses and register values are usually shown in hex because it's shorter than binary and easier to read."],diagramType:"hex-colors",codeExamples:[{language:"javascript",code:`// Hex to Decimal
console.log(parseInt("FF", 16)); // 255
console.log(parseInt("1A", 16)); // 26

// Decimal to Hex
console.log((255).toString(16)); // "ff"
console.log((26).toString(16));  // "1a"

// Hex colors in JS (as used in CSS)
const red   = "#FF0000";
const green = "#00FF00";
const blue  = "#0000FF";
console.log(\`Red: \${parseInt("FF",16)}, Green: 0, Blue: 0\`);`,descriptionAr:"\u0627\u0644\u062A\u0639\u0627\u0645\u0644 \u0645\u0639 \u0627\u0644\u0623\u0631\u0642\u0627\u0645 \u0627\u0644\u0633\u062F\u0627\u0633\u064A\u0629 \u0641\u064A JavaScript",descriptionEn:"Working with hexadecimal in JavaScript"}],editorLinks:[{label:"Programiz JS Editor",url:"https://www.programiz.com/javascript/online-compiler/",language:"javascript"}],keyPointsAr:["\u0627\u0644\u0646\u0638\u0627\u0645 \u0627\u0644\u0633\u062F\u0627\u0633\u064A \u0639\u0634\u0631\u064A \u064A\u0633\u062A\u062E\u062F\u0645 16 \u0631\u0645\u0632\u064B\u0627: 0-9 \u0648 A-F","FF \u0628\u0627\u0644\u0633\u062F\u0627\u0633\u064A = 255 \u0628\u0627\u0644\u0639\u0634\u0631\u064A","\u0623\u0644\u0648\u0627\u0646 CSS \u0643\u0640 #FF5733 \u0645\u0643\u062A\u0648\u0628\u0629 \u0628\u0627\u0644\u0646\u0638\u0627\u0645 \u0627\u0644\u0633\u062F\u0627\u0633\u064A","\u0627\u0644\u0628\u0631\u0627\u0645\u062C\u064A\u0648\u0646 \u064A\u0633\u062A\u062E\u062F\u0645\u0648\u0646\u0647 \u0644\u0623\u0646\u0647 \u0623\u0642\u0635\u0631 \u0645\u0646 \u0627\u0644\u062B\u0646\u0627\u0626\u064A"],keyPointsEn:["Hex uses 16 symbols: 0-9 and A-F","FF in hex = 255 in decimal","CSS colors like #FF5733 are written in hexadecimal","Programmers use it because it's shorter than binary"],quiz:[{questionAr:"\u0645\u0627 \u0642\u064A\u0645\u0629 F \u0628\u0627\u0644\u0646\u0638\u0627\u0645 \u0627\u0644\u0633\u062F\u0627\u0633\u064A \u0628\u0627\u0644\u0639\u0634\u0631\u064A\u061F",questionEn:"What is the decimal value of F in hexadecimal?",options:["14","15","16","10"],correctIndex:1,explanationAr:"\u0641\u064A \u0627\u0644\u0646\u0638\u0627\u0645 \u0627\u0644\u0633\u062F\u0627\u0633\u064A: A=10\u060C B=11\u060C C=12\u060C D=13\u060C E=14\u060C F=15.",explanationEn:"In hex: A=10, B=11, C=12, D=13, E=14, F=15."},{questionAr:"\u0645\u0627 \u0642\u064A\u0645\u0629 FF \u0628\u0627\u0644\u0639\u0634\u0631\u064A\u061F",questionEn:"What is the decimal value of FF?",options:["200","240","255","256"],correctIndex:2,explanationAr:"FF = 15\xD716 + 15 = 240 + 15 = 255.",explanationEn:"FF = 15\xD716 + 15 = 240 + 15 = 255."}],challenges:[{titleAr:"\u062A\u062D\u062F\u064A: \u0645\u062D\u0644\u0644 \u0627\u0644\u0623\u0644\u0648\u0627\u0646",titleEn:"Challenge: Color Analyzer",taskAr:"\u0627\u0643\u062A\u0628 \u0643\u0648\u062F\u0627\u064B \u064A\u0623\u062E\u0630 \u0644\u0648\u0646 CSS \u0645\u062B\u0644 #FF5733 \u0648\u064A\u0637\u0628\u0639 \u0642\u064A\u0645 R \u0648G \u0648B \u0628\u0627\u0644\u0639\u0634\u0631\u064A.",taskEn:"Write code that takes a CSS color like #FF5733 and prints the R, G, B values in decimal.",hintAr:'#FF5733: \u0623\u0648\u0644 \u0632\u0648\u062C = R\u060C \u062B\u0627\u0646\u064A \u0632\u0648\u062C = G\u060C \u062B\u0627\u0644\u062B \u0632\u0648\u062C = B. \u0627\u0633\u062A\u062E\u062F\u0645 parseInt("FF", 16)',hintEn:'#FF5733: first pair = R, second = G, third = B. Use parseInt("FF", 16)',solutionPython:`color = "#FF5733"
r = int(color[1:3], 16)
g = int(color[3:5], 16)
b = int(color[5:7], 16)
print(f"R={r}, G={g}, B={b}")  # R=255, G=87, B=51`,solutionJs:'let color = "#FF5733";\nlet r = parseInt(color.slice(1,3), 16);\nlet g = parseInt(color.slice(3,5), 16);\nlet b = parseInt(color.slice(5,7), 16);\nconsole.log(`R=${r}, G=${g}, B=${b}`); // R=255, G=87, B=51'}],commonMistakes:[{mistakeAr:"\u0627\u0644\u062E\u0644\u0637 \u0628\u064A\u0646 \u0627\u0644\u0623\u0631\u0642\u0627\u0645 \u0648\u0627\u0644\u062D\u0631\u0648\u0641: \u0647\u0644 A \u0631\u0642\u0645 \u0623\u0645 \u062D\u0631\u0641 \u0641\u064A \u0627\u0644\u0633\u062F\u0627\u0633\u064A\u061F",mistakeEn:"Confusing numbers and letters: is A a digit or letter in hex?",fixAr:"\u0641\u064A \u0627\u0644\u0646\u0638\u0627\u0645 \u0627\u0644\u0633\u062F\u0627\u0633\u064A A-F \u0647\u064A \u0623\u0631\u0642\u0627\u0645 \u062A\u0645\u062B\u0644 10-15 \u0648\u0644\u064A\u0633\u062A \u062D\u0631\u0648\u0641\u0627\u064B \u0639\u0627\u062F\u064A\u0629",fixEn:"In hex, A-F are digits representing 10-15, not regular letters"}]},{id:22,part:6,partTitleAr:"\u062E\u0644\u0641 \u0627\u0644\u0643\u0648\u0627\u0644\u064A\u0633 (\u0627\u062E\u062A\u064A\u0627\u0631\u064A)",partTitleEn:"Under the Hood (Optional)",titleAr:"\u0627\u0644\u062C\u0628\u0631 \u0627\u0644\u0645\u0646\u0637\u0642\u064A",titleEn:"Boolean Algebra",descriptionAr:"\u0627\u0644\u062C\u0628\u0631 \u0627\u0644\u0645\u0646\u0637\u0642\u064A \u0647\u0648 \u0623\u0633\u0627\u0633 \u0643\u064A\u0641 \u062A\u062A\u062E\u0630 \u0627\u0644\u062F\u0648\u0627\u0626\u0631 \u0627\u0644\u0625\u0644\u0643\u062A\u0631\u0648\u0646\u064A\u0629 \u0642\u0631\u0627\u0631\u0627\u062A. \u062A\u0639\u0644\u0645 \u0628\u0648\u0627\u0628\u0627\u062A AND \u0648OR \u0648NOT.",descriptionEn:"Boolean algebra is the foundation of how electronic circuits make decisions. Learn AND, OR, and NOT gates.",estimatedTime:"35 min",level:"intermediate",icon:"\u26A1",color:"#bc8cff",conceptsAr:["AND Gate","OR Gate","NOT Gate","XOR Gate","\u062C\u062F\u0627\u0648\u0644 \u0627\u0644\u062D\u0642\u064A\u0642\u0629"],conceptsEn:["AND Gate","OR Gate","NOT Gate","XOR Gate","Truth tables"],conceptDescriptionsAr:["\u0628\u0648\u0627\u0628\u0629 AND \u062A\u064F\u062E\u0631\u062C 1 \u0641\u0642\u0637 \u0639\u0646\u062F\u0645\u0627 \u064A\u0643\u0648\u0646 \u0643\u0644\u0627 \u0627\u0644\u0637\u0631\u0641\u064A\u0646 1 \u2014 \u062A\u064F\u0642\u0627\u0628\u0644 && \u0641\u064A \u0627\u0644\u0628\u0631\u0645\u062C\u0629.","\u0628\u0648\u0627\u0628\u0629 OR \u062A\u064F\u062E\u0631\u062C 1 \u0639\u0646\u062F\u0645\u0627 \u064A\u0643\u0648\u0646 \u0637\u0631\u0641 \u0648\u0627\u062D\u062F \u0639\u0644\u0649 \u0627\u0644\u0623\u0642\u0644 1 \u2014 \u062A\u064F\u0642\u0627\u0628\u0644 || \u0641\u064A \u0627\u0644\u0628\u0631\u0645\u062C\u0629.","\u0628\u0648\u0627\u0628\u0629 NOT \u062A\u0639\u0643\u0633 \u0627\u0644\u0625\u0634\u0627\u0631\u0629: 0 \u062A\u0635\u0628\u062D 1\u060C \u06481 \u062A\u0635\u0628\u062D 0 \u2014 \u062A\u064F\u0642\u0627\u0628\u0644 ! \u0641\u064A \u0627\u0644\u0628\u0631\u0645\u062C\u0629.","\u0628\u0648\u0627\u0628\u0629 XOR \u062A\u064F\u062E\u0631\u062C 1 \u0641\u0642\u0637 \u0639\u0646\u062F\u0645\u0627 \u064A\u062E\u062A\u0644\u0641 \u0627\u0644\u0637\u0631\u0641\u0627\u0646 \u2014 \u0645\u0641\u064A\u062F\u0629 \u0641\u064A \u0627\u0644\u062A\u0634\u0641\u064A\u0631 \u0648\u0627\u0644\u0643\u0634\u0641 \u0639\u0646 \u0627\u0644\u0623\u062E\u0637\u0627\u0621.","\u062C\u062F\u0648\u0644 \u0627\u0644\u062D\u0642\u064A\u0642\u0629 \u064A\u064F\u062F\u0631\u062C \u062C\u0645\u064A\u0639 \u062A\u0631\u0643\u064A\u0628\u0627\u062A \u0627\u0644\u0645\u062F\u062E\u0644\u0627\u062A \u0648\u0645\u062E\u0631\u062C\u0627\u062A\u0647\u0627 \u0644\u062A\u062D\u0644\u064A\u0644 \u0623\u064A \u062F\u0627\u0644\u0629 \u0645\u0646\u0637\u0642\u064A\u0629 \u0628\u0634\u0643\u0644 \u0643\u0627\u0645\u0644."],conceptDescriptionsEn:["AND gate outputs 1 only when both inputs are 1 \u2014 equivalent to && in programming.","OR gate outputs 1 when at least one input is 1 \u2014 equivalent to || in programming.","NOT gate inverts the signal: 0 becomes 1 and 1 becomes 0 \u2014 equivalent to ! in programming.","XOR gate outputs 1 only when the two inputs differ \u2014 useful in encryption and error detection.","A truth table lists all input combinations and their outputs to fully analyze any logical function."],diagramType:"logic-gates",codeExamples:[{language:"javascript",code:`// Truth Tables in JavaScript
// AND: true only when BOTH are true
console.log(true  && true);  // true
console.log(true  && false); // false
console.log(false && true);  // false
console.log(false && false); // false

// OR: true when AT LEAST ONE is true
console.log(true  || true);  // true
console.log(true  || false); // true
console.log(false || false); // false

// NOT: flips the value
console.log(!true);  // false
console.log(!false); // true

// XOR: true when EXACTLY ONE is true
const xor = (a, b) => a !== b;
console.log(xor(true, false)); // true
console.log(xor(true, true));  // false`,descriptionAr:"\u062C\u062F\u0627\u0648\u0644 \u0627\u0644\u062D\u0642\u064A\u0642\u0629 \u0644\u0644\u0639\u0645\u0644\u064A\u0627\u062A \u0627\u0644\u0645\u0646\u0637\u0642\u064A\u0629 \u0641\u064A JavaScript",descriptionEn:"Truth tables for boolean operations in JavaScript"}],editorLinks:[{label:"Programiz JS Editor",url:"https://www.programiz.com/javascript/online-compiler/",language:"javascript"}],keyPointsAr:["AND \u062A\u064F\u0639\u0637\u064A true \u0641\u0642\u0637 \u0625\u0630\u0627 \u0643\u0644\u0627 \u0627\u0644\u0637\u0631\u0641\u064A\u0646 true","OR \u062A\u064F\u0639\u0637\u064A true \u0625\u0630\u0627 \u0637\u0631\u0641 \u0648\u0627\u062D\u062F \u0639\u0644\u0649 \u0627\u0644\u0623\u0642\u0644 true","NOT \u062A\u0639\u0643\u0633 \u0627\u0644\u0642\u064A\u0645\u0629 \u0627\u0644\u0645\u0646\u0637\u0642\u064A\u0629","\u0647\u0630\u0647 \u0627\u0644\u0639\u0645\u0644\u064A\u0627\u062A \u062A\u064F\u0634\u0643\u0651\u0644 \u0623\u0633\u0627\u0633 \u0627\u0644\u0645\u0639\u0627\u0644\u062C \u0641\u064A \u0627\u0644\u062D\u0627\u0633\u0648\u0628"],keyPointsEn:["AND gives true only when BOTH sides are true","OR gives true when at least ONE side is true","NOT flips the boolean value","These operations form the foundation of computer processors"],quiz:[{questionAr:"\u0645\u0627 \u0646\u0627\u062A\u062C false OR true\u061F",questionEn:"What is the result of false OR true?",options:["false","true","null","undefined"],correctIndex:1,explanationAr:"OR \u064A\u064F\u0639\u0637\u064A true \u0625\u0630\u0627 \u0643\u0627\u0646 \u0637\u0631\u0641 \u0648\u0627\u062D\u062F \u0639\u0644\u0649 \u0627\u0644\u0623\u0642\u0644 true.",explanationEn:"OR gives true when at least one side is true."},{questionAr:"\u0645\u0627 \u0646\u0627\u062A\u062C NOT true\u061F",questionEn:"What is the result of NOT true?",options:["true","false","0","1"],correctIndex:1,explanationAr:"NOT \u064A\u0639\u0643\u0633 \u0627\u0644\u0642\u064A\u0645\u0629 \u0627\u0644\u0645\u0646\u0637\u0642\u064A\u0629: NOT true = false.",explanationEn:"NOT inverts the boolean value: NOT true = false."},{questionAr:"\u0645\u0627 \u0627\u0644\u0628\u0648\u0627\u0628\u0629 \u0627\u0644\u062A\u064A \u062A\u0639\u0637\u064A true \u0641\u0642\u0637 \u0639\u0646\u062F\u0645\u0627 \u064A\u062E\u062A\u0644\u0641 \u0627\u0644\u0637\u0631\u0641\u0627\u0646\u061F",questionEn:"Which gate gives true only when the two inputs differ?",options:["AND","OR","NOT","XOR"],correctIndex:3,explanationAr:"XOR \u062A\u0639\u0637\u064A true \u0641\u0642\u0637 \u0639\u0646\u062F\u0645\u0627 \u064A\u0643\u0648\u0646 \u0623\u062D\u062F \u0627\u0644\u0637\u0631\u0641\u064A\u0646 true \u0648\u0627\u0644\u0622\u062E\u0631 false.",explanationEn:"XOR gives true only when one side is true and the other is false."}],challenges:[{titleAr:"\u062A\u062D\u062F\u064A: \u0646\u0638\u0627\u0645 \u062F\u062E\u0648\u0644",titleEn:"Challenge: Login System",taskAr:'\u0627\u0643\u062A\u0628 \u0634\u0631\u0637\u0627\u064B: \u0627\u0644\u0645\u0633\u062A\u062E\u062F\u0645 \u064A\u062F\u062E\u0644 \u0625\u0630\u0627 \u0643\u0627\u0646 \u0627\u0633\u0645 \u0627\u0644\u0645\u0633\u062A\u062E\u062F\u0645 "admin" AND \u0643\u0644\u0645\u0629 \u0627\u0644\u0645\u0631\u0648\u0631 "1234".',taskEn:'Write a condition: user logs in if username is "admin" AND password is "1234".',hintAr:"\u0627\u0633\u062A\u062E\u062F\u0645 && (AND) \u0644\u0644\u062A\u062D\u0642\u0642 \u0645\u0646 \u0627\u0644\u0634\u0631\u0637\u064A\u0646 \u0645\u0639\u0627\u064B",hintEn:"Use && (AND) to check both conditions together",solutionPython:`username = "admin"
password = "1234"

if username == "admin" and password == "1234":
    print("\u0645\u0631\u062D\u0628\u0627\u064B! \u062A\u0645 \u0627\u0644\u062F\u062E\u0648\u0644 \u0628\u0646\u062C\u0627\u062D")
else:
    print("\u062E\u0637\u0623 \u0641\u064A \u0627\u0633\u0645 \u0627\u0644\u0645\u0633\u062A\u062E\u062F\u0645 \u0623\u0648 \u0643\u0644\u0645\u0629 \u0627\u0644\u0645\u0631\u0648\u0631")`,solutionJs:`let username = "admin";
let password = "1234";

if (username === "admin" && password === "1234") {
    console.log("Welcome! Login successful");
} else {
    console.log("Wrong username or password");
}`}],commonMistakes:[{mistakeAr:"\u0627\u0644\u062E\u0644\u0637 \u0628\u064A\u0646 AND \u0648 OR \u0641\u064A \u0627\u0644\u0634\u0631\u0648\u0637 \u0627\u0644\u0645\u0631\u0643\u0628\u0629",mistakeEn:"Confusing AND and OR in compound conditions",fixAr:"AND: \u064A\u062C\u0628 \u0623\u0646 \u064A\u0643\u0648\u0646 \u0643\u0644\u0627\u0647\u0645\u0627 \u0635\u062D\u064A\u062D\u0627\u064B. OR: \u064A\u0643\u0641\u064A \u0623\u0646 \u064A\u0643\u0648\u0646 \u0623\u062D\u062F\u0647\u0645\u0627 \u0635\u062D\u064A\u062D\u0627\u064B.",fixEn:"AND: both must be true. OR: at least one must be true."}]}];var b=[{id:23,part:7,partTitleAr:"\u0645\u0634\u0627\u0631\u064A\u0639 \u0635\u063A\u064A\u0631\u0629",partTitleEn:"Mini Projects",titleAr:"\u0645\u0634\u0631\u0648\u0639: \u0646\u0638\u0627\u0645 \u062F\u0631\u062C\u0627\u062A \u0627\u0644\u0637\u0644\u0627\u0628",titleEn:"Mini Project: Student Grade System",descriptionAr:"\u0637\u0628\u0651\u0642 \u0645\u0627 \u062A\u0639\u0644\u0645\u062A\u0647 \u0641\u064A \u0645\u0634\u0631\u0648\u0639 \u062D\u0642\u064A\u0642\u064A \u2014 \u0646\u0638\u0627\u0645 \u0644\u0625\u062F\u062E\u0627\u0644 \u062F\u0631\u062C\u0627\u062A \u0627\u0644\u0637\u0644\u0627\u0628 \u0648\u062D\u0633\u0627\u0628 \u0627\u0644\u0645\u0639\u062F\u0644 \u0648\u062A\u062D\u062F\u064A\u062F \u0627\u0644\u062A\u0642\u062F\u064A\u0631.",descriptionEn:"Apply what you've learned in a real project \u2014 a system to enter student grades, calculate averages, and determine letter grades.",estimatedTime:"60 min",level:"intermediate",icon:"\u{1F393}",color:"#3fb950",conceptsAr:["\u0627\u0644\u0645\u0635\u0641\u0648\u0641\u0627\u062A","\u0627\u0644\u062D\u0644\u0642\u0627\u062A","\u0627\u0644\u0634\u0631\u0648\u0637","\u0627\u0644\u062F\u0648\u0627\u0644","\u062A\u0646\u0633\u064A\u0642 \u0627\u0644\u0625\u062E\u0631\u0627\u062C"],conceptsEn:["Arrays","Loops","Conditions","Functions","Output formatting"],conceptDescriptionsAr:["\u0627\u0644\u0645\u0635\u0641\u0648\u0641\u0627\u062A \u062A\u064F\u062E\u0632\u0651\u0646 \u062F\u0631\u062C\u0627\u062A \u0643\u0644 \u0637\u0627\u0644\u0628 \u0641\u064A \u0642\u0627\u0626\u0645\u0629 \u0645\u0646\u0638\u0645\u0629 \u064A\u0645\u0643\u0646 \u0627\u0644\u062A\u0643\u0631\u0627\u0631 \u0639\u0644\u064A\u0647\u0627.","\u0627\u0644\u062D\u0644\u0642\u0627\u062A \u062A\u064F\u0645\u0631\u0651 \u0639\u0644\u0649 \u0643\u0644 \u062F\u0631\u062C\u0629 \u0641\u064A \u0627\u0644\u0645\u0635\u0641\u0648\u0641\u0629 \u0644\u062C\u0645\u0639\u0647\u0627 \u0648\u062D\u0633\u0627\u0628 \u0627\u0644\u0645\u0639\u062F\u0644.","\u0627\u0644\u0634\u0631\u0648\u0637 \u062A\u064F\u062D\u062F\u062F \u0627\u0644\u062A\u0642\u062F\u064A\u0631 \u0627\u0644\u062D\u0631\u0641\u064A (A/B/C/D/F) \u0628\u0646\u0627\u0621\u064B \u0639\u0644\u0649 \u0627\u0644\u0645\u0639\u062F\u0644 \u0627\u0644\u0645\u062D\u0633\u0648\u0628.","\u0627\u0644\u062F\u0648\u0627\u0644 \u062A\u064F\u0642\u0633\u0651\u0645 \u0627\u0644\u0645\u0634\u0631\u0648\u0639 \u0625\u0644\u0649 \u0648\u062D\u062F\u0627\u062A \u0645\u0633\u062A\u0642\u0644\u0629 \u0644\u0643\u0644 \u0645\u0646\u0647\u0627 \u0645\u0633\u0624\u0648\u0644\u064A\u0629 \u0648\u0627\u062D\u062F\u0629.","\u062A\u0646\u0633\u064A\u0642 \u0627\u0644\u0625\u062E\u0631\u0627\u062C \u064A\u064F\u0638\u0647\u0631 \u0627\u0644\u062A\u0642\u0631\u064A\u0631 \u0628\u0634\u0643\u0644 \u0645\u0646\u0638\u0645 \u0648\u0642\u0627\u0628\u0644 \u0644\u0644\u0642\u0631\u0627\u0621\u0629 \u0628\u0627\u0633\u062A\u062E\u062F\u0627\u0645 console.log."],conceptDescriptionsEn:["Arrays store each student's grades in an organized list that can be iterated over.","Loops go through every grade in the array to sum them up and calculate the average.","Conditions determine the letter grade (A/B/C/D/F) based on the calculated average.","Functions split the project into independent units, each with a single responsibility.","Output formatting displays the report in an organized, readable way using console.log."],diagramType:"project",codeExamples:[{language:"javascript",code:`function getLetterGrade(score) {
  if (score >= 90) return "A";
  if (score >= 80) return "B";
  if (score >= 70) return "C";
  if (score >= 60) return "D";
  return "F";
}

function calculateAverage(grades) {
  let sum = 0;
  for (let grade of grades) {
    sum += grade;
  }
  return sum / grades.length;
}

function printReport(studentName, grades) {
  const avg = calculateAverage(grades);
  const letter = getLetterGrade(avg);
  console.log("=== Student Report ===");
  console.log("Name:    " + studentName);
  console.log("Grades:  " + grades.join(", "));
  console.log("Average: " + avg.toFixed(2));
  console.log("Grade:   " + letter);
}

printReport("Sara Ahmed", [92, 78, 85, 90, 88]);
printReport("Ali Hassan", [65, 72, 58, 70, 68]);`,descriptionAr:"\u0646\u0638\u0627\u0645 \u062A\u0642\u0631\u064A\u0631 \u062F\u0631\u062C\u0627\u062A \u0627\u0644\u0637\u0644\u0627\u0628 \u0627\u0644\u0643\u0627\u0645\u0644",descriptionEn:"Complete student grade report system"}],editorLinks:[{label:"Programiz JS Editor",url:"https://www.programiz.com/javascript/online-compiler/",language:"javascript"}],keyPointsAr:["\u0647\u0630\u0627 \u0627\u0644\u0645\u0634\u0631\u0648\u0639 \u064A\u062C\u0645\u0639: \u0627\u0644\u0645\u0635\u0641\u0648\u0641\u0627\u062A \u0648\u0627\u0644\u062D\u0644\u0642\u0627\u062A \u0648\u0627\u0644\u0634\u0631\u0648\u0637 \u0648\u0627\u0644\u062F\u0648\u0627\u0644","\u062D\u0627\u0648\u0644 \u0625\u0636\u0627\u0641\u0629 \u0645\u064A\u0632\u0627\u062A \u062C\u062F\u064A\u062F\u0629: \u062A\u0631\u062A\u064A\u0628 \u0627\u0644\u0637\u0644\u0627\u0628\u060C \u0623\u0639\u0644\u0649 \u062F\u0631\u062C\u0629\u060C \u0623\u062F\u0646\u0649 \u062F\u0631\u062C\u0629","\u064A\u0645\u0643\u0646\u0643 \u062A\u0637\u0648\u064A\u0631\u0647 \u0644\u064A\u0642\u0631\u0623 \u0627\u0644\u062F\u0631\u062C\u0627\u062A \u0645\u0646 \u0627\u0644\u0645\u0633\u062A\u062E\u062F\u0645 \u0628\u062F\u0644\u064B\u0627 \u0645\u0646 \u0643\u062A\u0627\u0628\u062A\u0647\u0627","\u0647\u0630\u0627 \u0647\u0648 \u0646\u0648\u0639 \u0627\u0644\u0645\u0634\u0627\u0631\u064A\u0639 \u0627\u0644\u062A\u064A \u062A\u0628\u0646\u064A\u0647\u0627 \u0641\u064A \u0627\u0644\u0648\u0638\u064A\u0641\u0629 \u0627\u0644\u062D\u0642\u064A\u0642\u064A\u0629"],keyPointsEn:["This project combines: arrays, loops, conditions, and functions","Try adding features: ranking students, highest grade, lowest grade","You can extend it to read grades from user input","This is the type of project you'll build in real jobs"],quiz:[{questionAr:"\u0645\u0627 \u0627\u0644\u062F\u0627\u0644\u0629 \u0627\u0644\u0645\u0633\u062A\u062E\u062F\u0645\u0629 \u0644\u062D\u0633\u0627\u0628 \u0627\u0644\u0645\u0639\u062F\u0644\u061F",questionEn:"What does the calculateAverage function do?",options:["\u062A\u0637\u0628\u0639 \u0627\u0644\u062F\u0631\u062C\u0627\u062A / Prints grades","\u062A\u062C\u0645\u0639 \u0627\u0644\u062F\u0631\u062C\u0627\u062A \u0648\u062A\u0642\u0633\u0645\u0647\u0627 \u0639\u0644\u0649 \u0639\u062F\u062F\u0647\u0627 / Sums grades and divides by count","\u062A\u0631\u062A\u0628 \u0627\u0644\u0637\u0644\u0627\u0628 / Ranks students","\u062A\u062D\u0630\u0641 \u0627\u0644\u062F\u0631\u062C\u0627\u062A / Deletes grades"],correctIndex:1,explanationAr:"calculateAverage \u062A\u062C\u0645\u0639 \u0643\u0644 \u0627\u0644\u062F\u0631\u062C\u0627\u062A \u062B\u0645 \u062A\u0642\u0633\u0645\u0647\u0627 \u0639\u0644\u0649 \u0639\u062F\u062F \u0627\u0644\u062F\u0631\u062C\u0627\u062A \u0644\u0644\u062D\u0635\u0648\u0644 \u0639\u0644\u0649 \u0627\u0644\u0645\u0639\u062F\u0644.",explanationEn:"calculateAverage sums all grades then divides by the count to get the average."}],challenges:[{titleAr:"\u0627\u0644\u062E\u0637\u0648\u0629 1: \u062F\u0627\u0644\u0629 \u0627\u0644\u062A\u0642\u062F\u064A\u0631 \u0627\u0644\u062D\u0631\u0641\u064A",titleEn:"Step 1: Letter Grade Function",taskAr:"\u0627\u0628\u062F\u0623 \u0628\u0643\u062A\u0627\u0628\u0629 \u062F\u0627\u0644\u0629 getLetterGrade \u062A\u0623\u062E\u0630 \u062F\u0631\u062C\u0629 \u0648\u062A\u064F\u0639\u064A\u062F A/B/C/D/F.",taskEn:"Start by writing a getLetterGrade function that takes a score and returns A/B/C/D/F.",hintAr:"90+ = A\u060C 80+ = B\u060C 70+ = C\u060C 60+ = D\u060C \u0623\u0642\u0644 = F",hintEn:"90+ = A, 80+ = B, 70+ = C, 60+ = D, below = F",solutionPython:`def get_letter_grade(score):
    if score >= 90: return "A"
    if score >= 80: return "B"
    if score >= 70: return "C"
    if score >= 60: return "D"
    return "F"

print(get_letter_grade(92))  # A
print(get_letter_grade(75))  # C`,solutionJs:`function getLetterGrade(score) {
    if (score >= 90) return "A";
    if (score >= 80) return "B";
    if (score >= 70) return "C";
    if (score >= 60) return "D";
    return "F";
}

console.log(getLetterGrade(92)); // A
console.log(getLetterGrade(75)); // C`},{titleAr:"\u0627\u0644\u062E\u0637\u0648\u0629 2: \u062F\u0627\u0644\u0629 \u062D\u0633\u0627\u0628 \u0627\u0644\u0645\u0639\u062F\u0644",titleEn:"Step 2: Average Calculator",taskAr:"\u0627\u0643\u062A\u0628 \u062F\u0627\u0644\u0629 calculateAverage \u062A\u0623\u062E\u0630 \u0645\u0635\u0641\u0648\u0641\u0629 \u062F\u0631\u062C\u0627\u062A \u0648\u062A\u064F\u0639\u064A\u062F \u0627\u0644\u0645\u0639\u062F\u0644.",taskEn:"Write a calculateAverage function that takes an array of grades and returns the average.",hintAr:"\u0627\u062C\u0645\u0639 \u0643\u0644 \u0627\u0644\u062F\u0631\u062C\u0627\u062A \u062B\u0645 \u0627\u0642\u0633\u0645\u0647\u0627 \u0639\u0644\u0649 \u0639\u062F\u062F \u0627\u0644\u062F\u0631\u062C\u0627\u062A",hintEn:"Sum all grades then divide by the count",solutionPython:`def calculate_average(grades):
    total = sum(grades)
    return total / len(grades)

grades = [85, 90, 78, 92, 88]
print(calculate_average(grades))  # 86.6`,solutionJs:`function calculateAverage(grades) {
    let sum = 0;
    for (let grade of grades) sum += grade;
    return sum / grades.length;
}

let grades = [85, 90, 78, 92, 88];
console.log(calculateAverage(grades)); // 86.6`},{titleAr:"\u0627\u0644\u062E\u0637\u0648\u0629 3: \u0627\u0644\u062A\u0642\u0631\u064A\u0631 \u0627\u0644\u0643\u0627\u0645\u0644",titleEn:"Step 3: Full Report",taskAr:"\u0627\u0644\u0622\u0646 \u0627\u062F\u0645\u062C \u0627\u0644\u062F\u0627\u0644\u062A\u064A\u0646 \u0641\u064A \u062F\u0627\u0644\u0629 printReport \u062A\u0637\u0628\u0639 \u062A\u0642\u0631\u064A\u0631\u0627\u064B \u0643\u0627\u0645\u0644\u0627\u064B \u0644\u0644\u0637\u0627\u0644\u0628.",taskEn:"Now combine both functions in a printReport function that prints a full student report.",hintAr:"\u0627\u0633\u062A\u062F\u0639\u0650 calculateAverage \u062B\u0645 getLetterGrade \u062B\u0645 \u0627\u0637\u0628\u0639 \u0643\u0644 \u0634\u064A\u0621",hintEn:"Call calculateAverage, then getLetterGrade, then print everything",solutionPython:`def get_letter_grade(score):
    if score >= 90: return "A"
    if score >= 80: return "B"
    if score >= 70: return "C"
    if score >= 60: return "D"
    return "F"

def calculate_average(grades):
    return sum(grades) / len(grades)

def print_report(name, grades):
    avg = calculate_average(grades)
    letter = get_letter_grade(avg)
    print(f"\u0627\u0644\u0637\u0627\u0644\u0628: {name}")
    print(f"\u0627\u0644\u062F\u0631\u062C\u0627\u062A: {grades}")
    print(f"\u0627\u0644\u0645\u0639\u062F\u0644: {avg:.2f}")
    print(f"\u0627\u0644\u062A\u0642\u062F\u064A\u0631: {letter}")

print_report("\u0633\u0627\u0631\u0629 \u0623\u062D\u0645\u062F", [92, 78, 85, 90, 88])`,solutionJs:`function getLetterGrade(score) {
    if (score >= 90) return "A";
    if (score >= 80) return "B";
    if (score >= 70) return "C";
    if (score >= 60) return "D";
    return "F";
}

function calculateAverage(grades) {
    let sum = 0;
    for (let g of grades) sum += g;
    return sum / grades.length;
}

function printReport(name, grades) {
    const avg = calculateAverage(grades);
    const letter = getLetterGrade(avg);
    console.log("Student: " + name);
    console.log("Grades: " + grades.join(", "));
    console.log("Average: " + avg.toFixed(2));
    console.log("Grade: " + letter);
}

printReport("Sara Ahmed", [92, 78, 85, 90, 88]);`}],commonMistakes:[{mistakeAr:"\u0646\u0633\u064A\u0627\u0646 \u0642\u0633\u0645\u0629 \u0627\u0644\u0645\u062C\u0645\u0648\u0639 \u0639\u0644\u0649 \u0639\u062F\u062F \u0627\u0644\u062F\u0631\u062C\u0627\u062A \u0639\u0646\u062F \u062D\u0633\u0627\u0628 \u0627\u0644\u0645\u0639\u062F\u0644",mistakeEn:"Forgetting to divide the sum by the count when calculating average",fixAr:"\u0627\u0644\u0645\u0639\u062F\u0644 = \u0645\u062C\u0645\u0648\u0639 \u0627\u0644\u062F\u0631\u062C\u0627\u062A \xF7 \u0639\u062F\u062F \u0627\u0644\u062F\u0631\u062C\u0627\u062A",fixEn:"Average = sum of grades \xF7 number of grades"}]},{id:24,part:7,partTitleAr:"\u0645\u0634\u0627\u0631\u064A\u0639 \u0635\u063A\u064A\u0631\u0629",partTitleEn:"Mini Projects",titleAr:"\u0645\u0634\u0631\u0648\u0639: \u0646\u0638\u0627\u0645 \u0628\u0646\u0643\u064A \u0628\u0633\u064A\u0637",titleEn:"Mini Project: Simple Banking System",descriptionAr:"\u0627\u0628\u0646\u0650 \u0646\u0638\u0627\u0645\u064B\u0627 \u0628\u0646\u0643\u064A\u064B\u0627 \u0628\u0633\u064A\u0637\u064B\u0627 \u064A\u062A\u064A\u062D \u0627\u0644\u0625\u064A\u062F\u0627\u0639 \u0648\u0627\u0644\u0633\u062D\u0628 \u0648\u0639\u0631\u0636 \u0627\u0644\u0631\u0635\u064A\u062F.",descriptionEn:"Build a simple banking system that allows deposits, withdrawals, and balance checking.",estimatedTime:"60 min",level:"intermediate",icon:"\u{1F3E6}",color:"#58a6ff",conceptsAr:["\u0627\u0644\u0643\u0627\u0626\u0646\u0627\u062A (Objects)","\u0627\u0644\u062F\u0648\u0627\u0644","\u0627\u0644\u062A\u062D\u0642\u0642 \u0645\u0646 \u0627\u0644\u0634\u0631\u0648\u0637","\u0625\u062F\u0627\u0631\u0629 \u0627\u0644\u062D\u0627\u0644\u0629"],conceptsEn:["Objects","Functions","Condition validation","State management"],conceptDescriptionsAr:["\u0627\u0644\u0643\u0627\u0626\u0646\u0627\u062A \u062A\u064F\u062C\u0645\u0651\u0639 \u0628\u064A\u0627\u0646\u0627\u062A \u0627\u0644\u062D\u0633\u0627\u0628 (\u0627\u0644\u0631\u0635\u064A\u062F\u060C \u0627\u0644\u0627\u0633\u0645\u060C \u0627\u0644\u0639\u0645\u0644\u064A\u0627\u062A) \u0641\u064A \u0628\u0646\u064A\u0629 \u0648\u0627\u062D\u062F\u0629 \u0645\u062A\u0645\u0627\u0633\u0643\u0629.","\u0627\u0644\u062F\u0648\u0627\u0644 \u062A\u064F\u0639\u0628\u0651\u0631 \u0639\u0646 \u0643\u0644 \u0639\u0645\u0644\u064A\u0629 \u0628\u0646\u0643\u064A\u0629 (\u0625\u064A\u062F\u0627\u0639\u060C \u0633\u062D\u0628\u060C \u0643\u0634\u0641) \u0643\u062F\u0627\u0644\u0629 \u0645\u0633\u062A\u0642\u0644\u0629 \u0642\u0627\u0628\u0644\u0629 \u0644\u0625\u0639\u0627\u062F\u0629 \u0627\u0644\u0627\u0633\u062A\u062E\u062F\u0627\u0645.","\u0627\u0644\u062A\u062D\u0642\u0642 \u0645\u0646 \u0627\u0644\u0634\u0631\u0648\u0637 \u064A\u0636\u0645\u0646 \u0631\u0641\u0636 \u0627\u0644\u0645\u0628\u0627\u0644\u063A \u0627\u0644\u0633\u0627\u0644\u0628\u0629 \u0648\u0627\u0644\u0633\u062D\u0628 \u0627\u0644\u0632\u0627\u0626\u062F \u0639\u0646 \u0627\u0644\u0631\u0635\u064A\u062F \u0642\u0628\u0644 \u0627\u0644\u062A\u0646\u0641\u064A\u0630.","\u0625\u062F\u0627\u0631\u0629 \u0627\u0644\u062D\u0627\u0644\u0629 \u062A\u0639\u0646\u064A \u062A\u062D\u062F\u064A\u062B \u0631\u0635\u064A\u062F \u0627\u0644\u062D\u0633\u0627\u0628 \u0648\u0633\u062C\u0644 \u0627\u0644\u0639\u0645\u0644\u064A\u0627\u062A \u0628\u0634\u0643\u0644 \u0635\u062D\u064A\u062D \u0639\u0646\u062F \u0643\u0644 \u062A\u063A\u064A\u064A\u0631."],conceptDescriptionsEn:["Objects group the account data (balance, name, transactions) into one cohesive structure.","Functions represent each banking operation (deposit, withdrawal, statement) as an independent, reusable unit.","Condition validation ensures negative amounts and overdrafts are rejected before executing the operation.","State management means correctly updating the account balance and transaction log on every change."],diagramType:"project",codeExamples:[{language:"javascript",code:`function createAccount(owner, initialBalance = 0) {
  return {
    owner: owner,
    balance: initialBalance,
    transactions: []
  };
}

function deposit(account, amount) {
  if (amount <= 0) {
    console.log("Invalid amount!");
    return;
  }
  account.balance += amount;
  account.transactions.push({ type: "deposit", amount });
  console.log(\`Deposited $\${amount}. Balance: $\${account.balance}\`);
}

function withdraw(account, amount) {
  if (amount <= 0) {
    console.log("Invalid amount!");
    return;
  }
  if (amount > account.balance) {
    console.log("Insufficient funds!");
    return;
  }
  account.balance -= amount;
  account.transactions.push({ type: "withdrawal", amount });
  console.log(\`Withdrew $\${amount}. Balance: $\${account.balance}\`);
}

function printStatement(account) {
  console.log(\`\\n=== Account: \${account.owner} ===\`);
  console.log(\`Balance: $\${account.balance}\`);
  console.log("Transactions:");
  for (let t of account.transactions) {
    console.log(\`  \${t.type}: $\${t.amount}\`);
  }
}

let myAccount = createAccount("Sara", 1000);
deposit(myAccount, 500);
withdraw(myAccount, 200);
withdraw(myAccount, 2000); // Will fail
printStatement(myAccount);`,descriptionAr:"\u0646\u0638\u0627\u0645 \u0628\u0646\u0643\u064A \u0628\u0633\u064A\u0637 \u0645\u0639 \u0625\u064A\u062F\u0627\u0639 \u0648\u0633\u062D\u0628 \u0648\u0643\u0634\u0641 \u062D\u0633\u0627\u0628",descriptionEn:"Simple banking system with deposit, withdrawal, and statement"}],editorLinks:[{label:"Programiz JS Editor",url:"https://www.programiz.com/javascript/online-compiler/",language:"javascript"}],keyPointsAr:["\u0627\u0644\u0643\u0627\u0626\u0646\u0627\u062A (Objects) \u062A\u064F\u062C\u0645\u0651\u0639 \u0627\u0644\u0628\u064A\u0627\u0646\u0627\u062A \u0648\u0627\u0644\u062F\u0648\u0627\u0644 \u0627\u0644\u0645\u0631\u062A\u0628\u0637\u0629 \u0628\u0647\u0627","\u062A\u062D\u0642\u0642 \u062F\u0627\u0626\u0645\u064B\u0627 \u0645\u0646 \u0635\u062D\u0629 \u0627\u0644\u0645\u062F\u062E\u0644\u0627\u062A \u0642\u0628\u0644 \u062A\u0646\u0641\u064A\u0630 \u0627\u0644\u0639\u0645\u0644\u064A\u0629","\u0633\u062C\u0651\u0644 \u0627\u0644\u0639\u0645\u0644\u064A\u0627\u062A \u0641\u064A \u0645\u0635\u0641\u0648\u0641\u0629 \u0644\u0644\u0631\u062C\u0648\u0639 \u0625\u0644\u064A\u0647\u0627 \u0644\u0627\u062D\u0642\u064B\u0627","\u064A\u0645\u0643\u0646\u0643 \u062A\u0637\u0648\u064A\u0631 \u0647\u0630\u0627 \u0627\u0644\u0645\u0634\u0631\u0648\u0639 \u0628\u0627\u0633\u062A\u062E\u062F\u0627\u0645 OOP"],keyPointsEn:["Objects group related data and functions together","Always validate inputs before performing the operation","Keep a log of transactions in an array for future reference","You can extend this project using OOP principles"],quiz:[{questionAr:"\u0644\u0645\u0627\u0630\u0627 \u0646\u062A\u062D\u0642\u0642 \u0645\u0646 amount > account.balance \u0642\u0628\u0644 \u0627\u0644\u0633\u062D\u0628\u061F",questionEn:"Why do we check amount > account.balance before withdrawing?",options:["\u0644\u0632\u064A\u0627\u062F\u0629 \u0627\u0644\u0633\u0631\u0639\u0629 / To increase speed","\u0644\u0645\u0646\u0639 \u0627\u0644\u0633\u062D\u0628 \u0623\u0643\u062B\u0631 \u0645\u0646 \u0627\u0644\u0631\u0635\u064A\u062F / To prevent overdraft","\u0644\u0637\u0628\u0627\u0639\u0629 \u0627\u0644\u0646\u062A\u064A\u062C\u0629 / To print the result","\u0644\u0625\u0636\u0627\u0641\u0629 \u0627\u0644\u0631\u0635\u064A\u062F / To add balance"],correctIndex:1,explanationAr:"\u0646\u062A\u062D\u0642\u0642 \u0645\u0646 \u0627\u0644\u0631\u0635\u064A\u062F \u0644\u0645\u0646\u0639 \u0627\u0644\u0633\u062D\u0628 \u0627\u0644\u0632\u0627\u0626\u062F \u0639\u0646 \u0627\u0644\u0631\u0635\u064A\u062F \u0627\u0644\u0645\u062A\u0627\u062D.",explanationEn:"We check the balance to prevent withdrawing more than the available balance."}],challenges:[{titleAr:"\u0627\u0644\u062E\u0637\u0648\u0629 1: \u0625\u0646\u0634\u0627\u0621 \u0627\u0644\u062D\u0633\u0627\u0628",titleEn:"Step 1: Create Account",taskAr:"\u0627\u0628\u062F\u0623 \u0628\u0643\u062A\u0627\u0628\u0629 \u0643\u0627\u0626\u0646 \u062D\u0633\u0627\u0628 \u0628\u0646\u0643\u064A \u064A\u062D\u062A\u0648\u064A \u0639\u0644\u0649: \u0627\u0644\u0627\u0633\u0645\u060C \u0627\u0644\u0631\u0635\u064A\u062F\u060C \u0648\u0642\u0627\u0626\u0645\u0629 \u0627\u0644\u0639\u0645\u0644\u064A\u0627\u062A.",taskEn:"Start by writing a bank account object containing: name, balance, and a list of transactions.",hintAr:"\u0627\u0633\u062A\u062E\u062F\u0645 dictionary \u0641\u064A Python \u0623\u0648 object literal \u0641\u064A JS",hintEn:"Use a dictionary in Python or object literal in JS",solutionPython:`account = {
    "owner": "\u0633\u0627\u0631\u0629",
    "balance": 1000,
    "transactions": []
}

print(account["owner"])   # \u0633\u0627\u0631\u0629
print(account["balance"]) # 1000`,solutionJs:`let account = {
    owner: "Sara",
    balance: 1000,
    transactions: []
};

console.log(account.owner);   // Sara
console.log(account.balance); // 1000`},{titleAr:"\u0627\u0644\u062E\u0637\u0648\u0629 2: \u062F\u0627\u0644\u0629 \u0627\u0644\u0625\u064A\u062F\u0627\u0639",titleEn:"Step 2: Deposit Function",taskAr:"\u0627\u0643\u062A\u0628 \u062F\u0627\u0644\u0629 deposit \u062A\u0636\u064A\u0641 \u0645\u0628\u0644\u063A\u0627\u064B \u0644\u0644\u0631\u0635\u064A\u062F \u0645\u0639 \u0627\u0644\u062A\u062D\u0642\u0642 \u0623\u0646 \u0627\u0644\u0645\u0628\u0644\u063A \u0645\u0648\u062C\u0628.",taskEn:"Write a deposit function that adds an amount to the balance, checking that it is positive.",hintAr:"\u0625\u0630\u0627 amount <= 0 \u0627\u0637\u0628\u0639 \u062E\u0637\u0623\u060C \u0648\u0625\u0644\u0627 \u0623\u0636\u0641 \u0644\u0644\u0631\u0635\u064A\u062F",hintEn:"If amount <= 0 print an error, otherwise add to balance",solutionPython:`def deposit(account, amount):
    if amount <= 0:
        print("\u0645\u0628\u0644\u063A \u063A\u064A\u0631 \u0635\u0627\u0644\u062D")
        return
    account["balance"] += amount
    account["transactions"].append({"type": "\u0625\u064A\u062F\u0627\u0639", "amount": amount})
    print(f"\u062A\u0645 \u0625\u064A\u062F\u0627\u0639 {amount}. \u0627\u0644\u0631\u0635\u064A\u062F: {account['balance']}")

deposit(account, 500)  # \u062A\u0645 \u0625\u064A\u062F\u0627\u0639 500. \u0627\u0644\u0631\u0635\u064A\u062F: 1500`,solutionJs:`function deposit(account, amount) {
    if (amount <= 0) {
        console.log("Invalid amount");
        return;
    }
    account.balance += amount;
    account.transactions.push({ type: "deposit", amount });
    console.log(\`Deposited \${amount}. Balance: \${account.balance}\`);
}

deposit(account, 500); // Deposited 500. Balance: 1500`},{titleAr:"\u0627\u0644\u062E\u0637\u0648\u0629 3: \u062F\u0627\u0644\u0629 \u0627\u0644\u0633\u062D\u0628 \u0648\u0643\u0634\u0641 \u0627\u0644\u062D\u0633\u0627\u0628",titleEn:"Step 3: Withdraw and Print Statement",taskAr:"\u0623\u0636\u0641 \u062F\u0627\u0644\u0629 withdraw \u0645\u0639 \u0627\u0644\u062A\u062D\u0642\u0642 \u0645\u0646 \u0627\u0644\u0631\u0635\u064A\u062F\u060C \u0648\u062F\u0627\u0644\u0629 printStatement \u0644\u0637\u0628\u0627\u0639\u0629 \u062C\u0645\u064A\u0639 \u0627\u0644\u0639\u0645\u0644\u064A\u0627\u062A.",taskEn:"Add a withdraw function with balance validation, and a printStatement function to print all transactions.",hintAr:"\u062A\u062D\u0642\u0642 \u0623\u0646 amount <= balance \u0642\u0628\u0644 \u0627\u0644\u0633\u062D\u0628",hintEn:"Check that amount <= balance before withdrawing",solutionPython:`def withdraw(account, amount):
    if amount <= 0:
        print("\u0645\u0628\u0644\u063A \u063A\u064A\u0631 \u0635\u0627\u0644\u062D")
        return
    if amount > account["balance"]:
        print("\u0631\u0635\u064A\u062F \u063A\u064A\u0631 \u0643\u0627\u0641\u064D")
        return
    account["balance"] -= amount
    account["transactions"].append({"type": "\u0633\u062D\u0628", "amount": amount})
    print(f"\u062A\u0645 \u0633\u062D\u0628 {amount}. \u0627\u0644\u0631\u0635\u064A\u062F: {account['balance']}")

def print_statement(account):
    print(f"\\n\u0627\u0644\u062D\u0633\u0627\u0628: {account['owner']}")
    print(f"\u0627\u0644\u0631\u0635\u064A\u062F: {account['balance']}")
    for t in account["transactions"]:
        print(f"  {t['type']}: {t['amount']}")

withdraw(account, 200)
withdraw(account, 5000)  # \u0633\u064A\u0641\u0634\u0644
print_statement(account)`,solutionJs:`function withdraw(account, amount) {
    if (amount <= 0) { console.log("Invalid"); return; }
    if (amount > account.balance) { console.log("Insufficient funds"); return; }
    account.balance -= amount;
    account.transactions.push({ type: "withdrawal", amount });
    console.log(\`Withdrew \${amount}. Balance: \${account.balance}\`);
}

function printStatement(account) {
    console.log(\`Account: \${account.owner}\`);
    console.log(\`Balance: \${account.balance}\`);
    for (let t of account.transactions) {
        console.log(\`  \${t.type}: \${t.amount}\`);
    }
}

withdraw(account, 200);
withdraw(account, 5000); // Will fail
printStatement(account);`}],commonMistakes:[{mistakeAr:"\u0646\u0633\u064A\u0627\u0646 \u0627\u0644\u062A\u062D\u0642\u0642 \u0645\u0646 \u0635\u062D\u0629 \u0627\u0644\u0645\u062F\u062E\u0644\u0627\u062A \u2014 \u0633\u062D\u0628 \u0645\u0628\u0644\u063A \u0633\u0627\u0644\u0628 \u0623\u0648 \u0635\u0641\u0631",mistakeEn:"Forgetting input validation \u2014 withdrawing a negative or zero amount",fixAr:"\u062A\u062D\u0642\u0642 \u062F\u0627\u0626\u0645\u0627\u064B: if amount <= 0 \u0642\u0628\u0644 \u0623\u064A \u0639\u0645\u0644\u064A\u0629",fixEn:"Always check: if amount <= 0 before any operation"}]}];var y=[{id:25,part:8,partTitleAr:"\u0627\u0644\u062E\u0644\u0627\u0635\u0629 \u0648\u0627\u0644\u062E\u0637\u0648\u0627\u062A \u0627\u0644\u0642\u0627\u062F\u0645\u0629",partTitleEn:"Wrap Up",titleAr:"\u0627\u0644\u0645\u0631\u0627\u062C\u0639\u0629 \u0627\u0644\u0646\u0647\u0627\u0626\u064A\u0629 \u0648\u0627\u0644\u062E\u0637\u0648\u0627\u062A \u0627\u0644\u0642\u0627\u062F\u0645\u0629",titleEn:"Final Review and Next Steps",descriptionAr:"\u0631\u0627\u062C\u0639 \u0643\u0644 \u0645\u0627 \u062A\u0639\u0644\u0645\u062A\u0647 \u0648\u0627\u0643\u062A\u0634\u0641 \u0627\u0644\u062E\u0637\u0648\u0627\u062A \u0627\u0644\u062A\u0627\u0644\u064A\u0629 \u0641\u064A \u0645\u0633\u064A\u0631\u062A\u0643 \u0627\u0644\u0628\u0631\u0645\u062C\u064A\u0629.",descriptionEn:"Review everything you've learned and discover the next steps in your programming journey.",estimatedTime:"30 min",level:"beginner",icon:"\u{1F3C6}",color:"#d29922",conceptsAr:["\u0645\u0631\u0627\u062C\u0639\u0629 \u0627\u0644\u0645\u0641\u0627\u0647\u064A\u0645","\u0623\u064A\u0646 \u062A\u0630\u0647\u0628 \u0628\u0639\u062F \u0630\u0644\u0643","\u0644\u063A\u0627\u062A \u0627\u0644\u0628\u0631\u0645\u062C\u0629 \u0627\u0644\u0645\u062E\u062A\u0644\u0641\u0629","\u0645\u0648\u0627\u0631\u062F \u0627\u0644\u062A\u0639\u0644\u0645"],conceptsEn:["Concepts review","Where to go next","Different programming languages","Learning resources"],conceptDescriptionsAr:["\u062A\u0639\u0644\u0651\u0645\u062A \u0627\u0644\u0645\u062A\u063A\u064A\u0631\u0627\u062A \u0648\u0627\u0644\u062B\u0648\u0627\u0628\u062A \u0648\u0623\u0646\u0648\u0627\u0639 \u0627\u0644\u0628\u064A\u0627\u0646\u0627\u062A \u0648\u0627\u0644\u0639\u0645\u0644\u064A\u0627\u062A \u0648\u0627\u0644\u0634\u0631\u0648\u0637 \u0648\u0627\u0644\u062D\u0644\u0642\u0627\u062A \u0648\u0627\u0644\u062F\u0648\u0627\u0644 \u0648\u0627\u0644\u0645\u0635\u0641\u0648\u0641\u0627\u062A.","\u0627\u0644\u062E\u0637\u0648\u0629 \u0627\u0644\u0642\u0627\u062F\u0645\u0629 \u0647\u064A \u0627\u0644\u062A\u0639\u0645\u0642 \u0641\u064A \u0644\u063A\u0629 \u0648\u0627\u062D\u062F\u0629 \u0643\u0640 JavaScript \u0623\u0648 Python \u0648\u0628\u0646\u0627\u0621 \u0645\u0634\u0627\u0631\u064A\u0639 \u062D\u0642\u064A\u0642\u064A\u0629.","\u0643\u0644 \u0644\u063A\u0629 \u0644\u0647\u0627 \u0645\u062C\u0627\u0644 \u0642\u0648\u0629: Python \u0644\u0644\u0630\u0643\u0627\u0621 \u0627\u0644\u0627\u0635\u0637\u0646\u0627\u0639\u064A\u060C JavaScript \u0644\u0644\u0648\u064A\u0628\u060C Swift \u0644\u0640 iOS\u060C Kotlin \u0644\u0640 Android.","\u0645\u0648\u0627\u0631\u062F \u0645\u062C\u0627\u0646\u064A\u0629 \u0645\u0645\u062A\u0627\u0632\u0629: MDN Web Docs\u060C freeCodeCamp\u060C CS50 Harvard\u060C \u0648YouTube."],conceptDescriptionsEn:["You've learned variables, constants, data types, operators, conditions, loops, functions, and arrays.","The next step is to go deeper into one language like JavaScript or Python and build real projects.","Each language has a strength area: Python for AI, JavaScript for the web, Swift for iOS, Kotlin for Android.","Excellent free resources: MDN Web Docs, freeCodeCamp, CS50 Harvard, and YouTube."],diagramType:"roadmap",codeExamples:[],editorLinks:[],keyPointsAr:["\u0644\u0642\u062F \u062A\u0639\u0644\u0645\u062A \u0627\u0644\u0645\u062A\u063A\u064A\u0631\u0627\u062A\u060C \u0623\u0646\u0648\u0627\u0639 \u0627\u0644\u0628\u064A\u0627\u0646\u0627\u062A\u060C \u0627\u0644\u0634\u0631\u0648\u0637\u060C \u0627\u0644\u062D\u0644\u0642\u0627\u062A\u060C \u0648\u0627\u0644\u062F\u0648\u0627\u0644","\u0627\u0644\u062E\u0637\u0648\u0629 \u0627\u0644\u0642\u0627\u062F\u0645\u0629: \u062A\u0639\u0644\u0651\u0645 \u0644\u063A\u0629 \u0643\u0640 JavaScript \u0623\u0648 Python \u0628\u0634\u0643\u0644 \u0623\u0639\u0645\u0642","\u0627\u0628\u0646\u0650 \u0645\u0634\u0627\u0631\u064A\u0639 \u0634\u062E\u0635\u064A\u0629 \u2014 \u0647\u0630\u0627 \u0623\u0641\u0636\u0644 \u0637\u0631\u064A\u0642\u0629 \u0644\u0644\u062A\u0639\u0644\u0645","\u0627\u0646\u0636\u0645 \u0644\u0645\u062C\u062A\u0645\u0639\u0627\u062A \u0627\u0644\u0628\u0631\u0645\u062C\u0629 \u0648\u062A\u0648\u0627\u0635\u0644 \u0645\u0639 \u0645\u0628\u0631\u0645\u062C\u064A\u0646 \u0622\u062E\u0631\u064A\u0646"],keyPointsEn:["You've learned variables, data types, conditions, loops, and functions","Next step: dive deeper into JavaScript or Python","Build personal projects \u2014 that's the best way to learn","Join programming communities and connect with other developers"],quiz:[{questionAr:"\u0645\u0627 \u0623\u0641\u0636\u0644 \u0637\u0631\u064A\u0642\u0629 \u0644\u062A\u0639\u0644\u0645 \u0627\u0644\u0628\u0631\u0645\u062C\u0629 \u0628\u0639\u062F \u0647\u0630\u0647 \u0627\u0644\u062F\u0648\u0631\u0629\u061F",questionEn:"What is the best way to learn programming after this course?",options:["\u0642\u0631\u0627\u0621\u0629 \u0627\u0644\u0645\u0632\u064A\u062F \u0645\u0646 \u0627\u0644\u0643\u062A\u0628 / Reading more books","\u0628\u0646\u0627\u0621 \u0645\u0634\u0627\u0631\u064A\u0639 \u0634\u062E\u0635\u064A\u0629 / Building personal projects","\u062D\u0641\u0638 \u0627\u0644\u0642\u0648\u0627\u0639\u062F / Memorizing rules","\u0645\u0634\u0627\u0647\u062F\u0629 \u0627\u0644\u0641\u064A\u062F\u064A\u0648\u0647\u0627\u062A \u0641\u0642\u0637 / Only watching videos"],correctIndex:1,explanationAr:"\u0628\u0646\u0627\u0621 \u0627\u0644\u0645\u0634\u0627\u0631\u064A\u0639 \u0647\u0648 \u0623\u0641\u0636\u0644 \u0637\u0631\u064A\u0642\u0629 \u0644\u0644\u062A\u0639\u0644\u0645 \u2014 \u062A\u0648\u0627\u062C\u0647 \u0645\u0634\u0643\u0644\u0627\u062A \u062D\u0642\u064A\u0642\u064A\u0629 \u0648\u062A\u062D\u0644\u0647\u0627.",explanationEn:"Building projects is the best way to learn \u2014 you face real problems and solve them."},{questionAr:"\u0623\u064A \u0644\u063A\u0629 \u0645\u0646\u0627\u0633\u0628\u0629 \u0644\u0644\u0630\u0643\u0627\u0621 \u0627\u0644\u0627\u0635\u0637\u0646\u0627\u0639\u064A\u061F",questionEn:"Which language is best suited for AI?",options:["JavaScript","Python","Swift","Kotlin"],correctIndex:1,explanationAr:"Python \u0647\u064A \u0627\u0644\u0644\u063A\u0629 \u0627\u0644\u0623\u0643\u062B\u0631 \u0627\u0633\u062A\u062E\u062F\u0627\u0645\u0627\u064B \u0641\u064A \u0645\u062C\u0627\u0644 \u0627\u0644\u0630\u0643\u0627\u0621 \u0627\u0644\u0627\u0635\u0637\u0646\u0627\u0639\u064A \u0648\u062A\u0639\u0644\u0645 \u0627\u0644\u0622\u0644\u0629.",explanationEn:"Python is the most widely used language in AI and machine learning."}],challenges:[{titleAr:"\u0627\u0644\u062A\u062D\u062F\u064A \u0627\u0644\u0646\u0647\u0627\u0626\u064A: \u0645\u0634\u0631\u0648\u0639\u0643 \u0627\u0644\u062E\u0627\u0635",titleEn:"Final Challenge: Your Own Project",taskAr:"\u0627\u0633\u062A\u062E\u062F\u0645 \u0643\u0644 \u0645\u0627 \u062A\u0639\u0644\u0645\u062A\u0647 \u0648\u0627\u0643\u062A\u0628 \u0645\u0634\u0631\u0648\u0639\u0627\u064B \u0635\u063A\u064A\u0631\u0627\u064B \u0645\u0646 \u0627\u062E\u062A\u064A\u0627\u0631\u0643: \u0622\u0644\u0629 \u062D\u0627\u0633\u0628\u0629\u060C \u0644\u0639\u0628\u0629 \u062A\u062E\u0645\u064A\u0646 \u0631\u0642\u0645\u060C \u0623\u0648 \u0642\u0627\u0626\u0645\u0629 \u0645\u0647\u0627\u0645.",taskEn:"Use everything you learned and write a small project of your choice: a calculator, number guessing game, or task list.",hintAr:"\u0645\u062B\u0627\u0644: \u0644\u0639\u0628\u0629 \u062A\u062E\u0645\u064A\u0646 \u2014 \u0627\u062E\u062A\u0631 \u0631\u0642\u0645\u0627\u064B \u0628\u064A\u0646 1-10 \u0648\u0627\u0637\u0644\u0628 \u0645\u0646 \u0627\u0644\u0645\u0633\u062A\u062E\u062F\u0645 \u0627\u0644\u062A\u062E\u0645\u064A\u0646",hintEn:"Example: guessing game \u2014 pick a number between 1-10 and ask user to guess",solutionPython:`# \u0644\u0639\u0628\u0629 \u062A\u062E\u0645\u064A\u0646 \u0627\u0644\u0631\u0642\u0645
import random

secret = random.randint(1, 10)
guess = int(input("\u062E\u0645\u0651\u0646 \u0631\u0642\u0645\u0627\u064B \u0628\u064A\u0646 1 \u0648 10: "))

if guess == secret:
    print("\u0635\u062D\u064A\u062D! \u0623\u0646\u062A \u0631\u0627\u0626\u0639!")
elif guess < secret:
    print(f"\u0627\u0644\u0631\u0642\u0645 \u0623\u0643\u0628\u0631. \u0627\u0644\u0631\u0642\u0645 \u0627\u0644\u0635\u062D\u064A\u062D \u0647\u0648 {secret}")
else:
    print(f"\u0627\u0644\u0631\u0642\u0645 \u0623\u0635\u063A\u0631. \u0627\u0644\u0631\u0642\u0645 \u0627\u0644\u0635\u062D\u064A\u062D \u0647\u0648 {secret}")`,solutionJs:`// Number guessing game
let secret = Math.floor(Math.random() * 10) + 1;
let guess = Number(prompt("Guess a number between 1 and 10:"));

if (guess === secret) {
    console.log("Correct! Amazing!");
} else if (guess < secret) {
    console.log(\`Too low. The number was \${secret}\`);
} else {
    console.log(\`Too high. The number was \${secret}\`);
}`}],commonMistakes:[{mistakeAr:"\u0627\u0644\u062A\u0648\u0642\u0641 \u0639\u0646 \u0627\u0644\u062A\u0639\u0644\u0645 \u0628\u0639\u062F \u0625\u062A\u0645\u0627\u0645 \u0627\u0644\u062F\u0648\u0631\u0629",mistakeEn:"Stopping learning after completing the course",fixAr:"\u0647\u0630\u0647 \u0627\u0644\u062F\u0648\u0631\u0629 \u0647\u064A \u0627\u0644\u0628\u062F\u0627\u064A\u0629 \u0641\u0642\u0637 \u2014 \u0627\u0628\u0646\u0650 \u0645\u0634\u0627\u0631\u064A\u0639 \u0648\u0627\u0633\u062A\u0645\u0631 \u0641\u064A \u062A\u0639\u0644\u0645 \u0644\u063A\u0629 \u0648\u0627\u062D\u062F\u0629 \u0628\u0639\u0645\u0642",fixEn:"This course is just the beginning \u2014 build projects and keep learning one language deeply"},{mistakeAr:"\u0645\u062D\u0627\u0648\u0644\u0629 \u062A\u0639\u0644\u0645 \u0643\u0644 \u0627\u0644\u0644\u063A\u0627\u062A \u0641\u064A \u0646\u0641\u0633 \u0627\u0644\u0648\u0642\u062A",mistakeEn:"Trying to learn all languages at the same time",fixAr:"\u0627\u062E\u062A\u0631 \u0644\u063A\u0629 \u0648\u0627\u062D\u062F\u0629 (Python \u0623\u0648 JavaScript) \u0648\u0623\u062A\u0642\u0646\u0647\u0627 \u0623\u0648\u0644\u0627\u064B \u0642\u0628\u0644 \u0627\u0644\u0627\u0646\u062A\u0642\u0627\u0644 \u0644\u0623\u062E\u0631\u0649",fixEn:"Pick one language (Python or JavaScript) and master it first before moving to another"},{mistakeAr:"\u0627\u0644\u062E\u0648\u0641 \u0645\u0646 \u0627\u0644\u0623\u062E\u0637\u0627\u0621 \u0648\u0639\u062F\u0645 \u0627\u0644\u062A\u062C\u0631\u064A\u0628",mistakeEn:"Fear of errors and not experimenting",fixAr:"\u0627\u0644\u0623\u062E\u0637\u0627\u0621 \u062C\u0632\u0621 \u0637\u0628\u064A\u0639\u064A \u0645\u0646 \u0627\u0644\u0628\u0631\u0645\u062C\u0629 \u2014 \u0643\u0644 \u0645\u0628\u0631\u0645\u062C \u0645\u062D\u062A\u0631\u0641 \u064A\u062E\u0637\u0626 \u0648\u064A\u062A\u0639\u0644\u0645 \u0645\u0646\u0647\u0627",fixEn:"Errors are a natural part of programming \u2014 every professional developer makes mistakes and learns from them"}]}];var A=[...p,...d,...m,...g,...h,...f,...b,...y],v=[{part:1,titleAr:"\u0627\u0644\u0628\u062F\u0627\u064A\u0629",titleEn:"Getting Started",color:"#58a6ff"},{part:2,titleAr:"\u0627\u0644\u0644\u0628\u0646\u0627\u062A \u0627\u0644\u0623\u0633\u0627\u0633\u064A\u0629",titleEn:"Core Building Blocks",color:"#d29922"},{part:3,titleAr:"\u0627\u062A\u062E\u0627\u0630 \u0627\u0644\u0642\u0631\u0627\u0631\u0627\u062A \u0648\u0627\u0644\u062A\u0643\u0631\u0627\u0631",titleEn:"Making Decisions & Repeating Work",color:"#f85149"},{part:4,titleAr:"\u062A\u0646\u0638\u064A\u0645 \u0627\u0644\u0643\u0648\u062F",titleEn:"Organizing Code",color:"#bc8cff"},{part:5,titleAr:"\u0627\u0644\u062A\u0641\u0643\u064A\u0631 \u0643\u0645\u0628\u0631\u0645\u062C",titleEn:"Thinking Like a Programmer",color:"#3fb950"},{part:6,titleAr:"\u062E\u0644\u0641 \u0627\u0644\u0643\u0648\u0627\u0644\u064A\u0633 (\u0627\u062E\u062A\u064A\u0627\u0631\u064A)",titleEn:"Under the Hood (Optional)",color:"#f85149"},{part:7,titleAr:"\u0645\u0634\u0627\u0631\u064A\u0639 \u0635\u063A\u064A\u0631\u0629",titleEn:"Mini Projects",color:"#3fb950"},{part:8,titleAr:"\u0627\u0644\u062E\u0644\u0627\u0635\u0629",titleEn:"Wrap Up",color:"#d29922"}];var E="course-quiz-answers",S="course-challenges-done",w=class s{sections=A;parts=v;_completedIds=o(this.loadCompleted());_activeId=o(null);_quizResults=o(this.loadQuizResults());_challengesDone=o(this.loadChallengesDone());completedIds=this._completedIds.asReadonly();activeId=this._activeId.asReadonly();quizResults=this._quizResults.asReadonly();completedCount=l(()=>this._completedIds().size);progressPercent=l(()=>Math.round(this._completedIds().size/this.sections.length*100));getQuizAnswers(e){return this._quizResults()[e]??{}}saveQuizAnswer(e,n,t){this._quizResults.update(i=>{let c=r(a({},i),{[e]:r(a({},i[e]??{}),{[n]:t})});try{localStorage.setItem(E,JSON.stringify(c))}catch{}return c})}loadQuizResults(){try{let e=localStorage.getItem(E);if(e)return JSON.parse(e)}catch{}return{}}isChallengeCompleted(e,n){return!!this._challengesDone()[`${e}-${n}`]}markChallengeCompleted(e,n){this._challengesDone.update(t=>{let i=r(a({},t),{[`${e}-${n}`]:!0});try{localStorage.setItem(S,JSON.stringify(i))}catch{}return i})}getChallengesCompletedCount(e){let n=this.getSectionById(e);return n?.challenges?n.challenges.filter((t,i)=>this.isChallengeCompleted(e,i)).length:0}loadChallengesDone(){try{let e=localStorage.getItem(S);if(e)return JSON.parse(e)}catch{}return{}}getSectionById(e){return this.sections.find(n=>n.id===e)}getSectionsByPart(e){return this.sections.filter(n=>n.part===e)}setActive(e){this._activeId.set(e)}toggleComplete(e){this._completedIds.update(n=>{let t=new Set(n);return t.has(e)?t.delete(e):t.add(e),localStorage.setItem("course-completed",JSON.stringify([...t])),t})}isCompleted(e){return this._completedIds().has(e)}loadCompleted(){try{let e=localStorage.getItem("course-completed");if(e){let n=JSON.parse(e);return new Set(n)}}catch{}return new Set}static \u0275fac=function(n){return new(n||s)};static \u0275prov=u({token:s,factory:s.\u0275fac,providedIn:"root"})};export{x as a,v as b,w as c};
