import React, { useEffect, useReducer, useState } from "react";
import Answers from "../Answers";
import ProgressBar from "../ProgressBar";
import MiniPlayer from "../MiniPlayer";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import useQuestions from "../../hooks/useQuestions";
import _ from "lodash";
import { useAuth } from "./../../contexts/AuthContext";
import { getDatabase, set, ref } from "firebase/database";

const initialState = null;

const reducer = (state, action) => {
  switch (action.type) {
    case "questions":
      action.value.forEach((question) => {
        question.options.forEach((option) => {
          option.checked = false;
        });
      });

      return action.value;
    case "answer":
      // eslint-disable-next-line no-case-declarations
      const questions = _.cloneDeep(state);
      questions[action.questionID].options[action.optionIndex].checked =
        action.value;
      return questions;

    default:
      return state;
  }
};

const Quiz = () => {
  const { id } = useParams();
  const { loading, error, questions } = useQuestions(id);

  const [currentQuestion, setCurrentQuestion] = useState(0);
  // console.log(questions);
  const [qna, dispatch] = useReducer(reducer, initialState);
  const { currentUser } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const { state } = location;
  const { videoTitle } = state;

  useEffect(() => {
    dispatch({
      type: "questions",
      value: questions,
    });
  }, [questions]);

  function hendleAnawerChange(e, index) {
    dispatch({
      type: "answer",
      questionID: currentQuestion,
      optionIndex: index,
      value: e.target.checked,
    });
  }
  // handle when user clicks the next button to get the next question

  function nextQuestion() {
    if (currentQuestion + 1 < questions.length) {
      setCurrentQuestion((prevCurrent) => prevCurrent + 1);
    }
  }
  // handle when user clicks the next button to get the Previous question

  function prevQuestion() {
    if (currentQuestion >= 1 && currentQuestion <= questions.length) {
      setCurrentQuestion((prevCurrent) => prevCurrent - 1);
    }
  }
  // Submit Quiz
  async function submit() {
    const { uid } = currentUser;
    const db = getDatabase();
    const resultRef = ref(db, `result/${uid}`);
    await set(resultRef, {
      [id]: qna,
    });

    navigate({ pathname: `/result/${id}` }, { state: { qna } });
  }
  // calculated percentage of progress
  const percentage =
    questions.length > 0 ? ((currentQuestion + 1) / questions.length) * 100 : 0;
  return (
    <>
      {loading && <div>Loading............</div>}
      {error && <div>There was an Error from Quiz page!</div>}
      {!loading && !error && qna && qna.length > 0 && (
        <>
          <h1>{qna[currentQuestion].title}</h1>
          <h4>Question can have multiple answers</h4>
          <Answers
            input={true}
            options={qna[currentQuestion].options}
            hendleChange={hendleAnawerChange}
          />
          <ProgressBar
            next={nextQuestion}
            prev={prevQuestion}
            progress={percentage}
            submit={submit}
          />
          <MiniPlayer id={id} title={videoTitle} />
        </>
      )}
    </>
  );
};

export default Quiz;
