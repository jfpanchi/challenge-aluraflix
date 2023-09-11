import { TextField } from "@mui/material";

const Input = ({ placeholder, required, value, setValue, type="text"}) => {
  
  const updateValue = (event) => {
    setValue(event.target.value);
  }


  return (
    <TextField
        fullWidth
        type={type}
        label={placeholder}
        required={required}
        value={value}
        onChange={updateValue}
        variant="filled"
        color="primary"
        margin="dense"
    />
  )
}

export default Input