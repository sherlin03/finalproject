import { Box} from '@mui/material'
import React from 'react'
import './dashboard.css'


const Menu = () => {
  return (
    <div >
      <Box flex={1}  sx={{display:{xs:'none',sm:'block',backgroundColor:"black" ,height:"100vh",width:"320px",borderRadius:"5px"}}}>
      <Box sx={{ width: '100%'}} className='text-primary' >
      <div className="sidebar">
        <div style={{paddingTop:"50px",display:"flex"}}>
          <h4 >Admin</h4>
          <img src={require('../../../Img/user.png')} alt="User" style={{height:"40px",backgroundColor:"white",marginLeft:"180px",marginBottom:"5px"}}/>
        </div>
      <ul style={{paddingTop:"10px"}}>
        <li>Dashboard</li>
        <li>Analytics</li>
        <li className='coustom' style={{backgroundColor:"black"}}>Settings
          <ul>
            <li>Profile</li>
            <li>Change Password</li>
          </ul>
        </li>
   
      </ul>
    </div>
      
    </Box>
      </Box>
      
      </div>
  )
}

export default Menu