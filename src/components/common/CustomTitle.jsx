import { Typography, CardContent } from "@mui/material";
import { useTheme } from "@mui/material/styles";

const CustomTitle = ({ text }) => {
    const theme = useTheme();

    return (
        <CardContent
            sx={{
                mt:7,
                mb:4,
            }}>
            <Typography variant="h2"
                sx={{
                    fontSize: "2.5rem",
                    transition: "color 0.5s",
                    whiteSpace: "nowrap",
                }}>
                {text}
            </Typography>
            <Typography
                sx={{
                    fontSize: "3.3rem",
                    lineHeight: 0.8,
                    color: theme.palette.mode === "dark" ? "#232633" : "#E5E8EC",
                    transition: "color 0.5s",
                    cursor: "default",
                    userSelect: "none",
                    whiteSpace: "nowrap",
                }}>
                {text}
            </Typography>
        </CardContent>
    )
}

export default CustomTitle;