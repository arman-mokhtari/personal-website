import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import { useTheme } from "@mui/material/styles";
import ThemeActionButton from "../components/generalUse/ThemeActionButton";
import HomeLines from "../components/generalUse/HomeLines";
import { Box } from "@mui/material";

const PagesContainer = ({ children }) => {
    const theme = useTheme();

    return (
        <Grid2
            xs={12}
            sm={12}
            md={9}
            lg={9}
            xl={10}
            sx={{
                backgroundColor: theme.palette.mode === "dark" ? "#10121B" : "#F1F1F1",
                transition: "background-color 0.5s",
                position: "relative",
            }}>
            <ThemeActionButton />
            <HomeLines />
            <Box
                sx={{
                    zIndex: "10",
                }}>
                {children}
            </Box>
        </Grid2>
    )
}
export default PagesContainer;