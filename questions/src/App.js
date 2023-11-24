import React, { useState } from "react";
import { useContext } from "react";
import { QuizContext } from "./context/quiz";

export default function App() {

  const quizState = useContext(QuizContext);
  console.log(quizState);

  const [name, setName] = useState();

  return (
    <main className="w-full flex flex-col md:flex-row">
      <div className="hidden w-full h-screen bg-Primary sm:flex justify-center items-center">
        <img src={require('./img/bbking.png')} alt="BBKING QUIZ SHOW" className="w-1/2 md:w-2/3"/>
      </div>
      <div className="w-full h-screen bg-Secondary flex flex-col justify-center items-center gap-4">
        <div className="flex flex-col items-center">
          <h2 className="text-white font-Raleway font-normal">The Quiz Show</h2>
          <h1 className="text-white text-4xl font-Ralaway font-semibold">Blues Star Music</h1>
        </div>
        
        <div className="flex flex-col items-center">
          <input 
          type="text" 
          value={name} 
          onChange={(e) => setName(e)}
          placeholder="Type your name here" 
          className="border border-white bg-transparent p-2 mt-2 rounded-md w-[300px] text-center"
          />
          <button
          className="bg-white p-2 my-4 rounded-md w-[300px] text-center hover:bg-Primary duration-300 hover:scale-95 hover:text-white font-bold"
          >
            Press to Start
          </button>  
        </div>
      </div>

    </main>
  );
}

