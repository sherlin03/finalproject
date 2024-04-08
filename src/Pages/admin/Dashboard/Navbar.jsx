import { AppBar, Box, Toolbar, Typography } from '@mui/material'
import React, { useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify';

const Navbar = () => {

    const navigate = useNavigate();
    // let username = sessionStorage.getItem('username')
    useEffect(()=>{
        let username = sessionStorage.getItem('username')
        // console.log(username)
        if(username==='' || username===null){
            navigate('/')
        }
    },[])

    const handleLogout=()=>{
        toast.success("Logout Sucessfully..")
        navigate('/')
    }



  return (
    <div>
        <AppBar position='sticky'>
            <Toolbar className="justify-content-between ">
                <Box>
                    <Typography variant='danger' >Aaniya Fashions</Typography>
                </Box>
                <Box>
                    <Typography variant='danger' style={{textDecoration:"none" ,color:"white"}}>  </Typography>
                    {/* <Typography variant='danger'><Link to="/" style={{textDecoration:"none" ,color:"white"}} > Logout </Link></Typography> */}
                    <Typography variant='danger' onClick={handleLogout}> Logout</Typography>
                </Box>
            </Toolbar>
        </AppBar>
    </div>
  )
}

export default Navbar