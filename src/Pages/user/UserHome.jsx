import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import Container from 'react-bootstrap/Container';

import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import "./user.css";
import { useNavigate } from 'react-router-dom';

const UserHome = () => {

  const navigate =useNavigate()
  const [cards, setCards] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:4000/cards');
        if (response.ok) {
          const data = await response.json();
          setCards(data);
        } else {
          console.error('Failed to fetch cards.');
        }
      } catch (error) {
        console.error('Error fetching cards:', error);
      }
    };
    fetchData();
  }, []);

  const handleLogout=()=>{
    toast.success("Logout Sucessfully..")
    navigate('/')
}




  return (
    <>
    
        <Navbar expand="lg" className="bg-info">
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
{/* header completed  */}

    {/* carousel start  */}

    {/* <div className="cards-container"  >
      <div className="horizontal-cards"  >
        {cards.map((card) => (
          <div key={card.id} className="card">
            <h3>{card.title}</h3>
            <p>{card.content}</p>
          </div>
        ))}
      </div>
      <div className="vertical-cards">
        {cards.map((card) => (
          <div key={card.id} className="card">
            <h3>{card.title}</h3>
            <p>{card.content}</p>
          </div>
        ))}
      </div>
    </div> */}
  <div className="cards-containers">
    {Array.from({ length: Math.ceil(cards.length / 6) }, (_, rowIndex) => (
    <div className="horizontal-cardss" key={rowIndex}>
      {cards.slice(rowIndex * 6, rowIndex * 6 + 6).map((card) => (
        <div key={card.id} className="cards">
          <h3>{card.title}</h3>
          <p>{card.content}</p>
        </div>
      ))}
    </div>
  ))}
</div>


    </>
  )
}

export default UserHome