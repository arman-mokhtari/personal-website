import {
    Typography,
    Chip,
    Box,
    Divider,
    LinearProgress,
    Badge,
} from "@mui/material"
import { useTheme } from "@mui/material/styles";


const Skill = ({ icon, name, value }) => {
    const theme = useTheme();

    return (
        <Box
            sx={{
                mb: 7,
                "& .MuiChip-label": {
                    position: "inline-block",
                    width: 1,
                },
                "& .MuiChip-root": {
                    width: 1,
                    maxWidth: "none",
                }
            }}
        >
            <Divider
                textAlign="left"
                sx={{
                    "&::before, &::after": {
                        width: "0",
                    },
                }}
            >
                <Chip
                    icon={
                        <Box
                            component="img"
                            src={icon}
                            sx={{
                                height: 20,
                            }}
                        />
                    }

                    label={name}
                    sx={{
                        p: 2,
                    }}
                />
            </Divider>
            <Box
                sx={{
                    display: "flex",
                    alignItems: "center",
                }}
            >

                <Box
                    sx={{
                        width: "100%",
                    }}>
                    <LinearProgress
                        variant="determinate"
                        value={value}
                        sx={{
                            height: 6,
                            my: 1.5,
                            backgroundColor: theme.palette.mode === "dark" ? "#2E344E" : "#CBCED8",
                            transition: "background-color 0.5s",
                            "& .MuiLinearProgress-bar": {
                                backgroundColor: "#037fff",
                                transition: "background-color 0.5s"
                            }
                        }} />
                </Box>
                <Box
                    sx={{
                        minWidth: 35,
                        ml: 3,
                    }}
                >

                    <Typography
                        variant="body2"
                    >
                        <Badge
                            variant="standard"
                            badgeContent={`${Math.round(value)}%`}
                            sx={{
                                "& .MuiBadge-badge": {
                                    backgroundColor: "#037fff",
                                },
                                transition: "none"
                            }}

                        />

                    </Typography>
                </Box>
            </Box>
        </Box>
    )
}

export default Skill