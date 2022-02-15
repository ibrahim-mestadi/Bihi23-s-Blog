const NavBar = () => {
    return ( 
        <nav className="navbar">
            <h1>Bihi23's Blog</h1>
            <div className="links">
                <a href="/">Home</a>
                <a href="/create" style={{
                    color: "white",
                    backgroundColor: '#4835f1',
                    borderRadius:'8px',
                }} >New Blog</a>
                
            </div>
        </nav>
     );
}
 
export default NavBar;
