import React, { useState } from "react";
import logo from "../assets/logo.png";
import { FaUser } from "react-icons/fa";
import "bootstrap/dist/css/bootstrap.min.css";
import { Modal, Button } from "react-bootstrap";
import Submenu from "./submenu";

const Navbar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const handleLoginClick = () => {
    setShowModal(true);
  };

  const handleConfirmLogin = () => {
    setIsLoggedIn(!isLoggedIn);
    setShowModal(false);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <>
      <nav className="py-3">
        <div className="container-fluid ">
          <div className="row ">
            <div className="col-4">
              <div className="navbar-brand ">
                <img src={logo} alt="" width={"160px"} className="" />
              </div>
            </div>
            <div className="col-3 d-flex justify-content-between responsivo-menu ">
              <Submenu
                name={"Peliculas"}
                opcion={"Thriller"}
                opcion1={"Comedia"}
                opcion2={"Suspenso"}
                opcion3={"Drama"}
              />
              <Submenu
                name={"Series"}
                opcion={"Documentales"}
                opcion1={"Veridica"}
                opcion2={"Infantiles"}
                opcion3={"Anime"}
              />
              <Submenu
                name={"Programas de TV"}
                opcion={"Paises"}
                opcion1={"Futbol"}
                opcion2={"Critica"}
                opcion3={"Actualidad"}
              />
            </div>
            <div className="col-5 justify-content-end d-flex p-0 ">
              <button onClick={handleLoginClick} className="texto-solo me-2">
                {isLoggedIn ? "Cerrar Sesión" : "Iniciar Sesión"} <FaUser />
              </button>
            </div>
          </div>
        </div>
      </nav>
      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>Confirmar acción</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {isLoggedIn ? "Adios! que tengas buen dia!" : "Bienvenido usuario!"}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={handleConfirmLogin}>
            Cerrar
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default Navbar;
