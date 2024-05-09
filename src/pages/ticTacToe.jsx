import PageSection from '../components/pageSection';
import TextContent from '../components/textContent';
import Title from '../components/title';
import Links from '../components/links';


const summary = "This website allows users to play tic tac toe against each other in real time using WebSockets. Users can create an account, add friends, and challenge their friends to games or play against random opponents. This website was created by a team of three people.";
const technologies = "This website was built using Node.js, Express, Sessions, Handlebars, MySQL, Sequelize, and WebSockets via the Express-ws library.";
const contributions = "I wrote all of the code dealing with WebSockets on the front and back ends and the tic tac toe game itself. I did most of the front end and UI.";
export default function TicTacToe() {
    return (
        <main className="portfolio-piece">
            <Title title="Jacob Davis" subtitle="Tic Tac Toe"></Title>
            <PageSection label="Summary" content={<TextContent text={summary}/>}/>
            <Links liveLink="https://tic-tac-too-3d5e87deda0c.herokuapp.com/" gitHub="https://github.com/WillRMorris/tic-tac-too"></Links>
            <PageSection label="Technologies" content={<TextContent centered="true" text={technologies}/>}/>
            <PageSection label="My Contributions" content={<TextContent centered="true" text={contributions}/>}/>
            <PageSection label="Features" content={
            <div>
                <h3>Friends System</h3>
                <p>Users can send friend requests to other users. Once they are friends they can challenge them to games of tic tac toe. Wins, losses, and draws with each friend are saved and displayed on the friends list.</p>
                <img src="./Images/TicTacToe/FriendsList.png"/>
                <h3>Real Time Gameplay</h3>
                <p>Users can play games of tic tac toe in real time with other players online.</p>
                <img src="./Images/TicTacToe/Game.png"/>
            </div>
            }/>
            <footer></footer>
        </main>
    );
  }