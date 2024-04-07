import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import { useNavigate } from 'react-router-dom';
import "./user.css";
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';


const UserContent1 = () => {
  const navigate =useNavigate()



  return (
    <div>
       <Carousel>
        <Carousel.Item interval={1900}>
          <img src={require('../../Img/41.jpg')} height={500} alt="" className='slidepic' />
          <Carousel.Caption>
            <div className='slidetext'>
              <h3>Best Ice Cream Shop</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
              <Button variant="outline-light" onClick={()=>navigate('/about')} >Read More ..</Button>
            </div>

          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={1000}>
          <img src={require('../../Img/41.jpg')} className='slidepic' height={500} alt="" />
          <Carousel.Caption>
            <div className='slidetext'>
              <h3>Visit Our Shop</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
              <Button variant="outline-light" onClick={()=>navigate('/contact')}>Read More ..</Button>
            </div>
          </Carousel.Caption>
        </Carousel.Item >
        <Carousel.Item interval={1900}>
          <img src={require('../../Img/41.jpg')} className='slidepic' height={500} alt="" />
          <Carousel.Caption>
            <div className='slidetext'>
              <h3>Delicious Ice Creams</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
              <Button variant="outline-light" onClick={()=>navigate('/combopack')}>Read More ..</Button>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>


    <div className='text-center' style={{marginTop:"20px"}}>
      <h1 style={{textDecoration:"underline"}}>About</h1>
    </div>

    <div >
      <Container>
      <Row style={{marginTop:"50px"}}>
        <Col sm={6}>
          <h4>Welcome to Our Store!</h4>
          <p style={{textAlign:"justify"}}>At Aaniya Fashions , we're passionate about fashion and helping our customers find the perfect attire for any occasion. Whether you're searching for the latest trends in dresses, the most comfortable pair of shoes, the perfect-fitting jeans, or the most elegant suits, we've got you covered.</p>
          <h4>Our Mission</h4>
          <p style={{textAlign:"justify"}}>Our mission is simple: to provide our customers with high-quality clothing that combines style, comfort, and affordability. We believe that everyone deserves to feel confident and stylish in what they wear, and we strive to offer a diverse range of products to suit every taste and preference.</p>
          <h4>Quality and Selection</h4>
          <p style={{textAlign:"justify"}}>
          We understand that our customers have unique preferences and style sensibilities. That's why we carefully curate our collection to offer a wide variety of styles, sizes, and designs. Whether you're looking for casual everyday wear, formal attire for special occasions, or something in between, you'll find it in our store.
          </p>
        </Col>


        <Col sm={6}>
          <img src={require('../../Img/istockphoto-473046068-612x612.jpg')} style={{width:"600px",borderRadius:"10px"}} />
        </Col>
      </Row>
      </Container>
    </div>




    </div>
  )
}

export default UserContent1