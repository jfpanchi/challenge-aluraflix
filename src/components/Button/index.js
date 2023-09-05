import { Button as Btn } from '@mui/material'
import React from 'react'

const Button = ({color, text}) => {
  return (
    <Btn variant="contained" color={color}>{text}</Btn>
  )
}

export default Button