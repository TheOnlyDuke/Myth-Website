"use client";

import { Box, TextField, Typography } from "@mui/material";
import { useState, useCallback } from "react";
import {
  SubmitButton,
  PhoneField,
  AuthNeviLink,
  AuthForm,
} from "@/components/auth";
import { useRouter } from "next/navigation";

function LoginPage() {
  const router = useRouter();
  const [isLoadingLogin, setIsLoadingLogin] = useState(false);
  const [formData, setFormData] = useState({
    password: "",
    phoneNumber: "",
  });

  const handleChange = useCallback((e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  }, []);

  const handleSubmit = useCallback(
    async (e) => {
      e.preventDefault();
      setError("");

      try {
        const response = await fetch(
          "http://77.237.82.221:8000/accounts/login/",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              "X-Requested-With": "XMLHttpRequest",
            },
            body: JSON.stringify({
              phone_number: formData.phoneNumber,
              password: formData.password,
            }),
          }
        );
        const data = await response.json();
        if (response.ok) {
          console.log(data.token);
          router.push(`/dashboard/`);
        } else {
          setError(data.error || "ورود موفقیت آمیز نبود");
        }
      } catch (error) {
        setError("مشکل در برقراری ارتباط با سرور");
        console.error("Error:", error);
      } finally {
        setIsLoading(false);
      }
    },
    [formData, router]
  );

  return (
    <AuthForm onSubmit={handleSubmit}>
      <Typography
        variant="title"
        sx={{
          mb: 3,
          marginBottom: "50px",
        }}
      >
        ورود به سیگما
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
