import { Button as Btn } from '@mui/material'
import React from 'react'

const Button = ({color, text, variant, fullWidth}) => {
  return (
    <Btn variant={variant} color={color} fullWidth={fullWidth}>{text}</Btn>
  )
}

export default Button