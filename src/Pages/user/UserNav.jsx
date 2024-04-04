
import { toast } from 'react-toastify';
import Container from 'react-bootstrap/Container';

import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import "./user.css";
import { useNavigate } from 'react-router-dom';
// import { useEffect } from 'react';

const UserNav = () => {

    const navigate =useNavigate()

    // useEffect(()=>{
    //     let email = sessionStorage.getItem('email')
    //     // console.log(email)
    //     if(email==='' || email===null){
    //         navigate('/')
    //     }
    // },[])


    const handleLogout=()=>{
        toast.success("Logout Sucessfully..")
        navigate('/')
    }

  return (
    <>
    <Navbar expand="lg" className="bg-info" position='sticky'>
      <Container fluid>
        <Navbar.Brand href="#">Navbar scroll</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll" className="d-flex">
          <Nav
            className="ms-auto my-2 my-lg-0 "
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="#action1">Home</Nav.Link>
            <Nav.Link href="#action2">About</Nav.Link>
            <Nav.Link href="#" disabled style={{paddingRight:"10px"}}>
              Link
            </Nav.Link>

            <NavDropdown title="Account" id="navbarScrollingDropdown" sx={{paddingRight:"20px"}}>
              <NavDropdown.Item >Profile</NavDropdown.Item>
              <NavDropdown.Item  onClick={handleLogout}>
                Logout
              </NavDropdown.Item>
              
            </NavDropdown>
            
          </Nav>
          
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </>
  )
}

export default UserNav