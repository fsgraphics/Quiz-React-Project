import React, { useEffect, useReducer, useState } from "react";
import Answers from "../Answers";
import ProgressBar from "../ProgressBar";
import MiniPlayer from "../MiniPlayer";
import { useParams } from "react-router-dom";
import useQuestions from "../../hooks/useQuestions";
import _ from "lodash"


  const initialState = null;

  const reducer = (state, action) => {
    switch(action.type){
      case "questions": 
      action.value.forEach((question) => {
        question.option.forEach(option => {
          option.checked =false;
        })
      });
      return action.value;
      case "answer": 
        { const questions = _.cloneDeep(state);
        // eslint-disable-next-line no-undef
        questions[action.questionID].option[optionIndex].checked = action.value;

        return questions; }
      default: 
      return state;
    }

  }

const Quiz = () => {
  const {id} = useParams();
  const {loading, error, questions } = useQuestions(id);
  const [currentQuestion, setCurrentQuestion] = useState(0);


  const [qna, dispatch] = useReducer(reducer, initialState);

  useEffect(()=>{
      dispatch({
        type: "questions",
        value: questions
      })
  },[questions])

  function hendleAnawerChange (e, index) {
      dispatch({
        type:"answer",
        questionID: currentQuestion,
        optionIndex: index,
        value: e.target.checked,
      })
  }
 
  return (
    <>
    {loading && <div>Loading............</div>}
    {error && <div>There was an Error</div>}
    {!loading && !error && qna && qna.length > 0 (
    <>
      <h1>{qna[currentQuestion].title}</h1>
      <h4>Question can have multiple answers</h4>
      <Answers option = {qna[currentQuestion].options} hendleChange = {hendleAnawerChange} />
      <ProgressBar />
      <MiniPlayer />
      </>)}
    </>
  );
};

export default Quiz;
