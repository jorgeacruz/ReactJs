import { createContext, useReducer } from "react";
import questions from "../data/questions";

// Determines Stages of game
const STAGES = ["Start", "Playing", "End"]

const iniialState = {
    gameState:STAGES[0],
    questions
}
// change the State of game based of Switch
const quizReducer = (state, action) =>{
    console.log(state,action);

    switch(action.type){
        case "CHANGE_STATE":
            return state;

        default:
            return state;
    }
}
export const QuizContext = createContext();

export const QuizProvider = ({ children }) => {
    const value = useReducer(quizReducer, iniialState);

    return <QuizContext.Provider value={value}>{ children }</QuizContext.Provider>;

}