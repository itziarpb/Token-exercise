import React, { useState } from "react";

const FormLogin = () => {
  const [loginData, setLoginData] = useState({});

  const handleChange = (event) => {
    console.log(event.target.value);
    setLoginData({ ...loginData, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(loginData);

    fetch(process.env.BACKEND_URL + "/api/login", {
      method: "POST",
      body: JSON.stringify({
        email: loginData.email,
        password: loginData.password,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    }).then((resp) => resp.json());
    if (!resp.ok) throw Error("There was a problem in the login request");

    if (resp.status === 401) {
      throw "Invalid credentials";
    } else if (resp.status === 400) {
      throw "Invalid email or password format";
    }
    const data = resp.json();
    // save your token in the localStorage
    //also you should set your user into the store using the setStore function
    localStorage.setItem("jwt-token", data.token);

    return data;
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-3 row">
        <label for="inputEmail" className="col-sm-2 col-form-label">
          Email
        </label>
        <div className="col-sm-10">
          <input
            type="text"
            className="form-control"
            id="inputEmail"
            name="email"
            onChange={handleChange}
          />
        </div>
      </div>
      <div className="mb-3 row">
        <label for="inputPassword" className="col-sm-2 col-form-label">
          Contraseña
        </label>
        <div className="col-sm-10">
          <input
            type="password"
            className="form-control"
            id="inputPassword"
            name="password"
            onChange={handleChange}
          />
        </div>
      </div>
      <button type="submit" className="btn btn-success">
        Iniciar sesión
      </button>
    </form>
  );
};
export default FormLogin;
