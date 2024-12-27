"use client";
import QuestionPreview from "@/components/mainPage/QestionsBank/QuestionPreview";
import { Box, Typography } from "@mui/material";
import { useState, useEffect } from "react";
import Grid from "@mui/material/Unstable_Grid2";
import { fetchQuestions } from "@/app/api/questions";

export default function QuestionsPage() {
  const [error, setError] = useState("");
  const [qData, setQData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadQuestions = async () => {
      setIsLoading(true);
      try {
        await fetchQuestions(setQData, setError);
      } finally {
        setIsLoading(false);
      }
    };

    loadQuestions();
  }, []);

  if (isLoading) {
    return <Typography variant="normalBody">Loading questions...</Typography>;
  }

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
