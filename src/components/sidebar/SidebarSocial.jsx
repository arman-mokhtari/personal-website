import { socialData } from "../../constants/socialData";
import { IconButton, Box } from "@mui/material";

const SidebarSocial = () => {
    return (
        <Box
            component="div"
            sx={{
                m: "0 auto",
                textAlign: "center",
            }} >
            {
                socialData.map(({ ariaLabel, title, href, icon, id }) => {
                    return (<IconButton
                        key={id} 
                        sx={{
                            '&.MuiIconButton-root:hover': {
                                backgroundColor: "transparent"
                            },
                        }}
                        aria-label={ariaLabel}
                    >
                        <a title={title} href={href} target="_blank" rel="noopener noreferrer" >
                            {icon}
                        </a>
                    </IconButton>)
                })
            }
        </Box>

    )
}

export default SidebarSocial;