import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import { useTheme } from "@mui/material/styles";

const SidebarContainer = ({ children }) => {

    const theme = useTheme();

    return (
        <Grid2
            xs={0}
            sm={0}
            md={3}
            lg={3}
            xl={2}
            sx={{
                backgroundColor: theme.palette.mode === "dark" ? "#191D2B" : "#E4E4E4",
                height: "100vh",
                overFlowY: "auto",
                overflowX: "hidden",
                transition: "background-color 0.5s"
            }}>
            {children}
        </Grid2>
    )
}
export default SidebarContainer;