import Question from './Question';

function Quiz({ questions, current, setCurrent, selectedOptions, handleOptionSelect, handleSubmit }) {
  return (
    <div className="quiz-container">
      <Question
        questionData={questions[current]}
        selectedOptions={selectedOptions[current]}
        onOptionSelect={handleOptionSelect}
      />

      <div className="nav-buttons">
        {current > 0 && (
          <button
            className="nav-btn"
            onClick={() => setCurrent(current - 1)}
          >
            Previous
          </button>
        )}

        {current < questions.length - 1 && (
          <button
            className="nav-btn"
            onClick={() => setCurrent(current + 1)}
          >
            Next
          </button>
        )}

        {current === questions.length - 1 && (
          <button className="nav-btn" onClick={handleSubmit}>
            Submit
          </button>
        )}
      </div>
    </div>
  );
}

export default Quiz;
