import MultipleQuestions from "./MultipleQuestions";
import TextQuestion from "./TextQuestion";

function Question({ questionData, selectedOptions, onOptionSelect }) {

    switch(questionData.type) {

        case  "multiple" :
            return  (
                <MultipleQuestions 
                questionData={questionData} 
                selectedOptions={selectedOptions} 
                onOptionSelect={onOptionSelect} />


            )
        case  "text" :
            return (
                <TextQuestion questionData={questionData} onTextChange={onOptionSelect} />
            )
            default :
                return <div>Invalid question type</div>;
    }
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
  );
}

export default Question;
