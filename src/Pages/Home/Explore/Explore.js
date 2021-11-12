import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import lady from '../../../images/Flawless.jpg';
import cover from '../../../images/fall-cover-large.png';
import { Button, Typography } from '@mui/material';

const coverBg = {
    background: `url(${cover})`,
    marginTop: 150
}

const Explore = () => {
    return (
        <Box style={coverBg} sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <img
          style={{width:400, marginTop: '-110px'}}
           src={lady} alt="" />
        </Grid>
        <Grid item xs={12} md={6} sx={{display:'flex',justifyContent:'flex-start'}}>
           <Box>
           <Typography variant="h6">
              FIND A LIPSTICK
              </Typography>
              <Typography variant="h4">
              Explore here for more lipstick
              </Typography>
              <Typography variant="h6" style={{fontSize:30,fontWeight:400}}>
              Explore here for more lipstick
              </Typography>
              <Button variant="contained">Explore here</Button> 
           </Box>   
        </Grid>
        </Grid>
        
    </Box>
    );
};

export default Explore;