import { Card, Box, CardMedia, CardContent, List } from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import CustomTitle from "../components/common/CustomTitle";

import designer from "../assets/pics/designer.png";
import DevIntroduce from "../components/common/DevIntroduce";
import { itemsText, items } from "../constants/devInfo";

import ServiceCard from "../components/pages/ServiceCard";
import { reviewData } from "../constants/reviewData";
import { serviceCardData } from "../constants/serviceCardData";
import ReviewCard from "../components/pages/ReviewCard";
import Slider from "react-slick";
import { settings } from "../constants/sliderSlick"

import React from 'react';
import { Fade } from 'react-reveal';
import { Helmet } from "react-helmet-async";

const About = ({ helmetTitle }) => {

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
                text="ABOUT ME"
            />
            <Grid2
                container
                columnSpacing={2}
                sx={{
                    justifyContent: "center",
                }}>

                <Grid2
                    xs={11}
                    sm={11}
                    md={11}
                    lg={6}
                    sx={{
                        mb: 2,
                    }}
                >
                    <Box
                        className="ps-card-media"
                        sx={{
                            position: "relative",
                        }}>
                        <Box
                            className="img-box-span-1"
                            component="span" />
                        <CardMedia
                            component="img"
                            height={375}
                            image={designer}
                            alt="Developer"
                        /></Box>
                </Grid2>
                <Grid2
                    xs={12}
                    sm={11}
                    md={11}
                    lg={6}
                >
                    <CardContent>
                        <DevIntroduce
                            fontSize="2rem"
                            lineHeight="0"
                            fontSize2="1.1rem"
                            mb="1.6rem"
                            mt="15px"
                        />
                        <Grid2
                            container
                            columns={24}
                        >
                            <Grid2 xs={8}>
                                <List>
                                    {
                                        items()
                                    }
                                </List>
                            </Grid2>
                            <Grid2 xs={16}>
                                <List>
                                    {
                                        itemsText()
                                    }
                                </List>
                            </Grid2>
                        </Grid2>
                    </CardContent>
                </Grid2>
            </Grid2>
            <Box
                component="div">
                <Fade
                    right>
                    <CustomTitle
                        text="SERVICES"
                    />
                    <Grid2
                        container
                        spacing={2}
                        sx={{
                            justifyContent: 'center',
                            mb: "6rem",
                        }}>
                        {
                            serviceCardData.map(({ title, text, icon, id }) => (
                                <Grid2
                                    xs={11}
                                    sm={6}
                                    md={6}
                                    lg={4}
                                    key={id}
                                >
                                    <ServiceCard
                                        title={title}
                                        text={text}
                                        icon={icon}
                                    />
                                </Grid2>
                            ))
                        }
                    </Grid2>
                </Fade>
            </Box>
            <Box
                component="div">
                <Fade
                    right>
                    <CustomTitle
                        text="REVIEWS"
                    />
                    <Box
                        sx={{
                            mb: 12,
                        }}
                    >
                        <Slider
                            {...settings}>
                            {
                                reviewData.map(({ id, role, name, text }) => (
                                    <Box
                                        component="div"
                                        key={id}
                                        sx={{
                                            display: 'flex',
                                            justifyContent: 'center',
                                            alignItems: "center",
                                        }}>
                                        <ReviewCard
                                            role={role}
                                            name={name}
                                            text={text}
                                        />
                                    </Box>
                                ))
                            }
                        </Slider>
                    </Box>
                </Fade>
            </Box>
        </Card >
    )
};

export default About;