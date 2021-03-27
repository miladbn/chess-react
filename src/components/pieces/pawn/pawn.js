import React from "react";
import "./pawn.css";
import black from "./bp.svg";
import white from "./wp.svg";

const Pawn = ({ blackPawn, whitePawn }) => {
  return (
    <div className="pawnPiece">
      <img src={blackPawn ? black : whitePawn ? white : ""} />
    </div>
  );
};

export default Pawn;
