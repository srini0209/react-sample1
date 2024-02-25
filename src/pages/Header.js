import React from 'react'
import { Outlet, Link } from 'react-router-dom';

export const Header = (props) => {
    // const attr= props.ariaCurrent;
    // let linkElement= document.getElementsByName('Link')
    // linkElement.setAttribute('aria-current',attr);
    return (
        <>
            <nav className='navbar navbar-expand-lg'>
                <ul className='navbar-nav'>
                    <li className='nav-item'>
                        <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                    </li>
                    <li className='nav-item'>
                        <Link className="nav-link" to="/todolist">ToDoList</Link>
                    </li>
                    <li className='nav-item'>
                        <Link className="nav-link" to="/blogs">Blogs</Link>
                    </li>
                    <li className='nav-item'>
                        <Link className="nav-link" to="/contact">Contact</Link>
                    </li>
                </ul>
            </nav>

            <Outlet />
        </>
    )
}
