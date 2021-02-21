import React, {FC} from 'react'
import styles from './Navbar.module.scss'
import {NavLink} from 'react-router-dom'
import {ICommonTemplateProps} from '../../templates/Common'


interface PropsType extends ICommonTemplateProps {
    clearPage: () => void
}

export const Navbar: FC<PropsType> = ({children, clearPage, clearMusicSearch}) => {

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

                    <li className={styles.dialogs_link}>
                        <NavLink to="/chat" activeClassName={styles.active}>
                            <i className="fa fa-comments-o"/>
                            <strong>Chat</strong>
                            <small>your chat</small>
                        </NavLink>
                    </li>

                    <li>
                        <NavLink to="/news" activeClassName={styles.active}>
                            <i className="fa fa-globe"/>
                            <strong>News</strong>
                            <small>breaking news</small>
                        </NavLink>
                    </li>


                    <li>
                        <NavLink to="/music" activeClassName={styles.active}
                                 onClick={clearMusicSearch}>
                            <i className="fa fa-music"/>
                            <strong>Music</strong>
                            <small>deezer chart</small>
                        </NavLink>
                    </li>


                </ul>
            </nav>
            {children}
        </div>
    )
}

