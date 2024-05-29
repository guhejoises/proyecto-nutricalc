import React, { useState } from "react";
import "./AppSass.scss";
import { FaUser } from "react-icons/fa";
import { MdDriveFileRenameOutline } from "react-icons/md";
import ErrorEtiquetas from "./Componentes/ErrorEtiquetas";

function App() {
  const [nombre, setNombre] = useState("");
  const [apelPate, setApelPate] = useState("");
  const [apelMate, setApelMate] = useState("");
  let activar = 0;

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
          <div className="mi_formulario_tabla">
            <table className="mi_formulario_tabla_contenedor">
              <tr className="mi_formulario_tabla_row">
                <th className="mi_formulario_tabla_hurdle">
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
                        placeholder="Ingrese el nombre"
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
                    <MdDriveFileRenameOutline className="mi_formulario_icon" />
                    <input
                      className="mi_formulario_input"
                      id="apelPate"
                      type="apelPate"
                      value={apelPate}
                      onChange={cambiarApelPate}
                      placeholder="Ingrese el Apellido Paterno"
                    ></input>
                    <ErrorEtiquetas nombre={apelPate} />
                  </div>
                </th>

                <th className="mi_formulario_tabla_hurdle">
                  <div className="mi_formulario_input-icon">
                    <label className="mi_formulario_label">
                      Apellido Paterno:
                    </label>
                    <MdDriveFileRenameOutline className="mi_formulario_icon" />
                    <input
                      className="mi_formulario_input"
                      id="apelPate"
                      type="apelPate"
                      value={apelPate}
                      onChange={cambiarApelPate}
                      placeholder="Ingrese el Apellido Materno"
                    ></input>
                    <ErrorEtiquetas nombre={apelPate} />
                  </div>
                </th>
              </tr>
              <tr></tr>
            </table>
          </div>
        </div>
        <div className="mi_formulario_espacio1">
          <button
            disabled={(apelPate.length <= 0 || nombre.length <= 0) && true}
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
