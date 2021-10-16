import React from "react";
import "./Form.css";

function Form() {
  let email = "";
  let password = "";

  function onChange(event) {
    const { name, value } = event.target;
    if (name === "email") {
      email = value;
    }
    if (name === "password") {
      password = value;
    }
  }

  function handleSubmit(event) {
    event.preventDefault();

    if (email.trim() && password.trim()) {
      console.log(`E-Mail: ${email} Пароль: ${password}`);
      email = password = "";
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
        type="email"
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
