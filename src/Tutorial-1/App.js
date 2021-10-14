import React from "react";
import Profile from "./Components/Profile/Profile";
import ClassProfile from "./Components/Profile/ClassProfile";

function App() {
  return (
    <div>
      <Profile name="Вася" registeredAt={new Date(2021, 10, 2)} />
      <ClassProfile name="Вася" registeredAt={new Date(1990, 3, 11)} />
    </div>
  );
}

export default App;
