"use client";
import { SubmitButton, OTPInput, AuthForm } from "@/components/auth";
import { Box, Typography } from "@mui/material";
import { useSearchParams } from "next/navigation";
import { useState, useCallback } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/contexts/AuthContext";

export default function VerifyPage({}) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const phone = searchParams.get("phone");
  const [otp, setOtp] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const { SET_ACCESS_TOKEN, SET_USER_INFO } = useAuth();

  const handleOTPChange = (value) => {
    setOtp(value);
  };

  const handleSubmit = useCallback(
    async (e) => {
      e.preventDefault();
      setError("");
      setIsLoading(true);

      try {
        const response = await fetch(
          "http://77.237.82.221:8000/accounts/verify/",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              "X-Requested-With": "XMLHttpRequest",
            },
            body: JSON.stringify({
              code: otp,
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

          // Now that both the token and user info are set, redirect
          router.push(`/dashboard/`);
        } else {
          setError(data.error || "ثبت نام موفقیت آمیز نبود");
        }
      } catch (error) {
        setError("مشکل در برقراری ارتباط با سرور");
        console.error("Error:", error);
      } finally {
        setIsLoading(false);
      }
    },
    [otp, SET_ACCESS_TOKEN, SET_USER_INFO, router]
  );

  return (
    <AuthForm onSubmit={handleSubmit}>
      <Typography variant="title" sx={{ marginBottom: "25px" }}>
        ورود به سیگما
      </Typography>
      <Typography variant="normalBodyCap">
        کد تایید به شماره {phone} ارسال شد
      </Typography>
      <OTPInput length={4} onChange={handleOTPChange} />
      <SubmitButton
        isLoading={isLoading}
        animation={false}
        text="بررسی کد تایید"
      />
      {error && <Typography color="error">{error}</Typography>}
    </AuthForm>
  );
}
