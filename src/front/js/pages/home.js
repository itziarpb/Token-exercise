import React from "react";

import "../../styles/home.css";
import { Link } from "react-router-dom";

export const Home = () => {

  return (
    <div className="container text-center my-5">
      <h1 className="col-2 title mx-auto">HOME</h1>
      <div className="row justify-content-around my-5">
        <div className="col-12 col-sm-6">
          <button type="button" class="btn btn-success">
            <Link to="/singup" className="linkbutton">
              <span className="navbar-brand mb-0 h1">Registro</span>
            </Link>
          </button>
        </div>
        <div className="col-12 col-sm-6">
          <button type="button" class="btn btn-success text-center">
            <Link to="/login" className="linkbutton">
              <span className="navbar-brand mb-0 h1">Iniciar sesión</span>
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
};
