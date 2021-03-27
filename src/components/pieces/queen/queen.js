import React from "react";
import "./queen.css";
import black from "./bq.svg";
import white from "./wq.svg";

const Queen = ({ blackQueen, whiteQueen }) => {
  return (
    <div className="queenPiece">
      <img src={blackQueen ? black : whiteQueen ? white : ""} />
    </div>
  );
};

export default Queen;
