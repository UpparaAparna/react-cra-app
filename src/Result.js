function Result({ score, total , questions , userAnswers}) {


  return (
    <div className="quiz-container result">
      
      <h1>Your Score: {score} / {total}</h1>

      {questions.map((question, index) => (
        <div key={index} className="result-question">
          <p> Question : {question.text}</p>   
          <p> Your Answer: {userAnswers[index] || "No answer"}</p>
          <p> Correct Answer: {question.correctAnswer}</p> 
        </div>
      ))}
    </div>
  );
}

export default Result;
