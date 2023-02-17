import { ThemeProvider } from '@mui/material/styles';
import { HelmetProvider } from 'react-helmet-async';
import Grid2 from '@mui/material/Unstable_Grid2/Grid2';
import { lightTheme, darkTheme } from "./theme";



const MainLayout = ({ children, mode }) => {
    const theme = mode === "dark" ? darkTheme : lightTheme;

    return (
            <ThemeProvider theme={theme}>
                <HelmetProvider>
                    <Grid2
                        sx={{
                            height: "100vh"
                        }} container>
                        {children}
                    </Grid2>
                </HelmetProvider>
            </ThemeProvider>
    );
};

export default MainLayout;