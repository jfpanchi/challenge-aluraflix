import { AppBar, Box, Divider, Toolbar, Typography } from '@mui/material'
import React from 'react'
import Button from '../Button';

const Header = () => {
  return (
    <Box sx={{ flexGrow: 1, textAlign: {xs: "center", sm: "initial"}}}>
      <AppBar position="static" color='secondary'>
        <Toolbar >
          <Typography color="primary" variant="h6" fontWeight="bold" component="div" sx={{ flexGrow: 1 }}>
            ALURAFLIX
          </Typography>
          <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
            <Button variant="outlined" text="Nuevo video" color="white" />
          </Box>
        </Toolbar>
      </AppBar>
      <Divider color="#2A7AE4" sx={{height:"2px"}}/>
    </Box>
  )
}

export default Header