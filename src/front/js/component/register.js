import React, { useState } from "react";

const Register = () => {
  const [formData, setFormData] = useState({});

  const handleChange = (event) => {
    console.log(event.target.value);
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    fetch(process.env.BACKEND_URL + "/api/users", {
      method: "POST",
      body: JSON.stringify(formData),
      headers: {
        "Content-Type": "application/json",
      },
      mode: "cors",
    })
      .then((res) => res.json())
      .catch((error) => console.error("Error:", error))
      .then((response) => console.log("Success:", response));
  };
};

return (
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
);
export default Register;
