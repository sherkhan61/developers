import React, {FC} from 'react'
import classes from './Common.module.scss'
import {useDispatch} from 'react-redux'
import {usersActions} from '@users/modules/users/actions'
import {Friends, Search} from '@users'
import {Navbar} from '@ui/organisms/Navbar/Navbar'
import {Footer} from '@ui/organisms/Footer/Footer'
import {Header} from '@ui/organisms/Header/Header'
import {UserAuthInfo} from '@auth/UserAuthInfo'


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