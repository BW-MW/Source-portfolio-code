import './sidenav.css'
function SideNav() {
    return(
        <div className="side-nav">
                <header className="header-side-nav">
                    <div className="name">Bruno silas</div>
                    <div className="photo"></div>
                </header>

                <nav className="navbar">
                    <ul className="navbar-nav">
                        <li className="navbar-item">
                            <a href="#" className="navbar-link">Home</a>
                            </li>
                        <li className="navbar-item">
                            <a href="#" className="navbar-link">Sobre</a>
                            </li>
                        <li className="navbar-item">
                            <a href="#" className="navbar-link">Portifólio</a>
                            </li>
                        <li className="navbar-item">
                            <a href="#" className="navbar-link">contanto</a>
                            </li>
                    </ul>
                </nav>
        </div>
    )
}

export default SideNav