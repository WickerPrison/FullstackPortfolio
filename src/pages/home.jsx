import Title from '../components/title';
import PageSection from '../components/pageSection';
import TextContent from '../components/textContent';
import FirstProject from '../components/firstProject';
import projectData from '../projects.json';
import TwoProjects from '../components/twoProjects';

const aboutMeText = "I am a full stack developer with strong math and problem solving skills. I love understanding and building complex systems. I have been programming in various contexts for several years and am constantly learning new skills and applying existing skills in new ways. My true passion is game design. I co-founded my own small indie game studio with a couple friends and we are currently working on our first game, Arcane Audit.";

const toClipboard = (event) => {
  const copiedText = event.currentTarget.innerText;
  navigator.clipboard.writeText(copiedText);
  alert("copied to clipboard");
}

export default function Home() {
    return (
        <div className="portfolio">
            <Title title = "Jacob Davis" subtitle="Full Stack Developer"/>
            <PageSection id="about" label="About Me" content={<TextContent text={aboutMeText}/>}/>
            <PageSection id="work" label="Work" content={<FirstProject data={projectData[0]}/>}/>
            <TwoProjects data={projectData} firstIndex={1} secondIndex={2}/>
            <TwoProjects data={projectData} firstIndex={3} secondIndex={4}/>
    
            <section id="contact">
                <div className="link-button section-title spacer">Contact</div>
                <a onClick={toClipboard} id="email">Cobylax17@gmail.com</a>
                <br/>
                <a onClick={toClipboard} id="phone">435-294-8060</a>
                <br/>
                <a href="https://www.linkedin.com/in/jacobdavisfullstack/">LinkedIn</a>
                <br/>
                <a href="https://github.com/WickerPrison">GitHub</a>
            </section>
    
            <footer></footer>
        </div>
    );
  }