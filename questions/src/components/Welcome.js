import React, { useState, useContext } from "react";
import { QuizContext } from "../context/quiz";



export default function Welcome(){

    const [name, setName] = useState();
    const [quizState, dispatch] = useContext(QuizContext);
    

    return(
        <div className="flex flex-col items-center">
            {/** 
          <input 
          type="text" 
          value={name} 
          onChange={(e) => setName(e)}
          placeholder="Type your name here" 
          className="border border-white bg-transparent p-2 mt-2 rounded-md w-[300px] text-center"
          />
          */}
          <button
          onClick={() => dispatch({ type:"CHANGE_STATE" })}
          className="bg-white p-2 my-4 rounded-md w-[300px] text-center hover:bg-Primary duration-300 hover:scale-95 hover:text-white font-bold"
          >
            Press to Start
          </button>  
        </div>
    )
}