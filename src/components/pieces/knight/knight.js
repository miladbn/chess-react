import React from "react";
import "./knight.css";
import black from "./bn.svg";
import white from "./wn.svg";

const Knight = ({ blackKnight, whiteKnight }) => {
  return (
    <div className="knightPiece">
      <img src={blackKnight ? black : whiteKnight ? white : ""} />
    </div>
  );
};

export default Knight;
