import { Alert, Snackbar } from '@mui/material';



const FormSnackbar = ({ open, onClose }) => {

    return (
        <Snackbar
            open={open}
            autoHideDuration={6000}
            onClose={onClose}
            sx={{
                position: "absolute",
                "& .MuiPaper-root": {
                    zIndex: "10000",
                }
            }}
        >
            <Alert
            sx={{
                backgroundColor: "success.main",
                color:"text.primary",
                width: '100%',
                "& .MuiSvgIcon-root":{
                    color:"text.primary",
                }
            }}
             onClose={onClose} severity="success" >
                Your message has been sent successfully.
            </Alert>
        </Snackbar>
    )
}

export default FormSnackbar;