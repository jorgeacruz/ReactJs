import { useContext } from "react";
import Welcome from "./components/Welcome";

import Question from './components/Question';
import { QuizContext } from "./context/quiz";

export default function App() {

  const [quizState, dispatch] = useContext(QuizContext);

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
        {/** Renderização condicional */}

        {quizState.gameStage === "Start" && <Welcome/>}
        {quizState.gameStage === "Playing" && <Question/>}
        
      </div>

    </main>
  );
}

