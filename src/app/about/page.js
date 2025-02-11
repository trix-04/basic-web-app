"use client";
import { useState } from "react";

function About() {
  const [hasPets, setHasPets] = useState(null);
  const [petCount, setPetCount] = useState(0);

  const handleAnswer = (answer) => {
    setHasPets(answer);
    if (!answer) {
      setPetCount(0);
    }
  };

  const incrementPets = () => {
    setPetCount((prevCount) => prevCount + 1); //implemented a button counter using a quiz
  };

  return (
    <div className="about-container">
      <h1 className="about-title">About My Webpage</h1>
      <p className="about-description">
        This page displays the use event handling through buttons.
      </p>

      {/*User Quiz: Do you have pets?*/}
      <h2 className="question-title">Mini quiz: Do you have any pets?</h2>
      <div className="button-group">
        <button className="answer-button" onClick={() => handleAnswer(true)}>
          Yes
        </button>
        <button className="answer-button" onClick={() => handleAnswer(false)}>
          No
        </button>
      </div>

      {/*Follow-up question if answer is "Yes". Button only appears if answer is "Yes"*/} 
      {hasPets && (
        <div className="follow-up">
          <h3 className="follow-up-title">If so, how many?</h3>
          <p className="pet-count">{petCount}</p>
          <button className="increment-button" onClick={incrementPets}>
            Add Pet
          </button>
        </div>
      )}
    </div>
  );
}

export default About;

  