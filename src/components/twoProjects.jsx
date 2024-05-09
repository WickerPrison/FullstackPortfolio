export default function TwoProjects({data, firstIndex, secondIndex}) {
    return (
        <section>
            <div className="spacer"></div>

            <a className="link-button project-caption" href="./chess.html">
                <img src={data[firstIndex].image}/>
                <div className="project-title">
                    <h3>{data[firstIndex].title}</h3>
                    <p>{data[firstIndex].tech}</p>
                </div>
            </a> 

            <div></div>

            <a className="link-button project-caption" href="./tictactoe.html">
                <img src={data[secondIndex].image}/>
                <div className="project-title">
                    <h3>{data[secondIndex].title}</h3>
                    <p>{data[secondIndex].tech}</p>
                </div>
            </a>
        </section>
    );
  }