import { Link } from 'react-router-dom';

const Nav = () => {
    return (
        <nav className="nav-bar">
            <Link to="/" className="nav-title">
                <h1>Phoenix's Engineering Portfolio</h1>
            </Link>
        </nav>
    );
}

export default Nav;