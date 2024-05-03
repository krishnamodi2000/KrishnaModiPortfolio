import React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import AboutMeImage from '../../assets/images/telecommuting-concept-illustration/3639686_Freepik.png';

const About = () => {
  return (
    <div style={{ backgroundColor: 'black', padding:"1rem"}}>
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      margin="1rem"
      // maxWidth="100%"
      bgColor="white"
    >
      <Grid container justify="center" alignItems="center">
        <Grid item  xs={12} >
          <Typography variant='h3' sx={{textAlign:"center", color:"green", display:{sm:"none"}}}>
            About Me
          </Typography>
        </Grid>
        <Grid item xs={12} sm={6} justify="center" alignItems="center">
          <img src={AboutMeImage} alt="About Me" style={{ maxWidth: '100%', height: '100%' }} />
        </Grid>
        <Grid item xs={12} sm={6} justify="center" alignItems="center">
          <Typography variant="body1"
            sx={{
              lineHeight: 1.5, 
              maxWidth: '100%',
              color:"white"
            }}
          >
            <br />
            Welcome to my little corner where code meets creativity and music fuels my adventures.
            <br />
            <br />
            As a passionate Computer Science graduate, I work on turning lines of code into solutions and uncovering the hidden insights within a vast land of data. From developing full-stack applications to navigating the clouds of cloud computing, I'm your go-to person for all things tech.
            <br />
            <br />
            But hey, I'm not just a coder! When I'm not busy debugging or optimizing, you'll find me exploring the latest trends in social media or savoring a good cup of coffee while browsing through mystery and backroom videos.
            <br />
            <br />
            Come along, I invite you to visit my projects, experiences, and insights gained from them. Each endeavor represents a journey of bridging the gap between complexity and simplicity, one project at a time. So, grab your favorite beverage, and take a stroll through my digital playground!
          </Typography>
        </Grid>
      </Grid>
    </Box>
    </div>
  );
};

export default About;
