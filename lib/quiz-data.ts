export type Question = {
  id: number;
  question: string;
  options: string[];
  correctAnswer: number;
};

export const quizData: Record<string, Question[]> = {
  "squares-and-square-roots": [
    {
      "id": 1,
      "question": "What is the square of 15?",
      "options": [
        "225",
        "125",
        "250",
        "150"
      ],
      "correctAnswer": 0
    },
    {
      "id": 2,
      "question": "Which of the following is a perfect square?",
      "options": [
        "10",
        "16",
        "24",
        "35"
      ],
      "correctAnswer": 1
    },
    {
      "id": 3,
      "question": "The square root of 144 is:",
      "options": [
        "12",
        "14",
        "16",
        "18"
      ],
      "correctAnswer": 0
    },
    {
      "id": 4,
      "question": "A number ending in 3 can never be a perfect square. True or False?",
      "options": [
        "True",
        "False",
        "Cannot say",
        "None"
      ],
      "correctAnswer": 0
    },
    {
      "id": 5,
      "question": "What will be the unit digit of the square of 52?",
      "options": [
        "2",
        "4",
        "6",
        "8"
      ],
      "correctAnswer": 1
    },
    {
      "id": 6,
      "question": "Find the square root of 0.81.",
      "options": [
        "0.09",
        "0.9",
        "9",
        "0.009"
      ],
      "correctAnswer": 1
    },
    {
      "id": 7,
      "question": "By what least number should 50 be multiplied to make it a perfect square?",
      "options": [
        "2",
        "3",
        "4",
        "5"
      ],
      "correctAnswer": 0
    },
    {
      "id": 8,
      "question": "How many non-square numbers lie between the squares of 10 and 11?",
      "options": [
        "10",
        "20",
        "21",
        "22"
      ],
      "correctAnswer": 1
    },
    {
      "id": 9,
      "question": "Which of the following is the square of an even number?",
      "options": [
        "121",
        "225",
        "256",
        "625"
      ],
      "correctAnswer": 2
    },
    {
      "id": 10,
      "question": "√(100) + √(49) = ?",
      "options": [
        "17",
        "14",
        "15",
        "16"
      ],
      "correctAnswer": 0
    }
  ],
  "cubes-and-cube-roots": [
    {
      "id": 1,
      "question": "What is the cube of 4?",
      "options": [
        "16",
        "64",
        "24",
        "12"
      ],
      "correctAnswer": 1
    },
    {
      "id": 2,
      "question": "The cube root of 512 is:",
      "options": [
        "6",
        "7",
        "8",
        "9"
      ],
      "correctAnswer": 2
    },
    {
      "id": 3,
      "question": "Which of the following is a perfect cube?",
      "options": [
        "100",
        "216",
        "400",
        "900"
      ],
      "correctAnswer": 1
    },
    {
      "id": 4,
      "question": "The cube of an odd number is always:",
      "options": [
        "Even",
        "Odd",
        "Prime",
        "Composite"
      ],
      "correctAnswer": 1
    },
    {
      "id": 5,
      "question": "What is the unit digit of the cube of 17?",
      "options": [
        "3",
        "7",
        "9",
        "1"
      ],
      "correctAnswer": 0
    },
    {
      "id": 6,
      "question": "∛(1000) = ?",
      "options": [
        "10",
        "100",
        "1000",
        "1"
      ],
      "correctAnswer": 0
    },
    {
      "id": 7,
      "question": "By what least number should 81 be divided to make it a perfect cube?",
      "options": [
        "3",
        "9",
        "27",
        "81"
      ],
      "correctAnswer": 0
    },
    {
      "id": 8,
      "question": "The cube root of -343 is:",
      "options": [
        "7",
        "-7",
        "49",
        "-49"
      ],
      "correctAnswer": 1
    },
    {
      "id": 9,
      "question": "Is 216 a perfect cube?",
      "options": [
        "Yes",
        "No",
        "Maybe",
        "None"
      ],
      "correctAnswer": 0
    },
    {
      "id": 10,
      "question": "What is the value of 5³ - 3³?",
      "options": [
        "98",
        "125",
        "27",
        "100"
      ],
      "correctAnswer": 0
    }
  ],
  "exponents-and-radicals": [
    {
      "id": 1,
      "question": "Sample Class 8 question 1 for exponents and radicals?",
      "options": [
        "Option A",
        "Option B",
        "Option C",
        "Option D"
      ],
      "correctAnswer": 0
    },
    {
      "id": 2,
      "question": "Sample Class 8 question 2 for exponents and radicals?",
      "options": [
        "Option A",
        "Option B",
        "Option C",
        "Option D"
      ],
      "correctAnswer": 0
    },
    {
      "id": 3,
      "question": "Sample Class 8 question 3 for exponents and radicals?",
      "options": [
        "Option A",
        "Option B",
        "Option C",
        "Option D"
      ],
      "correctAnswer": 0
    },
    {
      "id": 4,
      "question": "Sample Class 8 question 4 for exponents and radicals?",
      "options": [
        "Option A",
        "Option B",
        "Option C",
        "Option D"
      ],
      "correctAnswer": 3
    },
    {
      "id": 5,
      "question": "Sample Class 8 question 5 for exponents and radicals?",
      "options": [
        "Option A",
        "Option B",
        "Option C",
        "Option D"
      ],
      "correctAnswer": 3
    },
    {
      "id": 6,
      "question": "Sample Class 8 question 6 for exponents and radicals?",
      "options": [
        "Option A",
        "Option B",
        "Option C",
        "Option D"
      ],
      "correctAnswer": 2
    },
    {
      "id": 7,
      "question": "Sample Class 8 question 7 for exponents and radicals?",
      "options": [
        "Option A",
        "Option B",
        "Option C",
        "Option D"
      ],
      "correctAnswer": 1
    },
    {
      "id": 8,
      "question": "Sample Class 8 question 8 for exponents and radicals?",
      "options": [
        "Option A",
        "Option B",
        "Option C",
        "Option D"
      ],
      "correctAnswer": 1
    },
    {
      "id": 9,
      "question": "Sample Class 8 question 9 for exponents and radicals?",
      "options": [
        "Option A",
        "Option B",
        "Option C",
        "Option D"
      ],
      "correctAnswer": 0
    },
    {
      "id": 10,
      "question": "Sample Class 8 question 10 for exponents and radicals?",
      "options": [
        "Option A",
        "Option B",
        "Option C",
        "Option D"
      ],
      "correctAnswer": 0
    }
  ],
  "direct-and-inverse-variation": [
    {
      "id": 1,
      "question": "Sample Class 8 question 1 for direct and inverse variation?",
      "options": [
        "Option A",
        "Option B",
        "Option C",
        "Option D"
      ],
      "correctAnswer": 3
    },
    {
      "id": 2,
      "question": "Sample Class 8 question 2 for direct and inverse variation?",
      "options": [
        "Option A",
        "Option B",
        "Option C",
        "Option D"
      ],
      "correctAnswer": 1
    },
    {
      "id": 3,
      "question": "Sample Class 8 question 3 for direct and inverse variation?",
      "options": [
        "Option A",
        "Option B",
        "Option C",
        "Option D"
      ],
      "correctAnswer": 2
    },
    {
      "id": 4,
      "question": "Sample Class 8 question 4 for direct and inverse variation?",
      "options": [
        "Option A",
        "Option B",
        "Option C",
        "Option D"
      ],
      "correctAnswer": 3
    },
    {
      "id": 5,
      "question": "Sample Class 8 question 5 for direct and inverse variation?",
      "options": [
        "Option A",
        "Option B",
        "Option C",
        "Option D"
      ],
      "correctAnswer": 0
    },
    {
      "id": 6,
      "question": "Sample Class 8 question 6 for direct and inverse variation?",
      "options": [
        "Option A",
        "Option B",
        "Option C",
        "Option D"
      ],
      "correctAnswer": 3
    },
    {
      "id": 7,
      "question": "Sample Class 8 question 7 for direct and inverse variation?",
      "options": [
        "Option A",
        "Option B",
        "Option C",
        "Option D"
      ],
      "correctAnswer": 2
    },
    {
      "id": 8,
      "question": "Sample Class 8 question 8 for direct and inverse variation?",
      "options": [
        "Option A",
        "Option B",
        "Option C",
        "Option D"
      ],
      "correctAnswer": 3
    },
    {
      "id": 9,
      "question": "Sample Class 8 question 9 for direct and inverse variation?",
      "options": [
        "Option A",
        "Option B",
        "Option C",
        "Option D"
      ],
      "correctAnswer": 1
    },
    {
      "id": 10,
      "question": "Sample Class 8 question 10 for direct and inverse variation?",
      "options": [
        "Option A",
        "Option B",
        "Option C",
        "Option D"
      ],
      "correctAnswer": 3
    }
  ],
  "profit-loss-and-discount": [
    {
      "id": 1,
      "question": "Sample Class 8 question 1 for profit loss and discount?",
      "options": [
        "Option A",
        "Option B",
        "Option C",
        "Option D"
      ],
      "correctAnswer": 1
    },
    {
      "id": 2,
      "question": "Sample Class 8 question 2 for profit loss and discount?",
      "options": [
        "Option A",
        "Option B",
        "Option C",
        "Option D"
      ],
      "correctAnswer": 2
    },
    {
      "id": 3,
      "question": "Sample Class 8 question 3 for profit loss and discount?",
      "options": [
        "Option A",
        "Option B",
        "Option C",
        "Option D"
      ],
      "correctAnswer": 2
    },
    {
      "id": 4,
      "question": "Sample Class 8 question 4 for profit loss and discount?",
      "options": [
        "Option A",
        "Option B",
        "Option C",
        "Option D"
      ],
      "correctAnswer": 1
    },
    {
      "id": 5,
      "question": "Sample Class 8 question 5 for profit loss and discount?",
      "options": [
        "Option A",
        "Option B",
        "Option C",
        "Option D"
      ],
      "correctAnswer": 0
    },
    {
      "id": 6,
      "question": "Sample Class 8 question 6 for profit loss and discount?",
      "options": [
        "Option A",
        "Option B",
        "Option C",
        "Option D"
      ],
      "correctAnswer": 2
    },
    {
      "id": 7,
      "question": "Sample Class 8 question 7 for profit loss and discount?",
      "options": [
        "Option A",
        "Option B",
        "Option C",
        "Option D"
      ],
      "correctAnswer": 2
    },
    {
      "id": 8,
      "question": "Sample Class 8 question 8 for profit loss and discount?",
      "options": [
        "Option A",
        "Option B",
        "Option C",
        "Option D"
      ],
      "correctAnswer": 3
    },
    {
      "id": 9,
      "question": "Sample Class 8 question 9 for profit loss and discount?",
      "options": [
        "Option A",
        "Option B",
        "Option C",
        "Option D"
      ],
      "correctAnswer": 1
    },
    {
      "id": 10,
      "question": "Sample Class 8 question 10 for profit loss and discount?",
      "options": [
        "Option A",
        "Option B",
        "Option C",
        "Option D"
      ],
      "correctAnswer": 2
    }
  ],
  "compound-interest": [
    {
      "id": 1,
      "question": "Sample Class 8 question 1 for compound interest?",
      "options": [
        "Option A",
        "Option B",
        "Option C",
        "Option D"
      ],
      "correctAnswer": 0
    },
    {
      "id": 2,
      "question": "Sample Class 8 question 2 for compound interest?",
      "options": [
        "Option A",
        "Option B",
        "Option C",
        "Option D"
      ],
      "correctAnswer": 2
    },
    {
      "id": 3,
      "question": "Sample Class 8 question 3 for compound interest?",
      "options": [
        "Option A",
        "Option B",
        "Option C",
        "Option D"
      ],
      "correctAnswer": 0
    },
    {
      "id": 4,
      "question": "Sample Class 8 question 4 for compound interest?",
      "options": [
        "Option A",
        "Option B",
        "Option C",
        "Option D"
      ],
      "correctAnswer": 3
    },
    {
      "id": 5,
      "question": "Sample Class 8 question 5 for compound interest?",
      "options": [
        "Option A",
        "Option B",
        "Option C",
        "Option D"
      ],
      "correctAnswer": 0
    },
    {
      "id": 6,
      "question": "Sample Class 8 question 6 for compound interest?",
      "options": [
        "Option A",
        "Option B",
        "Option C",
        "Option D"
      ],
      "correctAnswer": 2
    },
    {
      "id": 7,
      "question": "Sample Class 8 question 7 for compound interest?",
      "options": [
        "Option A",
        "Option B",
        "Option C",
        "Option D"
      ],
      "correctAnswer": 1
    },
    {
      "id": 8,
      "question": "Sample Class 8 question 8 for compound interest?",
      "options": [
        "Option A",
        "Option B",
        "Option C",
        "Option D"
      ],
      "correctAnswer": 0
    },
    {
      "id": 9,
      "question": "Sample Class 8 question 9 for compound interest?",
      "options": [
        "Option A",
        "Option B",
        "Option C",
        "Option D"
      ],
      "correctAnswer": 3
    },
    {
      "id": 10,
      "question": "Sample Class 8 question 10 for compound interest?",
      "options": [
        "Option A",
        "Option B",
        "Option C",
        "Option D"
      ],
      "correctAnswer": 1
    }
  ],
  "algebraic-identities": [
    {
      "id": 1,
      "question": "Sample Class 8 question 1 for algebraic identities?",
      "options": [
        "Option A",
        "Option B",
        "Option C",
        "Option D"
      ],
      "correctAnswer": 1
    },
    {
      "id": 2,
      "question": "Sample Class 8 question 2 for algebraic identities?",
      "options": [
        "Option A",
        "Option B",
        "Option C",
        "Option D"
      ],
      "correctAnswer": 0
    },
    {
      "id": 3,
      "question": "Sample Class 8 question 3 for algebraic identities?",
      "options": [
        "Option A",
        "Option B",
        "Option C",
        "Option D"
      ],
      "correctAnswer": 1
    },
    {
      "id": 4,
      "question": "Sample Class 8 question 4 for algebraic identities?",
      "options": [
        "Option A",
        "Option B",
        "Option C",
        "Option D"
      ],
      "correctAnswer": 0
    },
    {
      "id": 5,
      "question": "Sample Class 8 question 5 for algebraic identities?",
      "options": [
        "Option A",
        "Option B",
        "Option C",
        "Option D"
      ],
      "correctAnswer": 0
    },
    {
      "id": 6,
      "question": "Sample Class 8 question 6 for algebraic identities?",
      "options": [
        "Option A",
        "Option B",
        "Option C",
        "Option D"
      ],
      "correctAnswer": 2
    },
    {
      "id": 7,
      "question": "Sample Class 8 question 7 for algebraic identities?",
      "options": [
        "Option A",
        "Option B",
        "Option C",
        "Option D"
      ],
      "correctAnswer": 3
    },
    {
      "id": 8,
      "question": "Sample Class 8 question 8 for algebraic identities?",
      "options": [
        "Option A",
        "Option B",
        "Option C",
        "Option D"
      ],
      "correctAnswer": 1
    },
    {
      "id": 9,
      "question": "Sample Class 8 question 9 for algebraic identities?",
      "options": [
        "Option A",
        "Option B",
        "Option C",
        "Option D"
      ],
      "correctAnswer": 0
    },
    {
      "id": 10,
      "question": "Sample Class 8 question 10 for algebraic identities?",
      "options": [
        "Option A",
        "Option B",
        "Option C",
        "Option D"
      ],
      "correctAnswer": 3
    }
  ],
  "polynomials": [
    {
      "id": 1,
      "question": "Sample Class 8 question 1 for polynomials?",
      "options": [
        "Option A",
        "Option B",
        "Option C",
        "Option D"
      ],
      "correctAnswer": 2
    },
    {
      "id": 2,
      "question": "Sample Class 8 question 2 for polynomials?",
      "options": [
        "Option A",
        "Option B",
        "Option C",
        "Option D"
      ],
      "correctAnswer": 3
    },
    {
      "id": 3,
      "question": "Sample Class 8 question 3 for polynomials?",
      "options": [
        "Option A",
        "Option B",
        "Option C",
        "Option D"
      ],
      "correctAnswer": 2
    },
    {
      "id": 4,
      "question": "Sample Class 8 question 4 for polynomials?",
      "options": [
        "Option A",
        "Option B",
        "Option C",
        "Option D"
      ],
      "correctAnswer": 1
    },
    {
      "id": 5,
      "question": "Sample Class 8 question 5 for polynomials?",
      "options": [
        "Option A",
        "Option B",
        "Option C",
        "Option D"
      ],
      "correctAnswer": 2
    },
    {
      "id": 6,
      "question": "Sample Class 8 question 6 for polynomials?",
      "options": [
        "Option A",
        "Option B",
        "Option C",
        "Option D"
      ],
      "correctAnswer": 3
    },
    {
      "id": 7,
      "question": "Sample Class 8 question 7 for polynomials?",
      "options": [
        "Option A",
        "Option B",
        "Option C",
        "Option D"
      ],
      "correctAnswer": 3
    },
    {
      "id": 8,
      "question": "Sample Class 8 question 8 for polynomials?",
      "options": [
        "Option A",
        "Option B",
        "Option C",
        "Option D"
      ],
      "correctAnswer": 0
    },
    {
      "id": 9,
      "question": "Sample Class 8 question 9 for polynomials?",
      "options": [
        "Option A",
        "Option B",
        "Option C",
        "Option D"
      ],
      "correctAnswer": 1
    },
    {
      "id": 10,
      "question": "Sample Class 8 question 10 for polynomials?",
      "options": [
        "Option A",
        "Option B",
        "Option C",
        "Option D"
      ],
      "correctAnswer": 2
    }
  ],
  "linear-equation-in-one-variable": [
    {
      "id": 1,
      "question": "Solve: x + 5 = 12",
      "options": [
        "7",
        "17",
        "5",
        "12"
      ],
      "correctAnswer": 0
    },
    {
      "id": 2,
      "question": "If 2x - 3 = 7, then x = ?",
      "options": [
        "2",
        "3",
        "4",
        "5"
      ],
      "correctAnswer": 3
    },
    {
      "id": 3,
      "question": "The sum of two consecutive numbers is 15. The numbers are:",
      "options": [
        "6, 9",
        "7, 8",
        "5, 10",
        "14, 1"
      ],
      "correctAnswer": 1
    },
    {
      "id": 4,
      "question": "Solve: y/3 = 10",
      "options": [
        "13",
        "30",
        "10/3",
        "3/10"
      ],
      "correctAnswer": 1
    },
    {
      "id": 5,
      "question": "An equation of the form ax + b = c is called a:",
      "options": [
        "Quadratic equation",
        "Linear equation",
        "Cubic equation",
        "None"
      ],
      "correctAnswer": 1
    },
    {
      "id": 6,
      "question": "If 3(x - 2) = 15, x = ?",
      "options": [
        "7",
        "5",
        "3",
        "1"
      ],
      "correctAnswer": 0
    },
    {
      "id": 7,
      "question": "Solve: x/2 - 1/4 = x/3 + 1/2",
      "options": [
        "9/2",
        "2/9",
        "3",
        "4"
      ],
      "correctAnswer": 0
    },
    {
      "id": 8,
      "question": "A number increased by 8 equals 15. The number is:",
      "options": [
        "7",
        "8",
        "23",
        "15"
      ],
      "correctAnswer": 0
    },
    {
      "id": 9,
      "question": "The solution of 8x = 20 + 3x is:",
      "options": [
        "4",
        "5",
        "6",
        "7"
      ],
      "correctAnswer": 0
    },
    {
      "id": 10,
      "question": "Age of father is 3 times the age of son. If sum of their ages is 48, son's age is:",
      "options": [
        "12",
        "16",
        "24",
        "36"
      ],
      "correctAnswer": 0
    }
  ],
  "parallel-lines": [
    {
      "id": 1,
      "question": "Sample Class 8 question 1 for parallel lines?",
      "options": [
        "Option A",
        "Option B",
        "Option C",
        "Option D"
      ],
      "correctAnswer": 2
    },
    {
      "id": 2,
      "question": "Sample Class 8 question 2 for parallel lines?",
      "options": [
        "Option A",
        "Option B",
        "Option C",
        "Option D"
      ],
      "correctAnswer": 3
    },
    {
      "id": 3,
      "question": "Sample Class 8 question 3 for parallel lines?",
      "options": [
        "Option A",
        "Option B",
        "Option C",
        "Option D"
      ],
      "correctAnswer": 0
    },
    {
      "id": 4,
      "question": "Sample Class 8 question 4 for parallel lines?",
      "options": [
        "Option A",
        "Option B",
        "Option C",
        "Option D"
      ],
      "correctAnswer": 2
    },
    {
      "id": 5,
      "question": "Sample Class 8 question 5 for parallel lines?",
      "options": [
        "Option A",
        "Option B",
        "Option C",
        "Option D"
      ],
      "correctAnswer": 1
    },
    {
      "id": 6,
      "question": "Sample Class 8 question 6 for parallel lines?",
      "options": [
        "Option A",
        "Option B",
        "Option C",
        "Option D"
      ],
      "correctAnswer": 2
    },
    {
      "id": 7,
      "question": "Sample Class 8 question 7 for parallel lines?",
      "options": [
        "Option A",
        "Option B",
        "Option C",
        "Option D"
      ],
      "correctAnswer": 0
    },
    {
      "id": 8,
      "question": "Sample Class 8 question 8 for parallel lines?",
      "options": [
        "Option A",
        "Option B",
        "Option C",
        "Option D"
      ],
      "correctAnswer": 2
    },
    {
      "id": 9,
      "question": "Sample Class 8 question 9 for parallel lines?",
      "options": [
        "Option A",
        "Option B",
        "Option C",
        "Option D"
      ],
      "correctAnswer": 1
    },
    {
      "id": 10,
      "question": "Sample Class 8 question 10 for parallel lines?",
      "options": [
        "Option A",
        "Option B",
        "Option C",
        "Option D"
      ],
      "correctAnswer": 3
    }
  ],
  "understanding-quadrilaterals": [
    {
      "id": 1,
      "question": "Sample Class 8 question 1 for understanding quadrilaterals?",
      "options": [
        "Option A",
        "Option B",
        "Option C",
        "Option D"
      ],
      "correctAnswer": 3
    },
    {
      "id": 2,
      "question": "Sample Class 8 question 2 for understanding quadrilaterals?",
      "options": [
        "Option A",
        "Option B",
        "Option C",
        "Option D"
      ],
      "correctAnswer": 0
    },
    {
      "id": 3,
      "question": "Sample Class 8 question 3 for understanding quadrilaterals?",
      "options": [
        "Option A",
        "Option B",
        "Option C",
        "Option D"
      ],
      "correctAnswer": 0
    },
    {
      "id": 4,
      "question": "Sample Class 8 question 4 for understanding quadrilaterals?",
      "options": [
        "Option A",
        "Option B",
        "Option C",
        "Option D"
      ],
      "correctAnswer": 0
    },
    {
      "id": 5,
      "question": "Sample Class 8 question 5 for understanding quadrilaterals?",
      "options": [
        "Option A",
        "Option B",
        "Option C",
        "Option D"
      ],
      "correctAnswer": 3
    },
    {
      "id": 6,
      "question": "Sample Class 8 question 6 for understanding quadrilaterals?",
      "options": [
        "Option A",
        "Option B",
        "Option C",
        "Option D"
      ],
      "correctAnswer": 1
    },
    {
      "id": 7,
      "question": "Sample Class 8 question 7 for understanding quadrilaterals?",
      "options": [
        "Option A",
        "Option B",
        "Option C",
        "Option D"
      ],
      "correctAnswer": 0
    },
    {
      "id": 8,
      "question": "Sample Class 8 question 8 for understanding quadrilaterals?",
      "options": [
        "Option A",
        "Option B",
        "Option C",
        "Option D"
      ],
      "correctAnswer": 1
    },
    {
      "id": 9,
      "question": "Sample Class 8 question 9 for understanding quadrilaterals?",
      "options": [
        "Option A",
        "Option B",
        "Option C",
        "Option D"
      ],
      "correctAnswer": 2
    },
    {
      "id": 10,
      "question": "Sample Class 8 question 10 for understanding quadrilaterals?",
      "options": [
        "Option A",
        "Option B",
        "Option C",
        "Option D"
      ],
      "correctAnswer": 0
    }
  ],
  "construction-of-quadrilaterals": [
    {
      "id": 1,
      "question": "Sample Class 8 question 1 for construction of quadrilaterals?",
      "options": [
        "Option A",
        "Option B",
        "Option C",
        "Option D"
      ],
      "correctAnswer": 2
    },
    {
      "id": 2,
      "question": "Sample Class 8 question 2 for construction of quadrilaterals?",
      "options": [
        "Option A",
        "Option B",
        "Option C",
        "Option D"
      ],
      "correctAnswer": 0
    },
    {
      "id": 3,
      "question": "Sample Class 8 question 3 for construction of quadrilaterals?",
      "options": [
        "Option A",
        "Option B",
        "Option C",
        "Option D"
      ],
      "correctAnswer": 0
    },
    {
      "id": 4,
      "question": "Sample Class 8 question 4 for construction of quadrilaterals?",
      "options": [
        "Option A",
        "Option B",
        "Option C",
        "Option D"
      ],
      "correctAnswer": 0
    },
    {
      "id": 5,
      "question": "Sample Class 8 question 5 for construction of quadrilaterals?",
      "options": [
        "Option A",
        "Option B",
        "Option C",
        "Option D"
      ],
      "correctAnswer": 2
    },
    {
      "id": 6,
      "question": "Sample Class 8 question 6 for construction of quadrilaterals?",
      "options": [
        "Option A",
        "Option B",
        "Option C",
        "Option D"
      ],
      "correctAnswer": 1
    },
    {
      "id": 7,
      "question": "Sample Class 8 question 7 for construction of quadrilaterals?",
      "options": [
        "Option A",
        "Option B",
        "Option C",
        "Option D"
      ],
      "correctAnswer": 3
    },
    {
      "id": 8,
      "question": "Sample Class 8 question 8 for construction of quadrilaterals?",
      "options": [
        "Option A",
        "Option B",
        "Option C",
        "Option D"
      ],
      "correctAnswer": 2
    },
    {
      "id": 9,
      "question": "Sample Class 8 question 9 for construction of quadrilaterals?",
      "options": [
        "Option A",
        "Option B",
        "Option C",
        "Option D"
      ],
      "correctAnswer": 0
    },
    {
      "id": 10,
      "question": "Sample Class 8 question 10 for construction of quadrilaterals?",
      "options": [
        "Option A",
        "Option B",
        "Option C",
        "Option D"
      ],
      "correctAnswer": 2
    }
  ],
  "introduction-to-graphs": [
    {
      "id": 1,
      "question": "Sample Class 8 question 1 for introduction to graphs?",
      "options": [
        "Option A",
        "Option B",
        "Option C",
        "Option D"
      ],
      "correctAnswer": 0
    },
    {
      "id": 2,
      "question": "Sample Class 8 question 2 for introduction to graphs?",
      "options": [
        "Option A",
        "Option B",
        "Option C",
        "Option D"
      ],
      "correctAnswer": 0
    },
    {
      "id": 3,
      "question": "Sample Class 8 question 3 for introduction to graphs?",
      "options": [
        "Option A",
        "Option B",
        "Option C",
        "Option D"
      ],
      "correctAnswer": 0
    },
    {
      "id": 4,
      "question": "Sample Class 8 question 4 for introduction to graphs?",
      "options": [
        "Option A",
        "Option B",
        "Option C",
        "Option D"
      ],
      "correctAnswer": 3
    },
    {
      "id": 5,
      "question": "Sample Class 8 question 5 for introduction to graphs?",
      "options": [
        "Option A",
        "Option B",
        "Option C",
        "Option D"
      ],
      "correctAnswer": 3
    },
    {
      "id": 6,
      "question": "Sample Class 8 question 6 for introduction to graphs?",
      "options": [
        "Option A",
        "Option B",
        "Option C",
        "Option D"
      ],
      "correctAnswer": 1
    },
    {
      "id": 7,
      "question": "Sample Class 8 question 7 for introduction to graphs?",
      "options": [
        "Option A",
        "Option B",
        "Option C",
        "Option D"
      ],
      "correctAnswer": 0
    },
    {
      "id": 8,
      "question": "Sample Class 8 question 8 for introduction to graphs?",
      "options": [
        "Option A",
        "Option B",
        "Option C",
        "Option D"
      ],
      "correctAnswer": 2
    },
    {
      "id": 9,
      "question": "Sample Class 8 question 9 for introduction to graphs?",
      "options": [
        "Option A",
        "Option B",
        "Option C",
        "Option D"
      ],
      "correctAnswer": 2
    },
    {
      "id": 10,
      "question": "Sample Class 8 question 10 for introduction to graphs?",
      "options": [
        "Option A",
        "Option B",
        "Option C",
        "Option D"
      ],
      "correctAnswer": 1
    }
  ],
  "mensuration": [
    {
      "id": 1,
      "question": "Sample Class 8 question 1 for mensuration?",
      "options": [
        "Option A",
        "Option B",
        "Option C",
        "Option D"
      ],
      "correctAnswer": 3
    },
    {
      "id": 2,
      "question": "Sample Class 8 question 2 for mensuration?",
      "options": [
        "Option A",
        "Option B",
        "Option C",
        "Option D"
      ],
      "correctAnswer": 1
    },
    {
      "id": 3,
      "question": "Sample Class 8 question 3 for mensuration?",
      "options": [
        "Option A",
        "Option B",
        "Option C",
        "Option D"
      ],
      "correctAnswer": 3
    },
    {
      "id": 4,
      "question": "Sample Class 8 question 4 for mensuration?",
      "options": [
        "Option A",
        "Option B",
        "Option C",
        "Option D"
      ],
      "correctAnswer": 0
    },
    {
      "id": 5,
      "question": "Sample Class 8 question 5 for mensuration?",
      "options": [
        "Option A",
        "Option B",
        "Option C",
        "Option D"
      ],
      "correctAnswer": 0
    },
    {
      "id": 6,
      "question": "Sample Class 8 question 6 for mensuration?",
      "options": [
        "Option A",
        "Option B",
        "Option C",
        "Option D"
      ],
      "correctAnswer": 1
    },
    {
      "id": 7,
      "question": "Sample Class 8 question 7 for mensuration?",
      "options": [
        "Option A",
        "Option B",
        "Option C",
        "Option D"
      ],
      "correctAnswer": 0
    },
    {
      "id": 8,
      "question": "Sample Class 8 question 8 for mensuration?",
      "options": [
        "Option A",
        "Option B",
        "Option C",
        "Option D"
      ],
      "correctAnswer": 1
    },
    {
      "id": 9,
      "question": "Sample Class 8 question 9 for mensuration?",
      "options": [
        "Option A",
        "Option B",
        "Option C",
        "Option D"
      ],
      "correctAnswer": 2
    },
    {
      "id": 10,
      "question": "Sample Class 8 question 10 for mensuration?",
      "options": [
        "Option A",
        "Option B",
        "Option C",
        "Option D"
      ],
      "correctAnswer": 1
    }
  ],
  "statistics-and-probability": [
    {
      "id": 1,
      "question": "Sample Class 8 question 1 for statistics and probability?",
      "options": [
        "Option A",
        "Option B",
        "Option C",
        "Option D"
      ],
      "correctAnswer": 0
    },
    {
      "id": 2,
      "question": "Sample Class 8 question 2 for statistics and probability?",
      "options": [
        "Option A",
        "Option B",
        "Option C",
        "Option D"
      ],
      "correctAnswer": 0
    },
    {
      "id": 3,
      "question": "Sample Class 8 question 3 for statistics and probability?",
      "options": [
        "Option A",
        "Option B",
        "Option C",
        "Option D"
      ],
      "correctAnswer": 0
    },
    {
      "id": 4,
      "question": "Sample Class 8 question 4 for statistics and probability?",
      "options": [
        "Option A",
        "Option B",
        "Option C",
        "Option D"
      ],
      "correctAnswer": 2
    },
    {
      "id": 5,
      "question": "Sample Class 8 question 5 for statistics and probability?",
      "options": [
        "Option A",
        "Option B",
        "Option C",
        "Option D"
      ],
      "correctAnswer": 2
    },
    {
      "id": 6,
      "question": "Sample Class 8 question 6 for statistics and probability?",
      "options": [
        "Option A",
        "Option B",
        "Option C",
        "Option D"
      ],
      "correctAnswer": 3
    },
    {
      "id": 7,
      "question": "Sample Class 8 question 7 for statistics and probability?",
      "options": [
        "Option A",
        "Option B",
        "Option C",
        "Option D"
      ],
      "correctAnswer": 3
    },
    {
      "id": 8,
      "question": "Sample Class 8 question 8 for statistics and probability?",
      "options": [
        "Option A",
        "Option B",
        "Option C",
        "Option D"
      ],
      "correctAnswer": 3
    },
    {
      "id": 9,
      "question": "Sample Class 8 question 9 for statistics and probability?",
      "options": [
        "Option A",
        "Option B",
        "Option C",
        "Option D"
      ],
      "correctAnswer": 0
    },
    {
      "id": 10,
      "question": "Sample Class 8 question 10 for statistics and probability?",
      "options": [
        "Option A",
        "Option B",
        "Option C",
        "Option D"
      ],
      "correctAnswer": 2
    }
  ],
  "rotational-symmetry": [
    {
      "id": 1,
      "question": "Sample Class 8 question 1 for rotational symmetry?",
      "options": [
        "Option A",
        "Option B",
        "Option C",
        "Option D"
      ],
      "correctAnswer": 1
    },
    {
      "id": 2,
      "question": "Sample Class 8 question 2 for rotational symmetry?",
      "options": [
        "Option A",
        "Option B",
        "Option C",
        "Option D"
      ],
      "correctAnswer": 1
    },
    {
      "id": 3,
      "question": "Sample Class 8 question 3 for rotational symmetry?",
      "options": [
        "Option A",
        "Option B",
        "Option C",
        "Option D"
      ],
      "correctAnswer": 0
    },
    {
      "id": 4,
      "question": "Sample Class 8 question 4 for rotational symmetry?",
      "options": [
        "Option A",
        "Option B",
        "Option C",
        "Option D"
      ],
      "correctAnswer": 2
    },
    {
      "id": 5,
      "question": "Sample Class 8 question 5 for rotational symmetry?",
      "options": [
        "Option A",
        "Option B",
        "Option C",
        "Option D"
      ],
      "correctAnswer": 3
    },
    {
      "id": 6,
      "question": "Sample Class 8 question 6 for rotational symmetry?",
      "options": [
        "Option A",
        "Option B",
        "Option C",
        "Option D"
      ],
      "correctAnswer": 1
    },
    {
      "id": 7,
      "question": "Sample Class 8 question 7 for rotational symmetry?",
      "options": [
        "Option A",
        "Option B",
        "Option C",
        "Option D"
      ],
      "correctAnswer": 1
    },
    {
      "id": 8,
      "question": "Sample Class 8 question 8 for rotational symmetry?",
      "options": [
        "Option A",
        "Option B",
        "Option C",
        "Option D"
      ],
      "correctAnswer": 3
    },
    {
      "id": 9,
      "question": "Sample Class 8 question 9 for rotational symmetry?",
      "options": [
        "Option A",
        "Option B",
        "Option C",
        "Option D"
      ],
      "correctAnswer": 0
    },
    {
      "id": 10,
      "question": "Sample Class 8 question 10 for rotational symmetry?",
      "options": [
        "Option A",
        "Option B",
        "Option C",
        "Option D"
      ],
      "correctAnswer": 2
    }
  ]
};
