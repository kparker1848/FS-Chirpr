import * as React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar: React.FC<NavbarProps> = props => {

    return (
        <nav className="col-12 d-flex flex-wrap justify-content-center m-2">
            <NavLink to="/" className="btn btn-info text-light m-2">Home</NavLink>
            <NavLink to="/compose" className="btn btn-info text-light m-2">Compose</NavLink>
        </nav>

    )
}

interface NavbarProps { }

export default Navbar;