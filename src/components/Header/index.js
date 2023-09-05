import { AppBar, Box, Toolbar, Typography } from '@mui/material'
import React from 'react'
import Button from '../Button';

const Header = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" color='secondary'>
        <Toolbar>
          <Typography color="primary" variant="h6" fontWeight="bold" component="div" sx={{ flexGrow: 1 }}>
            ALURAFLIX
          </Typography>
          <Button variant="outlined" text="Nuevo video" color="white"/>
        </Toolbar>
      </AppBar>
    </Box>
  )
}

export default Header