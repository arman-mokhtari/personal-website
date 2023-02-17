import { useCallback } from "react";
import { Helmet } from "react-helmet-async";

import { Box } from "@mui/material"
import Particles from "react-particles";
import { loadFull } from "tsparticles";
import { tspHome } from "../constants/particles";
import DevIntroduce from "../components/common/DevIntroduce";

const Home = ({ helmetTitle }) => {

    const particlesInit = useCallback(async engine => {
        await loadFull(engine);
    }, []);

    const particlesLoaded = useCallback(async container => {
        await console.log(container);
    }, []);

    return (
        <Box
            sx={{
                height: "100vh",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
            }}>
            <Helmet>
                <title>{helmetTitle}</title>
            </Helmet>
            <Particles
                id="tsparticles"
                init={particlesInit}
                loaded={particlesLoaded}
                options={tspHome}
            />
            <Box
                sx={{
                    textAlign: "center",
                    mx: "3.2rem",
                    zIndex: 20,
                }}>
                <DevIntroduce
                    fontSize="2.2rem"
                    lineHeight="4rem"
                    fontSize2="1.25rem"
                    mb="0.5rem"
                    text="Hi, " />
            </Box>

        </Box>
    )
}

export default Home;