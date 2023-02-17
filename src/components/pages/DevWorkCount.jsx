import {
    Box,
    Chip,
    Typography,
    Tooltip,
} from "@mui/material";

import { devWorkInfo } from "../../constants/details";
import CountUp from "react-countup";

const DevWorkCount = () => {
    return (
        <>
            {
                devWorkInfo.map(({ tooltipTitle, icon, total }, index) => (
                    <Box
                        key={index}
                        component="div"
                        sx={{
                            width: 1,
                            mb: 7,
                            "&.MuiBox-root:last-child": {
                                mb:4,
                            }
                        }}>
                        <Tooltip
                            title={tooltipTitle}
                            placement="top"
                        >
                            <Chip icon={icon} label={
                                <Typography
                                    sx={{
                                        color: "#037fff",
                                    }}
                                    variant="body1">
                                    <CountUp
                                        start={0}
                                        end={total}
                                        duration={2}
                                    />
                                </Typography>}
                                sx={{
                                    p: 2,
                                    width: 1
                                }} />
                        </Tooltip>
                    </Box>
                ))
            }
        </>
    );
};
export default DevWorkCount;