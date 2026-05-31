const Navigation = () => {
    return ( 
        <>
        <nav className="nav">
            <div className="logo">
                <img src="/images/brand_logo.png" alt="Nike logo" className="logo-image" />
            </div>
            <ul>
            <li><a href="#">Menu</a></li>
            <li><a href="#">Location</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Contact</a></li>
            </ul>
            <button className="cta-button">Login</button>
        </nav>
        </>
     ) 
}

export default Navigation;