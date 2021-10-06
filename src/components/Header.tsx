import React, {FC} from 'react'
import {NavLink} from 'react-router-dom'
import { ROUTES } from '../const/routes'

const Header: FC = () => {
    return (
        <header className='header'>
            <nav className='nav'>
                <ul className='nav_list'>
                    <li>
                        <NavLink
                        to={`${ROUTES.home}`}
                        className='nav_link'
                        exact
                        >Home</NavLink>
                    </li>
                    <li>
                        <NavLink
                        to={`${ROUTES.search}`}
                        className='nav_link'
                        >Search</NavLink>
                    </li>
                    <li>
                        <NavLink
                        to={`${ROUTES.auth}`}
                        className='nav_link'
                        >auth</NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Header