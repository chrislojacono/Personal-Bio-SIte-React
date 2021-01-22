import React from 'react';
import Header from '../Header';
import ProjectContainer from '../ProjectContainer';
import Footer from '../Footer';
import Technologies from '../Technologies';

class App extends React.Component {
  render() {
    return (
      <>
        <Header/>
        <Technologies />
        <ProjectContainer/>
        <Footer/>
      </>
    );
  }
}

export default App;
