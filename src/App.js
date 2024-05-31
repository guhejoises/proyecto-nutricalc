import React, { useState } from "react";
import "./AppSass.scss";
import { MdDriveFileRenameOutline } from "react-icons/md";
import ErrorEtiquetas from "./Componentes/ErrorEtiquetas";

function App() {
  const [nombre, setNombre] = useState("");
  const [apelPate, setApelPate] = useState("");
  const [apelMate, setApelMate] = useState("");
  const [correo, setCorreo] = useState("");
  const [numero, setNumero] = useState("");
  const [gender, setGender] = useState("");
  const [weight, setWeight] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState("");
  const [height, setHeight] = useState("");
  const [error, setError] = useState("");

  let activar = 0;
  const today = new Date();
  const maxDate = new Date(
    today.getFullYear() - 100,
    today.getMonth(),
    today.getDate()
  )
    .toISOString()
    .split("T")[0];
  const minDate = new Date(
    today.getFullYear() - 18,
    today.getMonth(),
    today.getDate()
  )
    .toISOString()
    .split("T")[0];
  const startDate = minDate;

  const cambiarNomrbe = (e) => {
    const value = e.target.value;
    setNombre(value);
    activar = 1;
    console.log(activar);
  };

  const cambiarApelPate = (e) => {
    const value = e.target.value;
    setApelPate(value);
  };

  const cambiarApelMate = (e) => {
    const value = e.target.value;
    setApelMate(value);
  };

  const cambiarCorreo = (e) => {
    const value = e.target.value;
    setCorreo(value);

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (correo && !emailPattern.test(correo)) {
      setError("Correo electrónico no válido");
    } else {
      setError("");
    }
  };

  const cambiarNumero = (e) => {
    const value = e.target.value;
    setNumero(value);
  };

  const cambiarGenero = (e) => {
    setGender(e.target.value);
  };

  const cambiarFecha = (event) => {
    setDateOfBirth(event.target.value);
  };

  const cambiarWeight = (event) => {
    const value = event.target.value;
    const validWeight = /^\d{0,3}(\.\d{0,2})?$/.test(value);

    if (validWeight) {
      setWeight(value);
    }
  };

  const cambiarHeight = (event) => {
    const value = event.target.value;
    const validHeight = /^\d{0,3}(\.\d{0,2})?$/.test(value);

    if (validHeight) {
      setHeight(value);
    }
  };

  const guardarClick = () => {
    console.log("Este es mi estado local", nombre, apelPate);
  };

  return (
    <div className="mi_formulario_container">
      <div className="mi_formulario_header-image">
        <h1 className="mi_formulario_titulo">Ingresar Datos del Paciente</h1>
      </div>
      <div className="mi_formulario_body">
        <div className="mi_formulario_form">
          <div className="table-container">
            <table className="responsive-table">
              <tr className="mi_formulario_tabla_row">
                <th className="mi_formulario_tabla_hurdle">
                  <div className="mi_formulario_input-icon">
                    <label className="mi_formulario_label">Nombre:</label>
                    <MdDriveFileRenameOutline className="mi_formulario_icon" />
                    <div>
                      <input
                        className="mi_formulario_input"
                        id="nombre"
                        type="text"
                        value={nombre}
                        onChange={cambiarNomrbe}
                        placeholder="Ingrese el nombre"
                        autoComplete="off"
                        maxLength={19}
                      ></input>
                      <ErrorEtiquetas nombre={nombre} activar={activar} />
                    </div>
                  </div>
                </th>
                <th className="mi_formulario_tabla_hurdle">
                  <div className="mi_formulario_input-icon">
                    <label className="mi_formulario_label">
                      Apellido Paterno:
                    </label>
                    <input
                      className="mi_formulario_input"
                      id="apelPate"
                      type="text"
                      value={apelPate}
                      onChange={cambiarApelPate}
                      placeholder="Ingrese el Apellido Paterno"
                      autoComplete="off"
                      maxLength={19}
                    ></input>
                    <ErrorEtiquetas nombre={apelPate} />
                  </div>
                </th>
                <th className="mi_formulario_tabla_hurdle">
                  <div className="mi_formulario_input-icon">
                    <label className="mi_formulario_label">
                      Apellido Materno:
                    </label>
                    <input
                      className="mi_formulario_input"
                      id="apelMate"
                      type="text"
                      value={apelMate}
                      onChange={cambiarApelMate}
                      placeholder="Ingrese el Apellido Materno"
                      autoComplete="off"
                      maxLength={19}
                    ></input>
                    <ErrorEtiquetas nombre={apelMate} />
                  </div>
                </th>
              </tr>
              <tr>
                <th className="mi_formulario_tabla_hurdle">
                  <div className="mi_formulario_input-icon">
                    <label className="mi_formulario_label">
                      Correo Electronico:
                    </label>
                    <div>
                      <input
                        className="mi_formulario_input"
                        id="correo_electronico"
                        type="email"
                        value={correo}
                        onChange={cambiarCorreo}
                        placeholder="ejemplo@mail.com"
                        autoComplete="off"
                        maxLength={25}
                      ></input>
                      {error && (
                        <label className="mi_formulario_error2">{error}</label>
                      )}
                    </div>
                  </div>
                </th>
                <th className="mi_formulario_tabla_hurdle">
                  <div className="mi_formulario_input-icon">
                    <label className="mi_formulario_label">
                      Número de telefono:
                    </label>
                    <input
                      className="mi_formulario_input"
                      id="numero_telefono"
                      type="number"
                      inputMode="numeric"
                      pattern="[0-9]*"
                      value={numero}
                      onChange={cambiarNumero}
                      placeholder="Ingrese el número de telefono"
                      autoComplete="off"
                      maxLength={10}
                    ></input>
                    {numero.length > 10 && (
                      <label className="mi_formulario_error">
                        Error numero de telefono no valido
                      </label>
                    )}
                  </div>
                </th>
                <th className="mi_formulario_tabla_hurdle">
                  <div className="mi_formulario_input-icon">
                    <label htmlFor="gender" className="mi_formulario_label">
                      Sexo:
                    </label>
                    <select
                      id="genero"
                      value={gender}
                      onChange={cambiarGenero}
                      className="mi_formulario_dropdown"
                    >
                      <option value="" disabled>
                        Seleccione su género
                      </option>
                      <option value="hombre">Hombre</option>
                      <option value="mujer">Mujer</option>
                      <option value="indefinido">No binario</option>
                    </select>
                  </div>
                </th>
              </tr>
              <tr>
                <th className="mi_formulario_tabla_hurdle">
                  <div>
                    <label
                      htmlFor="dateOfBirth"
                      className="mi_formulario_label"
                    >
                      Fecha de Nacimiento:
                    </label>
                    <input
                      type="date"
                      id="dateOfBirth"
                      value={dateOfBirth || startDate} // Establecer la fecha de inicio
                      onChange={cambiarFecha}
                      min={maxDate} // Establecer la fecha mínima
                      max={minDate} // Establecer la fecha máxima
                      className="mi_formulario_input"
                    />
                  </div>
                </th>
                <th className="mi_formulario_tabla_hurdle">
                  <div>
                    <label htmlFor="weight" className="mi_formulario_label">
                      Peso (kg):
                    </label>
                    <input
                      type="text"
                      id="weight"
                      value={weight}
                      onChange={cambiarWeight}
                      placeholder="00.00"
                      pattern="\d{0,3}(\.\d{0,2})?"
                      inputMode="decimal"
                      className="mi_formulario_input"
                    />
                  </div>
                </th>
                <th className="mi_formulario_tabla_hurdle">
                  <div>
                    <label htmlFor="height" className="mi_formulario_label">
                      Altura (cm):
                    </label>
                    <input
                      type="text"
                      id="height"
                      value={height}
                      onChange={cambiarHeight}
                      placeholder="00.00"
                      pattern="\d{0,3}(\.\d{0,2})?"
                      inputMode="decimal"
                      className="mi_formulario_input"
                    />
                  </div>
                </th>
              </tr>
            </table>
          </div>
        </div>
        <div className="mi_formulario_espacio1">
          <button
            disabled={
              (apelPate.length <= 0 ||
                apelMate.length <= 0 ||
                nombre.length <= 0 ||
                correo.length <= 0 ||
                numero.length !== 10 ||
                error.length > 0) &&
              true
            }
            className="mi_formulario_button"
            onClick={guardarClick}
          >
            Guardar
          </button>
          <button className="mi_formulario_button" onClick={guardarClick}>
            Cancelar
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
