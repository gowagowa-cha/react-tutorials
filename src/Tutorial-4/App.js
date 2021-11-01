import React from "react";
import "./App.css";
import EmptyBlock from "./Components/EmptyBlock";
import Phrase from "./Components/Phrase";

const adjectivesArr = [
  "абсолютный",
  "адский",
  "азартный",
  "активный",
  "ангельский",
  "астрономический",
  "баснословный",
  "безбожный",
  "безбрежный",
  "безвозвратный",
  "безграничный",
  "бездонный",
  "бездушный",
  "безжалостный",
  "замечательно",
  "замечательный",
  "записной",
  "запредельный",
  "заядлый",
  "звериный",
  "зверский",
  "зеленый",
  "злой",
  "злостный",
  "значительный",
  "неоспоримый",
  "неотразимый",
  "неоценимый",
  "непередаваемый",
];

const nounsArr = [
  "лгун",
  "день",
  "конь",
  "олень",
  "человек",
  "программист",
  "ребёнок",
  "конец",
  "город",
  "дурак",
];

function App() {
  const [state, setState] = React.useState([]);

  function randomPhrase() {
    let randomWord1 = adjectivesArr[randomBtn(adjectivesArr)];
    let randomWord2 = adjectivesArr[randomBtn(adjectivesArr)];
    let randomWord3 = nounsArr[randomBtn(nounsArr)];
    let sentence = `${randomWord1} ${randomWord2} ${randomWord3}`;
    setState([...state, sentence]);
  }

  function randomBtn(el) {
    return Math.floor(Math.random() * el.length);
  }

  function clearBtn() {
    setState("");
  }

  return (
    <div>
      <div className="wrapper">
        {!state.length ? <EmptyBlock /> : <Phrase list={state} />}
        <button onClick={randomPhrase} className="btn btn_generate">
          Сгенерировать
        </button>
        <button onClick={clearBtn} className="btn btn_clear">
          Очистить
        </button>
      </div>
    </div>
  );
}

export default App;
