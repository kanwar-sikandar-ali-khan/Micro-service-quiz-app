import React, { useState } from 'react';

const QuestionCard = ({ question, options, callback }) => {

    let [selectedAns, setSelectedAns] = useState("");

    const handleSelection = (ev) => {
        setSelectedAns(ev.target.value);
    }

    return (
        <div className="question-container">
            <div className="question">
                <h4>{question}</h4>
            </div>

            <form onSubmit={(e) => callback(e, selectedAns)}
                className="question-form"
            >
                {
                    options.map((opt, ind) => {
                        return (
                            <div key={ind}>
                                <label className="radio">
                                    <input
                                        type="radio"
                                        name="opt"
                                        required
                                        value={opt}
                                        checked={selectedAns === opt}
                                        onChange={handleSelection}
                                        className="mx-2"
                                    />
                                    {opt}
                                </label>
                            </div>
                        )
                    })
                }
                <input type="submit" className="submit" />
            </form>
        </div>
    )
}

export default QuestionCard;