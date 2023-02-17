import { Divider, Chip, Typography } from "@mui/material";

const CustomDivider = ({ icon, align, text, mb, my }) => {

    return (
        <>
            <Divider
                textAlign={align}
                sx={{
                    "&::before, &::after": {
                        display: "none",
                    },
                    mb: mb,
                    my: my,
                    mt:2,
                    justifyContent: "center",
                }}
            >
                <Chip
                    icon={icon}
                    label={
                        <Typography
                            variant="h3"
                            sx={{
                                textAlign: align,
                                color: "#037fff",
                                fontSize: "1.5rem",
                                whiteSpace: "nowrap",
                            }}>
                            {text}
                        </Typography>
                    }
                    sx={{
                        p: 3,
                        backdropFilter: "blur(3px)",
                    }}
                />
            </Divider>
        </>
    )
}

export default CustomDivider;