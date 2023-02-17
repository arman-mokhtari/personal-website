import { useContext } from "react";

import { useTheme } from "@mui/material/styles";
import { Fab, Box } from "@mui/material";
import { WbSunnyOutlined, NightlightOutlined } from "@mui/icons-material";

import MainContext from '../../context';

const ThemeActionButton = () => {
    const theme = useTheme();
    const { handleThemeChange } = useContext(MainContext);

    return (
        <Box
            sx={{
                position: "absolute",
                right: 10,
                top: 5,
            }}
        >
            <Fab
                aria-label='ThemeChanger'
                variant="extended"
                size='small'
                color="secondary"
                sx={{
                    color: theme.palette.mode === "dark" ? "black" : "white",
                    mt: 1,
                    backgroundColor: theme.palette.mode === "dark" ? "rgba(170, 71, 188, 0.7)" : "rgba(206, 147, 216, 0.7)",
                    backdropFilter: "blur(1px)",
                }}
                onClick={handleThemeChange}
            >
                {theme.palette.mode === "dark" ? "light" : "dark"}
                {theme.palette.mode === "dark" ? (<WbSunnyOutlined sx={{
                    ml: 0.5,
                }} />) : (<NightlightOutlined sx={{
                    ml: 0.5,
                }} />)}
            </Fab>
        </Box>
    );
};

export default ThemeActionButton;