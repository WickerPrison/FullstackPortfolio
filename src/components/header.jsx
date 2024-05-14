import { HashLink as Link} from 'react-router-hash-link';

export default function Header() {
    return (
        <header>
            <nav>
                <Link to={'/#about'}>About Me</Link>
                <Link to={('/#work')}>Portfolio</Link>
                <Link to={"/#contact"}>Contact</Link>
                <Link className="link-button" to="Resume">Resume</Link>
            </nav>
        </header>
    );
  }