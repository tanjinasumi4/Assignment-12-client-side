import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import banner from '../../../images/sitebanner.jpg';
import { Button, Typography } from '@mui/material';



const Banner = () => {
    return (
        <Box style={{marginTop: 30}} sx={{ flexGrow: 1 }}>
             <Typography variant="h3">
               GLAMOUR WORLD 
            </Typography>

            <img src={banner} alt="" />
           
            <Typography variant="h6" style={{fontSize:20,fontWeight:300, color:'black'}}>
                Welcome to the Glamour world.Glamour world has lipstick, from matte to high-shine, to play up your pout. Go from dramatic reds or purples for a night out to subdued nudes or pinks for a job interview. With a shade range as wide as ours, there’s a color to complement every skin tone. Now, amp up those luscious lips with our traditional and liquid lipstick collection! 
            </Typography>
            <Button variant="contained">Learn more</Button>
            
      {/* <Grid container spacing={2}>
      
        <Grid item xs={12} md={6}>
       
        </Grid>
        <Grid item xs={12} md={7}>
        
        </Grid>
        
      </Grid> */}
    </Box>
    );
};

export default Banner;