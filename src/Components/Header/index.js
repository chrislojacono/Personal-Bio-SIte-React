import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import HomeIcon from '@material-ui/icons/Home';
import WhatshotIcon from '@material-ui/icons/Whatshot';
import GrainIcon from '@material-ui/icons/Grain';
import profilePic from '../../helpers/images/profilepic2.jpeg';
import ContactMe from '../ContactMe';

const useStyles = makeStyles((theme) => ({
  link: {
    display: 'flex',
  },
  icon: {
    marginRight: theme.spacing(0.8),
    marginBottom: theme.spacing(0.5),
    width: 20,
    height: 20,
  },
}));

export default function Header() {
  const classes = useStyles();
  return (
    <>
   <div className="wholeHeader">
    <header className='head d-flex flex-column'>
      <h1>Chris LoJacono</h1>
      <h6 className='headerInfo'>Full Stack Web-Developer</h6>
      <div className='breadCrumbIcons d-flex mt-auto m-3 justify-content-center flex-wrap'style={{ color: 'blanchedalmond' }}>
      <a href="#aboutMe" className='m-2 grow'>
      <HomeIcon className={classes.icon} />
        About Me
      </a>
      <a href="#technology" className='m-2 grow'>
      <WhatshotIcon className={classes.icon} />
        Technologies
      </a>
      <a href="#projectSection" className='m-2 grow'>
      <Typography color="inherit" className={classes.link}>
        <GrainIcon className={classes.icon} />
        Projects
      </Typography>
      </a>
    </div>
    </header>
    </div>
    <div className='infoContainer'>
      <ContactMe/>
    <div className="profilePic" style={{ backgroundImage: `url(${profilePic})` }}>
      </div>
      <div className="aboutMe" id="aboutMe">
        <div className="aboutChild mt-1">
          <h3>About Me</h3>
          <p>My name is Chris LoJacono, I am a problem solver, a strong
          communicator and am eager to grow as
          an engineer in my career.
          I am passionate about learning, am
          eager to tackle more complex problems
          and continue to find ways to maximize the
          user experience.
          I bring an enthusiastic, determined,
          people-friendly, and amenable
          personality to any team.
          </p>
        </div>
      </div>
    </div>
    </>
  );
}
