import React, { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Context } from "../store/appContext";

export const Login = () => {
  const { store, actions } = useContext(Context);
  const [loginData, setLoginData] = useState({});
  const navigate = useNavigate();

  const handleChange = (event) => {
    setLoginData({ ...loginData, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    actions.login(loginData.email, loginData.password);
    na;
  };

  return (
    <>
      {store.token && store.token != "" && store.token != undefined ? (
        //"Ya estas registrado"
        navigate("/private")
      ) : (
        <div className="col-8 mx-auto">
          <h1 className="my-3">Bienvenido a la página de iniciar sesión</h1>
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
          <div className="text-center">
            <Link to="/singup" className="link">
              ¿Aún no estás registrado?
            </Link>
          </div>
        </div>
      )}
    </>
  );
};
