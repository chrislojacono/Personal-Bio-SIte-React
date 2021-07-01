import adoptionPic from '../images/adoption.jpg';
import pieShop from '../images/pie.png';
import sortingHat from '../images/SortingHat.png';
import bearWatcher from '../images/bearWatcher.png';
import pantsProj from '../images/pants.png';
import dinoKennel from '../images/dinoKennel.png';
import chatty from '../images/parksAndRec.png';
import leBaquette from '../images/michelin.png';
import freelancer from '../images/freelancer.png';
import pinterest from '../images/pinterest.png';
import adventure from '../images/adventurelogbook.png';
import mushroom from '../images/mushroomPicker.png';
import sports from '../images/sportsRoster.png';
import reactPin from '../images/pinterest3.png';
import letsEat from '../images/letsEat.gif';

const projectArray = [
  {
    available: true,
    date: 'June 1, 2021',
    description:
      'This was my back-end capstone project! It is a place where two hungry, but indecisive, friends can choose a place to eat.',
    description2:
      'I built this project with React.js, Sql Server, Asp.Net Core and SignalR. A user can start a session with others and swipe through a list of restaurants and choose ones that they like. I used the Yelp API to get the data and am using Netlify as a serverless provider to avoid any CORS issues with Yelp.',
    githubUrl: 'https://github.com/chrislojacono/Lets_Eat',
    id: 16,
    screenshot: letsEat,
    technologiesUsed:
      'React.Js, Asp.Net Core, Dapper (Micro-ORM), SignalR, Azure, Chakra UI',
    title: `Let's Eat`,
    url: 'https://letseatcapstone.netlify.app/',
  },
  {
    available: true,
    date: 'December 13, 2020',
    description:
      'This was my front-end Capstone Project! A site for rock climbers to easily find the most classic climbs in any area around the world!',
    description2:
      ' It is a single page application for the user to find the best quality rock climbs in any area, store them in their To-Do List and then add them to their Logbook once they have completed them. It shows weather in the area of the climb and if any other user has logged it their comments will appear in the details modal.\nRock Climbing is my passion, outside of web development, so I took this oppurtunity to build an application I could use to keep track of climbs that I would like to do in the future, and store the ones from the past. I always found it difficult to find crags near an area I was traveling without doing lots of research, so this app makes all the planning easier.',
    githubUrl: 'https://github.com/chrislojacono/adventure-logbook-capstone',
    id: 15,
    screenshot: adventure,
    technologiesUsed:
      'Google Maps API, Mountain Project API, Open Weather API, React.js, Material UI',
    title: 'The Adventure LogBook',
    url: 'https://adventure-logbook.netlify.app/',
  },
  {
    available: true,
    date: 'October 31, 2020',
    description:
      'This was a group project working with CRUD, firebase and complex data manipulation. We built a restaurant dashboard for guests and management to use.',
    description2: 'Our job is to build a website/dashboard for the faux restaurant Le Baquette! This site should keep track of staff, ingredients, reservations, and menu items. Authenticated users should be able to update, create and delete any of the data on the website. They can also track restaurant revenue and inventory, and add orders to reservations.',
    githubUrl:
      'https://github.com/chrislojacono/michelin-star-restaurant-dashboard-michelin-star-restaurant-dashboard',
    id: 9,
    screenshot: leBaquette,
    technologiesUsed:
      'Vanilla Javascript ES6, JQuery, Webpack w/ Modules, Firebase, OAuth',
    title: 'Le Baguette',
    url: 'https://le-baguette-e03bd.web.app/#',
  },
  {
    available: true,
    date: 'November 6, 2020',
    description:
      'This was a group project to test our use of complex data with intermediary tables and the use of Promises from API calls"',
    description2: 'The Motivation was to manipulate data on a deeper level, we used intermediary tables to store our data using firebase and had the challenge of tying different items to a certain event whithout hard coding it into that event. We also had to use Javascript Promises to wait on the various API calls to be complete before manipulating the DOM.\n The challenge was to be able to be able to have full CRUD functionality on all of these things and be able to see a details view that included prices and totals for each section/event. We used a third party application AmCharts to dynamically show the financial stats of each event by sections and by the totals of each event.',
    githubUrl:
      'https://github.com/chrislojacono/renaissance-fair-dashboard-renaissance-fair-dashboard',
    id: 10,
    screenshot: freelancer,
    technologiesUsed:
      'Vanilla Javascript ES6, JQuery, Webpack, Firebase, AmCharts, Oauth',
    title: 'Freelancer Renaissance Fair',
    url: 'https://freelancer-f77ce.web.app/',
  },
  {
    available: true,
    date: 'November 22, 2020',
    description:
      'This was a project we did to learn CRUD with react. It was meant to be the same idea as the real Pinterest. To where a user can log in and add Boards the add Pins to the Boards with pictures and links to websites associated with them.',
    description2: 'The main motivation was to learn CRUD functionality while working in react. This was also good practive of complex data structures and intermediary tables within firebase. It was a challenge to learn how to keep track of the data within the intermediary data table while editing and deleting pins/boards.',
    githubUrl: 'https://github.com/chrislojacono/react-pinterest',
    id: 14,
    screenshot: reactPin,
    technologiesUsed: 'React.js, ReactStrap, Firebase, OAuth',
    title: 'React Pinterest',
    url: 'https://pinterest3.netlify.app/',
  },

  {
    id: 5,
    title: 'Pants Store Group Project',
    screenshot: pantsProj,
    description:
      'We wanted to incorporate the use of wireframes, github project boards and the process of assigning and completing issue tickets',
    description2: 'The motivation behind this project was mainly to focus on the process of working in a group setting and planning appropriately for a big project. We wanted to make sure every step was planned out and that we worked together to achieve our end goal. We wanted to incorporate the use of wireframes, github project boards and the process of assigning and completing issue tickets.',
    technologiesUsed: 'Vanilla Javascript ES6, HTML5, CSS3',
    available: true,
    url: 'https://extraordinarycorduroy.netlify.app/',
    githubUrl: 'https://github.com/chrislojacono/pants-group-project-e13-mighty-megalodons-team-4',
    date: 'August 31, 2020',
  },
  {
    id: 6,
    title: 'Dino Kennel Milestone Project',
    screenshot: dinoKennel,
    description:
      'This was our first Milestone project at NSS. The goal was to build a single page app as a dino kennel and have dynamic features within it. This was our first project completely on our own to showcase what we had leared so far.',
    description2: 'The motivation was for us to showcase all the skills we had learned with Vanilla Javascript up until this point. We had to do the whole project solo and incorporate all the things we had learned. It was a really fun challenge that helped us see what we needed to work on and show how comfortable we were doing these things solo.',
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
      'This was a group project to build a chat room with multiple users, emojis, a Giphy API, local storage, and chat bots.',
    description2: 'The challenge was to work as a team and create a chat room to have users communicate with each other while being able to choose the charachter of their liking to communicate through. Our team went above and beyond and completed all of our stretch goals. I learned how to communicate with APIs on this project and successfully implemented the Giphy API!',
    technologiesUsed:
      'Javascript ES6, JQuery, HTML5, SASS, And a Webpack with Modules, giphy API',
    available: true,
    url: 'https://parksandrecchatty.netlify.app/',
    githubUrl: 'https://github.com/nss-evening-cohort-13/chatty-gamma',
    date: 'September 14, 2020',
  },
  {
    available: true,
    date: 'October 5, 2020',
    description:
      'The goal of this project was to use firbase as our API and make a webpage with full CRUD capabilities. Users can add, edit, view and delete boards, and each board has pins that they have added to specific boards.',
    description2: 'We got to use google Firebase and this was our first experience using OAuth! It was a fun challenge manipulating data on this one as well. We had to use intermediary tables to store data and had to figure out how to connect specific pins to different boards and how to move the pins to different boards when the user wanted to edit them.',
    githubUrl: 'https://github.com/chrislojacono/Pinterest',
    id: 8,
    screenshot: pinterest,
    technologiesUsed:
      'Vanilla Javascript ES6, JQuery, Webpack w/ Modules, Firebase',
    title: 'Pinterest 2.0',
    url: 'https://pinterest-5eb3d.web.app',
  },

  {
    available: true,
    date: 'November 15, 2020',
    description:
      'This was a bonus assignment while learning react to make a website where you could pick random mushrooms, they would be added to you basket and different actions would occur depending if the mushrooms were deadly, psychoactive or edible.',
    description2: 'I chose to do this extra assignment to become more comfortable changing state and using props with react. I got to mess around with hooks and using semantic UI for react which was new and I really enjoyed. This was one of our first projects in react so it was fun to get to use all the features that React.js has to offer. I also got to plug in React Router into this project and test out what we had learned in class.',
    githubUrl: 'https://github.com/chrislojacono/mushroom-picker-react',
    id: 12,
    screenshot: mushroom,
    technologiesUsed: 'React.js, React.Router, Firebase, OAuth',
    title: 'Mushroom Picker',
    url: 'https://mushroom-picker.netlify.app/',
  },
  {
    available: true,
    date: 'November 18, 2020',
    description:
      'This was an optional assignment to get extra practice with CRUD in React.js. It was to be a quick application to where any authenticated user could adjust a teams roster with new players, delete and edit current players on the team.',
    description2: 'The motivation for me was to practice CRUD functionality in React before beginning my capstone project. It was a good exercise to practice crud functionality!',
    githubUrl: 'https://github.com/chrislojacono/sports-roster',
    id: 13,
    screenshot: sports,
    technologiesUsed: 'React.js, Firebase, OAuth, MockARoo',
    title: 'Nashville Preds Roster',
    url: 'https://sports-roster.netlify.app/',
  },
  {
    id: 1,
    title: 'Adoption Website',
    screenshot: adoptionPic,
    description:
      'This was our first project to test our knowledge on using Event Listeners with Vanilla Javascript to filter through the various types of animals on the adoption website.',
    description2: 'This was a project to test our understand of using javascript functions to print data to the DOM. We completed in a group of four, but all writing our own code. We also figured out how to use Event Listeners and to sort the adoption cards by specific categories',
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
    description2: 'We use Javascript functions to print the pie cards to the DOM, use event listeners that sort the cards by the intsructor whose favorite pie it is, and Add another event listener at the bottom of each card to "delete" them from the screen.',
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
    description2: 'This was great practice on how callback functions and it taught me when to assign event listeners and when to call functions, instead of just having everything run right when the page loads.',
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
    description2: 'The goal was to build a single page app that people tracking bears can use to store information about the bears they see and keep a tally of how many fish they had attempted to catch, and how many they have actually caught, and timestamps of when the most recent attempt/catch was.',
    technologiesUsed: 'Vanilla Javascript ES6, JQuery, HTML5, CSS3 and Modules',
    available: true,
    url: 'https://bear-watcher.netlify.app/',
    githubUrl: 'https://github.com/chrislojacono/Bear-Watcher',
    date: 'August 19, 2020',
  },
];

export default projectArray;
