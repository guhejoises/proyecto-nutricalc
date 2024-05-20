import React, { useState } from "react";
import "./AppSass.scss";
import { FaUser } from "react-icons/fa";
import { MdDriveFileRenameOutline } from "react-icons/md";

function App() {
  const [nombre, setNombre] = useState("");
  const [apelPate, setApelPate] = useState("");
  const [numberError, setNumberError] = useState(0);

  const cambiarNomrbe = (e) => {
    const value = e.target.value;
    const minValue = value.length > 3;
    const maxValue = value.length < 10;
    const onliLet = /^[a-zA-Z\s]*$/g.test(value);

    if (!onliLet) {
      setNumberError(1);
    } else if (!minValue) {
      setNumberError(2);
    } else if (!maxValue) {
      setNumberError(3);
    }

    if (onliLet === true && minValue && maxValue) {
      setNumberError(0);
    }

    setNombre(value);
  };

  const cambiarApelPate = (e) => {
    const value = e.target.value;
    const minValue = value.length > 3;
    const maxValue = value.length < 10;
    const onliLet = /^[a-zA-Z\s]*$/g.test(value);

    if (!onliLet) {
      setNumberError(1);
    } else if (!minValue) {
      setNumberError(2);
    } else if (!maxValue) {
      setNumberError(3);
    }

    if (onliLet === true && minValue && maxValue) {
      setNumberError(0);
    }

    setApelPate(value);
  };

  const guardarClick = () => {
    console.log("Este es mi estado local", nombre, apelPate);
  };

  return (
    <div className="mi_formulario_container">
      <div className="mi_formulario_header-image">
        <div className="mi_formulario_header">
          <h1 className="mi_formulario_titulo">
            Ingresar Datos del Paciente
            <FaUser className="mi_formulario_logo" size="100px" />
          </h1>
        </div>
      </div>
      <div className="mi_formulario_body">
        <div className="mi_formulario_form">
          <div className="mi_formulario_input-icon">
            <label className="mi_formulario_label">Nombre:</label>
            <MdDriveFileRenameOutline className="mi_formulario_icon" />
            <div>
              <input
                className="mi_formulario_input"
                id="nombre"
                type="nombre"
                value={nombre}
                onChange={cambiarNomrbe}
              ></input>
            </div>
          </div>
          <label className="mi_formulario_label">Apellido Paterno:</label>
          <div className="mi_formulario_input-icon">
            <MdDriveFileRenameOutline className="mi_formulario_icon" />
            <input
              className="mi_formulario_input"
              id="apelPate"
              type="apelPate"
              value={apelPate}
              onChange={cambiarApelPate}
            ></input>
            {numberError === 1 && (
              <label className="mi_formulario_error">
                No se aceptan caracteres numericos
              </label>
            )}
            {numberError === 2 && (
              <label className="mi_formulario_error">
                El nombre de ser de al menos tres caracteres
              </label>
            )}
            {numberError === 3 && (
              <label className="mi_formulario_error">
                El nombre no puede contener mas de 15 caracteres
              </label>
            )}
          </div>
          <button
            disabled={numberError > 0}
            className="mi_formulario_button"
            onClick={guardarClick}
          >
            Guardar
          </button>
        </div>
      </div>
      <div className="mi_formulario_footer">
        <div className="mi_formulario_group">
          <span className="mi_formulario_label">Este es el pie de pagina</span>
        </div>
      </div>
    </div>
  );
}

export default App;
