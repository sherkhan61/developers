import React, {FC} from 'react'
import classes from './Common.module.scss'
import {useDispatch} from 'react-redux'
import {usersActions} from '../../features/users/modules/users/actions'
import {Friends, Search} from '../../features/users'
import {Navbar} from '../organisms/Navbar/Navbar'
import {Footer} from '../organisms/Footer/Footer'
import {Header} from '../organisms/Header/Header'
import {UserAuthInfo} from '../../features/authentication/UserAuthInfo'


export type ICommonTemplateProps = {
    clearMusicSearch?: () => void
}

export const CommonTemplate: FC<ICommonTemplateProps> = ({children, clearMusicSearch}) => {
    const dispatch = useDispatch()
    const clearPage = (): void => {
        dispatch(usersActions.setCurrentPage(1))
    }
    return (
        <>
            <Header>
                <Search/>
                <UserAuthInfo/>
            </Header>
            <div className={classes.app_wrapper}>
                <div className={classes.content_wrapper}>
                    <Navbar clearPage={clearPage}
                            clearMusicSearch={clearMusicSearch}>
                        <Friends clearPage={clearPage}/>
                    </Navbar>
                    <main className={classes.app_content}>
                        {children}
                    </main>
                </div>
                <Footer/>
            </div>
        </>
    )
}