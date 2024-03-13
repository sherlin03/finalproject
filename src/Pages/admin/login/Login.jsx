import React from 'react'
import '../../../App.css'
import { Container, Form, FormControl } from 'react-bootstrap'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <div  >
      <Container>
      
      <div  className="text-center ">
      <h1 style={{marginTop:"100px",opacity:"0.9"}}><b>Aaniya</b> </h1>  
      <Card className="text-center"  style={{marginLeft:"300px",width:"500px"}}>
        <Form>
      <Card.Body>
        <Card.Title><h3>- Login -</h3></Card.Title>
        <div class="input-group mb-3">
          <FormControl type="text" class="form-control" placeholder="Email"/>
        </div>
        <div class="input-group mb-3">
          <FormControl type="password" class="form-control" placeholder="Password"/>
        </div>


        <Button variant="primary">Login</Button>
        <p style={{paddingTop:"10px"}}>-OR-</p>
        <p class="mb-1" style={{color:"blue"}}>
         Forgot Password 
      </p>
        <p class="mb-1" style={{color:"blue"}}>
        <Link to="/register" style={{textDecoration:"none"}}> Register </Link>
      </p>
      </Card.Body>
      </Form>
    </Card>
    </div>
      </Container>
      </div>
  )
}

export default Login