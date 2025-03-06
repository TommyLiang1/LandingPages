import "../styles/Navbar.css";

function Navbar() {
    return (
        <nav className="nav-wrapper">
            <div className="nav-group">TEST TEAM</div>
            <div className="nav-group">
                <ul>
                    <li>
                        <a>Home</a>
                    </li>
                    <li>
                        <a>About</a>
                    </li>
                    <li>
                        <a>Contact</a>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;
