import React, { useState } from 'react'
import { Button, Card, Container, Form } from 'react-bootstrap'


const Addtshirt = () => {
       
        const [formData,setFormData]=useState({
          productname:'',
          price :'',
          offer:'',
          discription:'',
          image:null
        })
      const handleInputChange=(e)=>{
        setFormData({
          ...formData ,
          [e.target.name] : e.target.value,
        })
      }
      const handleImageChange=(e)=>{
        setFormData({
          ...formData,
          image: e.target.files[0]
        })
      }

      const convertImageToBase64 = (file) => {
        return new Promise((resolve, reject) => {
          const reader = new FileReader();
          reader.readAsDataURL(file);
          reader.onload = () => resolve(reader.result);
          reader.onerror = (error) => reject(error);
        });
      };

      const handleSubmit=async(e)=>{
        e.preventDefault()

        const base64Image= await convertImageToBase64(formData.image)

        const userData = {
          productname: formData.productname,
          price: formData.price,
          password: formData.password,
          image: base64Image,
        };
    

        
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
                      name="productname"
                      id="productname"
                      value={formData.productname} 
                      onChange={handleInputChange} 
                    />
                  </Form.Group>

                  <Form.Group className="mb-3 text-left" >
                    <Form.Label style={{fontWeight:"bold"}}>Price</Form.Label>
                    <Form.Control 
                      type="text" 
                      placeholder="Enter Price" 
                      name="price"
                      id="price"
                      value={formData.price}
                      onChange={handleInputChange}
                    />
                  </Form.Group>

                  <Form.Group className="mb-3 text-left" >
                    <Form.Label style={{fontWeight:"bold"}}>Offer</Form.Label>
                    <Form.Control 
                      type="text" 
                      placeholder="Enter Offer"
                      name="offer"
                      id="offer"
                      value={formData.offer}
                      onChange={handleInputChange}
                    />
                  </Form.Group>

                  <Form.Group className="mb-3 text-left" >
                    <Form.Label style={{fontWeight:"bold"}}>Discription</Form.Label>
                    <Form.Control 
                      type="tel" 
                      placeholder="Enter Discription"
                      name="discription" 
                      id="discription" 
                      value={formData.discription} 
                      onChange={handleInputChange}
                    />
                  </Form.Group>

                  <Form.Group className="mb-3 text-left">
                    <Form.Label style={{fontWeight:"bold"}}>Upload Image</Form.Label>
                    <Form.Control 
                      type="file" 
                      accept="image/*" 
                      name='image'
                      id='image'
                      onChange={handleImageChange} 
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