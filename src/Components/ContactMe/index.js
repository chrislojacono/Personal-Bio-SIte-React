import React, { useState } from 'react';
import { Button, Fade } from 'reactstrap';
import MyResume from '../Resume';

const ContactMe = () => {
  const [fadeIn, setFadeIn] = useState(false);

  const toggle = () => setFadeIn(!fadeIn);

  return (
    <div>
      <Button color='primary' onClick={toggle}>
        Contact Me!
      </Button>
      <Fade in={fadeIn} tag='div' className='mt-3'>
        <div className="contactContainer p-2">
       <p>Chris LoJacono</p>
        <p>(615)218-9128 </p>
       <p>Clojacono92@gmail.com</p>
        <MyResume/>
        </div>
      </Fade>
    </div>
  );
};

export default ContactMe;
