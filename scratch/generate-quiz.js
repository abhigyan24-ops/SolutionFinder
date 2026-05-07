const fs = require('fs');

const chapters = [
  "squares-and-square-roots",
  "cubes-and-cube-roots",
  "exponents-and-radicals",
  "direct-and-inverse-variation",
  "profit-loss-and-discount",
  "compound-interest",
  "algebraic-identities",
  "polynomials",
  "linear-equation-in-one-variable",
  "parallel-lines",
  "understanding-quadrilaterals",
  "construction-of-quadrilaterals",
  "introduction-to-graphs",
  "mensuration",
  "statistics-and-probability",
  "rotational-symmetry"
];

// Provide generic Class 8 level templates for each topic
const generateQuestions = (chapter) => {
  const q = [];
  for (let i = 1; i <= 10; i++) {
    q.push({
      id: i,
      question: `Sample Class 8 question ${i} for ${chapter.replace(/-/g, ' ')}?`,
      options: [
        `Option A`,
        `Option B`,
        `Option C`,
        `Option D`
      ],
      correctAnswer: Math.floor(Math.random() * 4)
    });
  }
  
  // Customizing a few chapters to have real questions
  if (chapter === "squares-and-square-roots") {
    return [
      { id: 1, question: "What is the square of 15?", options: ["225", "125", "250", "150"], correctAnswer: 0 },
      { id: 2, question: "Which of the following is a perfect square?", options: ["10", "16", "24", "35"], correctAnswer: 1 },
      { id: 3, question: "The square root of 144 is:", options: ["12", "14", "16", "18"], correctAnswer: 0 },
      { id: 4, question: "A number ending in 3 can never be a perfect square. True or False?", options: ["True", "False", "Cannot say", "None"], correctAnswer: 0 },
      { id: 5, question: "What will be the unit digit of the square of 52?", options: ["2", "4", "6", "8"], correctAnswer: 1 },
      { id: 6, question: "Find the square root of 0.81.", options: ["0.09", "0.9", "9", "0.009"], correctAnswer: 1 },
      { id: 7, question: "By what least number should 50 be multiplied to make it a perfect square?", options: ["2", "3", "4", "5"], correctAnswer: 0 },
      { id: 8, question: "How many non-square numbers lie between the squares of 10 and 11?", options: ["10", "20", "21", "22"], correctAnswer: 1 },
      { id: 9, question: "Which of the following is the square of an even number?", options: ["121", "225", "256", "625"], correctAnswer: 2 },
      { id: 10, question: "√(100) + √(49) = ?", options: ["17", "14", "15", "16"], correctAnswer: 0 }
    ];
  } else if (chapter === "cubes-and-cube-roots") {
    return [
      { id: 1, question: "What is the cube of 4?", options: ["16", "64", "24", "12"], correctAnswer: 1 },
      { id: 2, question: "The cube root of 512 is:", options: ["6", "7", "8", "9"], correctAnswer: 2 },
      { id: 3, question: "Which of the following is a perfect cube?", options: ["100", "216", "400", "900"], correctAnswer: 1 },
      { id: 4, question: "The cube of an odd number is always:", options: ["Even", "Odd", "Prime", "Composite"], correctAnswer: 1 },
      { id: 5, question: "What is the unit digit of the cube of 17?", options: ["3", "7", "9", "1"], correctAnswer: 0 },
      { id: 6, question: "∛(1000) = ?", options: ["10", "100", "1000", "1"], correctAnswer: 0 },
      { id: 7, question: "By what least number should 81 be divided to make it a perfect cube?", options: ["3", "9", "27", "81"], correctAnswer: 0 },
      { id: 8, question: "The cube root of -343 is:", options: ["7", "-7", "49", "-49"], correctAnswer: 1 },
      { id: 9, question: "Is 216 a perfect cube?", options: ["Yes", "No", "Maybe", "None"], correctAnswer: 0 },
      { id: 10, question: "What is the value of 5³ - 3³?", options: ["98", "125", "27", "100"], correctAnswer: 0 }
    ];
  } else if (chapter === "linear-equation-in-one-variable") {
    return [
      { id: 1, question: "Solve: x + 5 = 12", options: ["7", "17", "5", "12"], correctAnswer: 0 },
      { id: 2, question: "If 2x - 3 = 7, then x = ?", options: ["2", "3", "4", "5"], correctAnswer: 3 },
      { id: 3, question: "The sum of two consecutive numbers is 15. The numbers are:", options: ["6, 9", "7, 8", "5, 10", "14, 1"], correctAnswer: 1 },
      { id: 4, question: "Solve: y/3 = 10", options: ["13", "30", "10/3", "3/10"], correctAnswer: 1 },
      { id: 5, question: "An equation of the form ax + b = c is called a:", options: ["Quadratic equation", "Linear equation", "Cubic equation", "None"], correctAnswer: 1 },
      { id: 6, question: "If 3(x - 2) = 15, x = ?", options: ["7", "5", "3", "1"], correctAnswer: 0 },
      { id: 7, question: "Solve: x/2 - 1/4 = x/3 + 1/2", options: ["9/2", "2/9", "3", "4"], correctAnswer: 0 },
      { id: 8, question: "A number increased by 8 equals 15. The number is:", options: ["7", "8", "23", "15"], correctAnswer: 0 },
      { id: 9, question: "The solution of 8x = 20 + 3x is:", options: ["4", "5", "6", "7"], correctAnswer: 0 },
      { id: 10, question: "Age of father is 3 times the age of son. If sum of their ages is 48, son's age is:", options: ["12", "16", "24", "36"], correctAnswer: 0 }
    ];
  }

  return q;
};

const quizData = {};
chapters.forEach(c => {
  quizData[c] = generateQuestions(c);
});

const fileContent = `export type Question = {
  id: number;
  question: string;
  options: string[];
  correctAnswer: number;
};

export const quizData: Record<string, Question[]> = ${JSON.stringify(quizData, null, 2)};
`;

fs.writeFileSync('lib/quiz-data.ts', fileContent);
console.log('Quiz data generated successfully.');
