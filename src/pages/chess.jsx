import PageSection from '../components/pageSection';
import TextContent from '../components/textContent';
import Title from '../components/title';
import Links from '../components/links';


const summary = "Stockfish is currently the best chess AI and it has a free API that returns the best possible move for any given chess position. Three teammates and I created a website where users can play chess against Stockfish. We all play chess on chess.com, so we jokingly titled our project NotChess.com.";
const technologies = "This website was built with Tailwind, HTML, CSS, JavaScript, and the Stockfish API.";
const contributions = "I was the team lead on this project. I did the majority of the work relating directly to interfacing with the Stockfish API and contributed about 50% of the JavaScript work. I also made some small contributions to the UI/UX, such as animating the pieces moving.";

export default function Chess() {
    return (
        <main className="portfolio-piece">
            <Title title="Jacob Davis" subtitle="Chess Against Stockfish"></Title>
            <PageSection label="Summary" content={<TextContent text={summary}/>}/>
            <Links liveLink="https://wickerprison.github.io/Chess/" gitHub="https://github.com/WickerPrison/Chess"></Links>
            <PageSection label="Technologies" content={<TextContent centered="true" text={technologies}/>}/>
            <PageSection label="My Contributions" content={<TextContent centered="true" text={contributions}/>}/>
            <PageSection label="Features" content={
            <div>
                <h3>Fully Functional Chess</h3>
                <p>We programmed a fully functional chess game in JavaScript, including relatively obscure rules such as en passant and not being allowed to castle through a check. </p>
                <img src="./Images/Chess/WideChess.png"/>
                <h3>Stockfish Jokes</h3>
                <p>As a fun bonus, we also utilized an API that produces Chuck Norris jokes but we replaced the name Chuck Norris with Stockfish so that we could provide the user with humorous “facts” about Stockfish.</p>
                <img src="./Images/Chess/StockfishJoke1.png"/>
                <img src="./Images/Chess/StockfishJoke2.png"/>
                <img src="./Images/Chess/StockfishJoke3.png"/>
            </div>
            }/>
            <footer></footer>
        </main>
    );
  }