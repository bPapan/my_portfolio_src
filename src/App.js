import React, { Component } from 'react';

import './App.css';
//import Sidebar from './components/sidebar'
//import Introduction from './components/introduction'
import Header from './components/header'
import About from './components/about'
import Footer from './components/footer'
import ContactPage from './components/contact'
import EducationPage from './components/qualification'
// import SkillPage from './components/skill'
// import FrameworkSkillPage from './components/frameworkSkill'
import ProjectsPage from './components/projects'
import ResearchPage from './components/research'
//import Timeline from './components/timeline'
import { Switch, Route } from 'react-router-dom';
// import { HashRouter } from 'react-router-dom'
import { BrowserRouter } from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <div id="container-wrap">
        <Main />
      </div>
    );
  }
}

const Home = () => (
  <div id="container-wrap" className='home'>
    <Header></Header>
    <About></About>
    <Footer></Footer>
  </div>
);

const Contact = () => (
  <div id="container-wrap" className='contact'>
    <Header></Header>
    <ContactPage></ContactPage>
    <Footer></Footer>
  </div>
);

const Qualification = ({ location }) => (
  <div id="container-wrap" className='qualification'>
    <Header></Header>
    <EducationPage location={location}></EducationPage>
    <Footer></Footer>
  </div>
);

// const Skill = () => (
//   <div id="container-wrap" className='skill'>
//     <Header></Header>
//     {/* <Container></Container> */}
//     <SkillPage></SkillPage>
//     <Footer></Footer>
//   </div>
// );

// const FrameworkSkill = () => (
//   <div id="container-wrap" className='framework'>
//     <Header></Header>
//     {/* <Container></Container> */}
//     <FrameworkSkillPage></FrameworkSkillPage>
//     <Footer></Footer>
//   </div>
// );

const Projects = () => (
  <div id="container-wrap" className='projects'>
    <Header></Header>
    {/* <Container></Container> */}
    <ProjectsPage></ProjectsPage>
    <Footer></Footer>
  </div>
);

const Research = () => (
  <div id="container-wrap" className='research'>
    <Header></Header>
    {/* <Container></Container> */}
    <ResearchPage></ResearchPage>
    <Footer></Footer>
  </div>
);

const Main = () => (
  <BrowserRouter basename={process.env.PUBLIC_URL}>
    <Switch>
      <Route exact path='/' component={Home}></Route>
      <Route exact path='/contact' component={Contact}></Route>
      <Route path='/qualification/:tab?' component={Qualification}></Route>
      {/* <Route exact path='/skill' component={Skill}></Route> */}
      {/* <Route exact path='/framework' component={FrameworkSkill}></Route> */}
      <Route exact path='/development' component={Projects}></Route>
      <Route exact path='/research' component={Research}></Route>
    </Switch>
  </BrowserRouter>
);

export default App;
