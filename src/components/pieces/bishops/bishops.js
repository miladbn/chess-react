import React from "react";
import "./bishops.css";
import black from "./bb.svg";
import white from "./wb.svg";

const Bishops = ({ blackBishops, whitebishops }) => {
  return (
    <div className="bishopsPieces">
      <img src={blackBishops ? black : whitebishops ? white : ""} />
    </div>
  );
};

export default Bishops;
