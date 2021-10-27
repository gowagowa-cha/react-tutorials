import React from "react";
import Ghost from "../assets/img/ghost.png";

function EmptyBlock() {
  return (
    <div className="block empty-block">
      <img src={Ghost} width="32px" height="32px" alt="Ghost" />
      <h2>Список фраз пустой</h2>
      <p>
        Чтобы в этом списке появилась фраза, тебе необходимо нажать на кнопку
        “Сгенерировать”
      </p>
    </div>
  );
}

export default EmptyBlock;
