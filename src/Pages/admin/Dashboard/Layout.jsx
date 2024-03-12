import React from 'react'
import Navbar from './Navbar'
import Menu from './Menu'
import Content from './Content'
import { Container, Stack } from '@mui/material'

const Layout = () => {
  return (
    <div>
        <Navbar/>
        <Container maxWidth="xl" >
             <Stack direction={"row"} spacing={2} justifyContent="space-between" >
            <Menu/>
            <Content/>
            </Stack>
        </Container>
    </div>
  )
}

export default Layout