// src: https://mui.com/material-ui/react-timeline/
import React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Timeline from '@mui/lab/Timeline';
// import TimelineItem from '@mui/lab/TimelineItem';
import TimelineItem, { timelineItemClasses } from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import ExperienceImage from '../../assets/images/work-time-concept-illustration/3535777.jpg';


const Experience = () => {
  const experiences = [
    {
      year: 'January 2024 - April 2024',
      title: 'Graduate Teaching Assistant and Marker',
      company: 'Dalhousie University',
      description: (
        <ul>
          <li>
            Lead lab sessions to facilitate student learning and comprehension of advanced concepts in Full Stack Web Development
          </li>
          <li>
            Marked assignments and provided constructive feedback, improving student understanding and achieving an average grade increase of 15%.
          </li>
          <li>
            Coordinated the ongoing course development with Teaching Assistants and Instructors, receiving positive feedback on collaborative initiatives.
          </li>
        </ul>
      ),
    },
    {
      year: 'September 2023 - December 2023',
      title: 'Teaching Assistant and Marker',
      company: 'Dalhousie University',
      description: (
        <ul>
          <li>
            Conducted engaging and interactive lab sessions to prompote student comprehension of introductory concepts in PHP and SQL 
          </li>
          <li>
            Facilitate timely and responsive support for student queries, maintaining a commitment to achieve a 24-hour response time for all inquiries.
          </li>
          <li>
            Assess and grade designated assignments in alignment with established guidelines.
          </li>
        </ul>
      ),
    },
    {
      year: 'January 2022 - July 2022',
      title: 'Software Engineering Intern',
      company: 'Publicis Sapient',
      description: (
        <ul>
          <li>Developed 4-layer web APIs using ASP.NET Core and C#, contributing to project completion 1 week ahead of schedule.</li>
          <li>Achieved a 75% test coverage with NUnit ensuring data consistency and accuracy.</li>
          <li>Collaborated with the development team to understand and maintain data-driven web applications to debug them efficiently. </li>
        </ul>
      ),
    },
    {
      year: 'June 2021 - August 2021',
      title: 'Web Development Intern',
      company: 'VenEx',
      description: (
        <ul>
          <li>Secured new clientele for the startup, and boosted their revenue by creating a custom web app to promote their concept.</li>
          <li>Created a custom web app for their simulation tool resulting in an enhanced user experience and improved functionality.</li>
          <li>Resolved issues and provided quick solutions with their in-progress developing no-code tool, ensuring smooth development progress and timely problem resolution.</li>
        </ul>
      ),
    },
    {
      year: 'May 2020 - March 2021',
      title: 'Online Tutor',
      company: 'Edurific',
      description: (
        <ul>
          <li>
          Taught Dialog flow, Scratch, HTML 5.0, CSS3, JavaScript, and Python to kids between the age of
          5-18 years in India and the UK, providing comprehensive instruction and guidance in these
          programming languages and technologies.
          </li>
          <li>
          Actively solved doubts and queries of students, fostering a supportive learning environment and
          helping students overcome challenges in their programming journey.
          </li>
          <li>
          Empowered students to independently develop the front end of a website, showcasing their skills
          and creativity in creating a fully functional and visually appealing website.
          </li>
        </ul>
      ),
    },
  ];

  const experience_generalised = `My career path blends education and technology. 
  In teaching, I've supported students, led engaging sessions, and collaborated with peers for course enhancements. 
  On the tech side, I've designed systems, managed projects, and developed problem-solving skills. 
  Internships broadened my horizons, offering real-world challenges and insights in web development and cloud migration. 
  This mixture of teaching, problem-solving, and  a borad technical understanding has been pivotal, 
  shaping me into a professional, ready for all the different types of challenges.`
  
  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      margin="1rem"
    >
      <Grid container alignItems="center" justifyContent="center">
      <Grid item  xs={12} >
          <Typography variant='h3' sx={{textAlign:"center", color:"green", display:{sm:"none"}, padding:"2rem"}}>
            Experience
          </Typography>
        </Grid>
        <Grid item xs={12} lg={6} xl={6} >
          <Typography variant="h4" gutterBottom style={{display:"flex", justifyContent:"center"}}>
            <img src={ExperienceImage} alt='Expreience' style={{ maxWidth: '75%', height: '75%'}}/>
          </Typography>
          <Typography variant="body1" gutterBottom color="black">
            {experience_generalised}
          </Typography>
        </Grid>
        <Grid item xs={12} lg={6} xl={6} justify="left">

          <Timeline      sx={{
        [`& .${timelineItemClasses.root}:before`]: {
          flex: 0,
          padding: 0,
          color:"white"
        },
      }}>
            {experiences.map((exp, index) => (
              <TimelineItem key={index}>
                <TimelineSeparator>
                  <TimelineDot />
                  {index !== experiences.length - 1 && <TimelineConnector />}
                </TimelineSeparator>
                <TimelineContent>
                  <Typography variant="subtitle 1" gutterBottom  color="black">
                    {exp.year}
                  </Typography>
                  <Typography variant="body2" gutterBottom color="black">
                    {exp.title}
                  </Typography>
                  <Typography variant="body2" color="textSecondary">
                    {exp.company}
                  </Typography>
                  <Typography variant="body2" color="black">{exp.description}</Typography>
                </TimelineContent>
              </TimelineItem>
            ))}
          </Timeline>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Experience;
