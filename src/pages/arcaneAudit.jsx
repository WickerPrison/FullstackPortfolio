import PageSection from '../components/pageSection';
import TextContent from '../components/textContent';
import Title from '../components/title';
import Links from '../components/links';
import Carousel from '../components/carousel';

const summary = "I co-founded a small indie video game studio called Broken Beaker. We are currently working on our first game, called Arcane Audit. While this project may not be directly related to web development, this is the project where I learned the majority of my programming knowledge and skills. A project of this scale, with 250+ scripts written over the course of multiple years, has required me to learn good OOP practices and write my code with scalability and performance in mind.";
const technologies = "This game was built in the Unity game engine using C# and HLSL.";
const contributions = "I am the lead developer on this project, working with an artist and a composer. I wrote all of the C# code and the HLSL shaders. I also made all the sound effects myself.";

export default function ArcaneAudit() {
    return (
        <main className="portfolio-piece">
            <Title title="Jacob Davis" subtitle="Arcane Audit"></Title>
            <PageSection label="Summary" content={<TextContent text={summary}/>}/>
            <Links liveLink="https://store.steampowered.com/app/2381770/Arcane_Audit/" gitHub="https://github.com/WickerPrison/Arcanacide" liveLinkLabel='Steam Page: '></Links>
            <PageSection label="Technologies" content={<TextContent centered="true" text={technologies}/>}/>
            <PageSection label="My Contributions" content={<TextContent centered="true" text={contributions}/>}/>
            <PageSection label="Features" content={
            <div>
                <h3>A Full-On Video Game</h3>
                <p>We made a video game. The game has a story, multiple levels, and takes several hours to complete. Watch the trailer below to see the game in action.</p>
                <iframe src="https://www.youtube.com/embed/9xtsstKLrJs?si=h9q9VtKwu5n3BGR-" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                <h3>Progression Systems</h3>
                <p>I used C# to code multiple progression systems to allow the player to gain strength and abilities over the course of the game. I programmed a system for gaining and equipping 25+ different “patches” that each give the player abilities. I programmed a complex move set for 4 different weapons.</p>
                <Carousel images={[
                    "/Images/ArcaneAudit/LevelUp.gif",
                    "/Images/ArcaneAudit/PatchesMenu.gif"
                ]}/>
                <h3>Rebindable Controls</h3>
                <p>The most technically challenging code I wrote for this game was the ability for players to change which buttons do which things. Players can remap any button to any action and this change will be reflected in button prompts throughout the game. This remapping system is compatible with keyboard and mouse and controllers made for Xbox, Playstation, Switch, and most generic brand controllers.</p>
                <img src="./Images/ArcaneAudit/Rebind.gif"/>
                <h3>Enemy AI / Abilities</h3>
                <p>The game features nearly 20 enemy types and 4 bosses, each with their own AI tree and unique abilities that I programmed in C#. Below are a few examples.</p>
                <Carousel images={[
                    "/Images/ArcaneAudit/DashersGIF.gif",
                    "/Images/ArcaneAudit/DaveDodgeGIF.gif",
                    "/Images/ArcaneAudit/ShieldGIF.gif",
                    "/Images/ArcaneAudit/BombsGIF.gif",
                    "/Images/ArcaneAudit/HalfGolemGif.gif"
                ]}/>
                <h3 id="shaders">Shaders</h3>
                <p>I also wrote shaders in HLSL to create visual effects for the game. I wrote a shader to swap the colors in assets to match the current scene so we didn’t have to create multiple versions of each asset. I also wrote shaders for effects like making the enemies flash white when they get hit and dissolve after they die or improving the look of the player’s block ability.</p>
                <Carousel images={[
                    "/Images/ArcaneAudit/MapShader.gif",
                    "/Images/ArcaneAudit/NewShieldGif.gif",
                    "/Images/ArcaneAudit/DissolveShaderGIF.gif"
                ]}/>
            </div>}/>
            <footer></footer>
        </main>
    );
  }