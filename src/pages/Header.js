import React from 'react'
import { Outlet, Link } from 'react-router-dom';

export const Header = (props) => {
    // const attr= props.ariaCurrent;
    // let linkElement= document.getElementsByName('Link')
    // linkElement.setAttribute('aria-current',attr);
    return (
        <>
            <nav className='navbar navbar-expand-lg bg-primary'>
                <ul className='navbar-nav mx-3'>
                    <li className='nav-item'>
                        <Link className="nav-link active text-white"  to="/home">Home</Link>
                    </li>
                    <li className='nav-item'>
                        <Link className="nav-link text-white" aria-current="page" to="/">ToDoList</Link>
                    </li>
                    <li className='nav-item'>
                        <Link className="nav-link text-white" to="/blogs">Blogs</Link>
                    </li>
                    <li className='nav-item'>
                        <Link className="nav-link text-white" to="/contact">Contact</Link>
                    </li>
                </ul>
            </nav>

            <Outlet />
        </>
    )
}
