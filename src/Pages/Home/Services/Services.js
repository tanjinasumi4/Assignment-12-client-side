import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Container } from '@mui/material';
import Typography from '@mui/material/Typography';
import Service from '../Service/Service';
import lip1 from '../../../images/lipstick1.jpg';
import lip2 from '../../../images/lipstick2.jpg';
import lip3 from '../../../images/lipstick3.jpg';
import lip4 from '../../../images/lipstick4.jpg';
import lip5 from '../../../images/lipstick5.jpg';
import lip6 from '../../../images/lipstick6.jpg';

const services = [
    {
        name: 'COLOR SENSATIONAL',
        description: 'Dubbed Best Classic Red Lipstick Shade of 2020 in the Allure Best of Beauty Awards. Made For All Lipstick makeup features specially selected and obsessively tested pigments that make these universal lipstick shades looks sensational on all complexions.',
        img: lip1

    },
    {
        name: 'INK CRAYON LIPSTICK',
        description: 'Dubbed Best Lip Crayon of 2020 in the Allure Best of Beauty Awards. Super Stay® Ink Crayon is a long-lasting lip crayon available in a range of 23 vibrant matte shades that last up to 8 hours.Made For All Lipstick makeup features specially selected and obsessively tested pigments that make these universal lipstick shades looks sensational.',
        img: lip2

    },
    {
        name: 'MATTE INK LIQUID LIPSTICK INTO THE ZODIAC',
        description: 'SuperStay Matte Ink™ Liquid Lipstick gives you a flawless matte finish in a range of super saturated shades. Made For All Lipstick makeup features specially selected and obsessively tested pigments that make these universal lipstick shades looks sensational on all complexions.',
        img: lip3

    },
    {
        name: 'INK CRAYON LIPSTICK INTO THE ZODIAC',
        description: 'INK CRAYON LIPSTICK INTO THE ZODIAC is a long-lasting lip crayon available in a range of 32 vibrant matte shades that last up to 8 hours. Made For All Lipstick makeup features specially selected and obsessively tested pigments that make these universal lipstick shades looks sensational on all.',
        img: lip4

    },
    {
        name: '2-STEP LIQUID LIPSTICK MAKEUP',
        description: 'Super Stay 24 2-Step Liquid Lipstick Makeup. This long wearing liquid lipstick won’t cake, flake, or dry.Made For All Lipstick makeup features specially selected and obsessively tested pigments that make these universal lipstick shades looks sensational on all complexions.',
        img: lip5

    },
    {
        name: 'SLIM LIPSTICK MAKEUP',
        description: 'Color Sensational Ultimatte slim lipstick delivers more intense color with an extreme matte finish and a comfortable, lightweight feel.Made For All Lipstick makeup features specially selected and obsessively tested pigments that make these universal lipstick shades looks sensational on all complexions.It will keep smooth and soft on your lips.',
        img: lip6

    }
]

const Services = () => {
    return (
        <Box sx={{ flexGrow: 1 }}>
        <Container>
        <Typography sx={{ fontWeight: 500, m: 5, color: 'secondary.main' }} variant="h4" component="div">
              OUR SERVICES
        </Typography>
        <Typography sx={{ fontWeight: 600,m: 2 }} variant="h6" component="div">
              Look At A Glance Our Services
        </Typography>
        <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
        {
            services.map(service =><Service
                 key={service.name}
                 service={service}
            ></Service>)
        }
        </Grid>
        </Container>
      </Box>
    );
};

export default Services;