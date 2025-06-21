import React from "react";
import logo from "../assets/logo.png";
export default function Footer() {
  return (
    <>
      <div className="container-fluid bg-black text-white footer mt-4 ">
        <div className="row text-center ">
          <div className="col-md-12">
            <h3 className="text-start p-3">
              Preguntas? Llamá al (598) 405-4811
            </h3>
          </div>
          <div className="col-md-3 ">
            <div className="col-md-12 ">
              <a href="">Preguntas frecuentes</a>
            </div>
            <div className="col-md-12">
              <a href="">Cuenta</a>
            </div>
            <div className="col-md-12">
              <a href="">Relaciones con inversionistas</a>
            </div>
            <div className="col-md-12">
              {" "}
              <a href="">Formas de ver</a>
            </div>
          </div>
          <div className="col-md-3">
            <div className="col-md-12">
              <a href="">Privacidad</a>
            </div>
            <div className="col-md-12">
              <a href="">Informacion corporativa</a>
            </div>
            <div className="col-md-12">
              <a href="">Prueba de velocidad</a>
            </div>
            <div className="col-md-12">
              <a href="">Solo en Hackflix</a>
            </div>
          </div>
          <div className="col-md-3">
            <div className="col-md-12">
              <a href="">Centro de ayuda</a>
            </div>
            <div className="col-md-12">
              <a href="">Prensa</a>
            </div>
            <div className="col-md-12">
              <a href="">Empleo</a>
            </div>
            <div className="col-md-12">
              <a href="">Terminos de uso</a>
            </div>
          </div>
          <div className="col-md-3">
            <div className="col-md-12">
              <a href="">Preferencias de cookies</a>
            </div>
            <div className="col-md-12">
              <a href="">Contactanos</a>
            </div>
            <div className="col-md-12">
              <a href="">Avisos legales</a>
            </div>
          </div>
        </div>
        <div className="text-center mt-3">
          <img src={logo} alt="" width={"160px"} />
        </div>
        <div className="row ">
          <div className="col-12 text-center copyright p-2">
            Todos los derechos reservados ©
          </div>
        </div>
      </div>
    </>
  );
}
