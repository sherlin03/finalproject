import { AppBar, Box, Toolbar, Typography } from '@mui/material'
import React from 'react'

const Navbar = () => {
  return (
    <div>
        <AppBar>
            <Toolbar className="justify-content-between ">
                <Box>
                    <img src={require('../../../Img/aaniya.png')} alt=""  /> 
                    <Typography variant='danger'>Aaniya</Typography>
                </Box>
                <Box>
                    <Typography variant='danger'>Aaniya</Typography>
                </Box>
            </Toolbar>
        </AppBar>
    </div>
  )
}

export default Navbar