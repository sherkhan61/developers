import React, {FC} from 'react'
import styles from './Navbar.module.scss'
import {NavLink} from 'react-router-dom'


interface PropsType {
    clearPage: () => void
}

export const Navbar: FC<PropsType> = ({children, clearPage}) => {

    const isMobile: boolean = document.documentElement.clientWidth <= 860


    return (
        <div className={styles.container}>
            <nav>
                <ul className={styles['mcd-menu']}>

                    <li>
                        <NavLink to="/profile" activeClassName={styles.active}>
                            <i className="fa fa-home"/>
                            <strong>Profile</strong>
                            <small>your story</small>
                        </NavLink>
                    </li>
                    <li onClick={clearPage}>
                        <NavLink to={isMobile ?
                            '/friends' :
                            '/users'} activeClassName={styles.active}>
                            <i className="fa fa-users"/>
                            <strong>Users</strong>
                            <small>our developers</small>
                        </NavLink>
                    </li>


                </ul>
            </nav>
            {children}
        </div>
    )
}

