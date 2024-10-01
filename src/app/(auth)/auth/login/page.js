"use client";

import { Box, TextField, Typography } from "@mui/material";
import { useState, useCallback } from "react";
import { SubmitButton, PhoneField, AuthNeviLink, AuthForm } from "@/components/auth";

function LoginPage() {
  const [isLoadingLogin, setIsLoadingLogin] = useState(false);
  const [formData, setFormData] = useState({
    password: "",
    phoneNumber: "",
  });

  const handleChange = useCallback((e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted", formData);
  };

  return (
    <AuthForm onSubmit={handleSubmit}
    >
      <Typography
        variant="title"
        sx={{
          mb: 3,
          marginBottom: "50px",
        }}
      >
        ورود به میلف
      </Typography>
      <PhoneField value={formData.phoneNumber} onChange={handleChange} />
      <TextField
        name="password"
        type="password"
        value={formData.password}
        onChange={handleChange}
        fullWidth
        margin="normal"
        label="گذرواژه"
      />
      <SubmitButton isLoading={isLoadingLogin} text="ورود به وبسایت" />
      <AuthNeviLink
        text="رمزت یادت نیست ؟ با یه بار مصرف وارد شو"
        des="/auth/otp"
      />
      <AuthNeviLink text="اکانت نداری ؟ ثبت نام کن" des="/auth" />
    </AuthForm>
  );
}

export default LoginPage;
