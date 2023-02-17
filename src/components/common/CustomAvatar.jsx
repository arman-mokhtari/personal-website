import { Avatar } from "@mui/material";
import avatar from "../../assets/myPic/Arman.png";
import { useTheme } from "@mui/material/styles";


const CustomAvatar = ({ h, w, b, sm, xs, variant, mt, md, lg, xl }) => {

    const theme = useTheme();

    return (
        <Avatar
            src={avatar}
            variant={variant}
            alt="Arman Mokhtari"
            sx={{
                height: h,
                width: w,
                border: b,
                margin: "0 auto",
                mt: mt,
                borderColor: theme.palette.mode === "dark" ? "#2e344e" : "#cbced8",
                transition: "border-color 0.5s",
                display: {
                    md: md,
                    lg: lg,
                    xl: xl,
                    sm: sm,
                    xs: xs,
                },
                "&:hover": {
                    borderColor: "#037fff",
                }
            }}
        />
    )
}

export default CustomAvatar;