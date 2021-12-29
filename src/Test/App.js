import React from "react";
import "./App.css";

function App() {
  const [users, setUsers] = React.useState([]);
  const [nameValue, setNameValue] = React.useState();
  const [emailValue, setEmailValue] = React.useState();

  async function getUsers() {
    try {
      let res = await fetch(
        "https://619d626a131c600017088ee6.mockapi.io/users"
      );
      let user = await res.json();
      setUsers(user);
    } catch (error) {
      alert(error);
    }
  }

  function postUsers() {
    const data = {
      name: nameValue,
      email: emailValue,
    };
    fetch("https://619d626a131c600017088ee6.mockapi.io/users", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
  }
  return (
    <div className="users">
      <ul>
        {users.map((obj) => (
          <li>{obj.name}</li>
        ))}
      </ul>
      <button onClick={getUsers}>Получить</button>

      <br />
      <hr />
      <br />
      <div>
        <input
          value={nameValue}
          onChange={(e) => setNameValue(e.target.value)}
          placeholder="name"
          type="text"
        />
        <input
          value={emailValue}
          onChange={(e) => setEmailValue(e.target.value)}
          placeholder="email"
          type="text"
        />
        <button onClick={postUsers}>Отправить</button>
      </div>
    </div>
  );
}

export default App;
