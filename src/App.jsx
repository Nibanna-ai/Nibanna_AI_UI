import React from "react";
import {Typography, AppBar, Card, CardActions, CardContent, CardMedia, CssBaseline, Grid, Toolbar, Container} from '@material-ui/core';
import {PhotoCamera} from '@material-ui/icons';
//import PhotoCameraIcon from '@mui/icons-material/PhotoCamera';
import useStyles from "./styles";

const cards = [1,2,3,4]
//const videos = ["https://www.youtube.com/embed/UtDtA8EX-fw","https://www.youtube.com/embed/5tB9C9Ae1_g","https://www.youtube.com/embed/Oh5ii6R6LTM","https://www.youtube.com/embed/U3S0ui8pIIU","https://www.youtube.com/embed/Sc0YNsY_Xdc","https://www.youtube.com/embed/Te7U6ZkwIkI","https://www.youtube.com/embed/ZLLnxq_MbJM","https://www.youtube.com/embed/J2VcZWypI9c?start=1033&end=200"]
const videos_array = [
    {
        video:"https://www.youtube.com/embed/UtDtA8EX-fw",
        teacher: "Ayya Khema",
        subject: "1 hour Body Scan guided meditation"
    },
    {
        video:"https://www.youtube.com/embed/5tB9C9Ae1_g",
        teacher: "S. N. Goenka",
        subject: "1 hour Vipassana guided meditation"
    },
    {
        video:"https://www.youtube.com/embed/U3S0ui8pIIU",
        teacher: "S. N. Goenka",
        subject: "20 minutes Loving Kindness guided meditation"
    },
    {
        video:"https://www.youtube.com/embed/Sc0YNsY_Xdc",
        teacher: "Ayya Khema",
        subject: "15 minutes Loving Kindness guided meditation"
    },
    {
        video:"https://www.youtube.com/embed/Oh5ii6R6LTM",
        teacher: "S. N. Goenka",
        subject: "10 Minutes Anna Panna (Breath Observation) guided meditation"
    },
    {
        video:"https://www.youtube.com/embed/ZLLnxq_MbJM",
        teacher: "Bhikku Bodhi",
        subject: "What is Meditation?"
    },
    {
        video:"https://www.youtube.com/embed/J2VcZWypI9c",
        teacher: "Ramana Maharishi",
        subject: "Who Am I?"
    },
    {
        video:"https://www.youtube.com/embed/Te7U6ZkwIkI",
        teacher: "Buddha",
        subject: "Buddha's Teachings in the Dhammapada"
    },
]
const App = () => 
{
    const classes = useStyles();
    return (
        <>
         <CssBaseline/>
         <main>
             <div className={classes.container}>
                 <Container maxWidth="xl" style={{marginTop:'84px'}}>
                     <Typography variant="h2" align="center" color="textPrimary" gutterBottom style={{marginBottom:'64px'}}>
                         Meditation Videos
                     </Typography>
                 </Container>
             </div>
             <Container className={classes.cardGrid} maxWidth="xl" align="center">
                 <Grid container spacing={10} justify="center">
                     {videos_array.map((video)=>(
                     <Grid item xs={12} sm={6} style={{paddingTop: "40px"}}>
                         <Card className={classes.card}>
                             <CardMedia className={classes.cardMedia} component="iframe" image={video.video}/>
                             <CardContent className={classes.cardContent}>
                                 <Typography gutterBottom variant="h5">
                                     {video.teacher}
                                 </Typography>
                                 <Typography>
                                 {video.subject}
                                 </Typography>
                             </CardContent>
                         </Card>
                     </Grid>
                     ))}
                 </Grid>
                 <Typography gutterTop gutterBottom variant="h5" style={{paddingTop: "64px"}}>
                     May All Beings Be Happy, May All Beings Be Peaceful
                </Typography>
                <Typography gutterBottom variant="h5">
                     ~S. N. Goenka
                </Typography>
             </Container>
         </main>
        </>
    )
}

export default App;