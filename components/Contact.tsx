import Typography from "@mui/material/Typography";
import {Snackbar,Alert} from "@mui/material";
import Box from "@mui/material/Box";
import React, { useState } from "react";
import { COLORS } from "@/styles/colors";
import FormControl from "@mui/material/FormControl";
import TextField from "@mui/material/TextField";
import Container from "@mui/material/Container";
import Nav from "./Nav";
import { useTheme } from "@mui/material";
import  useMediaQuery  from "@mui/material/useMediaQuery";
import Button from "@mui/material/Button";
import { useFormik } from "formik";
import emailjs from "emailjs-com";


const Contact = () => {
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.down("sm"));
    const [open,setOpen] = useState<boolean>(Boolean(false));

    const handleOpen = () =>{
        setOpen(true);
    }

    const handleClose = (event?: React.SyntheticEvent | Event,
        reason?:string
    ) => {
        if(reason === "clickaway"){
            return;
        }
        setOpen(false);
    }


    const formik = useFormik({
        initialValues:{
            name:"",
            email:"",
            message:""
        },
        onSubmit:(value,{resetForm})=>{
            const template = {
                name:value.name,
                email:value.email,
                message:value.message
            };
            emailjs.
                send("service_v784lzd","template_slo77vo",template,"_JM29pjGDsjLP7b-z").then((res)=>{
                    if(res.status === 200) {
                        handleOpen();
                        resetForm();
                    }
                }).catch((error)=>{
                        console.log("error sending mail",error);
                        alert("Failed to send");
                    })
        }
    }); 
   
    return (
        <Container maxWidth="xl" sx={{backgroundColor:COLORS.darkGray,paddingBottom:"1.75rem"}}>
            <Snackbar
                open={open}
                autoHideDuration={4000}
                onClose={handleClose}
                anchorOrigin={{vertical:"top",horizontal:"right"}}
            >
                <Alert 
                    onClose={handleClose}
                    severity="success"
                    sx={{width:"100%"}}
                    variant="filled"
                >
                    Message sent successfully
                </Alert>
            </Snackbar>
            <Container maxWidth="lg">
                <Box sx={{
                    textAlign:matches?"center":"left", 
                    padding:"3.75rem 0",
                    display:"flex",
                    flexDirection:matches?"column":"row",
                    justifyContent:matches?"none":"space-between"
                    }}
                >

                    <Box sx={{width:matches?"auto":"27.8125rem"}}>
                        <Typography variant="h2" sx={{fontSize:matches?"auto":"5.5rem"}}>Contact</Typography>
                        <Typography variant={matches?"body1":"body2"}>
                            I would love to hear about anything you have to say. Please fill in the form and I'll get back to you as soon as possible.
                        </Typography>
                    </Box>
                    <FormControl sx={{width:matches?"auto":"27.8125rem"}}
                    component="form"
                    onSubmit={formik.handleSubmit}
                    noValidate>
                        <TextField variant="standard" label="Name" id="name" {...formik.getFieldProps('name')}></TextField>
                        <TextField variant="standard" label="Email" id="email"{...formik.getFieldProps('email')} ></TextField>
                        <TextField variant="standard" label="Message" id="message" {...formik.getFieldProps('message')}multiline rows={4}></TextField>
                        <Button  sx={{ margin: "2rem 0 1rem 0" }} type="submit">
                            Send Message
                        </Button>
                    </FormControl>
                </Box>
                    <hr style={{width:"100%",margin:"1rem auto", }}></hr>
                    <Nav/>
            </Container>
        </Container>

    );
};

export default Contact;