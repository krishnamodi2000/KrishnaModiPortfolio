
import React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActionArea from '@mui/material/CardActionArea';
import { Link } from 'react-router-dom'; 

import Skills from '../../assets/images/skills.png';

const Projects = () => {

  const projects = [
    {
      id: 1,
      title: 'Enhanced Recommender Systems using Large Language Models',
      description: `EnReLLM is a research that focuses was on enhancing recommendation accuracy and contextual understanding using prompting strategies, 
      showcasing better performance compared to traditional Recommender System libraries. It explores the potential of LLM integration for personalized and effective recommendation scenarios.`,
      githubLink: 'https://github.com/krishnamodi2000/EnReLLM',
    },
    {
      id: 2,
      title: 'Migrating MERN E-Commerce Cloud Project',
      description: `This is a cloud migration project where I used AWS, Python, and Bash to adhere to the AWS Well-Architected Framework, achieving a high monthly uptime with AWS CloudFront. 
      The project streamlined code deployment with AWS CodeDeploy, ensuring a smooth transition and enhancing development efficiency.`,
      githubLink: 'https://github.com/krishnamodi2000/CloudTermProject',
    },
    {
      id: 3,
      title: 'Trivia Titans',
      description: `This is a serverless multi-player quizzing platform that uses AWS, GCP, Python, and ReactJS. I have worked on developing Admin Operations using AWS lambdas, DynamoDB, and SQS. I also worked on getting a  high accuracy rate in question categorization with GCP Natural Language API and enhanced admin experience by leveraging GCP Looker Studio for data-driven decision-making.`,
      githubLink: 'https://github.com/krishnamodi2000/TriviaTitans',
    },
    {
      id: 4,
      title: 'Project Task Management',
      description: `This is a cloud project where I have used AWS, Python, and ReactJS to create a scalable task management platform with real-time updates. It is implemented using CloudFormation to cut infrastructure deployment duration, enhance efficiency, and boost project agility and reliability while reducing development time for new features.`,
      githubLink: 'https://github.com/krishnamodi2000/ProjectTaskManagement',
    },
    {
      id: 5,
      title: 'Vogue Manic',
      description: `This is a MERN-based fashion e-commerce platform, where I have worked on user mamagement and implemented JWT for secure user authentication. This has an organized MVC architecture for scalability, with over 9 API endpoints. I have collaborated with a team of 5 using Agile and Git for the project development and management.`,
      githubLink: 'https://github.com/krishnamodi2000/VogueManic',
    },
    {
      id: 6,
      title: 'Brownie Points',
      description: `This is a class participation mobile app that is developed using Java, SpringBoot, React Native, and MySQL, focusing on clean code, S.O.L.I.D design principles, and test-driven development. I achieved high test coverage with JUnit, streamlined development process with Git CI/CD pipelines, and emphasized code maintainability for a user-friendly platform.`,
      githubLink: 'https://github.com/krishnamodi2000/BrowniePoints',
    },
    {
      id: 7,
      title: 'Weather Based Crop Prediction in India using Big Data Analysis',
      description: `This is a project on agricultural and weather data analysis which resulted in valuable insights for crop yield prediction and decision-making. We used python libraries for data visualization and developed a user-friendly GUI prototype in Flask for enhancing engagement during research presentations.`,
      githubLink: 'https://ieeexplore.ieee.org/document/9557312',
    },
    {
      id: 8,
      title: 'Grocery Website',
      description: `This is a currently ongoing project that I have undertaken as a refresher for my concepts on .NET and C#.
      I have finished the user management section here and will now be working on the actual functionality which will include features 
      like product recommendations, calculated discounts of frequently purchased products and special couponing functioanlities with a personalised chat asssitant. 
      It will also include an admin dashboard to make data driven decisions on products.`,
      githubLink: 'https://github.com/krishnamodi2000/Grocery-Website',
    },
  ];

  return (
    <div style={{ backgroundColor: 'black', padding:"1rem"}}>
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        margin="1rem"
      >
        <Grid container justify="center" alignItems="center">
        <Grid item  xs={12} >
          <Typography variant='h3' sx={{textAlign:"center", color:"green", display:{sm:"none"}, padding:"2rem"}}>
            Projects
          </Typography>
        </Grid>
          <Grid item xs={12} sm={6} justify="center" alignItems="center">
            <Typography gutterBottom paddingBottom="2rem" style={{ display: "flex", justifyContent: "center" }} >
              <img src={Skills} alt="Skills Word Map" style={{ maxWidth: '100%', height: '100%' }} />
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6} justify="center" alignItems="center">
            <Typography variant='body1' color="white">
              <p> My skills include front-end and back-end development, data management, data analysis, and AI/ML. 
                  In software development, I've worked on different projects which showcase my ability to create seamless user experiences and efficient backend systems. 
                  I've used technologies like React, NodeJS, and MongoDB to build scalable and responsive web applications.
                  In data management and analysis, I've worked on projects involving cloud migrations, database design, and real-time data processing. 
                  This includes my work on the MERN E-commerce Cloud Migration Project, where I streamlined data flows using AWS services and Python scripting.
                  My interest in AI/ML shines through projects like WB-CPI, where I implemented machine learning algorithms for weather-based crop prediction, 
                  and EnReLLM, where I integrated large language models with recommendation systems for enhanced accuracy.
                  My work and projects reflect my deep passion for development and my foundation in front-end, back-end, data management, data analysis, and AI/ML technologies. 
                  I'm always excited to use these skills and experiences for new challenges and opportunities in the tech world.</p>
            </Typography>
          </Grid>
        </Grid>
      </Box>

      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        paddingTop="2rem"
        margin="1rem"
      >
        <Grid container spacing={3}>
          {projects.map((project) => (
            <Grid item xs={12} sm={12} md={6} lg={3} key={project.id}>
              <Card sx={{height: {lg:"350px", md:"250px", sm:"200px"}}}>
                <CardActionArea component={Link} to={project.githubLink} target="_blank">
                  <CardContent>
                    <Typography gutterBottom variant="h6" component="div" color="green">
                      {project.title}
                    </Typography>
                    <Typography variant="body2" color="black">
                      {project.description}
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    </div>
  );
};

export default Projects;
