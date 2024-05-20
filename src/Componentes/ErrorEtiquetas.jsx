import "./../AppSass.scss";

function ErrorEtiquetas(params) {
  return (
    <div>
      {(/^[a-zA-Z\s]*$/g.test(params.nombre) === false || params.activar >= 1) && (
        <label className="mi_formulario_error">
          No se aceptan caracteres numericos
          <br />
          <hr />
        </label>
      )}
      {(params.nombre.length <= 3 && params.activar >= 1) && (
        <label className="mi_formulario_error">
          El nombre de ser de al menos tres caracteres
          <br />
          <hr />
        </label>
      )}
      {(params.nombre.length >= 15 || params.activar > 0) && (
        <label className="mi_formulario_error">
          El nombre no puede contener mas de 15 caracteres
          <br />
          <hr />
        </label>
      )}
    </div>
  );
}

export default ErrorEtiquetas;
