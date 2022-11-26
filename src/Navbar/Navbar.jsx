import React, { Component } from 'react'
import { Link } from 'react-router-dom'
class Navbar extends Component {
    render() {
        return (
            <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
                <Link to="/home" className="navbar-brand">React Hooks Example </Link>
                <div className='ml-auto'>
                    <ul className="navbar-nav">
                        <li className="nav-item"> <Link className="nav-link" to="/useState">useState Ex</Link></li>
                        <li className="nav-item"> <Link className="nav-link" to="/counter">Counter</Link></li>
                    </ul>
                </div>
            </nav>
        )
    }
}

export default Navbar