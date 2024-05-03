//src: https://github.com/mui/material-ui/blob/v5.15.15/docs/data/material/components/app-bar/DrawerAppBar.js
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Logo from '../../assets/images/logo.png';
import About from '../About/About';
import Experience from '../Experience/Experience';
import Education from '../Education/Education';
import Projects from '../Projects/Projects';
import Contact from '../Contact/Contact';
import { useState, useEffect } from 'react';

const drawerWidth = 240;
const navItems = [
  { text: 'About', link: 'about' },
  { text: 'Experience', link: 'experience' },
  { text: 'Projects', link: 'projects' },
  { text: 'Education', link: 'education' },
  { text: 'Contact', link: 'contact' },
];

function Navbar(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window?.scrollY || document.documentElement.scrollTop;
      const sections = document.querySelectorAll('[data-scroll-section]');

      let foundSection = null;
      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionBottom = sectionTop + section.clientHeight;

        if (scrollY >= sectionTop && scrollY < sectionBottom) {
          const sectionId = section.getAttribute('id');
          foundSection = sectionId;
        }
      });

      if (foundSection !== null) {
        setActiveLink(foundSection);
      }
    };

    const scrollHandler = () => {
      handleScroll();
    };

    window?.addEventListener('scroll', scrollHandler);

    return () => {
      window?.removeEventListener('scroll', scrollHandler);
    };
  }, [window]);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Typography variant="h6" sx={{}}>
        <img src={Logo} alt="KM" style={{ width: '50px', margin: '10px' }} />
      </Typography>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item.text} disablePadding>
            <ListItemButton
              sx={{ textAlign: 'center', fontWeight: activeLink === item.link ? 'bold' : 'normal' }}
              onClick={() => scrollToSection(item.link)}
            >
              <span style={{ textDecoration: 'none', color: 'inherit', cursor: 'pointer' }}>
                {item.text}
              </span>
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar component="nav" position="fixed" sx={{ backgroundColor: 'black', boxShadow: 'none'}}>
        <Toolbar>
          <IconButton
            color="white"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ display: { sm: 'none' }, color: 'white' }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' }, color: 'white' }}
          >
            <img src={Logo} alt="KM" style={{ width: '50px', margin: '10px' }} />
          </Typography>
          <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
            {navItems.map((item) => (
              <Button
                key={item.text}
                sx={{ color: 'white', fontWeight: activeLink === item.link ? 'bold' : 'normal' }}
                onClick={() => scrollToSection(item.link)}
              >
                <span style={{ textDecoration: 'none', color: 'inherit', cursor: 'pointer' }}>
                  {item.text}
                </span>
              </Button>
            ))}
          </Box>
        </Toolbar>
      </AppBar>
      <nav>
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
      </nav>
      <Box component="main">
        <Toolbar />
        <Box id="about" data-scroll-section>
          <About />
        </Box>
        <Box id="experience" data-scroll-section>
          <Experience />
        </Box>
        <Box id="projects" data-scroll-section>
          <Projects />
        </Box>
        <Box id="education" data-scroll-section>
          <Education />
        </Box>
        <Box id="contact" data-scroll-section>
          <Contact />
        </Box>
      </Box>
    </Box>
  );
}

export default Navbar;

