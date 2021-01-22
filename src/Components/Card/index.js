import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
// import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
    margin: 10,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
  },
}));

export default function ProjectCard({ projectData }) {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card className={`${classes.root} d-flex flex-column`}>
      <CardHeader
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title={projectData.title}
        subheader={projectData.date}
      />
      <CardMedia
        className={classes.media}
        image={projectData.screenshot}
        title={projectData.title}
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
        {projectData.description}
        </Typography>
      </CardContent>
      <CardActions disableSpacing className='d-flex justify-content-center mt-auto' >
        <IconButton aria-label="add to favorites">
        <a href={projectData.githubUrl} target='_blank' rel='noreferrer'>
        <i class="fab fa-github"></i>
          </a>
        </IconButton>
        <IconButton aria-label="share">
        <a href={projectData.url} target='_blank' rel='noreferrer'>
          <ShareIcon />
        </a>
        </IconButton>
        <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded,
          })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </IconButton>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
        <Typography paragraph>
            {projectData.description2}
          </Typography>
          <Typography paragraph><b>Technologies Used:</b></Typography>
          <Typography paragraph>
            {projectData.technologiesUsed}
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
}
