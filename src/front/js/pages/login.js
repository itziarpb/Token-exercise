import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import FormLogin from "../component/formLogin";

import { Context } from "../store/appContext";

export const Login = () => {
  const { store, actions } = useContext(Context);

  return (
    <div className="col-8 mx-auto">
      <h1 className="my-3">Bienvenido a la página de iniciar sesión</h1>
      <FormLogin />
    </div>
  );
};
