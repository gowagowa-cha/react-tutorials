import React from "react";
import "./Form.css";

function Form() {
  let email = "";
  let password = "";

  function onChange(event) {
    if (event.target.name === "email") {
      email = event.target.value;
    } else {
      password = event.target.value;
    }
  }

  function handleSubmit(event) {
    event.preventDefault();

    if (email.trim() && password.trim()) {
      console.log(`E-Mail: ${email} Пароль: ${password}`);
      event.target.reset();
    } else {
      alert("Заполните форму!");
    }
  }

  return (
    <form onSubmit={handleSubmit} className="form-style">
      <input
        name="email"
        onChange={onChange}
        type="text"
        placeholder="E-Mail"
      />
      <input
        name="password"
        onChange={onChange}
        type="password"
        placeholder="Пароль"
      />
      <button type="submit">Войти</button>
    </form>
  );
}

export default Form;
