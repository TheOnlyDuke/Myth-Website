import { Box } from "@mui/material";
import "katex/dist/katex.min.css";
import { InlineMath, BlockMath } from "react-katex";

export default function Math() {
  return (
    <Box sx={{ direction: "ltr" }}>
      <InlineMath math="X^{2}" />
      <BlockMath math="\int_{0}^{10}sin(x) * cos(x)dx" />
      <BlockMath math="\int_{5}^{10} \frac{1}{e^{x}+sin(x)} * tan(\frac{\rho }{2}) dx" />
      <BlockMath math="\int_{3x}^{2x} \int_{0}^{5}(log_{x}^{y}) + (tan(60\Theta \sqrt[5]{sin(x)}))dx dy" />
    </Box>
  );
}
