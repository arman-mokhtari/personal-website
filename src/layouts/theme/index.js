import { createTheme } from "@mui/material/styles";

export const lightTheme = createTheme({
    palette: {
        mode: "light",
    },
    typography: {
        fontFamily: "Nunito, sans-serif",
    },
    components: {
        MuiButtonBase: {
            defaultProps: {
                disableRipple: true,
            },
        },
    },
});

export const darkTheme = createTheme({
    palette: {
        mode: "dark",
    },
    typography: {
        fontFamily: "Nunito, sans-serif",
    },
    components: {
        MuiButtonBase: {
            defaultProps: {
                disableRipple: true,
            },
        },
    },
});