import { useState } from "react";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

// Make sure to bind modal to your appElement (https://reactcommunity.org/react-modal/accessibility/)


function App() {
  const [modalIsOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <div className="Container">
      <button onClick={openModal}>Open Modal</button>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Example Modal"
        overlayClassName="modal-overlay"
        className="modal-content"
      >
        <h2>Hello - I am a modal!</h2>
        <hr />
        <p>
          We maintain that accessibility is a key component of any modern web
          application. As such, we have created this modal in such a way that it
          fulfills the accessibility requirements of the modern web. We seek to
          keep the focus on accessibility while providing a functional, capable
          modal component for general use.
        </p>
        <button onClick={closeModal}>Close</button>
      </Modal>
    </div>
  );
}

export default App;