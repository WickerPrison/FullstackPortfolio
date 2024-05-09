export default function FirstProject({data}) {
    return (
        <a className="link-button project-caption" id="first-image" href="./AoCaC.html">
        <img src={data.image}/>
        <div className="project-title">
            <h3>{data.title}</h3>
            <p>{data.tech}</p>
        </div>
    </a>
    );
  }