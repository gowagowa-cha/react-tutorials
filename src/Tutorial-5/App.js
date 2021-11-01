import React from "react";
import "./style.scss";

import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";

function App() {
  const [state, setState] = React.useState([]);
  const [valueName, setValueName] = React.useState("");
  const [valueComent, setValueComent] = React.useState("");
  const [valueEmail, setValueEmail] = React.useState("");

  function BtnClick() {
    let obj = {
      fullName: valueName,
      avatarUrl: "https://source.unsplash.com/50x50/?people&1",
      email: valueEmail,
      createdAt: Date(),
      text: valueComent,
    };
    if (valueName && valueEmail && valueComent) {
      setState([...state, obj]);
    } else {
      alert("Заполните форму");
    }

    setValueName("");
    setValueComent("");
    setValueEmail("");
  }

  React.useEffect(() => {
    localStorage.setItem("comments", JSON.stringify(valueComent));
  }, [valueComent]);

	React.useEffect(() => {
		setValueComent(JSON.parse(localStorage.getItem('comments')))
 }, [])

  return (
    <React.Fragment>
      <div className="app">
        <span className="app-span">Отзывы:</span>
        <List
          sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
        >
          {state.map((el, index) => (
            <ListItem key={index} alignItems="flex-start">
              <ListItemAvatar>
                <Avatar alt="Remy Sharp" src={el.avatarUrl} />
              </ListItemAvatar>
              <ListItemText
                primary={el.fullName}
                secondary={
                  <React.Fragment>
                    <Typography
                      sx={{ display: "inline" }}
                      component="span"
                      variant="body2"
                      color="text.primary"
                    ></Typography>
                    {el.text}
                  </React.Fragment>
                }
              />
            </ListItem>
          ))}
        </List>
      </div>
      <div className="app">
        <span className="app-span">Обратная связь:</span>
        <form onSubmit={(e)=> e.preventDefault()}>
          <input
            type="text"
            placeholder="Имя"
            value={valueName}
            onChange={(e) => setValueName(e.target.value)}
          />
          <input
            type="text"
            placeholder="Почта"
            value={valueEmail}
            onChange={(e) => setValueEmail(e.target.value)}
          />
          <input
            className="last-input"
            type="text"
            placeholder="Текст..."
            value={valueComent}
            onChange={(e) => setValueComent(e.target.value)}
          />
          <button onClick={BtnClick}>Отправить</button>
        </form>
      </div>
    </React.Fragment>
  );
}

export default App;
