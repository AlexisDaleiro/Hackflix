import React, { useState } from "react";
import logo from "../assets/logo.png";
import { FaUser } from "react-icons/fa";
import "bootstrap/dist/css/bootstrap.min.css";
import { Modal, Button } from "react-bootstrap";

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
      <nav className="navbar">
        <div className="container-fluid">
          <div className="navbar-brand">
            <img src={logo} alt="" width={"160px"} />
          </div>
          <button onClick={handleLoginClick} className="texto-solo">
            {isLoggedIn ? "Cerrar Sesión" : "Iniciar Sesión"} <FaUser />
          </button>
        </div>
      </nav>

      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>Confirmar acción</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {isLoggedIn ? "Adios! que tengas buen dia" : "Bienvenido usuario!"}
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
