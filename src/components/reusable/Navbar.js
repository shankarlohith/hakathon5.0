import React from 'react'
import { Link } from 'gatsby'
import 'bootstrap.min.css'
import 'bootstrap-grid.css'
import 'bootstrap-reboot.css'
import 'bootstrap-reboot.min.css'
import 'bootstrap.css'

export default function Navbar() {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark d-flex flex-row-reverse">
            <a className="navbar-brand" href="#">Stock Market</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavDropdown">
                <ul className="navbar-nav">
                <li className="nav-item active">
                    <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">DSE</a>
                </li>
                <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Comapny
                    </a>
                    <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                        <Link to="/Ashokley" className="dropdown-item">Ashokley</Link>
                    
                    <a className="dropdown-item" href="#">Cipla</a>
                    <a className="dropdown-item" href="#">Reliance</a>
                    </div>
                </li>
                </ul>
            </div>
            </nav>
        </div>
    )
}
