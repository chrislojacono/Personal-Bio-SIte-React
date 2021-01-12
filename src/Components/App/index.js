import React from 'react';
import Header from '../Header';
import ProjectContainer from '../ProjectContainer';
import Footer from '../Footer';

class App extends React.Component {
  render() {
    return (
      <>
        <Header/>
        <ProjectContainer/>
        <Footer/>
      </>
    );
  }
}

export default App;
