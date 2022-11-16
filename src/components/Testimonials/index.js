import { useState } from "react";
import Loader from "react-loaders";
import AnimatedLetters from "../AnimatedLetters";
import "./index.scss"

import  Box  from "@mui/material/Box";
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';

const Testimonials = () => {
    const [letterClass, setLetterClass] =useState('text-animate')

    return (
        <>
        <div className="container testimonials-page">
            <div className="text-zone">
                <h1>
                    <AnimatedLetters letterClass={letterClass} strArray={["T","e","s","t","i","m","o","n","i","a","l","s"]} idx={15}/>
                </h1>
                <Box>
      <Grid container spacing={2}>
        <Grid item xs={6}>
        <Card>
            <CardContent>
                this is the card i want to use
            </CardContent>
        </Card>
        </Grid>
        <Grid item xs={6}>
        <Card>
            <CardContent>
                this is the card i want to use
            </CardContent>
        </Card>
        </Grid>
        <Grid item xs={3}>
        <Card>
            <CardContent>
                this is the card i want to use
            </CardContent>
        </Card>
        </Grid>
        <Grid item xs={3}>
        <Card>
            <CardContent>
                this is the card i want to use
            </CardContent>
        </Card>
        </Grid>
        <Grid item xs={3}>
        <Card>
            <CardContent>
                this is the card i want to use
            </CardContent>
        </Card>
        </Grid>
        <Grid item xs={3}>
        <Card>
            <CardContent>
                this is the card i want to use
            </CardContent>
        </Card>
        </Grid>
      </Grid>
    </Box>
            </div>
        </div>
        <Loader type="pacman" />
        </>
    )
}

export default Testimonials;