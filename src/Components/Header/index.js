import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import HomeIcon from '@material-ui/icons/Home';
import WhatshotIcon from '@material-ui/icons/Whatshot';
import GrainIcon from '@material-ui/icons/Grain';
import profilePic from '../../helpers/images/profilepic2.jpeg';

const useStyles = makeStyles((theme) => ({
  link: {
    display: 'flex',
  },
  icon: {
    marginRight: theme.spacing(0.5),
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
      <Breadcrumbs aria-label="breadcrumb" className='d-flex mt-auto m-3 justify-content-center'style={{ color: 'blanchedalmond' }}>
      <a href="#aboutMe">
      <HomeIcon className={classes.icon} />
        About Me
      </a>
      <a href="#technology">
      <WhatshotIcon className={classes.icon} />
        Technologies
      </a>
      <a href="#projectSection">
      <Typography color="inherit" className={classes.link}>
        <GrainIcon className={classes.icon} />
        Projects
      </Typography>
      </a>
    </Breadcrumbs>
    </header>
    </div>
    <div className='infoContainer'>
    <div className="profilePic" style={{ backgroundImage: `url(${profilePic})` }}>
      </div>
      <div className="aboutMe" id="aboutMe">
        <div className="aboutChild mt-1">
          <h3>About Me</h3>
          <p>My name is Chris LoJacono, local to Nashville, TN, and  am currently a student attending The Nashville Software School. Our cohort is a full stack program with a front end focus on Javascript/React.js and a back-end focus on C#/.NET. Over the past few years I've learned that I was drawn towards problem solving and I am a person that deeply strives to find things that offer a challenge. Software development checked all the boxes for me. The aspect of working in teams, untangling code, and using logic to solve problems was exactly what I am looking for in a career. </p>
        </div>
      </div>
    </div>
    </>
  );
}
