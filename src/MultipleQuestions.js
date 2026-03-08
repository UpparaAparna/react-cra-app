//import MultipleQuestions from './MultipleQuestions';

function MultipleQuestions({ questionData, selectedOptions, onOptionSelect }) {


    return (
        <div>
            <div className="question">{questionData.question}</div>
            {questionData.options.map((option) => (
                <button
                    key={option}
                    onClick={() => onOptionSelect(option)}
                    className={`option-btn ${
                        selectedOptions.includes(option) ? "selected" : ""
                    }`}
                >
                    {option}
                </button>
            ))}
        </div>
    )
}

export default MultipleQuestions;