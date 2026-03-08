//import TextQuestion from "./TextQuestion";
import { useState } from "react";
function TextQuestion({questionData, onTextChange}) {

    const [input , setInput] = useState("");
    const handleChange =(e) => {
        setInput(e.target.value);
        onTextChange(e.target.value);
    }
    return (
        <div>
            <div className="question">{questionData.question}</div>
            <input
                type="text"
                onChange={(e) => onTextChange(e.target.value)}
                className="text-input"
            />
        </div>
    );
}

export default TextQuestion;