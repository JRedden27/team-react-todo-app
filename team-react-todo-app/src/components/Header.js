import React from 'react';

function Header() {
    return (
        <div>
            <nav className="navbar navbar-light bg-light">
                <div className="container-fluid" style={{ justifyContent: "center" }}>
                    <span className="navbar-brand mb-0 h1 fw-bolder fs-1" style={{ color: "#243e90" }}>To-Dos App</span>
                </div>
            </nav>
        </div>
    )
}

export default Header;
