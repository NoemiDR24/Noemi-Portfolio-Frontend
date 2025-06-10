import './Navbar.css'

function Navbar (){
    return(
        <nav className='navbar'>
            <div className="navbar-container">
                <div className="logo-container">
                    <a href="#hero"><img className='logo' src='/images/logo.png' alt="Logo"/></a>
                </div>
                <ul className="nav-menu">
                    <li className="nav-item"><a href="#about">About</a></li>
                    <li className="nav-item"><a href="#experience">Experience</a></li>
                    <li className="nav-item"><a href="#projects">Projects</a></li>
                    <li className="nav-item"><a href="#contact">Contact</a></li>
                </ul>
            </div>
        </nav>
    )
}
export default Navbar;