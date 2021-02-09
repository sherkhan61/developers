import React, {FC, useCallback, useRef, useState} from 'react'
import dropClass from './ui/molecules/Dropdown/Dropdown.module.scss'
import {useSelector} from 'react-redux'
import {RootState} from '../../lib/store/root-reducer'
import {UserAuthInfoBar} from './ui/organisms/UserAutnInfoBar/UserAuthInfoBar'
import {SignIn} from './ui/atoms/SIgnIn'
import {Dropdown} from './ui/molecules/Dropdown/Dropdown'


export const UserAuthInfo: FC = () => {


    const [isDropped, setDropdown] = useState<boolean>(false)

    const isAuth = useSelector((state: RootState) => state.auth.isAuth)
    const userInfoRef = useRef<HTMLDivElement>(null)
    const dropRef = useRef<HTMLUListElement>(null)

    const onDropdown = () => {
        userInfoRef.current!.style.background = '#1e1e1e'
        dropRef.current!.style.visibility = 'visible'
        dropRef.current!.style.opacity = '0.9'
        document.addEventListener('click', onCloseDropDown)
    }


    const onCloseDropDown: EventListener = useCallback((e: Event): void => {
        let target = e.target as HTMLDivElement
        if (!target.closest('.' + dropClass.dropdown)) {
            setDropdown(false)
            userInfoRef.current!.style.background = ''
            dropRef.current!.style.opacity = '0'
            dropRef.current!.style.visibility = 'hidden'
            document.removeEventListener('click', onCloseDropDown)
        } else {
            document.removeEventListener('click', onCloseDropDown)
        }
    }, [])


    return (<>
        {isAuth ?
            <UserAuthInfoBar ref={userInfoRef} onDropdown={onDropdown}>
                <Dropdown isVisible={isDropped} ref={dropRef}/>
            </UserAuthInfoBar> :
            <SignIn/>}
    </>)
}