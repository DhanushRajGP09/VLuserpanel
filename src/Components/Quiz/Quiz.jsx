import React from "react";
import "./Quiz.css";
import closequiz from "../../Assets/closequiz.png";

export default function Quiz() {
  return (
    <div className="QuizMain-div">
      <div className="QuizHeaderMain">
        Module Test 2<img src={closequiz}></img>
      </div>
    </div>
  );
}
