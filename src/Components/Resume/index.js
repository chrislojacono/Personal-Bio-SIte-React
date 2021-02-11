import React from 'react';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import SaveIcon from '@material-ui/icons/Save';
import myResume from '../../helpers/resume/myResume.pdf';

const useStyles = makeStyles((theme) => ({
  button: {
    margin: theme.spacing(1),
  },
}));

export default function MyResume() {
  const classes = useStyles();

  return (
    <div>
      <a href={myResume}>
      <Button
        variant="contained"
        color="primary"
        size="large"
        className={classes.button}
        startIcon={<SaveIcon />}
      >
        Click here to view my resume!
      </Button>
      </a>
    </div>
  );
}
