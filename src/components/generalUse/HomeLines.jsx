import { Box } from "@mui/material"
import { useTheme } from "@mui/material/styles";


const HomeLines = () => {

    const theme = useTheme();

    return (
        <Box
            sx={{
                width: 1,
                height: "100vh",
                position: "absolute",
                top: 0,
            }}>
            <Box
                sx={{
                    width: 1,
                    height: "100vh",
                    position: "relative",
                }}
            >
                {
                    ["20%", "40%", "60%", "80%"].map((value, index) => (
                        <Box
                            key={index}
                            component="span"
                            sx={{
                                height: "100vh",
                                width: "1px",
                                backgroundColor: theme.palette.mode === "dark" ? "#2e344e4d" : "#cbced880",
                                transition: "background-color 0.5s",
                                position: "absolute",
                                right: value,
                            }}
                        />
                    ))
                }
            </Box>
        </Box>
    )
}

export default HomeLines;