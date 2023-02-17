import { useContext } from 'react';
import { useTheme } from "@mui/material/styles";

import MainContext from '../../context'
import SidebarContent from '../sidebar/SidebarContent'
import { Drawer } from "@mui/material";

const SidebarDrawer = () => {
    const theme = useTheme();
    const { drawerOpen, setDrawerOpen } = useContext(MainContext);
    return (
        <Drawer
            open={drawerOpen}
            variant='temporary'
            onClose={() => { setDrawerOpen(false); }}
            sx={{
                "& .MuiDrawer-paper": {
                    width: "300px",
                    backgroundColor: theme.palette.mode === "dark" ? "rgba(25, 29, 43, 0.7)" : "rgba(228, 228, 228, 0.7)",
                    backdropFilter: "blur(4px)",
                },
                display: {
                    xs: "block",
                    sm: "block",
                    md: "none",
                    lg: "none",
                    xl: "none",
                },
            }}
        >
            <SidebarContent />
        </Drawer>
    )
}

export default SidebarDrawer;