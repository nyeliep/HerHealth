import { Container, Stack } from "@mui/system";
import { onAuthStateChanged } from "firebase/auth";
import React, { useEffect } from "react";
import { useNavigate } from "react-router";
import Button from "../Buttons/button";
import Box from "@mui/system";
import Grid from "@mui/system/Unstable_Grid/Grid";
import Container from "@mui/system";
import Stack from "@mui/system";



const Alert = React.forwardRef(function Alert(props, ref){
    return<MuiAlert elevation={6} ref={ref} variant="filled" {...props}/>
});


function Reminder(){
    const label = {inputProps: {"aria-label": "Switch demo"}};
    const [open, setOpen] = React.useState(false);

    const handleClick = () =>{
        setOpen(true);
    };

    const handleClose =(event,reason)=>{
        if(reason === "clickaway"){
            return;
        }

        setOpen(false);
    };

    const userActivity =() =>{
        onAuthStateChanged(auth, (user)=>{
            if(user){
                // User is signed in, see docs for a list of available properties
				// https://firebase.google.com/docs/reference/js/firebase.User
                const uid = user.uid;
            }
            else{
                history("/")
            }
        });
    };
    const history = useNavigate();
    useEffect(()=>{
        userActivity();
    }, []);

    function handleLink(){
        setTimeout(()=>{
            history("/track");
        }, 2500);
    }

    return(
        <Box my={5}>
            <Container maxWidth="md" >
               <Grid container>
                <Grid 
                item
                xs={12}
                style={{display: "flex", justifyContent: "center"}}
                >
                   <Stack direction="row" alignItems="center">
                    <Typography
                    variant="h4"
                    style={{fontWeight: 800}}
                    align="center"
                    color="text.primary"
                    gutterBottom
                    >Nyeliep's Reminders</Typography>

                    <Box ml={2}>
                        <img
                        src={
                            "cloudinary"
                        }
                        alt="..."
                        className="clock-img"
                        style={{width: "40px"}}
                        />
                    </Box>
                   </Stack>
                </Grid>
                <Grid item xs={12}>
                    <Typography
                    style={{color: "#9867C5"}}
                    variant="h4"
                    align="center"
                    gutterBottom
                    >
                        <b>PERIOD & FERTILITY</b>
                    </Typography>
                </Grid>

                <Grid item xs={12}>
                    <Container maxWidth="sm">
                        <Stack
                        direction="row"
                        alignItems="center"
                        justifyContent="space-between"
                        >
                            <Typography
                            variant="h6"
                            align="center"
                            color="text.primary"
                            gutterBottom
                            style={{fontWeight: 400}}
                            >
                                Period is coming
                            </Typography>
                            <Box>
                                <Switch
                                {...label}
                                defaultChecked
                                style={{color:"@fff4081"}}
                                />
                            </Box>
                        </Stack>
                    </Container>
                </Grid>

                <Grid item xs={12}>
                    <Container maxWidth="sm">
                        <Stack
                        direction="row"
                        alignItems="center"
                        justifyContent="space-between"
                        >
                            <Typography
                            variant="h6"
                            align="center"
                            color="text.primary"
                            gutterBottom
                            style={{fontWeight: 400}}
                            >
                                Fertility is coming
                            </Typography>
                            <Box>
                                <Switch
                                {...label}
                                defaultChecked
                                style={{color:"@fff4081"}}
                                />
                            </Box>
                        </Stack>
                    </Container>
                </Grid>

                <Grid item xs={12}>
                    <Container maxWidth="sm">
                        <Stack
                        direction="row"
                        alignItems="center"
                        justifyContent="space-between"
                        >
                            <Typography
                            variant="h6"
                            align="center"
                            color="text.primary"
                            gutterBottom
                            style={{fontWeight: 400}}
                            >
                                Ovulation day
                            </Typography>
                            <Box>
                                <Switch
                                {...label}
                                defaultChecked
                                style={{color:"@fff4081"}}
                                />
                            </Box>
                        </Stack>
                    </Container>
                </Grid>

                <Grid item xs={12}>
                    <Container maxWidth="sm">
                        <Stack
                        direction="row"
                        alignItems="center"
                        justifyContent="space-between"
                        >
                            <Typography
                            variant="h6"
                            align="center"
                            color="text.primary"
                            gutterBottom
                            style={{fontWeight: 400}}
                            >
                                Input your period
                            </Typography>
                            <Box>
                                <Switch
                                {...label}
                                defaultChecked
                                style={{color:"@fff4081"}}
                                />
                            </Box>
                        </Stack>
                    </Container>
                </Grid>

                <Grid item xs={12}>
                    <Container maxWidth="sm">
                        <Stack
                        direction="row"
                        alignItems="center"
                        justifyContent="space-between"
                        >
                            <Typography
                            variant="h6"
                            align="center"
                            color="text.primary"
                            gutterBottom
                            style={{fontWeight: 400}}
                            >
                                Meditation reminder
                            </Typography>
                            <Box>
                                <Switch
                                {...label}
                                defaultChecked
                                style={{color:"@fff4081"}}
                                />
                            </Box>
                        </Stack>
                    </Container>
                </Grid>

                <Grid item xs={12}>
                    <Container maxWidth="sm">
                        <Stack
                        direction="row"
                        alignItems="center"
                        justifyContent="space-between"
                        >
                            <Typography
                            variant="h6"
                            align="center"
                            color="text.primary"
                            gutterBottom
                            style={{fontWeight: 400}}
                            >
                                Sleep early reminder
                            </Typography>
                            <Box>
                                <Switch
                                {...label}
                                defaultChecked
                                style={{color:"@fff4081"}}
                                />
                            </Box>
                        </Stack>
                    </Container>
                </Grid>

                <Grid item xs={12}>
                    <Container maxWidth="sm">
                        <Stack
                        direction="row"
                        alignItems="center"
                        justifyContent="space-between"
                        >
                            <Typography
                            variant="h6"
                            align="center"
                            color="text.primary"
                            gutterBottom
                            style={{fontWeight: 400}}
                            >
                                Drink water reminder
                            </Typography>
                            <Box>
                                <Switch
                                {...label}
                                defaultChecked
                                style={{color:"@fff4081"}}
                                />
                            </Box>
                        </Stack>
                    </Container>
                </Grid>

                <Grid item xs={12}>
                    <Container maxWidth="sm">
                       <Box mt={3} style={{textAlign: "center"}}>
                       <Button
                       onClick={()=>{
                        handleClick();
                        handleLink();
                       }}
                       variant="contained"
                       style={{backgroundColor: "#9867C5", color: "white"}}
                       >
                        Set Reminder
                       </Button>
                       </Box>

                       <Snackbar
                       open={open}
                       autoHideDuration={6000}
                       onclose={handleClose}
                       anchorOrigin ={{vertical: "bottom", horizontal: "center"}}
                       >
                        <Alert
                        onclose={handleClose}
                        severity="success"
                        sx={{width: "100%"}}
                        >
                            You will be reminded
                        </Alert>
                       </Snackbar>
                    </Container>
                </Grid>
               </Grid>
            </Container>
        </Box>
    );
}

export default Reminder