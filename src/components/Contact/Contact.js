import React from 'react';
import { Container, Grid, Button } from '@mui/material';
import { GitHub, Email, LinkedIn } from '@mui/icons-material';

const Contact = () => {
  return (
    <Container style={{ marginTop: '2rem',  background:"black",  maxWidth:"100%"}}>
      <Grid container spacing={2} justifyContent="center" alignItems="center">
        <Grid item>
          <Button
            startIcon={<Email style={{ marginRight: '0.5rem' }} />}
            style={{ marginBottom: '1rem', color:"green"}}
            href="mailto:krishnamodi2000@gmail.com"
          />
        </Grid>
        <Grid item>
          <Button
            startIcon={<GitHub style={{ marginRight: '0.5rem', color:"green"}} />}
            style={{ marginBottom: '1rem' }}
            href="https://github.com/krishnamodi2000"
            target='_blank'/>
        </Grid>
        <Grid item>
          <Button
            startIcon={<LinkedIn style={{ marginRight: '0.5rem', color:"green" }} />}
            style={{ marginBottom: '1rem' }}
            href="https://www.linkedin.com/in/krishnamodi2000"
            target="_blank"/>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Contact;
