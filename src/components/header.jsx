import { Link, useLocation } from 'react-router-dom';

export default function Header() {
    return (
        <header>
        <nav>
            <Link to={{pathname:"/", hash:"#about"}}>About Me</Link>
            <a href="#work">Portfolio</a>
            <Link to={{pathname:"/", hash:"#contact"}}>Contact</Link>
            <Link className="link-button" to="Resume">Resume</Link>
        </nav>
    </header>
    );
  }