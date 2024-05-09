import Title from '../components/title';

export default function Resume() {
    return (
        <main className="portfolio-piece">
            <Title title="Jacob Davis" subtitle="Resume"></Title>

            <a id="download-link" href="./Images/JacobDavisResume.pdf" download>Download Resume PDF</a>

            <img id="resume" src="./Images/FullstackResumeImg.png"/>
        </main>
    );
  }