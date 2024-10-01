import React from 'react';
import { TextField } from '@mui/material';

export default function PhoneField({ value, onChange, ...props }) {
  const handleChange = (event) => {
    const newValue = event.target.value.replace(/[^0-9]/g, '');
    onChange({
      target: {
        name: event.target.name,
        value: newValue
      }
    });
  };

  return (
    <TextField
      margin="normal"
      required
      fullWidth
      name="phoneNumber"
      label="شماره همراه"
      type="tel"
      id="phoneNumber"
      autoComplete="tel"
      value={value}
      onChange={handleChange}
      inputProps={{
        inputMode: 'numeric',
        pattern: '[0-9]*'
      }}
      {...props}
    />
  );
}