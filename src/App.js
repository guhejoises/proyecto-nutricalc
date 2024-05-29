import React, { useState } from "react";
import "./AppSass.scss";
import { MdDriveFileRenameOutline } from "react-icons/md";
import ErrorEtiquetas from "./Componentes/ErrorEtiquetas";

function App() {
  const [nombre, setNombre] = useState("");
  const [apelPate, setApelPate] = useState("");
  const [apelMate, setApelMate] = useState("");
  const [correo, setCorreo] = useState("");
  const [error, setError] = useState('');
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
    setApelMate(value);
  };

  const cambiarCorreo = (e) => {
    const value = e.target.value;
    setCorreo(value);

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (correo && !emailPattern.test(correo)) {
      setError('Correo electrónico no válido');
    } else {
      setError('');
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
                    <MdDriveFileRenameOutline className="mi_formulario_icon" />
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
                    <MdDriveFileRenameOutline className="mi_formulario_icon" />
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
                    <MdDriveFileRenameOutline className="mi_formulario_icon" />
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
                      {error && <label className="mi_formulario_error">{error}</label>}
                    </div>
                  </div>
                </th>

                <th className="mi_formulario_tabla_hurdle">
                  <div className="mi_formulario_input-icon">
                    <label className="mi_formulario_label">
                      Número de telefono:
                    </label>
                    <MdDriveFileRenameOutline className="mi_formulario_icon" />
                    <input
                      className="mi_formulario_input"
                      id="numero_telefono"
                      type="text"
                      inputMode="numeric"
                      pattern="[0-9]*"
                      value={apelPate}
                      onChange={cambiarApelPate}
                      placeholder="Ingrese el número de telefono"
                      autoComplete="off"
                      maxLength={10}
                    ></input>
                  </div>
                </th>

                <th className="mi_formulario_tabla_hurdle">
                  <div className="mi_formulario_input-icon">
                    <label className="mi_formulario_label">
                      Apellido Materno:
                    </label>
                    <MdDriveFileRenameOutline className="mi_formulario_icon" />
                    <input
                      className="mi_formulario_input"
                      id="apelMate"
                      type="apelMate"
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
                    <MdDriveFileRenameOutline className="mi_formulario_icon" />
                    <input
                      className="mi_formulario_input"
                      id="apelPate"
                      type="apelPate"
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
                    <MdDriveFileRenameOutline className="mi_formulario_icon" />
                    <input
                      className="mi_formulario_input"
                      id="apelMate"
                      type="apelMate"
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
            </table>
          </div>
        </div>
        <div className="mi_formulario_espacio1">
          <button
            disabled={
              (apelPate.length <= 0 ||
                apelMate.length <= 0 ||
                nombre.length <= 0) &&
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
