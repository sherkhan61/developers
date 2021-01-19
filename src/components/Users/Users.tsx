import React, {useEffect} from 'react'
import Paginator from '../common/Paginator/Paginator'
import User from './User'
import {UsersSearchForm} from './UsersSearchForm'
import {useDispatch, useSelector} from 'react-redux'
import {
    getCurrentPage,
    getPageSize,
    getTotalUsersCount,
    getUsersFilter,
    getUsersPage,
} from '../../Redux/users-selectors'
import {useHistory} from 'react-router-dom'
import * as queryString from 'querystring'
import {getUsers} from '../../Redux/thunks/users-thunk'
import {FilterType} from '../../types/users-type'


type QueryParamsType = {term?: string, page?: string, friend?: string}


export const Users: React.FC = () => {

    const totalUsersCount = useSelector(getTotalUsersCount)
    const currentPage = useSelector(getCurrentPage)
    const pageSize = useSelector(getPageSize)
    const users = useSelector(getUsersPage)
    const filter = useSelector(getUsersFilter)

    const dispatch = useDispatch()
    const history = useHistory()



    useEffect(() => {
        const parsed = queryString.parse(history.location.search.substr(1)) as QueryParamsType

        let actualPage = currentPage
        let actualFilter = filter

        if (!!parsed.page) actualPage = Number(parsed.page)
        if (!!parsed.term) actualFilter = {...actualFilter, term: parsed.term as string}

        switch (parsed.friend) {
            case 'null':
                actualFilter = {...actualFilter, friend: null}
                break
            case 'true':
                actualFilter = {...actualFilter, friend: true}
                break
            case 'false':
                actualFilter = {...actualFilter, friend: false}
                break
        }

        dispatch(getUsers(actualPage, pageSize, actualFilter))
    }, [])

    useEffect(() => {
        const query: QueryParamsType = {}
        if(!!filter.term) query.term = filter.term
        if(filter.friend !== null) query.friend = String(filter.friend)
        if(currentPage !== 1) query.page = String(currentPage)


        history.push({
            pathname: '/users',
            search: queryString.stringify(query)
        })
    }, [filter, currentPage])

    const onPageChanged = (pageNumber: number) => {
        dispatch(getUsers(pageNumber, pageSize, filter))
    }
    const onFilterChanged = (filter: FilterType) => {
        dispatch(getUsers(1, pageSize, filter))
    }


    return (
        <div>
            <UsersSearchForm onFilterChanged={onFilterChanged}/>
            <Paginator
                totalItemsCount={totalUsersCount}
                pageSize={pageSize}
                currentPage={currentPage}
                onPageChanged={onPageChanged}
            />
            <div>
                {users.map((u) => (
                    <User
                        user={u}
                        key={u.id}
                    />
                ))}
            </div>
        </div>
    )
}



