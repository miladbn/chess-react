import React from "react";
import Square from "../square/square";

function Row({ even, odd, blackRow, hasPiece, whiteRow, columnsNumber }) {
  const squareNumber = 8;
  const rowLetter = ["A", "B", "C", "D", "E", "F", "G", "H"];
  return (
    <>
      {even
        ? rowLetter.map((e, i) => (
            <>
              <Square
                black={i % 2 == 1}
                white={i % 2 == 0}
                key={i}
                squareNumber={i + 1}
                hasPiece={hasPiece}
                rowNumber={e}
                blackRow={blackRow}
                whiteRow={whiteRow}
                columnsNumber={columnsNumber}
              />
            </>
          ))
        : odd
        ? rowLetter.map((e, i) => (
            <>
              <Square
                black={i % 2 == 0}
                white={i % 2 == 1}
                key={i}
                squareNumber={i + 1}
                hasPiece={hasPiece}
                rowNumber={e}
                blackRow={blackRow}
                whiteRow={whiteRow}
                columnsNumber={columnsNumber}
              />
            </>
          ))
        : ""}
    </>
  );
}

export default Row;
