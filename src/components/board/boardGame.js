import React from "react";
import "./boardGame.css";
import Row from "./row/row";

const BoardGame = () => {
  const rowNumber = 8;
  return (
    <div className="container">
      {[...Array(rowNumber)].map((e, i) => (
        <>
          <div className="row">
            <Row
              even={i % 2 == 0}
              odd={i % 2 == 1}
              hasPiece={i == 0 || i == 1 || i == 6 || i == 7}
              blackRow={i == 0 || i == 1}
              columnsNumber={i}
              whiteRow={i == 6 || i == 7}
            />
          </div>
        </>
      ))}
    </div>
  );
};

export default BoardGame;
