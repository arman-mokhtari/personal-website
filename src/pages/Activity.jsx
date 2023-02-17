import {
    Card,
    CardContent,
    Box,
} from "@mui/material";
import { Helmet } from "react-helmet-async";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import graphicDeveloper from "../assets/background/graphicDeveloper.png"
import { DevWorkCount } from "../components/pages";
import CustomTitle from "../components/common/CustomTitle";
const Activity = ({ helmetTitle }) => {

    return (
        <Card
            sx={{
                backgroundColor: "transparent",
                backgroundImage: "none",
                height: "100vh",
                overflowY: "scroll",
                display: 'flex',
                flexDirection: 'column',
            }}
        >
            <Helmet>
                <title>{helmetTitle}</title>
            </Helmet>
            <CustomTitle
                text="ACTIVITY"
            />
            <CardContent>
                <Grid2
                    container
                    sx={{
                        justifyContent: "center",
                        alignItems: "center",
                    }}
                >
                    <Grid2
                        xs={12}
                        sm={10}
                        md={10}
                        lg={5}
                        xl={5}
                    >
                        <DevWorkCount />
                    </Grid2>
                    <Grid2
                        xs={12}
                        sm={12}
                        md={12}
                        lg={6}
                        xl={6}
                    >
                        <Box
                            sx={{
                                backgroundImage: `url(${graphicDeveloper})`,
                                backgroundPosition: "top",
                                height: "280px",
                                mb: 4,
                                backgroundRepeat: "no-repeat",
                                backgroundSize: "contain",
                            }}
                        />
                    </Grid2>
                </Grid2>
            </CardContent>
        </Card>
    )
}

export default Activity;