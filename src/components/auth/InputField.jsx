import { TextField } from '@mui/material';

export default function InputField({ name, label, type = 'text', value, onChange, required }) {
  return (
    <TextField
      margin="normal"
      required={required}
      fullWidth
      id={name}
      label={label}
      name={name}
      type={type}
      value={value}
      onChange={onChange}
      autoComplete={name}
      sx={{
        width: {
          xs: "370px",
          md: "380px"
        },
        height: "70px"
      }}
    />
  );
}