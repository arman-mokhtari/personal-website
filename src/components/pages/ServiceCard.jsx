import { useTheme } from "@mui/material/styles";
import { CardContent, Typography, Box, Card, Divider } from '@mui/material';


const ServiceCard = ({ title, text, icon }) => {
    const theme = useTheme();
    return (
        <Box>
            <Card
                variant="outlined"
                square={true}
                sx={{
                    backgroundColor: theme.palette.mode === "dark" ? "#191D2B" : "#E4E4E4",
                    borderTop: "5px solid",
                    borderColor: theme.palette.mode === "dark" ? "#2e344e" : "#cbced8",
                    transition: "border-color 0.5s,background-color 0.5s",
                    "&:hover": {
                        borderTopColor: "#037fff"
                    }
                }}
            >
                <CardContent>
                    {icon}
                    <Typography
                        sx={{
                            fontSize: "1.4rem"
                        }}>
                        {title}
                    </Typography>
                    <Divider
                        sx={{
                            width: 50,
                            my: 2,
                            border: "1px solid",
                            borderColor: theme.palette.mode === "dark" ? "#2e344e" : "#cbced8",
                            transition: "border-color 0.5s",
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
        </Box>
    )
}
export default ServiceCard;

