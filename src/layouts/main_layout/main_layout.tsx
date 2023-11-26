import React from "react";
import Logo from "../../components/logo/logo"
import { Outlet } from "react-router-dom";

function MainLayout() :JSX.Element {
    return (
        <React.Fragment>
            <div className="film-card">
                <header className="page-header">
                    <Logo/>
                </header>
                <Outlet/>
            </div>
            <footer className="page-footer">
                <Logo/>
                <div className="copyright">
                    <p>© 2023 kino.</p>
                </div>
            </footer>
        </React.Fragment>
    );
}

export default MainLayout;