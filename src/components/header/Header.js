import React from 'react'
import {NavLink} from 'react-router-dom'

const Header = () => {
    return (
        <header className='header'>
            <nav className='nav'>
                <ul className='nav_list'>
                    <li>
                        <NavLink
                        to='/'
                        className='nav_link'
                        exact
                        >Home</NavLink>
                    </li>
                    <li>
                        <NavLink
                        to='/search'
                        className='nav_link'
                        >Search</NavLink>
                    </li>
                    <li>
                        <NavLink
                        to='/auth'
                        className='nav_link'
                        >auth</NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Header