import React from "react";
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

function NavbarComponent() {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#">Publicações</Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
            <Navbar.Text>
      
              Created by: <a>Fernanda R. Miranda</a>

            </Navbar.Text>
          </Navbar.Collapse>
        </Container>
      </Navbar>


    </>

  );
};

export default NavbarComponent;