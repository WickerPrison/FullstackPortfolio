//import './App.css';
import Header from './components/header';
import Title from './components/title';
import PageSection from './components/pageSection';
import TextContent from './components/textContent';
import FirstProject from './components/firstProject';
import projectData from './projects.json';

const aboutMeText = "I am a full stack developer with strong math and problem solving skills. I love understanding and building complex systems. I have been programming in various contexts for several years and am constantly learning new skills and applying existing skills in new ways. My true passion is game design. I co-founded my own small indie game studio with a couple friends and we are currently working on our first game, Arcane Audit.";

function App() {
  return (
    <div className="portfolio">
      <Header />
      <Title title = "Jacob Davis" subtitle="Full Stack Developer"/>
      <PageSection id="about" label="About Me" content={<TextContent text={aboutMeText}/>}/>
      <PageSection id="work" label="Work" content={<FirstProject data={projectData[0]}/>}/>
    </div>
  );
}

export default App;
