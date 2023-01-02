import React, { useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";
import { Link } from "react-router-dom";

export const Home = () => {
  const { store, actions } = useContext(Context);

  return (
    <div className="text-center mt-5">
      <h1>REGISTRO Y LOGIN</h1>
      <Link to="/singup">
        <span className="navbar-brand mb-0 h1">Registro</span>
      </Link>
    </div>
  );
};
