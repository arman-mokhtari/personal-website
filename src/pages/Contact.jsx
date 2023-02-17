import {
    Card,
    CardContent,
} from "@mui/material";
import { Helmet } from "react-helmet-async";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";

import CustomTitle from "../components/common/CustomTitle";
import { ContactForm } from "../components/pages"

const Contact = ({ helmetTitle }) => {

    return (
        <Card
            sx={{
                height: "100vh",
                overflowY: "scroll",
                display: 'flex',
                flexDirection: 'column',
                backgroundColor: "transparent",
                backgroundImage: "none",
            }}>
            <Helmet>
                <title>{helmetTitle}</title>
            </Helmet>
            <CustomTitle
                text="CONTACT"
            />
            <CardContent>
                <Grid2
                    container
                    sx={{
                        display: "flex",
                        justifyContent: "center",
                    }}>
                    <ContactForm />
                </Grid2>
            </CardContent>
        </Card>
    )
}

export default Contact;