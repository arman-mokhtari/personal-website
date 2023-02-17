import { Card, Box } from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import CustomTitle from "../components/common/CustomTitle";
import { Skills } from "../components/pages";
import { HomeRepairServiceRounded, SchoolRounded } from "@mui/icons-material";
import { DevEduTimeline, DevExpTimeline } from "../components/pages"
import CustomDivider from "../components/common/CustomDivider";
import React from 'react';
import { Fade } from 'react-reveal';
import { Helmet } from "react-helmet-async";

const Resume = ({ helmetTitle }) => {

  return (

    <Card
      sx={{
        height: "100vh",
        overflowY: "scroll",
        backgroundColor: "transparent",
        boxShadow: "none",
        backgroundImage: "none",
        mx: 2,
      }}>
      <Helmet>
        <title>{helmetTitle}</title>
      </Helmet>
      <CustomTitle
        text="MY SKILLS"
      />
      <Grid2
        container
        sx={{
          justifyContent: "center",
          mt: 6,
        }}
      >
        <Skills />
      </Grid2>
      <Box
        component="div">
        <Fade
          right>
          <CustomTitle
            text="CV"
          />
          <Grid2
            container
            sx={{
              mt: 2,
              mb: 4,
            }}>
            <Grid2
              xs={12}
              sm={12}
              md={12}
              lg={6}
              xl={6}
            >
              <CustomDivider
                icon={<HomeRepairServiceRounded sx={{
                  color: "#037fff !important",
                }} />}
                align="center"
                text="Working Experience"
                mb={3}
              />
              <DevExpTimeline />
            </Grid2>
            <Grid2
              xs={12}
              sm={12}
              md={12}
              lg={6}
              xl={6}
            >
              <CustomDivider
                icon={<SchoolRounded sx={{
                  color: "#037fff !important",
                }} />}
                align="center"
                text="Educational Qualifications"
                mb={3}
              />
              <DevEduTimeline />
            </Grid2>
          </Grid2>
        </Fade>
      </Box>
    </Card>
  )
}

export default Resume;