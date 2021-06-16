const Header = () => {
    return (
        <div className="header">
            <div className="logo">
                <h1>DBO+</h1>
            </div>
            <form className="search-bar">
                <input type="text" placeholder="search movie..." />
                <i class="fas fa-search"></i>
            </form>
        </div>
    );
}

export default Header;