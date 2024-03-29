import { useTheme } from "@mui/material/styles";
import { Box, Typography } from "@mui/material";

const DevIntroduce = ({ text, fontSize, lineHeight, fontSize2, mb }) => {
  const theme = useTheme();

  return (
    <>
      <Typography
        variant="h1"
        sx={{
          fontSize: fontSize,
          color: theme.palette.mode === "dark" ? "white" : "black",
          mb: mb,
          fontWeight: "700",
          lineHeight: lineHeight,
        }}
      >
        {text}I am{" "}
        <Box
          component="span"
          color="#037fff"
          sx={{
            display: "inline-block",
            whiteSpace: "nowrap",
          }}
        >
          Arman Mokhtari
        </Box>
      </Typography>
      <Typography
        sx={{
          marginTop: "15px",
          fontSize: fontSize2,
          lineHeight: "2rem",
          color: theme.palette.mode === "dark" ? "#a4acc4" : "#313131",
        }}
      >
        I am a full-stack web developer who delivers clean code, perfect
        designs, and interactive animations that prioritize security.
      </Typography>
    </>
  );
};

export default DevIntroduce;
