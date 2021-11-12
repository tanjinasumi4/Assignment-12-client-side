import { Container, Grid, Typography } from '@mui/material';
import { fontSize } from '@mui/system';
import React from 'react';
import lipglose from '../../../images/SBX.mp4';

const ExploreHeader = () => {
    return (
        <div>
            <Container style={{marginTop:30}}>
                <Grid container spacing={2}>
                    <Grid item xs={12} md={6}>
                       <Typography variant="h5">
                       BEST OF GLAMOUR WORLD
                       </Typography>
                       <Typography variant="h3" style={{fontSize:50,fontWeight:400}}>
                       BEST MATTE LIPSTICKS OF 2021
                       </Typography>
                       <Typography variant="h5">
                       FROM LIQUID TO CRAYON LIPSTICKS
                       </Typography>
                       <Typography variant="h6">
                       Matte lipstick has broken out from the pack this year, and become a real star, thanks to new, flexible, hydrating formulations that cling to lips like a tint, without an ounce of dryness. From high-impact and bold to laid-back and low-key, these are the best-selling magically-matte lipsticks that have won over the world.
                       </Typography>
                       
                    </Grid>
                    <Grid item xs={12} md={6}>
                    <video src={lipglose} loop autoPlay="true" width="500" height="500"/>
                    
                    </Grid>
                </Grid>
            </Container>
        </div>
    );
};

export default ExploreHeader;