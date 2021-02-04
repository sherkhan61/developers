import React from 'react'
import 'antd/dist/antd.css'
import {Avatar, Button, Col, Row} from 'antd'
import {useDispatch, useSelector} from 'react-redux'
import {logout} from '../../features/authentication/modules/authorization/actions'
import {selectIsAuth} from '../../features/authentication/modules/authorization/selectors'


export const TopHeader: React.FC = () => {
    const isAuth = useSelector(selectIsAuth)

    const dispatch = useDispatch()

    const logoutCallback = () => {
        dispatch(logout())
    }

    return (
        <Row>
            <Col xs={{ span: 8, offset: 0, flex: 'center' }}>

            </Col>
            <Col xs={{ span: 8, offset: 0 }}>
                Developers
            </Col>
            <Col xs={{ span: 8, offset: 0 }}>
                {isAuth
                    ? <div>
                        <Avatar size={'small'} style={{ color: '#f56a00', backgroundColor: '#fde3cf' }}>S</Avatar>
                        <Button size={'small'} onClick={logoutCallback}>Log out</Button>
                    </div>
                    : <Button size={'small'} href={'/login'}>Login</Button>
                }
            </Col>
        </Row>
    )
}



