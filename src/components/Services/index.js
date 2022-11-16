import { useState } from "react";
import Loader from "react-loaders";
import AnimatedLetters from "../AnimatedLetters";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import "./index.scss"

import  Box  from "@mui/material/Box";
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { faCameraRetro, faImage, faUsers } from "@fortawesome/free-solid-svg-icons";

const Services = () => {
    const [letterClass, setLetterClass] =useState('text-animate')

    const linkColor = "#4d4d4e"
    
     //   useEffect(()=>{
    //     return setTimeout(()=>{
    //         setLetterClass('text-animate-hover')
    //     }, 3000)
    //     },[] )

    return (
        <>
        <div className="container services-page">
            <div className="text-zone">
                <h1>
                <AnimatedLetters letterClass={letterClass} strArray={['S','e','r','v','i','c','e','s']} idx={15}/>
                </h1>
                <Box>
      <Grid container spacing={2}>
        <Grid item xs={4}>

        <Card sx={{ maxWidth: 345}}>
        <CardContent>
        <Typography gutterBottom variant="h2" component="div">
           <FontAwesomeIcon icon={faUsers} color={linkColor}/>
          </Typography>
          <Typography gutterBottom variant="h3" component="div">
            Service 1
          </Typography>
          <Typography variant="h5" gutterBottom>
            Service 1 explanation and detail
          </Typography>
        </CardContent>
        </Card>
        </Grid>
        <Grid item xs={4}>
        <Card sx={{ maxWidth: 345}}>
        <CardContent>
        <Typography gutterBottom variant="h2" component="div">
           <FontAwesomeIcon icon={faCameraRetro} color={linkColor}/>
          </Typography>
          <Typography gutterBottom variant="h3" component="div">
            Service 2
          </Typography>
          <Typography variant="h5" gutterBottom>
            Service 2 explanation and detail
          </Typography>
        </CardContent>
        </Card>
        </Grid>
        <Grid item xs={4}>
        <Card sx={{ maxWidth: 345}}>
        <CardContent>
        <Typography gutterBottom variant="h2" component="div">
           <FontAwesomeIcon icon={faImage} color={linkColor}/>
          </Typography>
          <Typography gutterBottom variant="h3" component="div">
            Service 3
          </Typography>
          <Typography variant="h5" gutterBottom>
            Service 3 explanation and detail
          </Typography>
        </CardContent>
        </Card>
        </Grid>
        
      </Grid>
    </Box>
            </div>    
        </div>
        <Loader type="pacman" /></>
    )
}


export default Services;