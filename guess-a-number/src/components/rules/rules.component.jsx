import React from "react";
import "./rules.style.scss";

export const Rules = () => {
  return (
    <div className="rules">
      <h1 className="rules-header">Rules</h1>
      <ul className="rules-content">
        <li>Guess a number between 1 - 100 in Stage 1.</li>
        <li>
          With each stage progression, the range will increase by 100 i.e in
          Stage 2 you will have to guess a number between 1 - 200, in Stage 3 a
          number between 1 - 300 and so on.
        </li>
        <li>
          The 4 colored boxes indicate your accuracy and can be used as a clue.
        </li>
        <li>
          If the difference of your input and answer is between 1 to 4 then it
          is indicated by "HOT", if it is between 5 - 15 then it is indicated by
          "WARM" and if it is beyond 15 then it is indicated by "COLD".
        </li>
        <li>
          And atlast, if you get frustrated and decide to quit then do see the
          answer in "console" of your browser. Sorry for making it this easy!!
        </li>
      </ul>
    </div>
  );
};
