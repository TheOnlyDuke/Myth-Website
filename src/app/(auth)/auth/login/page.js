"use client";

import { TextField, Typography } from "@mui/material";
import { useState, useCallback } from "react";
import {
  SubmitButton,
  PhoneField,
  AuthNeviLink,
  AuthForm,
} from "@/components/auth";
import { useRouter } from "next/navigation";
import { useAuth } from "@/contexts/AuthContext";

function LoginPage() {
  const router = useRouter();
  const { SET_ACCESS_TOKEN, SET_USER_INFO } = useAuth();
  const [error, setError] = useState("");
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
      setIsLoadingLogin(true);

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
          localStorage.setItem("ACCESS_TOKEN", data.token);
          SET_ACCESS_TOKEN(data.token);
          const userInfoResponse = await fetch(
            "http://77.237.82.221:8000/accounts/profile/",
            {
              method: "GET",
              headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${data.token}`,
              },
            }
          );
          const userInfoData = await userInfoResponse.json();
          SET_USER_INFO(userInfoData);
          router.push(`/dashboard/`);
        } else {
          setError(data.error || "ورود موفقیت آمیز نبود");
        }
      } catch (error) {
        setError("مشکل در برقراری ارتباط با سرور");
        console.error("Error:", error);
      } finally {
        setIsLoadingLogin(false);
      }
    },
    [formData, router, SET_ACCESS_TOKEN, SET_USER_INFO]
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
