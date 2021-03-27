import React from "react";
import "./rook.css";
import black from "./br.svg";
import white from "./wr.svg";

const Rook = ({ blackRook, whiteRook }) => {
  return (
    <div className="rookPiece">
      <img src={blackRook ? black : whiteRook ? white : ""} />
    </div>
  );
};

export default Rook;
