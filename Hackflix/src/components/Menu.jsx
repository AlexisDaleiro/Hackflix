import React, { useState } from "react";
import logo from "../assets/logo.png";
import { FaUser } from "react-icons/fa";
import "bootstrap/dist/css/bootstrap.min.css";
import { Modal, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

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
            <div className="col-6">
              <Link className="navbar-brand" to="/">
                <img src={logo} alt="" width={"160px"} className="" />
              </Link>
            </div>

            <div className="col-6 justify-content-end d-flex p-0 ">
              <button onClick={handleLoginClick} className="texto-solo me-2">
                {isLoggedIn ? "Cerrar Sesión" : "Iniciar Sesión"}{" "}
                <FaUser className="mb-2" />
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
