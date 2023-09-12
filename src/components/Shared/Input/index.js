import { TextField } from "@mui/material";

const Input = ({ placeholder, required, value, setValue, type="text", select=false, children}) => {
  
  const updateValue = (event) => {
    setValue(event.target.value);
  }


  return (
    <TextField
        fullWidth
        select={select}
        type={type}
        label={placeholder}
        required={required}
        value={value}
        onChange={updateValue}
        variant="filled"
        color="primary"
        margin="dense"
    >
      {children}
    </TextField>
  )
}

export default Input