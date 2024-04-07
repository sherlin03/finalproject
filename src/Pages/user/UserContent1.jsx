import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import { useNavigate } from 'react-router-dom';
import "./user.css";
import Button from 'react-bootstrap/Button';


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





    </div>
  )
}

export default UserContent1