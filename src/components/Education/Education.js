import React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActionArea from '@mui/material/CardActionArea';
import { Link } from 'react-router-dom'; 

import MUJImage from '../../assets/images/MUJ_logo.jpeg'
import DALImage from '../../assets/images/DAL_logo.png'

const certificates = [
  {
    id: 1,
    title: 'Master of Applied Computer Science In Course Award',
    description: `I was awarded as one of the top-performing MACS student, recognizing my exceptional performance in the core MACS courses with grades of A+. I am grateful for the Faculty's recognition and the financial award which I recieved.`,
    courseraLink: ``,
  },
  {
    id: 2,
    title: 'Machine Learning Specialization',
    description: `In this specialization I have learned to build and train machine learning models using NumPy, 
    scikit-learn, and TensorFlow for various tasks like prediction, classification, and recommendation systems.
    I have gained an understanding of the best practices in ML development, including unsupervised learning techniques 
    like clustering and anomaly detection, as well as deep learning methods for content-based recommendation and reinforcement learning models.`,
    courseraLink: 'https://www.coursera.org/account/accomplishments/specialization/JRHKE4UFC8NE',
  },
  {
    id: 3,
    title: 'AWS Certified Cloud Practitioner',
    description: `This certification verifies my readiness to enter the cloud industry with the foundational knowledge of AWS Cloud services and concepts. 
    It served as a solid starting point to gain some foundational cloud literacy, as it allowed me to gain a high-level understanding of AWS terminology and services.`,
    courseraLink: 'https://www.credly.com/badges/a3f95cc8-8f9b-4260-bb4e-9f8844348dd9/linked_in_profile',
  },
  {
    id: 4,
    title: 'Google Data Analytics Certificates',
    description: `I completed 7 of the 8 courses on the Google Data Analytics Certificate program, mastering R programming, SQL, Python, and Tableau, among other skills. 
     I learned data preparation, analysis, visualization, and gained practical experience in applying AI techniques to real-world scenarios, setting me up for a successful career in data analytics.`,
    courseraLink: 'https://drive.google.com/drive/folders/1zRabvCO9i2o1sdbO0uzctf2eosXco0RB?usp=sharing',
  },
  {
    id: 5,
    title: 'University of Michigan Python Courses',
    description: `Through the University of Michigan's Python courses, 
    I've understood Python programming fundamentals, data structures, database management, accessing web data, and utilizing APIs.
    These skills include writing code, managing data structures, interacting with databases, and extracting information from websites.`,
    courseraLink: 'https://drive.google.com/drive/folders/1gg0Y1B5R7BFy-mJmW-tr6-ztRNKW5RHh?usp=sharing',
  },
  {
    id: 6,
    title: 'Figma Basics',
    description: ` "Build an E-commerce Dashboard with Figma" course on Coursera's Project Network covered Figma basics, 
    including interface navigation, frames, components, text and color styles, exporting, and sharing functionalities. 
   I gained valuable skills in designing using Figma.`,
    courseraLink: 'https://coursera.org/share/c3d63552e890a4253de3f7e4531e450b',
  },
  {
    id: 7,
    title: 'Basics of Data Management and Analysis',
    description: `I implemented R programming concepts, statistical software configuration, and data collection using R profiler in Johns Hopkins University Course. 
    I also sharpened my Excel skills for business with Macquarie University course and mastered database management essentials, including database design and SQL, with the University of Colorado System course.`,
    courseraLink: 'https://drive.google.com/drive/folders/1NcQmqzUI02MKj8S5cOg-e8_9HC2wYfha?usp=sharing',
  },
  {
    id: 8,
    title: 'University of Michigan Web Development Courses',
    description: `I have learned CSS3, HTML5, SQL, responsive design with Bootstrap, and JavaScript interactivity through University of Michigan's courses. 
    These skills include styling web content, creating responsive layouts, querying databases, and adding interactivity to web pages, 
    preparing me for roles in web design and development.`,
    courseraLink: 'https://drive.google.com/drive/folders/1RgboUjvv2dZ2TJXniWOEIytdDQ7x8Brh?usp=sharing',
  },
];

const Education = () => {
  return (
    <>
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      paddingTop="2rem"
      margin="1rem"
    >
      <Grid container justify="center" alignItems="center">
      <Grid item  xs={12} >
          <Typography variant='h3' sx={{textAlign:"center", color:"green", display:{sm:"none"}, padding:"2rem"}}>
            Education
          </Typography>
        </Grid>
      <Grid item xs={12} sm={6} justify="center" alignItems="center">
        <Typography gutterBottom padding="2rem" style={{display:"flex", justifyContent:"center"}} >
          <img src={DALImage} alt="Dalhousie University Logo" style={{ maxWidth: '100%', height: '50%' }} />
        </Typography>
        </Grid>
        <Grid item xs={12} sm={6} justify="center"  alignItems="center" paddingBottom="2rem">
            <Typography variant="body1" >
              <b>Masters of Applied Computer Science</b>  
            </Typography>
            <Typography variant="body1" >
               <i>January 2023 - April 2024</i> 
            </Typography>
            <Typography variant="body1" >
                Grade: 4.30/4.30
            </Typography>
            <Typography variant="body1" >
               <b>Topics Covered: </b> 
               <i>Software Development, Data Managemenent and Warehousing, Web Development, Cloud Computing, Serverless Computing, 
                Cloud Architecure, Networks, Privacy in IT, Communicating Computer Science Ideas</i>
            </Typography>
            <Typography variant="body1" >
               <b>Major Project Topic: </b> 
               Enhanced Recommeder Systems using Large Language Models
            </Typography>
        </Grid>
        <Grid item xs={12} sm={6} justify="center" alignItems="center">
        <Typography gutterBottom  padding="2rem"style={{display:"flex", justifyContent:"center"}}>
          <img src={MUJImage} alt="Manipal University Jaipur Logo" style={{ maxWidth: '100%', height: '50%' }} />
        </Typography>
        </Grid>
        <Grid item xs={12} sm={6} justify="center"  alignItems="center" paddingBottom="2rem">
            <Typography variant="body1" >
              <b>  Bachelors of Technology in Computer Science and Engineering </b>
            </Typography>
            <Typography variant="body1">
               <i> July 2018 - July 2022 </i>
            </Typography>
            <Typography variant="body1" >
                Grade: 8.95/10
            </Typography>
            <Typography variant="body1" >
               <b>Topics Covered: </b> 
               <i>Software Engineering, Web Development, Data Structure, Design and Analysis of Algorithms, Operating Systems, 
                Relational Data Managemenent, Computer Graphics, Machine Learning, Human Computer Interaction, Big Data Analysis, Object Oriented Programming </i>
            </Typography>
            <Typography variant="body1" >
               <b>Major Project Topic: </b> 
               Weather Based Crop Prediction in India using Big Data Analysis
            </Typography>
        </Grid>
        
      </Grid>
    </Box>
    <Box
    display="flex"
    justifyContent="center"
    alignItems="center"
    margin="1rem"
  >
    <Grid container spacing={3}>
      {certificates.map((certificate) => (
        <Grid item xs={12} sm={12} md={6} lg={3} key={certificate.id}>
          <Card sx={{height: {lg:"350px", md:"250px", sm:"200px"}}}>
            <CardActionArea component={Link} to={certificate.courseraLink} target="_blank">
              <CardContent>
                <Typography gutterBottom variant="h5" component="div" color="green">
                  {certificate.title}
                </Typography>
                <Typography variant="body2" color="black">
                  {certificate.description}
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
      ))}
    </Grid>
  </Box>
  </>
  );
};

export default Education;
