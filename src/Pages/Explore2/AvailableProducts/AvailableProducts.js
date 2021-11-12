import React from 'react';
import lip7 from '../../../images/lipstick1.jpg';
import lip8 from '../../../images/lipstick2.jpg';
import lip9 from '../../../images/lipstick3.jpg';
import lip10 from '../../../images/lipstick4.jpg';
import lip11 from '../../../images/lipstick5.jpg';
import lip12 from '../../../images/lipstick6.jpg';
import lip13 from '../../../images/lipstick7.jpg';
import lip14 from '../../../images/lipstick8.jpg';
import lip15 from '../../../images/lipstick9.jpg';
import lip16 from '../../../images/lipstick10.jpg';
import { Container, Grid } from '@mui/material';
import Booking from '../Booking/Booking';


const bookings = [
    {
        id: 1,
        name: 'COLOR SENSATIONAL',
        description: 'Dubbed Best Classic Red Lipstick Shade of 2020 in the Allure Best of Beauty Awards. Made For All Lipstick makeup features specially selected and obsessively tested pigments that make these universal lipstick shades looks sensational on all complexions.',
        Price: '40.66 $',
        space:25,
        img: lip7
    },
    {
        id: 2,
        name: 'INK CRAYON LIPSTICK',
        description: 'Dubbed Best Classic Red Lipstick Shade of 2020 in the Allure Best of Beauty Awards. Made For All Lipstick makeup features specially selected and obsessively tested pigments that make these universal lipstick shades looks sensational on all complexions.',
        Price: '75.89 $',
        space:8,
        img: lip8
    },
    {
        id: 3,
        name: 'MATTE INK LIQUID LIPSTICK INTO THE ZODIAC',
        description: 'Dubbed Best Classic Red Lipstick Shade of 2020 in the Allure Best of Beauty Awards. Made For All Lipstick makeup features specially selected and obsessively tested pigments that make these universal lipstick shades looks sensational on all complexions.',
        Price: '98.66 $',
        space:16,
        img: lip9
    },
    {
        id: 4,
        name: 'INK CRAYON LIPSTICK INTO THE ZODIAC',
        description: 'Dubbed Best Classic Red Lipstick Shade of 2020 in the Allure Best of Beauty Awards. Made For All Lipstick makeup features specially selected and obsessively tested pigments that make these universal lipstick shades looks sensational on all complexions.',
        Price: '34.67 $',
        space:6,
        img: lip10
    },
    {
        id: 5,
        name: '2-STEP LIQUID LIPSTICK MAKEUP',
        description:'Dubbed Best Classic Red Lipstick Shade of 2020 in the Allure Best of Beauty Awards. Made For All Lipstick makeup features specially selected and obsessively tested pigments that make these universal lipstick shades looks sensational on all complexions.',
        Price: '55.99 $',
        space:21,
        img: lip11
    },
    {
        id: 6,
        name: 'SLIM LIPSTICK MAKEUP',
        description: 'Dubbed Best Classic Red Lipstick Shade of 2020 in the Allure Best of Beauty Awards. Made For All Lipstick makeup features specially selected and obsessively tested pigments that make these universal lipstick shades looks sensational on all complexions.',
        Price: '60.44 $',
        space:25,
        img: lip12
    },
    {
        id: 7,
        name: 'SHEER PINK LIPGLOSS',
        description: 'Dubbed Best Classic Red Lipstick Shade of 2020 in the Allure Best of Beauty Awards. Made For All Lipstick makeup features specially selected and obsessively tested pigments that make these universal lipstick shades looks sensational on all complexions.',
        Price: '72.69 $',
        space:9,
        img: lip13
    },
    {
        id: 8,
        name: 'SHINY BERRY LIPSTICKS',
        description: 'Dubbed Best Classic Red Lipstick Shade of 2020 in the Allure Best of Beauty Awards. Made For All Lipstick makeup features specially selected and obsessively tested pigments that make these universal lipstick shades looks sensational on all complexions.',
        Price: '90.66 $',
        space:14,
        img: lip14
    },
    {
        id: 9,
        name: 'TINTED LIP BALMS',
        description: 'Dubbed Best Classic Red Lipstick Shade of 2020 in the Allure Best of Beauty Awards. Made For All Lipstick makeup features specially selected and obsessively tested pigments that make these universal lipstick shades looks sensational on all complexions.',
        Price: '50.78 $',
        space:20,
        img: lip15
    },
    {
        id: 10,
        name: 'NUDE LIPSTICKS',
        description: 'Dubbed Best Classic Red Lipstick Shade of 2020 in the Allure Best of Beauty Awards. Made For All Lipstick makeup features specially selected and obsessively tested pigments that make these universal lipstick shades looks sensational on all complexions.',
        Price: '80.92 $',
        space:10,
        img: lip16
    }
]

const AvailableProducts = () => {
    return (
        <Container>
            <h2>Available products</h2>
            <Grid container spacing={2}>      
                {
                    bookings.map(booking => <Booking
                       key={booking.id}
                       booking={booking}
                    >

                    </Booking>)
                }
            </Grid>
            </Container>
    );
};

export default AvailableProducts;