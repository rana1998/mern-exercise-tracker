import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Navbar extends Component {
    render() {
        return (
            <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
                <Link to='/' className="navbar-brand">ExcerTracker</Link>
                <div className="collapse navbar-collapse">
                    <ul className="navbar-nav mr-auto">
                        <li className="navbar-item">
                            <Link to="/" classNaame="nav-link">
                                Exercises
                            </Link>                       
                        </li>
                        <li className="navbar-item">
                            <Link to="/create" classNaame="nav-link">
                                Create Exercise Log
                            </Link>                       
                        </li>
                        <li className="navbar-item">
                            <Link to="/user" classNaame="nav-link">
                                Create User
                            </Link>                       
                        </li>
                    </ul>
                </div>
            </nav>
        )
    }
}
