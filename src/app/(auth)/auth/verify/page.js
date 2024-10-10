"use client";
import { SubmitButton, OTPInput, AuthForm } from "@/components/auth";
import { Box, Typography } from "@mui/material";
import { useSearchParams } from "next/navigation";
import { useState, useCallback } from "react";

export default function VerifyPage({}) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const phone = searchParams.get("phone");
  const [otp, setOtp] = useState("");
  const [error, setError] = useState("");

  const handleOTPChange = (value) => {
    setOtp(value);
  };

  const handleSubmit = useCallback(
    async (e) => {
      e.preventDefault();
      setError("");
      console.log(otp);

      try {
        const response = await fetch("http://127.0.0.1:8080/accounts/verify/", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "X-Requested-With": "XMLHttpRequest",
          },
          body: JSON.stringify({
            code: otp,
          }),
        });
        const data = await response.json();
        if (response.ok) {
          console.log(data.token);
          router.push(`/dashboard/`);
        } else {
          setError(data.error || "ثبت نام موفقیت آمیز نبود");
        }
      } catch (error) {
        setError("مشکل در برقراری ارتباط با سرور");
        console.error("Error:", error);
      } finally {
      }
    },
    [otp]
  );

  return (
    <AuthForm onSubmit={handleSubmit}>
      <Typography variant="title" sx={{ marginBottom: "25px" }}>
        ورود به میلف
      </Typography>
      <Typography variant="normalBodyCap">
        کد تایید به شماره {phone} ارسال شد
      </Typography>
      <OTPInput length={4} onChange={handleOTPChange} />
      <SubmitButton
        isLoading={otp.length !== 4}
        animation={false}
        text="بررسی کد تایید"
      />
    </AuthForm>
  );
}
