"use client";
import QuestionOptions from "@/components/mainPage/QestionsBank/QestionOptions";
import { Box, Typography } from "@mui/material";
import { useState, useEffect, useCallback } from "react";
import Grid from "@mui/material/Unstable_Grid2";
import { BlockMath } from "react-katex";
import "katex/dist/katex.min.css";
import { apiClient } from "@/utils/api";

const simpleArray = [...Array(4)];

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
        const data = await apiClient.getQuestionStage(id, 1);
        setQData(data.stage);
        setStageNumber(data.stage.stage_number);
      } catch (error) {
        setError(error.message);
      }
    };

    fetchData();
  }, [id]);

  const handleSubmit = useCallback(
    async (option) => {
      setError("");
      try {
        const data = await apiClient.submitAnswer(id, stageNumber, option);
        if (data.message === "Finished all stages of this question.") {
          setQData("Finished all stages of this question.");
        } else {
          setQTitle(qData[`option${option}_title`] || "");
          setQData(data.stage);
          setStageNumber(data.stage.stage_number);
        }
      } catch (error) {
        setError("مطئنی ؟ یه بار دیگه تلاش کن");
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
          sx={{ display: "flex", justifyContent: "center" }}
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
            {simpleArray.map((each, index) => (
              <QuestionOptions
                key={index + 1}
                option={index + 1}
                latex={qData[`option${index + 1}_title`]}
                handleSubmit={handleSubmit}
              />
            ))}
          </Grid>
        </>
      )}
    </Grid>
  );
}
