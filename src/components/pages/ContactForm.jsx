import { useState, useEffect } from "react";
import { useTheme } from "@mui/material/styles";
import emailjs from "emailjs-com";
import { useForm } from "react-hook-form";
import {
  CardContent,
  TextField,
  CardActions,
  Button,
  Card,
} from "@mui/material";

import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import FormSnackbar from "./FormSnackbar";

const ContactForm = () => {
  const theme = useTheme();

  const [open, setOpen] = useState(false);

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  const {
    register,
    handleSubmit,
    reset,
    formState,
    formState: { isSubmitSuccessful, errors },
  } = useForm({
    mode: "onChange",
    defaultValues: {
      fullname: "",
      subject: "",
      email: "",
      message: "",
    },
  });

  useEffect(() => {
    if (formState.isSubmitSuccessful) {
      reset({
        fullname: "",
        subject: "",
        email: "",
        message: "",
      });
    }
  }, [formState, reset]);

  const onSubmit = () => {
    sendEmail();
    reset();
    console.log(errors);
  };

  const sendEmail = () => {
    emailjs
      .sendForm(
        "service_ozlz378",
        "template_8r2a9vn",
        "#myForm",
        "_WvHLpjdsore7wOvC"
      )
      .then(
        (result) => {
          if (result.status === 200) {
            setOpen(true);
            console.log(result.text);
          }
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <Grid2
      xs={12}
      sm={12}
      md={10}
      sx={{
        position: "relative",
      }}
    >
      <Card
        sx={{
          backgroundColor: "transparent",
          backgroundImage: "none",
          backdropFilter: "blur(3px)",
          border: `1px solid ${
            theme.palette.mode === "dark" ? "#2e344e" : "#cbced8"
          }`,
          transition: "border-color 0.5s, box-shadow 0.5s",
          boxShadow:
            theme.palette.mode === "dark"
              ? "rgba(149, 157, 165, 0.15) 0px 8px 14px"
              : "#0000003d 0px 3px 8px",

          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <form autoComplete="off" onSubmit={handleSubmit(onSubmit)} id="myForm">
          <CardContent>
            <Grid2 container>
              <Grid2 xs={12}>
                <Grid2
                  container
                  spacing={2}
                  sx={{
                    "& .MuiOutlinedInput-notchedOutline": {
                      borderColor:
                        theme.palette.mode === "dark" ? "#2e344e" : "#cbced8",
                      transition: "all 0.5s",
                    },
                    "& .MuiInputBase-root:hover .MuiOutlinedInput-notchedOutline":
                      {
                        borderColor: "#037fff",
                      },
                    "& .MuiInputBase-root:focus-within .MuiOutlinedInput-notchedOutline":
                      {
                        borderColor: "#037fff",
                        transition: "none",
                      },
                    "& .MuiFormHelperText-root": {
                      color: "#f44336",
                    },
                  }}
                >
                  <Grid2 xs={12} md={6}>
                    <TextField
                      fullWidth
                      size="small"
                      label="Full name"
                      variant="outlined"
                      type="text"
                      {...register("fullname", {
                        required: "Enter your fullname",
                        maxLength: 80,
                      })}
                      helperText={errors.fullname?.message}
                    />
                  </Grid2>

                  <Grid2 xs={12} md={6}>
                    <TextField
                      type="email"
                      {...register("email", {
                        required: "Enter a valid email address",
                        pattern: {
                          value: /^\S+@\S+$/i,
                          message: "Invalid email format",
                        },
                      })}
                      fullWidth
                      size="small"
                      sx={{
                        color: "#037fff",
                      }}
                      label="Email"
                      variant="outlined"
                      helperText={errors.email?.message}
                    />
                  </Grid2>

                  <Grid2 xs={12}>
                    <TextField
                      type="text"
                      {...register("subject", { required: "Enter a subject" })}
                      fullWidth
                      size="small"
                      sx={{
                        color: "#037fff",
                      }}
                      label="Subject"
                      variant="outlined"
                      helperText={errors.subject?.message}
                    />
                  </Grid2>

                  <Grid2 xs={12}>
                    <TextField
                      {...register("message", {
                        required: "Enter your message",
                      })}
                      fullWidth
                      multiline
                      rows={6}
                      size="small"
                      sx={{
                        color: "#037fff",
                      }}
                      label="Message"
                      variant="outlined"
                      helperText={errors.message?.message}
                    />
                  </Grid2>
                </Grid2>
              </Grid2>
            </Grid2>
          </CardContent>
          <CardActions
            sx={{
              alignItems: "end",
              flexDirection: "column",
            }}
          >
            {/* <ReCAPTCHA
                    sitekey={process.env.REACT_APP_RECAPTCHA_SITE_KEY}
                    theme={theme.palette.mode}
                    hl="en"
                /> */}

            <Button
              type="submit"
              variant="contained"
              fullWidth
              sx={{
                mt: 2,
                backgroundColor: "#037fff",
                color: "text.primary",
              }}
            >
              Send
            </Button>
          </CardActions>
        </form>
      </Card>
      <FormSnackbar onClose={handleClose} open={open} />
    </Grid2>
  );
};

export default ContactForm;
