import { Button as Btn } from '@mui/material'
import React from 'react'

const Button = ({color, text, variant}) => {
  return (
    <Btn variant={variant} color={color} >{text}</Btn>
  )
}

export default Button