import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import Register from "../component/register";

import { Context } from "../store/appContext";

export const Singup = () => {
  const { store, actions } = useContext(Context);

  return (
    <div className="col-8 mx-auto">
      <h1 className="my-3">Bienvenido a la página de registro</h1>
      <Register />
    </div>
  );
};
