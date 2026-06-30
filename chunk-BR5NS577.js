var n={3:[{titleAr:"\u0628\u0631\u0646\u0627\u0645\u062C Hello World \u0628\u0623\u0631\u0628\u0639 \u0644\u063A\u0627\u062A",titleEn:"Hello World in 4 Languages",tabs:[{id:"python",code:`# \u0647\u0630\u0627 \u0647\u0648 \u0623\u0648\u0644 \u0628\u0631\u0646\u0627\u0645\u062C \u2014 \u0646\u0637\u0628\u0639 \u062C\u0645\u0644\u0629 \u0639\u0644\u0649 \u0627\u0644\u0634\u0627\u0634\u0629
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
}`,descriptionAr:"\u0627\u0644\u0646\u0638\u0627\u0645 \u0627\u0644\u0628\u0646\u0643\u064A \u0641\u064A C++",descriptionEn:"Banking system in C++"}]}]};export{n as a};
