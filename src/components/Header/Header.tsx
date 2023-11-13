import { Link } from "react-router-dom";
import { PathConstants } from "../../routes";

function Header() {
    return (
        <header>
            <div className="header-div">
                <h1 className="title"><Link to={PathConstants.HOME}>Portfolio app</Link></h1>
                <nav className="navbar">
                    <ul className="nav-list">
                        <li className="nav-item"><Link to={PathConstants.ABOUT}>ABOUT</Link></li>
                        <li className="nav-item"><Link to={PathConstants.PROJECTS}>PROJECTS</Link></li>
                        <li className="nav-item"><Link to={PathConstants.CONTACT}>CONTACT</Link></li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}

export default Header;
