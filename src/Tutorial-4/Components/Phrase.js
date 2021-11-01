import React from "react";

function Phrase({ list = [] }) {
  return list.map((word, index) => (
    <div className="list">
      <div key={index} className="block">
        <h3>{word}</h3>
      </div>
    </div>
  ));
}

export default Phrase;
