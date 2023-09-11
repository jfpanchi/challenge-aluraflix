import { Button as Btn } from '@mui/material'
import React from 'react'

const Button = ({color, text, variant, fullWidth, onClick}) => {
  return (
    <Btn variant={variant} color={color} fullWidth={fullWidth} onClick={onClick}>{text}</Btn>
  )
}

export default Button