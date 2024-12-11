"use client";
import QuestionOptions from "@/components/mainPage/QestionsBank/QestionOptions";
import { Box, Typography } from "@mui/material";
import { useState, useEffect, useCallback } from "react";
import Grid from "@mui/material/Unstable_Grid2";
import { BlockMath } from "react-katex";
import "katex/dist/katex.min.css";

export default function EachQuestionPage({ params }) {
  const [error, setError] = useState("");
  const [qData, setQData] = useState({});
  const [stageNumber, setStageNumber] = useState(1);
  const [qTitle, setQTitle] = useState("");

  const titles = [
    "داریم :",
    "خب خب داری درست پیش میری الان داریم:",
    "ببینیم چی داری",
    "بعدی!",
  ];

  let id = params["question-id"];

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`/api/question/${id}/1/`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            "X-Requested-With": "XMLHttpRequest",
          },
        });
        if (!response.ok) {
          throw new Error("Failed to fetch Question Data");
        }
        const data = await response.json();
        setQData(data.stage);
        setStageNumber(data.stage.stage_number);
      } catch (error) {
        setError(error.message);
        console.error("Error:", error);
      }
    };

    fetchData();
  }, [id]);

  const handleSubmit = useCallback(
    async (option) => {
      setError("");
      try {
        const response = await fetch(`/api/question/${id}/${stageNumber}/`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "X-Requested-With": "XMLHttpRequest",
          },
          body: JSON.stringify({ option: `${option}` }),
        });
        const data = await response.json();
        if (response.ok) {
          if (data.message === "Finished all stages of this question.") {
            setQData("Finished all stages of this question.");
          } else {
            setQTitle(qData[`option${option}_title`] || "");
            setQData(data.stage);
            setStageNumber(data.stage.stage_number);
          }
        } else {
          throw new Error(data.error || "Failed to submit the answer");
        }
      } catch (error) {
        setError("مطئنی ؟ یه بار دیگه تلاش کن");
        console.error("Error:", error);
      }
    },
    [id, stageNumber, qData]
  );

  return (
    <Grid
      container
      maxWidth="lg"
      spacing={2}
      component="main"
      sx={{
        flex: 1,
        margin: "175px auto 25px auto",
        width: "100%",
        border: "10px solid",
        p: "35px",
        borderRadius: "15px",
      }}
    >
      {qData === "Finished all stages of this question." ? (
        <Typography
          variant="display"
          sx={{ display: "flex", justifyContent: "cneter" }}
        >
          آفرین و درود
        </Typography>
      ) : (
        <>
          <Grid xs={12} sx={{ position: "relative" }}>
            <Typography
              variant="normalBodyCap"
              sx={{ position: "absolute", top: 0, left: 0 }}
            >
              مرحله : {stageNumber}
            </Typography>
            <Typography variant="normalBody">
              {titles[(stageNumber - 1) % titles.length]}
            </Typography>
            <Typography
              variant="title"
              sx={{
                direction: "ltr",
                "& *": {
                  direction: "inherit",
                },
              }}
            >
              <BlockMath math={qTitle} />
            </Typography>
            <Typography variant="normalBody">
              حالا گام بعدیت رو انتخاب کن
            </Typography>
          </Grid>
          {error && (
            <Grid xs={12}>
              <Typography variant="normalBody" color="error" textAlign="center">
                {error}
              </Typography>
            </Grid>
          )}
          <Grid xs={12}>
            <QuestionOptions
              option={1}
              latex={qData.option1_title}
              handleSubmit={handleSubmit}
            />
          </Grid>
          <Grid xs={12}>
            <QuestionOptions
              option={2}
              latex={qData.option2_title}
              handleSubmit={handleSubmit}
            />
          </Grid>
          <Grid xs={12}>
            <QuestionOptions
              option={3}
              latex={qData.option3_title}
              handleSubmit={handleSubmit}
            />
          </Grid>
          <Grid xs={12}>
            <QuestionOptions
              option={4}
              latex={qData.option4_title}
              handleSubmit={handleSubmit}
            />
          </Grid>
        </>
      )}
    </Grid>
  );
}
