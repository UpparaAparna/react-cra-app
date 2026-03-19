import { type } from '@testing-library/user-event/dist/type';
import './App.css';
import Quiz from './Quiz';
import Result from './Result';
import TextQuestion from './TextQuestion';
import MultipleQuestions from './MultipleQuestions';  
import { useState } from 'react';

const questions = [
  {
    type : "multiple",
    question: "What is the capital of France?",
    options: ["A. Paris", "B. London", "C. Rome", "D. Berlin"],
    answer: ["A"]
  },
  {
    type : "multiple",
    question: "Which of the following are programming languages?",
    options: ["A. Python", "B. Java", "C. HTML", "D. CSS"],
    answer: ["A", "B"]
  },
  {
     type: "multiple",  
    question: "What is the largest planet in our solar system?",
    options: ["A. Earth", "B. Mars", "C. Jupiter", "D. Saturn"],
    answer: ["C"]
  },
  {
    type : "multiple",
    question: "Which of the following are prime numbers?",
    options: ["A. 2", "B. 3", "C. 4", "D. 5"],
    answer: ["A", "B", "D"]
  },
  {
    type : "multiple",
    question: "What is the chemical symbol for water?",
    options: ["A. H2O", "B. CO2", "C. O2", "D. N2"],
    answer: ["A"]
  },
  {
    type : "text",
    question: "What is the capital of Japan?",
    answer: "Tokyo"
  }
];

function App() {
  const [current, setCurrent] = useState(0);
  const [selectedOptions, setSelectedOptions] = useState(
    Array.from({ length: questions.length }, () => [])
  );
  const [score, setScore] = useState(0);
  const [submitted, setSubmitted] = useState(false);

  const handleOptionSelect = (option) => {
    const currentSelected = selectedOptions[current] || [];
    let newSelected;
    if (currentSelected.includes(option)) {
      newSelected = currentSelected.filter((opt) => opt !== option);
    } else {
      if (currentSelected.length < 2) {
        newSelected = [...currentSelected, option];
      } else {
        return;
      }
    }

    const updatedSelectedOptions = [...selectedOptions];
    updatedSelectedOptions[current] = newSelected || [];
    setSelectedOptions(updatedSelectedOptions);
  };

  const handleNext = () => {
    if (current < questions.length - 1) {
      setCurrent(current + 1);
    }
  };

  const handlePrevious = () => {
    if (current > 0) {
      setCurrent(current - 1);
    }
  };

  const handleSubmit = () => {
    let newScore = 0;
    selectedOptions.forEach((options, index) => {
      const correctAnswers = questions[index].answer;
      // Extract the letter (A, B, C, D) from each selected option
      const selectedLetters = options.map((opt) => opt.split('.')[0]);
      if (
        selectedLetters.length === correctAnswers.length &&
        selectedLetters.every((letter) => correctAnswers.includes(letter))
      ) {
        newScore++;
      }
    });
    setScore(newScore);
    setSubmitted(true);
  };

  if (submitted) {
    return <Result score={score} 
    total={questions.length} 
    questions={questions} 
    userAnswers={selectedOptions.map((options) => options.join(", "))}
    />;
  }

  return (
    <div className="App">
      <Quiz
        questions={questions}
        current={current}
        setCurrent={setCurrent}
        selectedOptions={selectedOptions}
        handleOptionSelect={handleOptionSelect}
        handleSubmit={handleSubmit}
      />
    </div>
  );
}

export default App;
