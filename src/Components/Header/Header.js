import React from 'react'
import {Container,Navbar,Nav,Button} from 'react-bootstrap'
import './Header.css'
function Header() {
  return (
    <div className='header'>
     <Navbar className='navbar' expand="lg">
      <Container container>
        <Navbar.Brand href="#" className='n1'>EDISONVALLEY</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="m-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll>
            <Nav.Link href="#action1" className='n1'>Home</Nav.Link>
            <Nav.Link href="#action2" className='n1'>About</Nav.Link>
            <Nav.Link href="#action2" className='n1'>Features</Nav.Link>
            <Nav.Link href="#action2" className='n1'>Team</Nav.Link>
          </Nav>
         
            <Button variant="outline-light">Search</Button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    
    </div>
  )
}

export default Header
