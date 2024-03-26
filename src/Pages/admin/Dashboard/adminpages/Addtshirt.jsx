import axios from 'axios'
import React, { useState } from 'react'
import { Button, Card, Container, Form } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'

const Addtshirt = () => {
        const navigate=useNavigate()
        const [productname,setProductname] = useState("");
        const [price,setPrice]=useState("");
        const [offer,setOffer]=useState("");
        const [discription,setDiscription] =useState("");
        const [image, setImage] = useState(null);

        const handleSubmit = async (e) => {
          e.preventDefault();

          



        }

  return (
    <>
      <div className=''>
        <Container >
          <div style={{ paddingTop: "50px"}}>

            <Card style={{ width: '40rem', margin: '0 auto' }}>
              <Card.Body>
                <Card.Title className="text-center"><h2>Add T-Shirt</h2></Card.Title>
                <Form>
                  <Form.Group className="mb-3 text-left" >
                    <Form.Label style={{fontWeight:"bold"}}>Product Name</Form.Label>
                    <Form.Control 
                      type="text" 
                      placeholder="Enter Name"
                      onChange={(e)=>setProductname(e.target.value)} 
                    />
                  </Form.Group>

                  <Form.Group className="mb-3 text-left" >
                    <Form.Label style={{fontWeight:"bold"}}>Price</Form.Label>
                    <Form.Control 
                      type="text" 
                      placeholder="Enter Price" 
                      onChange={(e)=>setPrice(e.target.value)}
                    />
                  </Form.Group>

                  <Form.Group className="mb-3 text-left" >
                    <Form.Label style={{fontWeight:"bold"}}>Offer</Form.Label>
                    <Form.Control 
                      type="text" 
                      placeholder="Enter Offer"
                      onChange={(e)=>setOffer(e.target.value)}
                    />
                  </Form.Group>

                  <Form.Group className="mb-3 text-left" >
                    <Form.Label style={{fontWeight:"bold"}}>Discription</Form.Label>
                    <Form.Control 
                      type="tel" 
                      placeholder="Enter Discription" 
                      onChange={(e)=>setDiscription(e.target.value)}
                    />
                  </Form.Group>

                  <Form.Group className="mb-3 text-left">
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

export default Addtshirt