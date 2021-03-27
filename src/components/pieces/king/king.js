import React from "react";
import "./king.css";
import black from "./bk.svg";
import white from "./wk.svg";

const King = ({ blackKing, whiteKing }) => {
  return (
    <div className="kingPiece">
      <img src={blackKing ? black : whiteKing ? white : ""} />
    </div>
  );
};

export default King;
