import React, { useState } from 'react';
import { UseAuthContext } from '../../contexts/authUserContext'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import styles from './Profile.module.css';

const Profile = () => {

  const { storageAllUser: storageUser } = UseAuthContext();

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const logOutUser = () => {
    localStorage.removeItem('isLoggedUser');
    location.href = '/';
    setShow(false);
  }

  return (
    <section className={styles.messageProfile}>
      <p>Usuário está logado.</p>
      {storageUser.map(item => (
        <article>
          <h4>{item.name}</h4>
          <p style={{marginBottom: '10px'}}>{item.email}</p>
        </article>
      ))}

      <Button variant="danger" onClick={handleShow}>
        Sair
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Olá, {storageUser.map(item => <h4>{item.email}</h4>)}</Modal.Title>
        </Modal.Header>
        <Modal.Body>Tem certeza que deseja sair da conta?</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancelar
          </Button>
          <Button variant="danger" onClick={logOutUser}>
            Sair da conta
          </Button>
        </Modal.Footer>
      </Modal>


    </section>
  )
}

export default Profile;