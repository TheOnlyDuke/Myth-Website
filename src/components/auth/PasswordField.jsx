import {
  TextField,
  Box,
  LinearProgress,
  Typography,
  Fade,
} from "@mui/material";
import { validatePassword } from "@/utils/validations";
import { useState } from "react";

export default function PasswordField({ value, onChange }) {
  const [Focused, setFocused] = useState(false);
  const validation = validatePassword(value);
  const strength = (validation.strength / 5) * 100;

  const handleFocus = () => setFocused(true);
  const handleBlur = () => setFocused(false);

  return (
    <Box sx={{ width: "100%" }}>
      <Box sx={{ width: "100%", position: "relative" }}>
        <TextField
          margin="normal"
          required
          fullWidth
          name="password"
          label="گذرواژه"
          type="password"
          id="registerPassword"
          autoComplete="new-password"
          onFocus={handleFocus}
          onBlur={handleBlur}
          value={value}
          onChange={onChange}
          sx={{
            "& .MuiOutlinedInput-root": {
              // "& fieldset": {
              //   borderColor:
              //     strength < 40
              //       ? "#f44336"
              //       : strength < 70
              //       ? "#ff9800"
              //       : strength < 90
              //       ? "#FFE100"
              //       : "#4caf50",
              // },
              // "&:hover fieldset": {
              //   borderColor:
              //     strength < 40
              //       ? "#f44336"
              //       : strength < 70
              //       ? "#ff9800"
              //       : strength < 90
              //       ? "#FFE100"
              //       : "#4caf50",
              // },
              "&.Mui-focused fieldset": {
                borderColor:
                  strength < 40
                    ? "#f44336"
                    : strength < 70
                    ? "#ff9800"
                    : strength < 90
                    ? "#FFE100"
                    : "#4caf50",
              },
            },
          }}
        />
        <Fade in={Focused} timeout={300}>
          <LinearProgress
            variant="determinate"
            dir="rtl"
            value={strength}
            sx={{
              mt: 1,
              height: 10,
              position: "absolute",
              bottom: "1px",
              borderRadius: "10px 10px 0 0",
              right: "1px",
              width: "calc(100% - 2px)",
              height: "10px",
              backgroundColor: "#ffffff00",
              "& .MuiLinearProgress-bar": {
                backgroundColor:
                  strength < 40
                    ? "#f44336"
                    : strength < 70
                    ? "#ff9800"
                    : strength < 90
                    ? "#FFE100"
                    : "#4caf50",
              },
            }}
          />
        </Fade>
      </Box>
      <Fade in={Focused} timeout={300}>
        <Box>
          <Typography
            variant="smallBody"
            sx={{ fontSize: "13px", color: "var(--secondary-text)" }}
          >
            وضعیت رمز عبور:
            <span
              style={{
                color:
                  strength < 40
                    ? "#f44336"
                    : strength < 70
                    ? "#ff9800"
                    : strength < 90
                    ? "#FFE100"
                    : "#4caf50",
                fontWeight: 600,
                marginRight: "5px",
              }}
            >
              {strength < 40
                ? "بسیار ضعیف"
                : strength < 70
                ? "ضعیف"
                : strength < 90
                ? "متوسط"
                : "مناسب"}
            </span>{" "}
          </Typography>
          <Typography
            variant="smallBody"
            sx={{ mt: 1, fontSize: "13px", color: "var(--secondary-text)" }}
          >
            توجه : رمز عبور باید شامل
            {validation.allCriteria.map((criterion, index) => (
              <span
                key={index}
                style={{
                  color: validation.validCriteria.includes(criterion)
                    ? "#4caf50"
                    : "var(--secondary-text)",
                  fontWeight: validation.validCriteria.includes(criterion)
                    ? 500
                    : 400,
                }}
              >
                {index === 0
                  ? " " + criterion
                  : index < 4
                  ? "، " + criterion
                  : "و " + criterion + " "}
              </span>
            ))}
            باشد
          </Typography>
        </Box>
      </Fade>
    </Box>
  );
}
