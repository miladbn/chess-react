import React from "react";
import "./square.css";
import Bishops from "../../pieces/bishops/bishops";
import Pawn from "../../pieces/pawn/pawn";

const Square = ({
  black,
  white,
  squareNumber,
  hasPiece,
  rowNumber,
  blackRow,
  whiteRow,
  columnsNumber,
}) => {
  return (
    <div className={black ? "blackSquare" : white ? "whiteSquare" : ""}>
      <div className="squareName">
        {rowNumber}
        {columnsNumber}
      </div>
      {hasPiece ? (
        columnsNumber === 1 || columnsNumber === 6 ? (
          <Pawn blackPawn={blackRow} whitePawn={whiteRow} />
        ) : (
          ""
        )
      ) : (
        ""
      )}
    </div>
  );
};

export default Square;
