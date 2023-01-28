const shuffleArray = (array) =>
    [...array].sort(() => Math.random() - 0.5)

export const getQuizDetails = async () => {

    const res = [
        { question: "what are two largest city of pakistan", answer: "0000", correct_answer: "0000", option: [{ id: 1, name: "sukker",code :"00" }, { id: 2, name: "karachi",code:"00"  },{ id: 3, name: "peshawar",code:"00"  }], type: "checkbox" },


        { question: "what is your country", answer: "pakistan", correct_answer: "pakistan", option: [{ id: 1, name: "pakistan"  }, { id: 1, name: "india"  }], type: "radio" },
        { question: "what is computer", answer: "machine", correct_answer: "machine", option: [{ id: 1, name: "animal"  }, { id: 1, name: "machine"  }], type: "radio" }

        
    
    ]
    return res;
}