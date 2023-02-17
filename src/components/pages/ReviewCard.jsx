import { useTheme } from "@mui/material/styles";
import { CardContent, Typography, Box, Card } from '@mui/material';

const ReviewCard = ({ role, name, text }) => {

    const theme = useTheme();

    return (
        <Box>
            <Card
                variant="outlined"
                square={true}
                sx={{
                    backgroundColor: theme.palette.mode === "dark" ? "#191D2B" : "#E4E4E4",
                    borderLeft: "5px solid",
                    borderColor: theme.palette.mode === "dark" ? "#2e344e" : "#cbced8",
                    transition: "border-color 0.5s,background-color 0.5s",
                    "&:hover": {
                        borderLeftColor: "#037fff"
                    },
                    position: "relative",
                    overflow: "visible",
                    mb: 3.5,
                    mx: 2,
                }}
            >
                <CardContent
                >
                    <Box
                        className="review-card-triangle"
                        component="span"
                        sx={{
                            "&::before, ": {
                                borderTopColor: theme.palette.mode === "dark" ? "#2e344e" : "#cbced8",
                            },
                            "&::after, ": {
                                borderTopColor: theme.palette.mode === "dark" ? "#191D2B" : "#E4E4E4",
                            },
                        }}
                    />
                    <Typography
                        sx={{
                            marginTop: "15px",
                            fontSize: "1.1rem",
                            lineHeight: "2rem",
                            color: theme.palette.mode === "dark" ? "#a4acc4" : "#313131",
                        }}
                    >
                        {text}
                    </Typography>
                </CardContent>
            </Card>
            <Box
                sx={{
                    mx: 2,
                }}
            >
                <Typography variant="h6">
                    {name}
                </Typography>
                <Typography
                    variant="body1"
                    sx={{
                        color: theme.palette.mode === "dark" ? "#a4acc4" : "#313131",
                    }}>
                    {role}
                </Typography>
            </Box>
        </Box>
    )
}

export default ReviewCard;