import React from "react";

function App() {
  const [state, setState] = React.useState([]);

  // const getUsers = () => {
  //   fetch("https://619d626a131c600017088ee6.mockapi.io/users").then((res) => {
  //     res.json().then((result) => {
  //       setState(result);
  //     });
  //   });
  // };

  async function getUsers() {
    try {
      let response = await fetch(
        "https://619d626a131c600017088ee6.mockapi.io/users"
      );
      let user = await response.json();
      setState(user);
    } catch (error) {
      alert(error);
    }
  }

  return (
    <div>
      <ul>
        {state.map((el) => (
          <tr>
            <td>{el.name}</td>
            <td>{el.phone}</td>
          </tr>
        ))}
      </ul>
      <button onClick={getUsers}>Получить список</button>
    </div>
  );
}

export default App;
