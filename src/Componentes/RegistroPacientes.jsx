import React, { useState } from "react";
import "./../AppSass.scss";
import { MdDriveFileRenameOutline } from "react-icons/md";
import ErrorEtiquetas from "./ErrorEtiquetas";
import axios from "axios";
import Menu from "./Menu"
import { IconButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

function RegistroPacientes() {
  const [nombre, setNombre] = useState("");
  const [apelPate, setApelPate] = useState("");
  const [apelMate, setApelMate] = useState("");
  const [correo, setCorreo] = useState("");
  const [numero, setNumero] = useState("");
  const [gender, setGender] = useState("");
  const [weight, setWeight] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState("");
  const [height, setHeight] = useState("");
  const [circunferencia_brazo, setCircunferencia_brazo] = useState("");
  const [pliegue_triceps, setPliegue_triceps] = useState("");
  const [actiFisica, setActiFisica] = useState("");
  const [acidoUrico, setAcidoUrico] = useState("");
  const [albumina, setAlbumina] = useState("");
  const [colesterol, setColesterol] = useState("");
  const [globulina, setGlobulina] = useState("");
  const [hematocrito, setHematocrito] = useState("");
  const [proteinas, setProteinas] = useState("");
  const [tension, setTension] = useState("");
  const [triglicerido, setTriglicerido] = useState("");
  const [error, setError] = useState("");
  const [open, setOpen] = useState(false);

  const handleOpenMenu = () => {
    setOpen(!open);
  };

  const enviarDatos = async (e) => {
    const payload = {
      nombre,
      apelPate,
      apelMate,
      correo,
      numero,
      gender,
      weight,
      dateOfBirth,
      height,
      circunferencia_brazo,
      pliegue_triceps,
      actiFisica,
      acidoUrico,
      albumina,
      colesterol,
      globulina,
      hematocrito,
      proteinas,
      tension,
      triglicerido,
    };

    try {
      const response = await axios.post(
        "http://localhost:5000/api/guardar_datos",
        payload,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };

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

  const cambiarCircunferencia_brazo = (event) => {
    const value = event.target.value;
    const validCircunferencia_brazo = /^\d{0,3}(\.\d{0,2})?$/.test(value);

    if (validCircunferencia_brazo) {
      setCircunferencia_brazo(value);
    }
  };

  const cambiarPliegue_triceps = (event) => {
    const value = event.target.value;
    const validPliegue_triceps = /^\d{0,3}(\.\d{0,2})?$/.test(value);

    if (validPliegue_triceps) {
      setPliegue_triceps(value);
    }
  };

  const cambiarActiFisica = (e) => {
    setActiFisica(e.target.value);
  };

  const cambiarAcidoUrico = (event) => {
    const value = event.target.value;
    const validAcidoUrico = /^\d{0,2}(\.\d{0,2})?$/.test(value);

    if (validAcidoUrico) {
      setAcidoUrico(value);
    }
  };

  const cambiarAlbumina = (event) => {
    const value = event.target.value;
    const validAlbumina = /^\d{0,2}(\.\d{0,2})?$/.test(value);

    if (validAlbumina) {
      setAlbumina(value);
    }
  };

  const cambiarColesterol = (event) => {
    const value = event.target.value;
    const validColesterol = /^\d{0,2}(\.\d{0,2})?$/.test(value);

    if (validColesterol) {
      setColesterol(value);
    }
  };

  const cambiarGlobulina = (event) => {
    const value = event.target.value;
    const validGlobulina = /^\d{0,2}(\.\d{0,2})?$/.test(value);

    if (validGlobulina) {
      setGlobulina(value);
    }
  };

  const cambiarHematocrito = (event) => {
    const value = event.target.value;
    const validHematocrito = /^\d{0,2}(\.\d{0,2})?$/.test(value);

    if (validHematocrito) {
      setHematocrito(value);
    }
  };

  const cambiarProteinas = (event) => {
    const value = event.target.value;
    const validProteinas = /^\d{0,2}(\.\d{0,2})?$/.test(value);

    if (validProteinas) {
      setProteinas(value);
    }
  };

  const cambiarTension = (event) => {
    const value = event.target.value;
    const validTension = /^\d{0,2}(\.\d{0,2})?$/.test(value);

    if (validTension) {
      setTension(value);
    }
  };

  const cambiarTriglicerido = (event) => {
    const value = event.target.value;
    const validTriglicerido = /^\d{0,2}(\.\d{0,2})?$/.test(value);

    if (validTriglicerido) {
      setTriglicerido(value);
    }
  };

  const guardarClick = () => {
    console.log("Este es mi estado local", nombre, apelPate);
    enviarDatos();
  };

  const isFormValid = () => {
    return (
      nombre.length > 0 &&
      apelPate.length > 0 &&
      apelMate.length > 0 &&
      correo.length > 0 &&
      numero.length === 10 &&
      gender.length > 0 &&
      weight.length > 0 &&
      dateOfBirth.length > 0 &&
      height.length > 0 &&
      actiFisica.length > 0 &&
      error.length === 0
    );
  };

  return (
    <div className="mi_formulario_container">
      <IconButton onClick={handleOpenMenu}>
        <MenuIcon />
      </IconButton>
      <Menu open={open} onClose={() => setOpen(false)} />
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
              <tr className="mi_formulario_tabla_row">
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
                        <label className="mi_formulario_error">{error}</label>
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
                        Seleccione el género
                      </option>
                      <option value="hombre">Hombre</option>
                      <option value="mujer">Mujer</option>
                      <option value="indefinido">No binario</option>
                    </select>
                  </div>
                </th>
              </tr>
              <tr className="mi_formulario_tabla_row">
                <th className="mi_formulario_tabla_hurdle">
                  <div className="mi_formulario_input-icon">
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
                  <div className="mi_formulario_input-icon">
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
                  <div className="mi_formulario_input-icon">
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
              <tr className="mi_formulario_tabla_row">
                <th className="mi_formulario_tabla_hurdle">
                  <div className="mi_formulario_input-icon">
                    <label htmlFor="height" className="mi_formulario_label">
                      Circunferencia del brazo (cm):
                    </label>
                    <input
                      type="text"
                      id="circunferencia_brazo"
                      value={circunferencia_brazo}
                      onChange={cambiarCircunferencia_brazo}
                      placeholder="00.00"
                      pattern="\d{0,3}(\.\d{0,2})?"
                      inputMode="decimal"
                      className="mi_formulario_input"
                    />
                  </div>
                </th>
                <th className="mi_formulario_tabla_hurdle">
                  <div className="mi_formulario_input-icon">
                    <label htmlFor="height" className="mi_formulario_label">
                      Pliegue cutáneo del tríceps (cm):
                    </label>
                    <input
                      type="text"
                      id="pliegue_triceps"
                      value={pliegue_triceps}
                      onChange={cambiarPliegue_triceps}
                      placeholder="00.00"
                      pattern="\d{0,3}(\.\d{0,2})?"
                      inputMode="decimal"
                      className="mi_formulario_input"
                    />
                  </div>
                </th>
                <th className="mi_formulario_tabla_hurdle">
                  <div className="mi_formulario_input-icon">
                    <label htmlFor="gender" className="mi_formulario_label">
                      Nivel de actividad física:
                    </label>
                    <select
                      id="actiFisica"
                      value={actiFisica}
                      onChange={cambiarActiFisica}
                      className="mi_formulario_dropdown"
                    >
                      <option value="" disabled>
                        Actividad física
                      </option>
                      <option value="bajo">Bajo</option>
                      <option value="medio">Medio</option>
                      <option value="alto">Alto</option>
                    </select>
                  </div>
                </th>
              </tr>
              <tr className="mi_formulario_tabla_row">
                <th className="mi_formulario_tabla_hurdle">
                  <div className="mi_formulario_input-icon">
                    <label htmlFor="height" className="mi_formulario_label">
                      Ácido Úrico (mg/dL):
                    </label>
                    <input
                      type="text"
                      id="acidoUrico"
                      value={acidoUrico}
                      onChange={cambiarAcidoUrico}
                      placeholder="00.00"
                      pattern="\d{0,2}(\.\d{0,2})?"
                      inputMode="decimal"
                      className="mi_formulario_input"
                    />
                  </div>
                </th>
                <th className="mi_formulario_tabla_hurdle">
                  <div className="mi_formulario_input-icon">
                    <label htmlFor="height" className="mi_formulario_label">
                      Albumina (g/dL):
                    </label>
                    <input
                      type="text"
                      id="albumina"
                      value={albumina}
                      onChange={cambiarAlbumina}
                      placeholder="00.00"
                      pattern="\d{0,2}(\.\d{0,2})?"
                      inputMode="decimal"
                      className="mi_formulario_input"
                    />
                  </div>
                </th>
                <th className="mi_formulario_tabla_hurdle">
                  <div className="mi_formulario_input-icon">
                    <label htmlFor="height" className="mi_formulario_label">
                      Colesterol (mg/dL):
                    </label>
                    <input
                      type="text"
                      id="colesterol"
                      value={colesterol}
                      onChange={cambiarColesterol}
                      placeholder="00.00"
                      pattern="\d{0,2}(\.\d{0,2})?"
                      inputMode="decimal"
                      className="mi_formulario_input"
                    />
                  </div>
                </th>
              </tr>
              <tr className="mi_formulario_tabla_row">
                <th className="mi_formulario_tabla_hurdle">
                  <div className="mi_formulario_input-icon">
                    <label htmlFor="height" className="mi_formulario_label">
                      Globulina (g/dL):
                    </label>
                    <input
                      type="text"
                      id="globulina"
                      value={globulina}
                      onChange={cambiarGlobulina}
                      placeholder="00.00"
                      pattern="\d{0,2}(\.\d{0,2})?"
                      inputMode="decimal"
                      className="mi_formulario_input"
                    />
                  </div>
                </th>
                <th className="mi_formulario_tabla_hurdle">
                  <div className="mi_formulario_input-icon">
                    <label htmlFor="height" className="mi_formulario_label">
                      Hematocrito (%):
                    </label>
                    <input
                      type="text"
                      id="hematocrito"
                      value={hematocrito}
                      onChange={cambiarHematocrito}
                      placeholder="00.00"
                      pattern="\d{0,2}(\.\d{0,2})?"
                      inputMode="decimal"
                      className="mi_formulario_input"
                    />
                  </div>
                </th>
                <th className="mi_formulario_tabla_hurdle">
                  <div className="mi_formulario_input-icon">
                    <label htmlFor="height" className="mi_formulario_label">
                      Proteínas Totales (g/dL):
                    </label>
                    <input
                      type="text"
                      id="proteinas"
                      value={proteinas}
                      onChange={cambiarProteinas}
                      placeholder="00.00"
                      pattern="\d{0,2}(\.\d{0,2})?"
                      inputMode="decimal"
                      className="mi_formulario_input"
                    />
                  </div>
                </th>
              </tr>
              <tr className="mi_formulario_tabla_row">
                <th className="mi_formulario_tabla_hurdle">
                  <div className="mi_formulario_input-icon">
                    <label htmlFor="height" className="mi_formulario_label">
                      Tensión Diastólica (mmHg):
                    </label>
                    <input
                      type="text"
                      id="tension"
                      value={tension}
                      onChange={cambiarTension}
                      placeholder="00.00"
                      pattern="\d{0,2}(\.\d{0,2})?"
                      inputMode="decimal"
                      className="mi_formulario_input"
                    />
                  </div>
                </th>
                <th className="mi_formulario_tabla_hurdle">
                  <div className="mi_formulario_input-icon">
                    <label htmlFor="height" className="mi_formulario_label">
                      Triglicéridos (mg/dL):
                    </label>
                    <input
                      type="text"
                      id="triglicerido"
                      value={triglicerido}
                      onChange={cambiarTriglicerido}
                      placeholder="00.00"
                      pattern="\d{0,2}(\.\d{0,2})?"
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
            disabled={!isFormValid()}
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

export default RegistroPacientes;
