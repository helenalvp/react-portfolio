import { useState } from "react";
import Loader from "react-loaders";
import AnimatedLetters from "../AnimatedLetters";
import "./index.scss"


import  Box  from "@mui/material/Box";
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';


const Projects = () =>{
    const [letterClass, setLetterClass] =useState('text-animate')

     //   useEffect(()=>{
    //     return setTimeout(()=>{
    //         setLetterClass('text-animate-hover')
    //     }, 3000)
    //     },[] )

    return (
        <>
        <div className="container projects-page">
            <div className="text-zone">
                <h1>
                    <AnimatedLetters letterClass={letterClass} strArray={['P','r','o','j','e','c','t','s']} idx={15}/>
                </h1>
                <Box>
      <Grid container spacing={2}>
        <Grid item xs={6}>
        <Card>
            <CardContent>
                Insert Project Here
            </CardContent>
        </Card>
        </Grid>
        <Grid item xs={6}>
        <Card>
            <CardContent>
            Insert Project Here
            </CardContent>
        </Card>
        </Grid>
        <Grid item xs={3}>
        <Card>
            <CardContent>
            Insert Project Here
            </CardContent>
        </Card>
        </Grid>
        <Grid item xs={3}>
        <Card>
            <CardContent>
            Insert Project Here
            </CardContent>
        </Card>
        </Grid>
        <Grid item xs={3}>
        <Card>
            <CardContent>
            Insert Project Here
            </CardContent>
        </Card>
        </Grid>
        <Grid item xs={3}>
        <Card>
            <CardContent>
            Insert Project Here
            </CardContent>
        </Card>
        </Grid>
      </Grid>
    </Box>
            </div>
            <Loader type="pacman" />
        </div>
        </>
    )
};

export default Projects;