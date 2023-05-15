import logo from '../../img/logo.png';

function Head() {
    return (
        <>
            <nav className="navbar">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">
                        <img src={logo} alt="Logo" width={400} height={90} className="d-inline-block align-text-center" />
                        
                    </a>
                </div>
            </nav>
        </>
    );
}

export default Head;