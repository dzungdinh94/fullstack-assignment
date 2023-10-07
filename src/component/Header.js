import React from 'react';

function Header({ isAuthenticated, userName, onLogin, onLogout }) {
    return (
        <nav className="navbar navbar-light bg-light mb-3 p-3">
            <a className="navbar-brand" href="/">MyApp</a>
            {isAuthenticated ? (
                <div>
                    <span className="me-3">Hello, {userName}!</span>
                    <button className="btn btn-outline-danger" onClick={onLogout}>Logout</button>
                </div>
            ) : (
                <button className="btn btn-outline-primary" onClick={onLogin}>Login with Google</button>
            )}
        </nav>
    );
}

export default Header;
