import {
    Box,
    Divider,
} from "@mui/material";

import { useTheme } from "@mui/material/styles";

import { SidebarHeader, SidebarFooter, SidebarTabs } from ".";
import SidebarSocial from "./SidebarSocial";
const SidebarContent = () => {
    const theme = useTheme();
    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                height: 1,
                borderRight: "2px solid",
                borderColor: theme.palette.mode === "dark" ? "#2e344e" : "#cbced8",
                transition:"border-color 0.5s",
            }}
        >
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                }}
            >
                <SidebarHeader />
                <Divider
                    variant='middle'
                    sx={{
                        width: '90%',
                        marginTop: 1,
                        color: theme.palette.mode === "dark" ? "text.primary" : "text.secondary"
                    }}
                />
                <SidebarTabs />
                <Divider
                    variant='middle'
                    sx={{
                        width: '90%',
                        color: theme.palette.mode === "dark" ? "text.primary" : "text.secondary"
                    }}
                />
                <SidebarSocial />
            </Box>
            <SidebarFooter />
        </Box>
    );
};
export default SidebarContent;