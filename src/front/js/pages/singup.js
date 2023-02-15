import React, { useState, useContext } from "react";
import {useNavigate } from "react-router-dom";


export const Singup = () => {
  const [formData, setFormData] = useState({});
  const navigate = useNavigate();

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    fetch(process.env.BACKEND_URL + "/api/user", {
      method: "POST",
      body: JSON.stringify(formData),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .catch((error) => console.error("Error:", error))
      .then((response) => console.log("Success:", response));
    navigate("/login");
  };

  return (
    <div className="col-8 mx-auto">
      <h1 className="my-3">Bienvenido a la página de registro</h1>
      <form onSubmit={handleSubmit}>
      <div className="mb-3 row">
        <label for="inputName" className="col-sm-2 col-form-label">
          Usuario
        </label>
        <div className="col-sm-10">
          <input
            type="text"
            className="form-control"
            id="inputName"
            name="username"
            onChange={handleChange}
          />
        </div>
      </div>
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
        Registrarse
      </button>
    </form>
    </div>
  );
};
