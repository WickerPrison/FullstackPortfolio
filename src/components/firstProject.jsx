import { Link, useLocation } from 'react-router-dom';

export default function FirstProject({data}) {
    return (
        <Link className="link-button project-caption" id="first-image" to={data.link}>
        <img src={data.image}/>
        <div className="project-title">
            <h3>{data.title}</h3>
            <p>{data.tech}</p>
        </div>
    </Link>
    );
  }