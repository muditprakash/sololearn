export const COURSE_MODULES = [
  {
    id: 1,
    title: "Module 1: Basic Concepts",
    shortTitle: "Basic Concepts",
    description: "Start your Python journey with output, arithmetic, floats, exponentiation, floor division, and remainders.",
    color: "#10b981", // Emerald
    gradient: "linear-gradient(135deg, #10b981 0%, #059669 100%)",
    icon: "Terminal",
    lessons: [
      {
        lessonNumber: 1,
        title: "Welcome to Python!",
        type: "lesson",
        conceptSummary: "Python is a high-level, readable programming language. Use the built-in `print()` function to display text or values to the screen.",
        conceptCode: `print("Welcome to Python!")\nprint(42)`,
        questions: [
          {
            id: "Q1",
            number: 1,
            question: "Which function is used to display output in Python?",
            options: {
              A: "echo()",
              B: "print()",
              C: "display()",
              D: "output()"
            },
            answer: "B",
            explanation: "In Python, `print()` is the built-in function that sends text or other data to standard output."
          }
        ]
      },
      {
        lessonNumber: 2,
        title: "Simple Operations",
        type: "lesson",
        conceptSummary: "Python follows standard mathematical operator precedence (PEMDAS/BODMAS): multiplication (`*`) and division (`/`) happen before addition (`+`) and subtraction (`-`).",
        conceptCode: `# Multiplication happens before addition\nresult = 10 + 5 * 2\nprint(result)  # 20`,
        questions: [
          {
            id: "Q2",
            number: 2,
            question: "What is the output of `print(10 + 5 * 2)`?",
            options: {
              A: "30",
              B: "20",
              C: "25",
              D: "15"
            },
            answer: "B",
            explanation: "Multiplication has higher precedence than addition: `5 * 2` is evaluated first (`10`), and then `10 + 10` equals `20`."
          }
        ]
      },
      {
        lessonNumber: 3,
        title: "Floats",
        type: "lesson",
        conceptSummary: "Floats (floating-point numbers) represent real numbers with a decimal point, such as `3.14` or `-0.5`. Standard division `/` always produces a float.",
        conceptCode: `pi = 3.14\nprint(type(pi))  # <class 'float'>`,
        questions: [
          {
            id: "Q3",
            number: 3,
            question: "What is the data type of `3.14`?",
            options: {
              A: "int",
              B: "str",
              C: "float",
              D: "bool"
            },
            answer: "C",
            explanation: "Numbers containing a decimal point like `3.14` are stored as floating-point numbers (`float`) in Python."
          }
        ]
      },
      {
        lessonNumber: 4,
        title: "Exponentiation",
        type: "lesson",
        conceptSummary: "Python uses the double asterisk operator `**` for exponentiation (raising a base number to a power). You can also chain or use floats for roots!",
        conceptCode: `print(2 ** 4)   # 2 * 2 * 2 * 2 = 16\nprint(9 ** 0.5) # 3.0`,
        questions: [
          {
            id: "Q4",
            number: 4,
            question: "What is the result of `2 ** 4`?",
            options: {
              A: "8",
              B: "16",
              C: "6",
              D: "12"
            },
            answer: "B",
            explanation: "`2 ** 4` raises 2 to the 4th power (`2 × 2 × 2 × 2`), which equals `16`."
          }
        ]
      },
      {
        lessonNumber: 5,
        title: "Quotient & Remainder",
        type: "lesson",
        conceptSummary: "Floor division `//` returns the integer quotient (discarding the remainder), while the modulo operator `%` returns the remainder of a division.",
        conceptCode: `print(17 // 5)  # Quotient: 3\nprint(17 % 5)   # Remainder: 2`,
        questions: [
          {
            id: "Q5",
            number: 5,
            question: "What is the result of `17 % 5`?",
            options: {
              A: "3",
              B: "2",
              C: "5",
              D: "3.4"
            },
            answer: "B",
            explanation: "The modulo operator `%` gives the remainder when 17 is divided by 5 (`17 = 5 × 3 + 2`), so the remainder is `2`."
          },
          {
            id: "Q6",
            number: 6,
            question: "What is the result of `17 // 5`?",
            options: {
              A: "3.4",
              B: "2",
              C: "3",
              D: "4"
            },
            answer: "C",
            explanation: "Floor division `//` divides 17 by 5 and rounds down to the nearest whole integer, giving `3`."
          }
        ]
      },
      {
        lessonNumber: 6,
        title: "Module 1 Quiz",
        type: "quiz",
        conceptSummary: "In Python 3, single-slash division `/` always performs true division and returns a `float`, even when dividing two numbers that divide evenly.",
        conceptCode: `print(10 / 2)   # 5.0\nprint(10 // 2)  # 5`,
        questions: [
          {
            id: "Q7",
            number: 7,
            question: "What does `10 / 2` return in Python 3?",
            options: {
              A: "5",
              B: "5.0",
              C: "2",
              D: "Error"
            },
            answer: "B",
            explanation: "Single-slash division (`/`) in Python 3 always returns a float, so `10 / 2` evaluates to `5.0`."
          }
        ]
      },
      {
        lessonNumber: 7,
        title: "Code Project: Exponentiation",
        type: "project",
        conceptSummary: "Code Project Challenge: Apply the exponentiation operator `**` to compute powers such as squaring a number `n`.",
        conceptCode: `n = 7\nsquared = n ** 2\nprint(squared)  # 49`,
        questions: [
          {
            id: "Q8",
            number: 8,
            question: "Which expression calculates the square of a number `n`?",
            options: {
              A: "n * 2",
              B: "n ** 2",
              C: "n // 2",
              D: "n % 2"
            },
            answer: "B",
            explanation: "Squaring a number means raising it to the power of 2, written as `n ** 2` in Python."
          }
        ]
      }
    ]
  },
  {
    id: 2,
    title: "Module 2: Strings & Variables",
    shortTitle: "Strings & Variables",
    description: "Master text manipulation, escape sequences, variable naming rules, user input, and in-place & walrus operators.",
    color: "#3b82f6", // Blue
    gradient: "linear-gradient(135deg, #3b82f6 0%, #2563eb 100%)",
    icon: "Type",
    lessons: [
      {
        lessonNumber: 8,
        title: "Strings",
        type: "lesson",
        conceptSummary: "Strings represent text in Python and must be enclosed in matching single quotes `'...'`, double quotes `\"...\"`, or triple quotes.",
        conceptCode: `greeting = "Hello"\nquote = 'Python is fun!'`,
        questions: [
          {
            id: "Q9",
            number: 9,
            question: "Which is a valid string in Python?",
            options: {
              A: "Hello",
              B: "\"Hello\"",
              C: "Hello\"",
              D: "<Hello>"
            },
            answer: "B",
            explanation: "A string literal must be surrounded by matching single or double quotation marks, like `\"Hello\"`."
          }
        ]
      },
      {
        lessonNumber: 9,
        title: "Newlines",
        type: "lesson",
        conceptSummary: "Escape sequences start with a backslash `\\`. Use `\\n` to insert a line break (newline) and `\\t` to insert a tab.",
        conceptCode: `print("Line 1\\nLine 2")`,
        questions: [
          {
            id: "Q10",
            number: 10,
            question: "Which escape sequence creates a new line in a string?",
            options: {
              A: "\\t",
              B: "\\n",
              C: "\\b",
              D: "\\s"
            },
            answer: "B",
            explanation: "`\\n` is the newline escape character in Python strings."
          }
        ]
      },
      {
        lessonNumber: 10,
        title: "String Operations",
        type: "lesson",
        conceptSummary: "Strings can be concatenated (joined) using `+` and repeated multiple times by multiplying a string by an integer with `*`.",
        conceptCode: `print("Py" + "thon")  # Python\nprint("Python" * 2)  # PythonPython`,
        questions: [
          {
            id: "Q11",
            number: 11,
            question: "What is the output of `\"Py\" + \"thon\"`?",
            options: {
              A: "Py thon",
              B: "Python",
              C: "Py+thon",
              D: "Error"
            },
            answer: "B",
            explanation: "The `+` operator concatenates two strings directly without adding spaces, producing `Python`."
          },
          {
            id: "Q12",
            number: 12,
            question: "What does `\"Python\" * 2` produce?",
            options: {
              A: "Python2",
              B: "Python Python",
              C: "PythonPython",
              D: "Error"
            },
            answer: "C",
            explanation: "Multiplying a string by an integer `2` repeats the string twice back-to-back: `PythonPython`."
          }
        ]
      },
      {
        lessonNumber: 11,
        title: "Variables",
        type: "lesson",
        conceptSummary: "Variable names can contain letters, numbers, and underscores (`_`), cannot start with a number, cannot contain hyphens, and cannot be Python reserved keywords like `class`.",
        conceptCode: `my_name = "Alex"  # Valid snake_case variable`,
        questions: [
          {
            id: "Q13",
            number: 13,
            question: "Which is a valid variable name?",
            options: {
              A: "2name",
              B: "my-name",
              C: "my_name",
              D: "class"
            },
            answer: "C",
            explanation: "`my_name` uses valid characters (letters and an underscore). `2name` starts with a digit, `my-name` uses a subtraction hyphen, and `class` is a reserved keyword."
          }
        ]
      },
      {
        lessonNumber: 12,
        title: "Working with Variables",
        type: "lesson",
        conceptSummary: "Variables can be reassigned at any time, including using their current value to compute a new value.",
        conceptCode: `x = 10\nx = x + 5\nprint(x)  # 15`,
        questions: [
          {
            id: "Q14",
            number: 14,
            question: "What is the value of `x` after this code?",
            code: `x = 10\nx = x + 5`,
            options: {
              A: "10",
              B: "5",
              C: "15",
              D: "20"
            },
            answer: "C",
            explanation: "`x` starts at `10`, then `x + 5` evaluates to `15` and is assigned back to `x`."
          }
        ]
      },
      {
        lessonNumber: 13,
        title: "Taking User Input",
        type: "lesson",
        conceptSummary: "The `input()` function reads a line of text typed by the user and always returns it as a string (`str`).",
        conceptCode: `age_str = input("Enter age: ")  # Always returns a str`,
        questions: [
          {
            id: "Q15",
            number: 15,
            question: "What data type does `input()` return by default?",
            options: {
              A: "int",
              B: "float",
              C: "str",
              D: "bool"
            },
            answer: "C",
            explanation: "Regardless of whether the user types digits or words, `input()` always returns a `str` unless explicitly converted."
          }
        ]
      },
      {
        lessonNumber: 14,
        title: "Working with Input",
        type: "lesson",
        conceptSummary: "Even if a user enters numbers into `input()`, inspecting `type(x).__name__` confirms it is a `'str'` until cast with `int()` or `float()`.",
        conceptCode: `x = input()\nprint(type(x).__name__)  # str`,
        questions: [
          {
            id: "Q16",
            number: 16,
            question: "What is the output?",
            code: `x = input()\nprint(type(x).__name__)`,
            options: {
              A: "int",
              B: "input",
              C: "str",
              D: "NoneType"
            },
            answer: "C",
            explanation: "`input()` returns a string object, whose type name (`type(x).__name__`) is `str`."
          }
        ]
      },
      {
        lessonNumber: 15,
        title: "In-Place and Walrus Operators",
        type: "lesson",
        conceptSummary: "In-place operators like `+=` update a variable concisely (`x += 3` is `x = x + 3`). The walrus operator `:=` (Python 3.8+) assigns a value to a variable as part of an expression.",
        conceptCode: `x = 5\nx += 3          # x is now 8\nif (n := len("hello")) > 3:\n    print(n)    # 5`,
        questions: [
          {
            id: "Q17",
            number: 17,
            question: "What is the value of `x` after `x = 5; x += 3`?",
            options: {
              A: "2",
              B: "8",
              C: "15",
              D: "53"
            },
            answer: "B",
            explanation: "`x += 3` is shorthand for `x = x + 3`, which adds 3 to 5 and gives `8`."
          },
          {
            id: "Q18",
            number: 18,
            question: "What does the walrus operator `:=` do?",
            options: {
              A: "Compares two values",
              B: "Assigns a value within an expression",
              C: "Performs division",
              D: "Defines a class"
            },
            answer: "B",
            explanation: "The assignment expression operator `:=` (walrus operator) assigns a value to a variable and returns that value inside an expression."
          }
        ]
      },
      {
        lessonNumber: 16,
        title: "Module 2 Quiz",
        type: "quiz",
        conceptSummary: "Strings in Python are zero-indexed sequences of characters. `name[0]` accesses the very first character.",
        conceptCode: `name = "Python"\nprint(name[0])  # P`,
        questions: [
          {
            id: "Q19",
            number: 19,
            question: "What is the output?",
            code: `name = "Python"\nprint(name[0])`,
            options: {
              A: "P",
              B: "y",
              C: "Python",
              D: "Error"
            },
            answer: "A",
            explanation: "Python indexing starts at `0`, so `name[0]` returns the first character of `\"Python\"`, which is `P`."
          }
        ]
      },
      {
        lessonNumber: 17,
        title: "Code Project: Simple Calculator",
        type: "project",
        conceptSummary: "Code Project Challenge: Build arithmetic operations using `+`, `-`, `*` (multiplication), and `/`.",
        conceptCode: `a = 6\nb = 7\nprint(a * b)  # 42`,
        questions: [
          {
            id: "Q20",
            number: 20,
            question: "Which operator performs multiplication?",
            options: {
              A: "+",
              B: "-",
              C: "*",
              D: "%"
            },
            answer: "C",
            explanation: "The asterisk `*` is Python's multiplication operator."
          }
        ]
      }
    ]
  },
  {
    id: 3,
    title: "Module 3: Control Structures",
    shortTitle: "Control Structures",
    description: "Direct program flow with booleans, conditionals, logical operators, lists, while/for loops, and ranges.",
    color: "#8b5cf6", // Violet
    gradient: "linear-gradient(135deg, #8b5cf6 0%, #6d28d9 100%)",
    icon: "GitBranch",
    lessons: [
      {
        lessonNumber: 18,
        title: "Booleans & Comparisons",
        type: "lesson",
        conceptSummary: "Booleans have two values: `True` and `False`. Comparison operators (`>`, `<`, `==`, `!=`, `>=`, `<=`) evaluate to a Boolean.",
        conceptCode: `print(10 > 5)   # True\nprint(10 == 5)  # False`,
        questions: [
          {
            id: "Q21",
            number: 21,
            question: "What is the result of `10 > 5`?",
            options: {
              A: "10",
              B: "5",
              C: "True",
              D: "False"
            },
            answer: "C",
            explanation: "Since 10 is greater than 5, the comparison `10 > 5` evaluates to the boolean value `True`."
          }
        ]
      },
      {
        lessonNumber: 19,
        title: "if Statements",
        type: "lesson",
        conceptSummary: "An `if` statement runs an indented block of code only if its condition evaluates to `True`.",
        conceptCode: `score = 95\nif score >= 90:\n    print("Grade A")`,
        questions: [
          {
            id: "Q22",
            number: 22,
            question: "Which keyword executes a block when a condition is true?",
            options: {
              A: "for",
              B: "if",
              C: "def",
              D: "try"
            },
            answer: "B",
            explanation: "The `if` keyword checks a condition and executes its indented block when that condition is true."
          }
        ]
      },
      {
        lessonNumber: 20,
        title: "else Statements",
        type: "lesson",
        conceptSummary: "An `else` statement follows an `if` (or `elif`) chain and executes when the preceding condition(s) evaluate to `False`.",
        conceptCode: `age = 16\nif age >= 18:\n    print("Adult")\nelse:\n    print("Minor")`,
        questions: [
          {
            id: "Q23",
            number: 23,
            question: "When does an `else` block execute?",
            options: {
              A: "Whenever the program starts",
              B: "When the associated `if` condition is false",
              C: "Only when a loop starts",
              D: "Never"
            },
            answer: "B",
            explanation: "An `else` block runs as the fallback when the preceding `if` (and any `elif`) conditions are `False`."
          }
        ]
      },
      {
        lessonNumber: 21,
        title: "Boolean Logic",
        type: "lesson",
        conceptSummary: "Python's boolean operators are `and` (True only if both sides are True), `or` (True if at least one side is True), and `not` (inverts True/False).",
        conceptCode: `print(True and False)  # False\nprint(not True)        # False`,
        questions: [
          {
            id: "Q24",
            number: 24,
            question: "What is the result of `True and False`?",
            options: {
              A: "True",
              B: "False",
              C: "None",
              D: "Error"
            },
            answer: "B",
            explanation: "The `and` operator requires both operands to be `True`. Since one is `False`, `True and False` returns `False`."
          },
          {
            id: "Q25",
            number: 25,
            question: "What is the result of `not True`?",
            options: {
              A: "True",
              B: "False",
              C: "None",
              D: "1"
            },
            answer: "B",
            explanation: "The `not` operator negates the boolean value, turning `True` into `False`."
          }
        ]
      },
      {
        lessonNumber: 22,
        title: "Multiple Operators & Conditions",
        type: "lesson",
        conceptSummary: "Combine multiple comparisons using `and` / `or` to check ranges or complex conditions.",
        conceptCode: `x = 10\nprint(x > 5 and x < 20)  # True`,
        questions: [
          {
            id: "Q26",
            number: 26,
            question: "What is the output?",
            code: `x = 10\nprint(x > 5 and x < 20)`,
            options: {
              A: "True",
              B: "False",
              C: "10",
              D: "Error"
            },
            answer: "A",
            explanation: "For `x = 10`, both `10 > 5` (`True`) and `10 < 20` (`True`) hold, so `True and True` outputs `True`."
          }
        ]
      },
      {
        lessonNumber: 23,
        title: "Lists",
        type: "lesson",
        conceptSummary: "Lists store ordered, mutable collections of items enclosed in square brackets `[]`, separated by commas.",
        conceptCode: `numbers = [1, 2, 3]\nprint(numbers[0])  # 1`,
        questions: [
          {
            id: "Q27",
            number: 27,
            question: "Which syntax creates a list?",
            options: {
              A: "(1, 2, 3)",
              B: "{1, 2, 3}",
              C: "[1, 2, 3]",
              D: "<1, 2, 3>"
            },
            answer: "C",
            explanation: "Square brackets `[1, 2, 3]` create a Python `list` (parentheses create a tuple, curly braces create a set/dict)."
          }
        ]
      },
      {
        lessonNumber: 24,
        title: "List Operations",
        type: "lesson",
        conceptSummary: "Lists can be modified in place. Use `.append(item)` to add a new element to the end of a list.",
        conceptCode: `items = [1, 2]\nitems.append(3)\nprint(items)  # [1, 2, 3]`,
        questions: [
          {
            id: "Q28",
            number: 28,
            question: "What does `append()` do?",
            options: {
              A: "Removes an item",
              B: "Adds an item to the end of a list",
              C: "Sorts a list",
              D: "Clears a list"
            },
            answer: "B",
            explanation: "The `list.append(x)` method adds `x` to the end of the list in place."
          }
        ]
      },
      {
        lessonNumber: 25,
        title: "List Functions",
        type: "lesson",
        conceptSummary: "The built-in `len()` function returns the total number of elements in a list (or characters in a string).",
        conceptCode: `nums = [10, 20, 30]\nprint(len(nums))  # 3`,
        questions: [
          {
            id: "Q29",
            number: 29,
            question: "What does `len([10, 20, 30])` return?",
            options: {
              A: "2",
              B: "3",
              C: "30",
              D: "60"
            },
            answer: "B",
            explanation: "There are 3 items in `[10, 20, 30]`, so `len()` returns `3`."
          }
        ]
      },
      {
        lessonNumber: 26,
        title: "while Loops",
        type: "lesson",
        conceptSummary: "A `while` loop repeatedly executes its body as long as its condition remains `True`.",
        conceptCode: `i = 1\nwhile i <= 3:\n    print(i)\n    i += 1`,
        questions: [
          {
            id: "Q30",
            number: 30,
            question: "Which loop repeats while a condition is true?",
            options: {
              A: "if",
              B: "while",
              C: "def",
              D: "class"
            },
            answer: "B",
            explanation: "A `while` loop continues iterating as long as its boolean condition evaluates to `True`."
          }
        ]
      },
      {
        lessonNumber: 27,
        title: "for Loops",
        type: "lesson",
        conceptSummary: "A `for` loop iterates over each item in a sequence (such as a list, string, or range) one by one.",
        conceptCode: `for x in [1, 2, 3]:\n    print(x)`,
        questions: [
          {
            id: "Q31",
            number: 31,
            question: "What does this code print?",
            code: `for x in [1, 2, 3]:\n    print(x)`,
            options: {
              A: "Only 3",
              B: "1, 2, and 3 on separate lines",
              C: "123 on one line",
              D: "Error"
            },
            answer: "B",
            explanation: "Each iteration assigns the next list element to `x` and calls `print(x)`, which outputs a newline after each number."
          }
        ]
      },
      {
        lessonNumber: 28,
        title: "Range",
        type: "lesson",
        conceptSummary: "`range(start, stop)` generates numbers starting at `start` up to, but NOT including, `stop`.",
        conceptCode: `print(list(range(1, 5)))  # [1, 2, 3, 4]`,
        questions: [
          {
            id: "Q32",
            number: 32,
            question: "What does `list(range(1, 5))` return?",
            options: {
              A: "[1, 2, 3, 4, 5]",
              B: "[1, 2, 3, 4]",
              C: "[0, 1, 2, 3, 4]",
              D: "[1, 5]"
            },
            answer: "B",
            explanation: "`range(1, 5)` includes `1` (start) and stops before `5` (stop is exclusive), yielding `[1, 2, 3, 4]`."
          }
        ]
      },
      {
        lessonNumber: 29,
        title: "Module 3 Quiz",
        type: "quiz",
        conceptSummary: "Loop control statements: `break` immediately terminates the enclosing loop, whereas `continue` skips to the next iteration.",
        conceptCode: `for n in range(10):\n    if n == 3:\n        break  # Exits the loop immediately`,
        questions: [
          {
            id: "Q33",
            number: 33,
            question: "What does `break` do inside a loop?",
            options: {
              A: "Skips one iteration",
              B: "Exits the loop",
              C: "Restarts the loop",
              D: "Pauses the program"
            },
            answer: "B",
            explanation: "`break` immediately exits the innermost enclosing `for` or `while` loop."
          }
        ]
      },
      {
        lessonNumber: 30,
        title: "Code Project: FizzBuzz",
        type: "project",
        conceptSummary: "Code Project Challenge: In FizzBuzz, multiples of 3 print `Fizz`, multiples of 5 print `Buzz`, and multiples of both 3 and 5 (`n % 3 == 0 and n % 5 == 0`) print `FizzBuzz`.",
        conceptCode: `if n % 3 == 0 and n % 5 == 0:\n    print("FizzBuzz")`,
        questions: [
          {
            id: "Q34",
            number: 34,
            question: "In FizzBuzz, what should a number divisible by both 3 and 5 print?",
            options: {
              A: "Fizz",
              B: "Buzz",
              C: "FizzBuzz",
              D: "The number"
            },
            answer: "C",
            explanation: "By standard FizzBuzz rules, numbers divisible by both 3 and 5 (like 15) output `FizzBuzz`."
          }
        ]
      }
    ]
  },
  {
    id: 4,
    title: "Module 4: Functions & Modules",
    shortTitle: "Functions & Modules",
    description: "Write clean, reusable code with functions, arguments, return values, docstrings, first-class functions, and modules.",
    color: "#f59e0b", // Amber
    gradient: "linear-gradient(135deg, #f59e0b 0%, #d97706 100%)",
    icon: "Boxes",
    lessons: [
      {
        lessonNumber: 31,
        title: "Code Reuse",
        type: "lesson",
        conceptSummary: "Following the DRY (Don't Repeat Yourself) principle, functions let you package logic once and reuse it throughout your program.",
        conceptCode: `def welcome(user):\n    print(f"Welcome, {user}!")`,
        questions: [
          {
            id: "Q35",
            number: 35,
            question: "What is the primary benefit of using functions?",
            options: {
              A: "Making code reusable",
              B: "Increasing file size",
              C: "Preventing all errors",
              D: "Eliminating variables"
            },
            answer: "A",
            explanation: "Functions allow you to write a block of logic once and reuse it anywhere, improving modularity and maintainability."
          }
        ]
      },
      {
        lessonNumber: 32,
        title: "Functions",
        type: "lesson",
        conceptSummary: "Use the `def` keyword followed by the function name, parentheses `()`, and a colon `:` to define a function in Python.",
        conceptCode: `def say_hello():\n    print("Hello!")\n\nsay_hello()`,
        questions: [
          {
            id: "Q36",
            number: 36,
            question: "Which keyword defines a function in Python?",
            options: {
              A: "function",
              B: "define",
              C: "def",
              D: "fun"
            },
            answer: "C",
            explanation: "Python uses the `def` keyword (short for define) to declare functions."
          }
        ]
      },
      {
        lessonNumber: 33,
        title: "Function Arguments",
        type: "lesson",
        conceptSummary: "Arguments are the input values passed into a function call so the function can work with dynamic data.",
        conceptCode: `def square(x):\n    print(x ** 2)\n\nsquare(5)  # 5 is the argument`,
        questions: [
          {
            id: "Q37",
            number: 37,
            question: "What is an argument in a function call?",
            options: {
              A: "A value passed to a function",
              B: "A comment",
              C: "A module",
              D: "A loop"
            },
            answer: "A",
            explanation: "An argument is the actual value supplied to a function parameter when calling the function."
          }
        ]
      },
      {
        lessonNumber: 34,
        title: "Returning from Functions",
        type: "lesson",
        conceptSummary: "The `return` statement exits a function immediately and sends a result back to the caller so it can be stored or used in expressions.",
        conceptCode: `def double(n):\n    return n * 2\n\nres = double(4)  # res is 8`,
        questions: [
          {
            id: "Q38",
            number: 38,
            question: "What does `return` do?",
            options: {
              A: "Prints a value automatically",
              B: "Sends a value back to the caller",
              C: "Repeats the function",
              D: "Imports a module"
            },
            answer: "B",
            explanation: "`return` ends function execution and hands the specified value back to the caller."
          }
        ]
      },
      {
        lessonNumber: 35,
        title: "Comments & Docstrings",
        type: "lesson",
        conceptSummary: "Single-line comments start with `#` and are ignored by Python. Docstrings use triple quotes `\"\"\"...\"\"\"` inside functions or classes to document behavior.",
        conceptCode: `# This is a single-line comment\ndef greet():\n    """Docstring explaining greet()"""\n    pass`,
        questions: [
          {
            id: "Q39",
            number: 39,
            question: "Which symbol starts a single-line comment in Python?",
            options: {
              A: "//",
              B: "#",
              C: "<!--",
              D: "**"
            },
            answer: "B",
            explanation: "The hash symbol `#` starts a single-line comment in Python."
          }
        ]
      },
      {
        lessonNumber: 36,
        title: "Functions as Objects",
        type: "lesson",
        conceptSummary: "In Python, functions are first-class objects: they can be assigned to variables, stored in lists, and passed as arguments to other functions.",
        conceptCode: `def greet():\n    return "Hi"\nx = greet\nprint(callable(x))  # True`,
        questions: [
          {
            id: "Q40",
            number: 40,
            question: "In Python, what does this return?",
            code: `def greet():\n    return "Hi"\nx = greet\nprint(callable(x))`,
            options: {
              A: "True",
              B: "False",
              C: "Hi",
              D: "Error"
            },
            answer: "A",
            explanation: "`x = greet` assigns the function object itself to `x`. Since `x` is a function, `callable(x)` returns `True`."
          }
        ]
      },
      {
        lessonNumber: 37,
        title: "Modules",
        type: "lesson",
        conceptSummary: "Modules are Python files containing reusable functions, classes, and variables. Bring them into your script with the `import` keyword.",
        conceptCode: `import math\nprint(math.sqrt(16))  # 4.0`,
        questions: [
          {
            id: "Q41",
            number: 41,
            question: "Which keyword imports a module?",
            options: {
              A: "include",
              B: "using",
              C: "import",
              D: "require"
            },
            answer: "C",
            explanation: "Python uses the `import` statement to load external or standard-library modules."
          }
        ]
      },
      {
        lessonNumber: 38,
        title: "The Standard Library & pip",
        type: "lesson",
        conceptSummary: "While Python ships with a rich Standard Library, `pip` (Python Package Installer) lets you install third-party packages from PyPI.",
        conceptCode: `# Run in terminal:\npip install requests`,
        questions: [
          {
            id: "Q42",
            number: 42,
            question: "Which command commonly installs a third-party Python package?",
            options: {
              A: "python install package",
              B: "pip install package",
              C: "import install package",
              D: "package get"
            },
            answer: "B",
            explanation: "`pip install <package>` is the standard command for installing packages from the Python Package Index (PyPI)."
          }
        ]
      },
      {
        lessonNumber: 39,
        title: "Module 4 Quiz",
        type: "quiz",
        conceptSummary: "Test your understanding of defining a function with parameters, returning a result, and printing the returned value.",
        conceptCode: `def add(a, b):\n    return a + b\nprint(add(2, 3))  # 5`,
        questions: [
          {
            id: "Q43",
            number: 43,
            question: "What is the output?",
            code: `def add(a, b):\n    return a + b\nprint(add(2, 3))`,
            options: {
              A: "23",
              B: "5",
              C: "None",
              D: "Error"
            },
            answer: "B",
            explanation: "`add(2, 3)` adds integers `2` and `3` and returns `5`, which `print()` outputs."
          }
        ]
      },
      {
        lessonNumber: 40,
        title: "Code Project: Celsius to Fahrenheit Converter",
        type: "project",
        conceptSummary: "Code Project Challenge: Convert Celsius temperature `C` to Fahrenheit `F` using the linear conversion formula `F = C * 9 / 5 + 32`.",
        conceptCode: `def c_to_f(c):\n    return c * 9 / 5 + 32\nprint(c_to_f(0))    # 32.0\nprint(c_to_f(100))  # 212.0`,
        questions: [
          {
            id: "Q44",
            number: 44,
            question: "Which formula converts Celsius to Fahrenheit?",
            options: {
              A: "C * 5 / 9 + 32",
              B: "(C - 32) * 5 / 9",
              C: "C * 9 / 5 + 32",
              D: "C + 273"
            },
            answer: "C",
            explanation: "To convert Celsius to Fahrenheit, multiply by `9 / 5` (1.8) and add `32`: `C * 9 / 5 + 32`."
          }
        ]
      }
    ]
  },
  {
    id: 5,
    title: "Module 5: Exceptions & Files",
    shortTitle: "Exceptions & Files",
    description: "Handle runtime errors gracefully with try/except/finally, raise exceptions, write assertions, and read/write files.",
    color: "#ef4444", // Red/Rose
    gradient: "linear-gradient(135deg, #ef4444 0%, #dc2626 100%)",
    icon: "FileWarning",
    lessons: [
      {
        lessonNumber: 41,
        title: "Exceptions",
        type: "lesson",
        conceptSummary: "Exceptions are raised when an error occurs during execution, such as `ZeroDivisionError` when dividing by `0`.",
        conceptCode: `# 10 / 0 raises ZeroDivisionError`,
        questions: [
          {
            id: "Q45",
            number: 45,
            question: "Which exception occurs when dividing an integer by zero?",
            options: {
              A: "ValueError",
              B: "TypeError",
              C: "ZeroDivisionError",
              D: "IndexError"
            },
            answer: "C",
            explanation: "Dividing any number by zero in Python raises a `ZeroDivisionError`."
          }
        ]
      },
      {
        lessonNumber: 42,
        title: "Exception Handling",
        type: "lesson",
        conceptSummary: "Wrap risky operations in a `try` block and handle potential errors in an `except` block so your program doesn't crash.",
        conceptCode: `try:\n    print(10 / 0)\nexcept ZeroDivisionError:\n    print("Cannot divide by zero!")`,
        questions: [
          {
            id: "Q46",
            number: 46,
            question: "Which keyword handles an exception?",
            options: {
              A: "catch",
              B: "except",
              C: "handle",
              D: "error"
            },
            answer: "B",
            explanation: "Python uses `try` and `except` (rather than `catch`) to catch and handle exceptions."
          }
        ]
      },
      {
        lessonNumber: 43,
        title: "finally",
        type: "lesson",
        conceptSummary: "A `finally` block placed after `try`/`except` always runs for cleanup tasks, whether an exception was raised or not.",
        conceptCode: `try:\n    x = 1 / 1\nfinally:\n    print("Always runs!")`,
        questions: [
          {
            id: "Q47",
            number: 47,
            question: "When does a `finally` block normally execute?",
            options: {
              A: "Only when an exception occurs",
              B: "Only when no exception occurs",
              C: "Whether an exception occurs or not",
              D: "Only when the program exits immediately"
            },
            answer: "C",
            explanation: "The `finally` block executes unconditionally after the `try` and `except` blocks complete, regardless of whether an exception occurred."
          }
        ]
      },
      {
        lessonNumber: 44,
        title: "Raising Exceptions",
        type: "lesson",
        conceptSummary: "You can manually trigger an exception in your own code when invalid state or input is detected using the `raise` keyword.",
        conceptCode: `if age < 0:\n    raise ValueError("Age cannot be negative")`,
        questions: [
          {
            id: "Q48",
            number: 48,
            question: "Which keyword explicitly raises an exception?",
            options: {
              A: "throw",
              B: "raise",
              C: "except",
              D: "assert"
            },
            answer: "B",
            explanation: "Use the `raise` statement (e.g., `raise ValueError()`) to explicitly trigger an exception."
          }
        ]
      },
      {
        lessonNumber: 45,
        title: "Assertions",
        type: "lesson",
        conceptSummary: "`assert` tests an internal sanity condition; if the expression evaluates to `False`, Python raises an `AssertionError`.",
        conceptCode: `x = 5\nassert x > 0       # Passes\n# assert x > 10    # Raises AssertionError`,
        questions: [
          {
            id: "Q49",
            number: 49,
            question: "What happens when an `assert` condition is false?",
            options: {
              A: "AssertionError is raised",
              B: "The condition becomes true",
              C: "The program silently fixes it",
              D: "None is returned"
            },
            answer: "A",
            explanation: "When the condition in an `assert` statement is false, Python immediately raises an `AssertionError`."
          }
        ]
      },
      {
        lessonNumber: 46,
        title: "Opening Files",
        type: "lesson",
        conceptSummary: "Use the built-in `open(filename, mode)` function to open a file and obtain a file object.",
        conceptCode: `f = open("data.txt", "r")\nf.close()`,
        questions: [
          {
            id: "Q50",
            number: 50,
            question: "Which function opens a file?",
            options: {
              A: "file()",
              B: "open()",
              C: "read()",
              D: "load()"
            },
            answer: "B",
            explanation: "`open()` is the built-in Python function for opening files."
          }
        ]
      },
      {
        lessonNumber: 47,
        title: "Reading Files",
        type: "lesson",
        conceptSummary: "Calling `.read()` on a file opened in text mode returns its entire contents as a string (`str`).",
        conceptCode: `with open("notes.txt", "r") as f:\n    content = f.read()  # str`,
        questions: [
          {
            id: "Q51",
            number: 51,
            question: "What does `read()` usually return when called on a text file?",
            options: {
              A: "A string containing the file contents",
              B: "A Boolean",
              C: "A function",
              D: "A directory"
            },
            answer: "A",
            explanation: "When reading a file opened in text mode, `f.read()` returns the read content as a `str`."
          }
        ]
      },
      {
        lessonNumber: 48,
        title: "Writing Files",
        type: "lesson",
        conceptSummary: "File modes control access: `\"r\"` reads, `\"w\"` writes (creating the file or truncating existing contents), and `\"a\"` appends to the end.",
        conceptCode: `with open("out.txt", "w") as f:\n    f.write("Fresh content")`,
        questions: [
          {
            id: "Q52",
            number: 52,
            question: "Which file mode opens a file for writing and truncates existing contents?",
            options: {
              A: "\"r\"",
              B: "\"a\"",
              C: "\"w\"",
              D: "\"x\""
            },
            answer: "C",
            explanation: "Mode `\"w\"` opens a file for writing and overwrites (truncates) any existing content in the file."
          }
        ]
      },
      {
        lessonNumber: 49,
        title: "Working with Files",
        type: "lesson",
        conceptSummary: "Using the `with open(...) as f:` context manager guarantees that the file is automatically closed when the block finishes, even if an error occurs.",
        conceptCode: `with open("log.txt", "r") as f:\n    data = f.read()\n# f is automatically closed here`,
        questions: [
          {
            id: "Q53",
            number: 53,
            question: "What is a major advantage of using `with open(...) as f:`?",
            options: {
              A: "It automatically closes the file when the block exits",
              B: "It prevents every possible file error",
              C: "It encrypts the file",
              D: "It always opens files in write mode"
            },
            answer: "A",
            explanation: "The `with` statement uses a context manager that automatically closes the file upon exiting the block, even if exceptions happen."
          }
        ]
      },
      {
        lessonNumber: 50,
        title: "Module 5 Quiz",
        type: "quiz",
        conceptSummary: "Review common built-in exception types: `IndexError` is raised when a sequence subscript is out of range.",
        conceptCode: `items = [1, 2, 3]\n# items[10] -> IndexError: list index out of range`,
        questions: [
          {
            id: "Q54",
            number: 54,
            question: "Which exception occurs when accessing an invalid list index?",
            options: {
              A: "KeyError",
              B: "IndexError",
              C: "NameError",
              D: "ImportError"
            },
            answer: "B",
            explanation: "Attempting to access an index outside the valid bounds of a list raises an `IndexError`."
          }
        ]
      },
      {
        lessonNumber: 51,
        title: "Code Project: Book Titles",
        type: "project",
        conceptSummary: "Code Project Challenge: Lines read from a file often end with `\\n`. Use `.strip()` to remove leading and trailing whitespace including newlines.",
        conceptCode: `line = "  Harry Potter\\n"\nclean = line.strip()  # "Harry Potter"`,
        questions: [
          {
            id: "Q55",
            number: 55,
            question: "Which method removes whitespace from both ends of a string?",
            options: {
              A: "trim()",
              B: "strip()",
              C: "remove()",
              D: "clean()"
            },
            answer: "B",
            explanation: "In Python, `str.strip()` removes leading and trailing whitespace (including spaces, tabs, and `\\n`)."
          }
        ]
      }
    ]
  },
  {
    id: 6,
    title: "Module 6: More Types",
    shortTitle: "More Types",
    description: "Work with None, dictionaries, immutable tuples, list slicing, comprehensions, f-strings, and text analysis.",
    color: "#06b6d4", // Cyan
    gradient: "linear-gradient(135deg, #06b6d4 0%, #0891b2 100%)",
    icon: "Database",
    lessons: [
      {
        lessonNumber: 52,
        title: "None",
        type: "lesson",
        conceptSummary: "`None` is Python's special singleton object of type `NoneType` used to represent the absence of a value (and is returned by functions that don't explicitly return anything).",
        conceptCode: `result = None\nprint(result is None)  # True`,
        questions: [
          {
            id: "Q56",
            number: 56,
            question: "What does `None` represent in Python?",
            options: {
              A: "The integer zero",
              B: "An empty string",
              C: "The absence of a value",
              D: "False in every context"
            },
            answer: "C",
            explanation: "`None` represents the absence of a value (null/empty reference), distinct from `0`, `\"\"`, or `False`."
          }
        ]
      },
      {
        lessonNumber: 53,
        title: "Dictionaries",
        type: "lesson",
        conceptSummary: "Dictionaries store key-value pairs inside curly braces `{key: value}`, allowing fast lookups by unique, immutable keys.",
        conceptCode: `user = {"name": "Alex", "role": "Coder"}\nprint(user["name"])  # Alex`,
        questions: [
          {
            id: "Q57",
            number: 57,
            question: "Which syntax creates a dictionary?",
            options: {
              A: "[\"name\", \"Alex\"]",
              B: "(\"name\", \"Alex\")",
              C: "{\"name\": \"Alex\"}",
              D: "{\"name\", \"Alex\"}"
            },
            answer: "C",
            explanation: "Curly braces with colon-separated key-value pairs `{\"name\": \"Alex\"}` create a dictionary (`{\"name\", \"Alex\"}` without colons creates a set)."
          }
        ]
      },
      {
        lessonNumber: 54,
        title: "Dictionary Functions",
        type: "lesson",
        conceptSummary: "Unlike `d[key]` which raises a `KeyError` if `key` is missing, `d.get(key)` safely returns `None` (or an optional default value).",
        conceptCode: `user = {"name": "Alex"}\nprint(user.get("age"))     # None\nprint(user.get("age", 18)) # 18`,
        questions: [
          {
            id: "Q58",
            number: 58,
            question: "What does `dict.get(\"age\")` return when `\"age\"` is absent and no default is provided?",
            options: {
              A: "0",
              B: "False",
              C: "None",
              D: "KeyError"
            },
            answer: "C",
            explanation: "When a key is not found in a dictionary, `.get(key)` returns `None` by default instead of raising `KeyError`."
          }
        ]
      },
      {
        lessonNumber: 55,
        title: "Tuples",
        type: "lesson",
        conceptSummary: "Tuples are ordered sequences written with parentheses `(1, 2, 3)`. Unlike lists, tuples are **immutable**—their elements cannot be reassigned after creation.",
        conceptCode: `coords = (10, 20)\n# coords[0] = 99 -> TypeError!`,
        questions: [
          {
            id: "Q59",
            number: 59,
            question: "Which statement about tuples is correct?",
            options: {
              A: "Tuples are always mutable",
              B: "Tuples are immutable",
              C: "Tuples only contain numbers",
              D: "Tuples cannot be indexed"
            },
            answer: "B",
            explanation: "Tuples are immutable sequences—once created, you cannot add, remove, or replace their elements."
          }
        ]
      },
      {
        lessonNumber: 56,
        title: "List Slices",
        type: "lesson",
        conceptSummary: "List slicing `seq[start:stop]` extracts a new sublist from index `start` (inclusive) up to index `stop` (exclusive).",
        conceptCode: `nums = [0, 1, 2, 3, 4]\nprint(nums[1:4])  # [1, 2, 3]`,
        questions: [
          {
            id: "Q60",
            number: 60,
            question: "What does `[0, 1, 2, 3, 4][1:4]` return?",
            options: {
              A: "[0, 1, 2, 3]",
              B: "[1, 2, 3]",
              C: "[1, 2, 3, 4]",
              D: "[2, 3, 4]"
            },
            answer: "B",
            explanation: "Slice `[1:4]` includes elements at indices 1, 2, and 3 (stopping before index 4), returning `[1, 2, 3]`."
          }
        ]
      },
      {
        lessonNumber: 57,
        title: "List Comprehensions",
        type: "lesson",
        conceptSummary: "List comprehensions provide a concise Pythonic syntax `[expr for item in iterable if condition]` for creating lists.",
        conceptCode: `doubled = [x * 2 for x in range(3)]\nprint(doubled)  # [0, 2, 4]`,
        questions: [
          {
            id: "Q61",
            number: 61,
            question: "What does `[x * 2 for x in range(3)]` return?",
            options: {
              A: "[0, 2, 4]",
              B: "[2, 4, 6]",
              C: "[0, 1, 2]",
              D: "[1, 2, 3]"
            },
            answer: "A",
            explanation: "`range(3)` produces `0, 1, 2`. Multiplying each by `2` yields `[0, 2, 4]`."
          }
        ]
      },
      {
        lessonNumber: 58,
        title: "String Formatting",
        type: "lesson",
        conceptSummary: "Formatted string literals (f-strings), prefixed with `f`, evaluate expressions inside curly braces `{...}` and embed their values directly into the string.",
        conceptCode: `name = "Alex"\nprint(f"Hello {name}")  # Hello Alex`,
        questions: [
          {
            id: "Q62",
            number: 62,
            question: "What does `f\"Hello {name}\"` do when `name = \"Alex\"`?",
            options: {
              A: "Prints literal `{name}`",
              B: "Produces `\"Hello Alex\"`",
              C: "Raises an error",
              D: "Converts `name` into a list"
            },
            answer: "B",
            explanation: "An f-string interpolates the variable `name` inside `{name}`, producing `\"Hello Alex\"`."
          }
        ]
      },
      {
        lessonNumber: 59,
        title: "Useful Functions",
        type: "lesson",
        conceptSummary: "Built-in helpers like `enumerate(iterable)` yield `(index, value)` pairs during iteration, while `all()`, `any()`, `max()`, and `min()` simplify common operations.",
        conceptCode: `for idx, val in enumerate(["a", "b"]):\n    print(idx, val)  # (0, 'a'), (1, 'b')`,
        questions: [
          {
            id: "Q63",
            number: 63,
            question: "What does `enumerate([\"a\", \"b\"])` provide when iterated over?",
            options: {
              A: "Only the values",
              B: "Index-value pairs",
              C: "Only the indexes",
              D: "A sorted list"
            },
            answer: "B",
            explanation: "`enumerate()` yields `(index, value)` tuples as you iterate over a sequence."
          }
        ]
      },
      {
        lessonNumber: 60,
        title: "Text Analyzer",
        type: "lesson",
        conceptSummary: "Calling `text.split()` splits a string on whitespace into a list of words, and `len(text.split())` counts how many words are in the list.",
        conceptCode: `text = "Python is super clean"\nprint(len(text.split()))  # 4`,
        questions: [
          {
            id: "Q64",
            number: 64,
            question: "Which expression counts the words in a string `text`, assuming whitespace-separated words?",
            options: {
              A: "len(text)",
              B: "len(text.split())",
              C: "text.count()",
              D: "text.words()"
            },
            answer: "B",
            explanation: "`text.split()` returns a list of whitespace-separated words, and `len()` counts the elements in that list."
          }
        ]
      },
      {
        lessonNumber: 61,
        title: "Module 6 Quiz",
        type: "quiz",
        conceptSummary: "Dictionary views: `.keys()` returns keys, `.values()` returns values, and `.items()` returns `(key, value)` pairs.",
        conceptCode: `d = {"a": 1, "b": 2}\nfor k, v in d.items():\n    print(k, v)`,
        questions: [
          {
            id: "Q65",
            number: 65,
            question: "Which dictionary method returns its key-value pairs?",
            options: {
              A: "keys()",
              B: "values()",
              C: "items()",
              D: "pairs()"
            },
            answer: "C",
            explanation: "`dict.items()` returns a view of `(key, value)` tuple pairs."
          }
        ]
      },
      {
        lessonNumber: 62,
        title: "Code Project: Longest Word",
        type: "project",
        conceptSummary: "Code Project Challenge: Pass `key=len` to `max()` so Python compares strings by their length rather than alphabetical order.",
        conceptCode: `words = ["cat", "elephant", "dog"]\nprint(max(words, key=len))  # elephant`,
        questions: [
          {
            id: "Q66",
            number: 66,
            question: "Which expression gets the longest word in a non-empty list `words`?",
            options: {
              A: "max(words, key=len)",
              B: "min(words, key=len)",
              C: "words.max()",
              D: "len(max(words))"
            },
            answer: "A",
            explanation: "`max(words, key=len)` evaluates `len(w)` for each word and returns the word with the greatest length."
          }
        ]
      }
    ]
  },
  {
    id: 7,
    title: "Module 7: Functional Programming",
    shortTitle: "Functional Programming",
    description: "Level up with pure functions, lambdas, map & filter, generators, decorators, recursion, sets, and itertools.",
    color: "#ec4899", // Pink
    gradient: "linear-gradient(135deg, #ec4899 0%, #db2777 100%)",
    icon: "Sparkles",
    lessons: [
      {
        lessonNumber: 63,
        title: "Functional Programming",
        type: "lesson",
        conceptSummary: "Functional programming emphasizes transforming data using pure functions while avoiding shared mutable state and unintended side effects.",
        conceptCode: `# Pure function: no side effects\ndef add_tax(price, rate):\n    return price * (1 + rate)`,
        questions: [
          {
            id: "Q67",
            number: 67,
            question: "Which is a common goal of functional programming?",
            options: {
              A: "Relying exclusively on global variables",
              B: "Using functions to transform data and reducing unintended side effects",
              C: "Avoiding functions",
              D: "Modifying every input in place"
            },
            answer: "B",
            explanation: "Functional programming focuses on composing pure functions to transform data cleanly while minimizing side effects."
          }
        ]
      },
      {
        lessonNumber: 64,
        title: "Lambdas",
        type: "lesson",
        conceptSummary: "Lambda functions are small, anonymous single-expression functions defined with `lambda arguments: expression`.",
        conceptCode: `square = lambda x: x ** 2\nprint(square(5))  # 25`,
        questions: [
          {
            id: "Q68",
            number: 68,
            question: "Which is a valid lambda expression that squares `x`?",
            options: {
              A: "lambda x: x ** 2",
              B: "lambda: x ** 2",
              C: "def lambda(x): x ** 2",
              D: "lambda x => x ** 2"
            },
            answer: "A",
            explanation: "Python's lambda syntax is `lambda <params>: <expression>`, so `lambda x: x ** 2` takes `x` and returns `x ** 2`."
          }
        ]
      },
      {
        lessonNumber: 65,
        title: "map & filter",
        type: "lesson",
        conceptSummary: "`map(func, iterable)` applies `func` to every item, while `filter(pred, iterable)` keeps only items for which `pred(item)` returns `True`.",
        conceptCode: `nums = [1, 2, 3]\ndoubled = list(map(lambda x: x * 2, nums))  # [2, 4, 6]\nevens = list(filter(lambda x: x % 2 == 0, nums))  # [2]`,
        questions: [
          {
            id: "Q69",
            number: 69,
            question: "What does `filter()` do?",
            options: {
              A: "Sorts an iterable",
              B: "Selects elements satisfying a condition",
              C: "Converts all elements to strings",
              D: "Removes every element"
            },
            answer: "B",
            explanation: "`filter(function, iterable)` yields only those elements of `iterable` for which `function(element)` is true."
          },
          {
            id: "Q70",
            number: 70,
            question: "What does `list(map(lambda x: x * 2, [1, 2, 3]))` return?",
            options: {
              A: "[1, 2, 3]",
              B: "[2, 4, 6]",
              C: "[3, 6, 9]",
              D: "[2, 3, 4]"
            },
            answer: "B",
            explanation: "`map()` applies `lambda x: x * 2` to `1`, `2`, and `3`, and `list()` collects the results into `[2, 4, 6]`."
          }
        ]
      },
      {
        lessonNumber: 66,
        title: "Generators",
        type: "lesson",
        conceptSummary: "Generators are lazy iterators defined like functions but using `yield` instead of `return` to produce values one at a time on demand.",
        conceptCode: `def count_up_to(n):\n    for i in range(1, n + 1):\n        yield i`,
        questions: [
          {
            id: "Q71",
            number: 71,
            question: "Which keyword is used to produce a value from a generator function?",
            options: {
              A: "return",
              B: "yield",
              C: "generate",
              D: "next"
            },
            answer: "B",
            explanation: "The `yield` keyword pauses the generator function and yields the next value to the caller."
          }
        ]
      },
      {
        lessonNumber: 67,
        title: "Decorators",
        type: "lesson",
        conceptSummary: "A decorator wraps a function (using `@decorator_name`) to extend or modify its behavior without altering the original function's source code.",
        conceptCode: `def logger(func):\n    def wrapper(*args):\n        print("Calling", func.__name__)\n        return func(*args)\n    return wrapper`,
        questions: [
          {
            id: "Q72",
            number: 72,
            question: "What is the primary purpose of a decorator?",
            options: {
              A: "To modify or extend a function's behavior without directly rewriting its body",
              B: "To create a list",
              C: "To terminate a loop",
              D: "To import a module"
            },
            answer: "A",
            explanation: "Decorators wrap functions or methods to add cross-cutting behavior (logging, timing, auth, caching) cleanly."
          }
        ]
      },
      {
        lessonNumber: 68,
        title: "Recursion",
        type: "lesson",
        conceptSummary: "A recursive function calls itself to solve smaller subproblems. Every recursive function requires a **base case** to stop the recursion.",
        conceptCode: `def factorial(n):\n    if n <= 1:  # Base case\n        return 1\n    return n * factorial(n - 1)`,
        questions: [
          {
            id: "Q73",
            number: 73,
            question: "What is essential for a typical recursive function to terminate?",
            options: {
              A: "A global variable",
              B: "A base case",
              C: "A class",
              D: "An import statement"
            },
            answer: "B",
            explanation: "Without a base case that returns without making another recursive call, recursion would continue until `RecursionError`."
          }
        ]
      },
      {
        lessonNumber: 69,
        title: "Sets",
        type: "lesson",
        conceptSummary: "Sets are unordered collections of **unique** elements written with `{1, 2, 3}` (or `set()`). Duplicate values are automatically removed.",
        conceptCode: `nums = {1, 2, 2, 3}\nprint(nums)  # {1, 2, 3}`,
        questions: [
          {
            id: "Q74",
            number: 74,
            question: "What is a defining property of a Python set?",
            options: {
              A: "It allows duplicate elements",
              B: "It stores only strings",
              C: "It stores unique elements",
              D: "It preserves every insertion position"
            },
            answer: "C",
            explanation: "A Python `set` automatically enforces uniqueness—each element can appear at most once."
          }
        ]
      },
      {
        lessonNumber: 70,
        title: "itertools",
        type: "lesson",
        conceptSummary: "The standard library `itertools` module provides fast iterator building blocks like `combinations()`, `permutations()`, `product()`, and `cycle()`.",
        conceptCode: `from itertools import combinations\nprint(list(combinations("ABC", 2)))\n# [('A', 'B'), ('A', 'C'), ('B', 'C')]`,
        questions: [
          {
            id: "Q75",
            number: 75,
            question: "Which `itertools` function generates all possible combinations of a specified length?",
            options: {
              A: "permutations()",
              B: "combinations()",
              C: "product()",
              D: "cycle()"
            },
            answer: "B",
            explanation: "`itertools.combinations(iterable, r)` generates all unordered combinations of length `r` without replacement."
          }
        ]
      },
      {
        lessonNumber: 71,
        title: "Module 7 Quiz",
        type: "quiz",
        conceptSummary: "Use the built-in `next(gen)` function to manually pull the next value yielded by a generator or iterator.",
        conceptCode: `g = (x * 10 for x in [1, 2])\nprint(next(g))  # 10\nprint(next(g))  # 20`,
        questions: [
          {
            id: "Q76",
            number: 76,
            question: "What does `next(generator)` do?",
            options: {
              A: "Restarts the generator",
              B: "Retrieves the next yielded value",
              C: "Converts it to a list",
              D: "Deletes the generator"
            },
            answer: "B",
            explanation: "`next(generator)` resumes the generator and retrieves the next value produced by `yield`."
          }
        ]
      },
      {
        lessonNumber: 72,
        title: "Code Project: Fibonacci",
        type: "project",
        conceptSummary: "Code Project Challenge: In the Fibonacci sequence starting with `0` and `1`, each subsequent term is the sum of the two preceding terms: `0, 1, 1, 2, 3, 5, 8...`",
        conceptCode: `a, b = 0, 1\nfor _ in range(5):\n    print(a)\n    a, b = b, a + b`,
        questions: [
          {
            id: "Q77",
            number: 77,
            question: "What are the first five numbers of the Fibonacci sequence when it starts with 0 and 1?",
            options: {
              A: "0, 1, 2, 3, 5",
              B: "0, 1, 1, 2, 3",
              C: "1, 2, 3, 4, 5",
              D: "1, 1, 2, 4, 8"
            },
            answer: "B",
            explanation: "Starting with `0, 1`, the next terms are `0+1 = 1`, `1+1 = 2`, and `1+2 = 3`, giving `0, 1, 1, 2, 3`."
          }
        ]
      }
    ]
  },
  {
    id: 8,
    title: "Module 8: OOP",
    shortTitle: "Object-Oriented Programming",
    description: "Design classes, inheritance hierarchies, magic methods (`__init__`, `__add__`), encapsulation, class/static methods, and properties.",
    color: "#6366f1", // Indigo
    gradient: "linear-gradient(135deg, #6366f1 0%, #4f46e5 100%)",
    icon: "Cpu",
    lessons: [
      {
        lessonNumber: 73,
        title: "Classes",
        type: "lesson",
        conceptSummary: "A class is a blueprint for creating objects that bundle data (attributes) and behavior (methods) together, defined with the `class` keyword.",
        conceptCode: `class Dog:\n    def bark(self):\n        return "Woof!"`,
        questions: [
          {
            id: "Q78",
            number: 78,
            question: "Which keyword defines a class?",
            options: {
              A: "object",
              B: "class",
              C: "struct",
              D: "defclass"
            },
            answer: "B",
            explanation: "The `class` keyword defines a new class in Python."
          }
        ]
      },
      {
        lessonNumber: 74,
        title: "Inheritance",
        type: "lesson",
        conceptSummary: "Inheritance allows a child class (subclass) to inherit and extend attributes and methods from a parent class (superclass).",
        conceptCode: `class Animal:\n    def speak(self): pass\n\nclass Cat(Animal):\n    def speak(self): return "Meow"`,
        questions: [
          {
            id: "Q79",
            number: 79,
            question: "What does inheritance allow a class to do?",
            options: {
              A: "Reuse or extend behavior from another class",
              B: "Import every installed package",
              C: "Avoid all methods",
              D: "Turn an object into a string automatically"
            },
            answer: "A",
            explanation: "Inheritance lets a subclass reuse attributes and methods from a parent class and override or extend them."
          }
        ]
      },
      {
        lessonNumber: 75,
        title: "Magic Methods & Operator Overloading",
        type: "lesson",
        conceptSummary: "Magic (dunder) methods have double underscores like `__add__`. Defining `__add__(self, other)` customizes the `+` operator for instances of your class.",
        conceptCode: `class Vector:\n    def __init__(self, x): self.x = x\n    def __add__(self, other):\n        return Vector(self.x + other.x)`,
        questions: [
          {
            id: "Q80",
            number: 80,
            question: "Which magic method is commonly used to customize the `+` operator for a class?",
            options: {
              A: "__add__()",
              B: "__plus__()",
              C: "__sum__()",
              D: "__operator__()"
            },
            answer: "A",
            explanation: "Python invokes `obj1.__add__(obj2)` when evaluating `obj1 + obj2`."
          }
        ]
      },
      {
        lessonNumber: 76,
        title: "Object Lifecycle",
        type: "lesson",
        conceptSummary: "When a new instance is created, Python automatically calls `__init__(self, ...)` to initialize the object's attributes.",
        conceptCode: `class Player:\n    def __init__(self, name):\n        self.name = name`,
        questions: [
          {
            id: "Q81",
            number: 81,
            question: "Which method is commonly used to initialize a newly created object's attributes?",
            options: {
              A: "__start__()",
              B: "__init__()",
              C: "__create__()",
              D: "__main__()"
            },
            answer: "B",
            explanation: "`__init__` is Python's initializer method, called automatically when an object is instantiated."
          }
        ]
      },
      {
        lessonNumber: 77,
        title: "Data Hiding",
        type: "lesson",
        conceptSummary: "Prefixing an attribute with double underscores `__attr` triggers **name mangling** (renaming it internally to `_ClassName__attr`) to prevent accidental external access or subclass collisions.",
        conceptCode: `class BankAccount:\n    def __init__(self):\n        self.__balance = 100  # Mangled to _BankAccount__balance`,
        questions: [
          {
            id: "Q82",
            number: 82,
            question: "What does a leading double underscore in an instance attribute name generally trigger?",
            options: {
              A: "Complete security protection",
              B: "Name mangling",
              C: "Automatic deletion",
              D: "Public access enforcement"
            },
            answer: "B",
            explanation: "A leading double underscore (like `__secret`) triggers name mangling (`_ClassName__secret`) in Python."
          }
        ]
      },
      {
        lessonNumber: 78,
        title: "Class & Static Methods",
        type: "lesson",
        conceptSummary: "`@classmethod` passes the class (`cls`) as the first argument (great for factory methods), while `@staticmethod` defines a utility method that receives neither `self` nor `cls`.",
        conceptCode: `class Pizza:\n    @classmethod\n    def margherita(cls):\n        return cls(["tomato", "mozzarella"])`,
        questions: [
          {
            id: "Q83",
            number: 83,
            question: "Which decorator defines a class method?",
            options: {
              A: "@staticmethod",
              B: "@classmethod",
              C: "@class",
              D: "@method"
            },
            answer: "B",
            explanation: "The `@classmethod` built-in decorator marks a method as a class method that receives `cls` as its first parameter."
          }
        ]
      },
      {
        lessonNumber: 79,
        title: "Properties",
        type: "lesson",
        conceptSummary: "The `@property` decorator lets you define a method that can be accessed like a read-only or computed attribute without parentheses.",
        conceptCode: `class Circle:\n    def __init__(self, r): self.r = r\n    @property\n    def diameter(self): return self.r * 2`,
        questions: [
          {
            id: "Q84",
            number: 84,
            question: "Which decorator lets a method be accessed like an attribute?",
            options: {
              A: "@property",
              B: "@attribute",
              C: "@getter",
              D: "@field"
            },
            answer: "A",
            explanation: "`@property` turns a getter method into a managed attribute accessed as `obj.prop` instead of `obj.prop()`."
          }
        ]
      },
      {
        lessonNumber: 80,
        title: "A Simple Game",
        type: "lesson",
        conceptSummary: "Interactive OOP games combine classes (for entities and state) with a main game loop (`while` loop) that repeatedly processes player input until the game ends.",
        conceptCode: `while game.is_running:\n    cmd = input("Move: ")\n    game.handle(cmd)`,
        questions: [
          {
            id: "Q85",
            number: 85,
            question: "Which programming construct is useful for repeatedly accepting player moves until a game ends?",
            options: {
              A: "A loop",
              B: "A docstring",
              C: "A module import alone",
              D: "A tuple alone"
            },
            answer: "A",
            explanation: "A game loop (such as a `while` loop) continuously prompts for and processes player turns until an exit condition is met."
          }
        ]
      },
      {
        lessonNumber: 81,
        title: "Module 8 Quiz",
        type: "quiz",
        conceptSummary: "Inside any normal instance method, the first parameter (conventionally named `self`) refers to the specific object instance on which the method was called.",
        conceptCode: `class User:\n    def greet(self):\n        return f"Hi, I am {self}"`,
        questions: [
          {
            id: "Q86",
            number: 86,
            question: "What does `self` conventionally refer to in an instance method?",
            options: {
              A: "The parent class",
              B: "The current instance",
              C: "The Python interpreter",
              D: "The current module"
            },
            answer: "B",
            explanation: "`self` refers to the current instance of the class on which the method is being called."
          }
        ]
      },
      {
        lessonNumber: 82,
        title: "Code Project: Juice Maker",
        type: "project",
        conceptSummary: "Code Project Challenge: Model a `Juice` or `JuiceMaker` using a **class** with attributes (like `name`, `capacity`, `ingredients`) and methods (like `__add__` or `make_juice()`).",
        conceptCode: `class Juice:\n    def __init__(self, name, capacity):\n        self.name = name\n        self.capacity = capacity`,
        questions: [
          {
            id: "Q87",
            number: 87,
            question: "Which OOP concept can represent a juice maker with attributes such as ingredients and methods such as `make_juice()`?",
            options: {
              A: "A class",
              B: "A comment",
              C: "A string literal",
              D: "A decorator only"
            },
            answer: "A",
            explanation: "A `class` encapsulates state (attributes like ingredients) and behavior (methods like `make_juice()`) into a single blueprint."
          }
        ]
      }
    ]
  },
  {
    id: 9,
    title: "Module 9: Regular Expressions",
    shortTitle: "Regular Expressions",
    description: "Master pattern matching with Python's `re` module, metacharacters, character classes, groups, special sequences, and validation.",
    color: "#14b8a6", // Teal
    gradient: "linear-gradient(135deg, #14b8a6 0%, #0d9488 100%)",
    icon: "SearchCode",
    lessons: [
      {
        lessonNumber: 83,
        title: "Regular Expressions",
        type: "lesson",
        conceptSummary: "Regular expressions (regex) are powerful patterns for searching, matching, and manipulating text. Python provides regex tools in the built-in `re` module.",
        conceptCode: `import re\nmatch = re.search(r"py", "python")`,
        questions: [
          {
            id: "Q88",
            number: 88,
            question: "Which Python module provides regular-expression functionality?",
            options: {
              A: "regex",
              B: "re",
              C: "pattern",
              D: "string"
            },
            answer: "B",
            explanation: "The `re` module in Python's standard library provides regular expression matching operations."
          }
        ]
      },
      {
        lessonNumber: 84,
        title: "Simple Metacharacters",
        type: "lesson",
        conceptSummary: "In a regex pattern, the dot `.` metacharacter matches any single character except a newline `\\n` (unless the `re.DOTALL` flag is set).",
        conceptCode: `import re\nprint(bool(re.match(r"gr.y", "gray")))  # True`,
        questions: [
          {
            id: "Q89",
            number: 89,
            question: "In a regular expression, what does `.` usually match?",
            options: {
              A: "Only a period",
              B: "Any character except a newline by default",
              C: "Only digits",
              D: "Only whitespace"
            },
            answer: "B",
            explanation: "By default, the `.` metacharacter matches any single character except a newline (`\\n`)."
          }
        ]
      },
      {
        lessonNumber: 85,
        title: "Character Classes",
        type: "lesson",
        conceptSummary: "Square brackets `[...]` define a character class that matches any single character listed inside the brackets (or range like `[a-z]`).",
        conceptCode: `import re\n# [abc] matches 'a', 'b', or 'c'\nprint(re.findall(r"[abc]", "cab driver"))  # ['c', 'a', 'b']`,
        questions: [
          {
            id: "Q90",
            number: 90,
            question: "What does `[abc]` match?",
            options: {
              A: "The exact string `\"abc\"`",
              B: "One character: `a`, `b`, or `c`",
              C: "Any digit",
              D: "Any whitespace character"
            },
            answer: "B",
            explanation: "The character class `[abc]` matches any single character that is either `a`, `b`, or `c`."
          }
        ]
      },
      {
        lessonNumber: 86,
        title: "More Metacharacters",
        type: "lesson",
        conceptSummary: "Anchors and quantifiers: `^` matches the start of the string, `$` matches the end, `*` matches 0+, `+` matches 1+, and `?` matches 0 or 1 repetitions.",
        conceptCode: `import re\nprint(bool(re.search(r"^Hello", "Hello world")))  # True`,
        questions: [
          {
            id: "Q91",
            number: 91,
            question: "What does `^` mean at the beginning of a regular expression?",
            options: {
              A: "End of the string",
              B: "Start of the string, in normal non-multiline matching",
              C: "Any digit",
              D: "One or more matches"
            },
            answer: "B",
            explanation: "At the beginning of a pattern (outside `[]`), `^` anchors the match to the start of the string."
          }
        ]
      },
      {
        lessonNumber: 87,
        title: "Groups",
        type: "lesson",
        conceptSummary: "Parentheses `(...)` in a regular expression create a **capturing group**, allowing you to apply quantifiers to a subpattern and extract matched substrings via `.group()` or `.groups()`.",
        conceptCode: `import re\nm = re.search(r"(\\d+)-(\\d+)", "ID: 12-34")\nprint(m.groups())  # ('12', '34')`,
        questions: [
          {
            id: "Q92",
            number: 92,
            question: "What do parentheses `()` typically do in a regular expression?",
            options: {
              A: "Create a capturing group",
              B: "Match only digits",
              C: "Escape a character",
              D: "End the pattern"
            },
            answer: "A",
            explanation: "Parentheses `()` group parts of a regex together and capture the matched text as a group."
          }
        ]
      },
      {
        lessonNumber: 88,
        title: "Special Sequences",
        type: "lesson",
        conceptSummary: "Common regex shorthand sequences: `\\d` matches any digit (`[0-9]`), `\\s` matches whitespace, and `\\w` matches word characters (`[a-zA-Z0-9_]`).",
        conceptCode: `import re\nprint(re.findall(r"\\d+", "Order 42 has 3 items"))  # ['42', '3']`,
        questions: [
          {
            id: "Q93",
            number: 93,
            question: "What does `\\d` match in a regular expression?",
            options: {
              A: "Any letter",
              B: "A digit",
              C: "A whitespace character",
              D: "A punctuation mark"
            },
            answer: "B",
            explanation: "`\\d` is the special sequence that matches any decimal digit (`0`–`9`)."
          }
        ]
      },
      {
        lessonNumber: 89,
        title: "Email Extraction",
        type: "lesson",
        conceptSummary: "`re.findall(pattern, text)` scans the entire string and returns a list of all non-overlapping matches—ideal for extracting all emails or tags from text.",
        conceptCode: `import re\nemails = re.findall(r"[\\w.-]+@[\\w.-]+\\.\\w+", text)`,
        questions: [
          {
            id: "Q94",
            number: 94,
            question: "Which regular-expression function returns all non-overlapping matches in a string?",
            options: {
              A: "re.findall()",
              B: "re.remove()",
              C: "re.extract()",
              D: "re.collect()"
            },
            answer: "A",
            explanation: "`re.findall(pattern, string)` returns a list of all non-overlapping matches in the string."
          }
        ]
      },
      {
        lessonNumber: 90,
        title: "Module 9 Quiz",
        type: "quiz",
        conceptSummary: "Unlike `re.match()` which only checks the start of the string, `re.search()` scans through the entire string and returns the first match found.",
        conceptCode: `import re\nm = re.search(r"cat", "my cat naps")  # Matches 'cat'`,
        questions: [
          {
            id: "Q95",
            number: 95,
            question: "What does `re.search()` do?",
            options: {
              A: "Searches for the first match anywhere in a string",
              B: "Replaces all matches",
              C: "Splits a string into characters",
              D: "Matches only the last character"
            },
            answer: "A",
            explanation: "`re.search()` scans through the string looking for the first location where the regular expression pattern produces a match."
          }
        ]
      },
      {
        lessonNumber: 91,
        title: "Code Project: Phone Number Validator",
        type: "project",
        conceptSummary: "Code Project Challenge: Validate structured strings like phone numbers using a regex pattern (e.g., `r\"^[189]\\d{7}$\"`) or explicit format checks.",
        conceptCode: `import re\npattern = r"^[189]\\d{7}$"\nvalid = bool(re.match(pattern, phone))`,
        questions: [
          {
            id: "Q96",
            number: 96,
            question: "Which approach is most appropriate for validating a phone number against a defined format?",
            options: {
              A: "Checking only whether the string is non-empty",
              B: "Using a regular expression or explicit format checks",
              C: "Converting it directly to a list",
              D: "Calling `print()` on it"
            },
            answer: "B",
            explanation: "Validating a structured format like a phone number requires checking exact digit counts and starting characters with a regular expression or explicit format rules."
          }
        ]
      }
    ]
  },
  {
    id: 10,
    title: "Module 10: Pythonicness & Packaging",
    shortTitle: "Pythonicness & Packaging",
    description: "Write idiomatic Python with the Zen of Python, PEPs, `*args`/`**kwargs`, tuple unpacking, ternary expressions, `__main__`, and `pyproject.toml`.",
    color: "#f97316", // Orange
    gradient: "linear-gradient(135deg, #f97316 0%, #ea580c 100%)",
    icon: "PackageCheck",
    lessons: [
      {
        lessonNumber: 92,
        title: "The Zen of Python",
        type: "lesson",
        conceptSummary: "Type `import this` in Python to read Tim Peters's 19 guiding aphorisms for writing clean, idiomatic Python—including 'Beautiful is better than ugly' and 'Readability counts'.",
        conceptCode: `import this\n# Beautiful is better than ugly.\n# Explicit is better than implicit.\n# Readability counts.`,
        questions: [
          {
            id: "Q97",
            number: 97,
            question: "Which statement is a principle of the Zen of Python?",
            options: {
              A: "Complex is always better than simple",
              B: "Readability counts",
              C: "Explicitness is unnecessary",
              D: "Errors should always be hidden"
            },
            answer: "B",
            explanation: "'Readability counts' is one of the core principles of the Zen of Python (`import this`)."
          }
        ]
      },
      {
        lessonNumber: 93,
        title: "PEP",
        type: "lesson",
        conceptSummary: "A PEP is a **Python Enhancement Proposal**—a design document providing information or proposing new features and style conventions (like PEP 8 for code style).",
        conceptCode: `# PEP 8 Style Guide:\n# - 4 spaces per indentation level\n# - snake_case for functions and variables`,
        questions: [
          {
            id: "Q98",
            number: 98,
            question: "What does PEP stand for?",
            options: {
              A: "Python Execution Program",
              B: "Python Enhancement Proposal",
              C: "Programming Extension Protocol",
              D: "Python Evaluation Process"
            },
            answer: "B",
            explanation: "PEP stands for Python Enhancement Proposal."
          }
        ]
      },
      {
        lessonNumber: 94,
        title: "More on Function Arguments",
        type: "lesson",
        conceptSummary: "In function definitions, `*args` packs any number of extra positional arguments into a **tuple**, and `**kwargs` packs extra keyword arguments into a **dictionary**.",
        conceptCode: `def demo(*args, **kwargs):\n    print(args)    # tuple\n    print(kwargs)  # dict`,
        questions: [
          {
            id: "Q99",
            number: 99,
            question: "Which syntax collects extra positional arguments into a tuple?",
            options: {
              A: "**kwargs",
              B: "*args",
              C: "&args",
              D: "...args"
            },
            answer: "B",
            explanation: "A single asterisk parameter like `*args` collects arbitrary positional arguments into a tuple."
          },
          {
            id: "Q100",
            number: 100,
            question: "Which syntax collects extra keyword arguments into a dictionary?",
            options: {
              A: "*args",
              B: "**kwargs",
              C: "&&kwargs",
              D: "//kwargs"
            },
            answer: "B",
            explanation: "A double asterisk parameter like `**kwargs` collects arbitrary keyword arguments (`key=value`) into a dictionary."
          }
        ]
      },
      {
        lessonNumber: 95,
        title: "Tuple Unpacking",
        type: "lesson",
        conceptSummary: "Tuple (or iterable) unpacking assigns elements of a sequence to multiple variables in a single statement, and also enables extended unpacking with `*`.",
        conceptCode: `a, b = (10, 20)\nprint(a, b)  # 10 20`,
        questions: [
          {
            id: "Q101",
            number: 101,
            question: "What happens when this code executes?",
            code: `a, b = (10, 20)`,
            options: {
              A: "`a = 20`, `b = 10`",
              B: "`a = (10, 20)`, `b = None`",
              C: "`a = 10`, `b = 20`",
              D: "An error always occurs"
            },
            answer: "C",
            explanation: "Tuple unpacking assigns the first element `10` to `a` and the second element `20` to `b`."
          }
        ]
      },
      {
        lessonNumber: 96,
        title: "Ternary Operator",
        type: "lesson",
        conceptSummary: "Python's conditional expression (ternary operator) writes an inline `if/else` on one line: `value_if_true if condition else value_if_false`.",
        conceptCode: `status = "yes" if x > 0 else "no"`,
        questions: [
          {
            id: "Q102",
            number: 102,
            question: "Which is valid Python conditional-expression syntax?",
            options: {
              A: "x > 0 ? \"yes\" : \"no\"",
              B: "\"yes\" if x > 0 else \"no\"",
              C: "if x > 0 then \"yes\"",
              D: "x > 0 : \"yes\" else \"no\""
            },
            answer: "B",
            explanation: "Python's ternary conditional expression syntax is `<true_val> if <condition> else <false_val>`."
          }
        ]
      },
      {
        lessonNumber: 97,
        title: "More on else Statements",
        type: "lesson",
        conceptSummary: "In Python, `for` and `while` loops can have an `else:` clause! It runs only when the loop completes normally without hitting a `break` statement.",
        conceptCode: `for n in [2, 4, 6]:\n    if n % 2 != 0:\n        break\nelse:\n    print("All numbers were even!")`,
        questions: [
          {
            id: "Q103",
            number: 103,
            question: "In a `for ... else` construct, when does the `else` block execute?",
            options: {
              A: "Only when the loop encounters `break`",
              B: "When the loop finishes normally without encountering `break`",
              C: "Before the loop begins",
              D: "Whenever an exception occurs"
            },
            answer: "B",
            explanation: "The `else` block on a loop executes only if the loop finishes iterating normally without being terminated early by `break`."
          }
        ]
      },
      {
        lessonNumber: 98,
        title: "__main__",
        type: "lesson",
        conceptSummary: "When a Python file is run directly, its `__name__` variable is set to `\"__main__\"`. When imported as a module, `__name__` is the module's name.",
        conceptCode: `if __name__ == "__main__":\n    main()  # Runs only when executed directly`,
        questions: [
          {
            id: "Q104",
            number: 104,
            question: "What does `if __name__ == \"__main__\":` commonly ensure?",
            options: {
              A: "The block runs when the file is executed as the main program",
              B: "The file cannot be imported",
              C: "The file runs only on Windows",
              D: "All functions execute automatically"
            },
            answer: "A",
            explanation: "Guarding code with `if __name__ == \"__main__\":` ensures that block executes only when the script is run directly, not when imported by another module."
          }
        ]
      },
      {
        lessonNumber: 99,
        title: "Major 3rd-Party Libraries",
        type: "lesson",
        conceptSummary: "Python's ecosystem includes specialized libraries: **NumPy** for numerical arrays & scientific computing, **Django/Flask** for web apps, **Requests** for HTTP, and **Beautiful Soup** for web scraping.",
        conceptCode: `import numpy as np\narr = np.array([1, 2, 3])`,
        questions: [
          {
            id: "Q105",
            number: 105,
            question: "Which library is commonly used for numerical arrays and scientific computing?",
            options: {
              A: "NumPy",
              B: "Flask",
              C: "Beautiful Soup",
              D: "Requests only"
            },
            answer: "A",
            explanation: "NumPy (Numerical Python) is the foundational library for multi-dimensional numerical arrays and scientific computing in Python."
          }
        ]
      },
      {
        lessonNumber: 100,
        title: "Packages",
        type: "lesson",
        conceptSummary: "A Python package is a directory of related Python modules (historically containing `__init__.py`), organizing large codebases into clean hierarchical namespaces.",
        conceptCode: `my_package/\n  __init__.py\n  utils.py\n  models.py`,
        questions: [
          {
            id: "Q106",
            number: 106,
            question: "What is a Python package primarily used for?",
            options: {
              A: "Organizing related modules",
              B: "Replacing the Python interpreter",
              C: "Preventing all exceptions",
              D: "Storing only numerical variables"
            },
            answer: "A",
            explanation: "Packages group and organize related Python modules together into a structured directory hierarchy."
          }
        ]
      },
      {
        lessonNumber: 101,
        title: "Packaging for Users",
        type: "lesson",
        conceptSummary: "Packaging a Python project bundles your code, metadata, and dependencies into distributable archives (wheels/sdists) so users can install and reuse it easily via `pip`.",
        conceptCode: `python -m build\npip install dist/my_pkg-0.1.0-py3-none-any.whl`,
        questions: [
          {
            id: "Q107",
            number: 107,
            question: "What is the purpose of packaging a Python project?",
            options: {
              A: "To distribute and install the project in a reusable form",
              B: "To convert every function into a variable",
              C: "To prevent other users from running Python",
              D: "To remove all dependencies automatically"
            },
            answer: "A",
            explanation: "Packaging allows a Python library or application to be distributed, shared on PyPI, and installed cleanly into other environments."
          }
        ]
      },
      {
        lessonNumber: 102,
        title: "Module 10 Quiz",
        type: "quiz",
        conceptSummary: "Modern Python packaging (PEP 518 / PEP 621) uses `pyproject.toml` as the unified configuration file for build-system requirements and project metadata.",
        conceptCode: `[build-system]\nrequires = ["setuptools>=61.0"]\nbuild-backend = "setuptools.build_meta"\n\n[project]\nname = "solopy-app"\nversion = "1.0.0"`,
        questions: [
          {
            id: "Q108",
            number: 108,
            question: "Which file is commonly used to declare build-system requirements and project metadata in modern Python packaging?",
            options: {
              A: "`README.txt` only",
              B: "`pyproject.toml`",
              C: "`main.exe`",
              D: "`python.lock`"
            },
            answer: "B",
            explanation: "`pyproject.toml` is the standard configuration file for declaring build-system requirements and project metadata in modern Python packaging."
          }
        ]
      }
    ]
  }
];

// Helper to flatten all questions with module & lesson metadata
export const ALL_QUESTIONS = COURSE_MODULES.flatMap((mod) =>
  mod.lessons.flatMap((lesson) =>
    lesson.questions.map((q) => ({
      ...q,
      moduleId: mod.id,
      moduleTitle: mod.title,
      moduleShortTitle: mod.shortTitle,
      moduleColor: mod.color,
      lessonNumber: lesson.lessonNumber,
      lessonTitle: lesson.title,
      lessonType: lesson.type,
      conceptSummary: lesson.conceptSummary,
      conceptCode: lesson.conceptCode
    }))
  )
);

export const LEVEL_RANKS = [
  { minXp: 0, level: 1, title: "Python Novice", badge: "🌱" },
  { minXp: 150, level: 2, title: "Syntax Explorer", badge: "🔍" },
  { minXp: 350, level: 3, title: "Script Crafter", badge: "🛠️" },
  { minXp: 650, level: 4, title: "Logic Architect", badge: "⚡" },
  { minXp: 1000, level: 5, title: "Function Wizard", badge: "🧙‍♂️" },
  { minXp: 1400, level: 6, title: "OOP Specialist", badge: "🏛️" },
  { minXp: 1800, level: 7, title: "Pythonic Master", badge: "🐍" },
  { minXp: 2100, level: 8, title: "SoloPy Legend", badge: "👑" }
];

export function getRankForXp(xp) {
  let current = LEVEL_RANKS[0];
  let next = LEVEL_RANKS[1] || null;
  for (let i = 0; i < LEVEL_RANKS.length; i++) {
    if (xp >= LEVEL_RANKS[i].minXp) {
      current = LEVEL_RANKS[i];
      next = LEVEL_RANKS[i + 1] || null;
    }
  }
  return { current, next };
}
