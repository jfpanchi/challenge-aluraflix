import { TextField } from "@mui/material";

const Input = ({ placeholder, required, value, setValue, type="text"}) => {
  
  const updateValue = (event) => {
    setValue(event.target.value);
  }


  return (
    <TextField
        type={type}
        placeholder={placeholder}
        required={required}
        value={value}
        onChange={updateValue}
    />
  )
}

export default Input