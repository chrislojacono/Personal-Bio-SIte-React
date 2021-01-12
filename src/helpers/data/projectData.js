import adoptionPic from '../images/adoption.jpg';
import pieShop from '../images/pie.png';
import sortingHat from '../images/SortingHat.png';
import bearWatcher from '../images/bearWatcher.png';
import pantsProj from '../images/pants.png';
import dinoKennel from '../images/dinoKennel.png';
import chatty from '../images/parksAndRec.png';

const projectArray = [
  {
    id: 1,
    title: 'Adoption Website',
    screenshot: adoptionPic,
    description:
      'This was our first project to test our knowledge on using Event Listeners with Vanilla Javascript to filter through the various types of animals on the adoption website.',
    technologiesUsed:
      'HTML, CSS, Vanilla JavaScript, Version Control with Github, Event Listeners',
    available: true,
    url: 'https://practical-heyrovsky-fba724.netlify.app/',
    githubUrl: 'https://github.com/chrislojacono/pet-adoption',
    date: 'July 29, 2020',
  },
  {
    id: 2,
    title: 'NSS Pie Shop',
    screenshot: pieShop,
    description:
      'This was our first implementation of Bootstrap in a single page application. We used our knowledge f event listeners to flip through the various pages of the different pies in the shop.',
    technologiesUsed:
      'HTML, CSS, Vanilla JavaScript, Bootstrap, Event Listeners',
    available: true,
    url: 'https://nsspieshop.netlify.app',
    githubUrl: 'https://github.com/chrislojacono/Event-Listeners',
    date: 'August 5, 2020',
  },
  {
    id: 3,
    title: 'Sorting Hat',
    screenshot: sortingHat,
    description:
      'A project to test event listeners and Javascript functionality with user input fields. THis was a challenge to understand form control and adding objects to the DOM dynamically.',
    technologiesUsed:
      'HTML, CSS, Vanilla JavaScript, Bootstrap 4, Event Listeners',
    available: true,
    url: 'https://sortinghatcl.netlify.app/',
    githubUrl: 'https://github.com/chrislojacono/Sorting-Hat',
    date: 'August 12, 2020',
  },
  {
    id: 4,
    title: 'Bear Watcher',
    screenshot: bearWatcher,
    description:
      'The point of this assignment was to test our ability on using jQuery and modules in a program instead of running everything out of a single JS page like we had done in the past.',
    technologiesUsed: 'Vanilla Javascript ES6, JQuery, HTML5, CSS3 and Modules',
    available: true,
    url: 'https://bear-watcher.netlify.app/',
    githubUrl: 'https://github.com/chrislojacono/Bear-Watcher',
    date: 'August 19, 2020',
  },
  {
    id: 5,
    title: 'Pants Store Group Project',
    screenshot: pantsProj,
    description:
      'We wanted to incorporate the use of wireframes, github project boards and the process of assigning and completing issue tickets',
    technologiesUsed: 'Vanilla Javascript ES6, HTML5, CSS3',
    available: true,
    url: 'https://extraordinarycorduroy.netlify.app/',
    githubUrl: 'https://github.com/chrislojacono/',
    date: 'August 31, 2020',
  },
  {
    id: 6,
    title: 'Dino Kennel Milestone Project',
    screenshot: dinoKennel,
    description:
      'The motivation was for us to showcase all the skills we had learned with Vanilla Javascript up until this point. We had to do the whole project solo and incorporate all the things we had learned.',
    technologiesUsed: 'Javascript ES6, JQuery, HTML5, CSS3 and Modules',
    available: true,
    url: 'https://dino-kennelcl.netlify.app/',
    githubUrl: 'https://github.com/chrislojacono/Dino-Kennel-Milestone-1',
    date: 'September 7, 2020',
  },
  {
    id: 7,
    title: 'Chatty Group Project',
    screenshot: chatty,
    description:
      'This was a group project to build a chat room with multiple users, emojis, a giphy API, local storage, and chat bots.',
    technologiesUsed:
      'Javascript ES6, JQuery, HTML5, SASS, And a Webpack with Modules, giphy API',
    available: true,
    url: 'https://parksandrecchatty.netlify.app/',
    githubUrl: 'https://github.com/nss-evening-cohort-13/chatty-gamma',
    date: 'September 14, 2020',
  },
];

export default projectArray;
