import React, {useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const Navbar = () => {
  const { store, actions } = useContext(Context);

  const handleClick = () => {
    actions.logout();
  };
  return (
    <nav className="navbar navbar-light bg-light">
      <div className="container">
        <Link to="/" className="link">
          <span className="navbar-brand mb-0 h1">AUTHENTICATION</span>
        </Link>
        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            {store.token != null && (
              <>
                <li className="nav-item">
                  <Link to="/" onClick={handleClick} className="nav-link">
                    Cerrar sesion
                  </Link>
                </li>
              </>
            )}
            {store.token == null && (
              <li className="nav-item">
                <Link to="/login" className="nav-link">
                  Iniciar sesión
                </Link>
              </li>
            )}
          </ul>
      </div>
    </nav>
  );
};
