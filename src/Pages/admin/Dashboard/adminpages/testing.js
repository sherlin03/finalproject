import axios from 'axios';
import React, { useState } from 'react';
import { Card, Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useNavigate } from 'react-router-dom';
import '../pages/login.css';

const Addstudent = () => {

    const [name, setName] = useState('');
    const [standard, setStandard] = useState('');
    const [address, setAddress] = useState('');
    const [mobile, setMobile] = useState('');
    const [image, setImage] = useState(null); // Add state for the image
    const navigate = useNavigate();

    const handleSubmit = () => {
      const formData = new FormData();
      formData.append('name', name);
      formData.append('standard', standard);
      formData.append('address', address);
      formData.append('mobile', mobile);
      formData.append('image', image); // Append the image to the form data

      axios.post("http://localhost:4000/users", formData)
      .then((res) => {
        navigate('/list');
        console.log(res?.data);    
      })
      .catch((err) => {
        console.log(err);
      });
    }

  return (
    <>
      <div className='addstudent'>
        <Container >
          <div style={{ paddingTop: "50px", marginLeft: "300px", marginRight: "300px" }}>

            <Card style={{ width: '18rem', margin: '0 auto' }}>
              <Card.Body>
                <Card.Title className="text-center">Student Registration</Card.Title>
                <Form>
                  <Form.Group className="mb-3 text-center" >
                    <Form.Label style={{fontWeight:"bold"}}>Name</Form.Label>
                    <Form.Control 
                      type="text" 
                      placeholder="Enter Name"
                      onChange={(e)=>setName(e.target.value)} 
                    />
                  </Form.Group>

                  <Form.Group className="mb-3 text-center" >
                    <Form.Label style={{fontWeight:"bold"}}>Standard</Form.Label>
                    <Form.Control 
                      type="text" 
                      placeholder="Enter Standard" 
                      onChange={(e)=>setStandard(e.target.value)}
                    />
                  </Form.Group>

                  <Form.Group className="mb-3 text-center" >
                    <Form.Label style={{fontWeight:"bold"}}>City</Form.Label>
                    <Form.Control 
                      type="text" 
                      placeholder="Enter City"
                      onChange={(e)=>setAddress(e.target.value)}
                    />
                  </Form.Group>

                  <Form.Group className="mb-3 text-center" >
                    <Form.Label style={{fontWeight:"bold"}}>Mobile</Form.Label>
                    <Form.Control 
                      type="tel" 
                      placeholder="Enter Mobile" 
                      onChange={(e)=>setMobile(e.target.value)}
                    />
                  </Form.Group>

                  <Form.Group className="mb-3 text-center">
                    <Form.Label style={{fontWeight:"bold"}}>Upload Image</Form.Label>
                    <Form.Control 
                      type="file" 
                      accept="image/*" 
                      onChange={(e) => setImage(e.target.files[0])} 
                    />
                  </Form.Group>

                  <Button style={{marginLeft:"210px"}} variant="primary" onClick={handleSubmit}>
                    Submit
                  </Button>
                </Form>
              </Card.Body>
            </Card>
          </div>
        </Container>
      </div>
    </>
  )
}

export default Addstudent;
