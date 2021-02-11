import React from 'react';
import Button from '@material-ui/core/Button';
import {
  createMuiTheme,
  withStyles,
  makeStyles,
  ThemeProvider,
} from '@material-ui/core/styles';
import { green, purple, deepOrange } from '@material-ui/core/colors';
import SaveIcon from '@material-ui/icons/Save';
import myResume from '../../helpers/resume/myResume.pdf';

const useStyles = makeStyles((theme) => ({
  button: {
    margin: theme.spacing(1),
  },
}));

const ColorButton = withStyles((theme) => ({
  root: {
    color: theme.palette.getContrastText(deepOrange[500]),
    backgroundColor: deepOrange[400],
    '&:hover': {
      backgroundColor: deepOrange[700],
    },
  },
}))(Button);

export default function MyResume() {
  const classes = useStyles();

  return (
    <div>
      <a href={myResume} target='_blank' rel='noreferrer'>
        <ColorButton
          variant='contained'
          color='primary'
          className={classes.margin}
          startIcon={<SaveIcon />}
        >
          Click here to view my resume!
        </ColorButton>
      </a>
    </div>
  );
}
