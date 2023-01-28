import React, { useState, useEffect } from 'react';
import {
    IconButton,
    Badge,
    Button,
    Checkbox,
    TextareaAutosize,
    Radio,
} from "@material-ui/core";
import CircleCheckedFilled from "@material-ui/icons/CheckCircle";
import CircleUnchecked from "@material-ui/icons/RadioButtonUnchecked";

const QuestionCard = ({ question, options, callback, type }) => {

    let [selectedAns, setSelectedAns] = useState([]);
    let [localOptions, setLocalOptions] = useState([])
    // console.log(options)

    const handleSelection = (ev, id, code) => {
        // console.log(ev.target.value)
        let obj = {
            id: id,
            name: ev.target.value,
            code: code
        }
        var productIndex = selectedAns.findIndex(x => x.id == id);
        // console.log(productIndex)
        if (productIndex == -1) {
            setSelectedAns([...selectedAns, selectedAns[productIndex] = obj])
        } else {
            const arr = selectedAns
            arr.splice(productIndex, 1)
            // console.log(arr)
            setSelectedAns(arr)
        }

    }

    const handleRadio = (ev) => {
        setSelectedAns(ev.target.value)
    }
    useEffect(() => {
        setLocalOptions(options)
    }, [options])

    // console.log("selectedAns", selectedAns)

    return (
        <div className="question-container">
            <div className="question">
                <h4>{question}</h4>
            </div>

            <form onSubmit={(e) => callback(e, selectedAns, type, setSelectedAns)}
                className="question-form"
            >
                {type == "radio" ?
                    localOptions.map((opt, ind) => {
                        return (
                            <div key={ind}>
                                <label className="radio">
                                    {/* {console.log(selectedAns === opt.name)
                                    }     */}
                                                                    <input
                                        type="radio" 
                                        name="opt"
                                        required
                                        value={opt.name}
                                        checked={selectedAns === opt.name}
                                        onChange={handleRadio}
                                        className="mx-2"
                                  


                                    />
                                    {opt.name}
                                </label>
                            </div>
                        )
                    }) : type == "checkbox" ? localOptions.map((opt, ind) => {
                        return (
                            <div key={ind}>
                                <label className="radio">
                                    <input
                                        type="checkbox"
                                        name={opt.name}
                                        value={opt.name}
                                        onChange={(ev) => handleSelection(ev, opt.id, opt.code)}
                                        className="mx-2"
                                    />
                                    {opt.name}
                                </label>
                            </div>
                        )
                    }) : ""
                }
                <input type="submit" className="submit" />
            </form>
        </div>
    )
}

export default QuestionCard;