"use client";
import QuestionPreview from "@/components/mainPage/QestionsBank/QuestionPreview";
import { Box, Typography } from "@mui/material";
import { useState, useEffect } from "react";
import Grid from "@mui/material/Unstable_Grid2";

export default function QuestionsPage() {
  const [error, setError] = useState("");
  const [qData, setQData] = useState([]);

  useEffect(() => {
    const BACKEND_BASE_URL = process.env.NEXT_PUBLIC_BACKEND_BASE_URL;
    const fetchData = async () => {
      try {
        const response = await fetch(`${BACKEND_BASE_URL}/question/`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            "X-Requested-With": "XMLHttpRequest",
          },
        });
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const data = await response.json();
        setQData(data);
      } catch (error) {
        0;
        setError(error.message);
        console.error("Error:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <Grid
      container
      maxWidth="lg"
      spacing={3}
      component="main"
      sx={{
        flex: 1,
        margin: "175px auto 25px auto",
        width: "100%",
      }}
    >
      <Grid
        sx={{
          "*": { display: "flex", justifyContent: "center" },
          marginBottom: "50px",
        }}
        xs={12}
      >
        <Typography variant="title">به بانک سوالات سیگما خوش اومدی</Typography>
        <Typography variant="normalBodyCap">
          از بین این {qData.length} سوال بر اساس سختی، امتیاز و متن سوال یکی رو
          انتخاب و شروع به حل کن
        </Typography>
      </Grid>

      {error ? (
        <Typography variant="normalBody" color="error">
          {error}
        </Typography>
      ) : (
        qData.map((question, index) => (
          <Grid xs={12}>
            <QuestionPreview
              QB={true}
              title={question.title}
              id={question.id}
              difficulty={question.difficulty}
              latex={question.question_latex}
            />
          </Grid>
        ))
      )}
    </Grid>
  );
}
