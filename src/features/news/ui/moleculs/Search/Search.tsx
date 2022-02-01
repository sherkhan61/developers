import React, {FC, FormEvent} from 'react'
import classes from './Search.module.scss'
import {DispatchType} from '@store/root-reducer'
import {getNews} from '@news/modules/news/actions'



interface ISearchProps {
    dispatch: DispatchType
}

export const Search: FC<ISearchProps> = ({dispatch}) => {

    const onSearch = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        let query = event.target as HTMLFormElement
        query = query.search_query.value
        dispatch(getNews({
            keywords: `&keywords=${query}`,
            category: '',
        }))
    }

    return (
        <section id={classes.cover}>
            <form onSubmit={onSearch} autoComplete="off">
                <div className={classes.search_block}>
                    <div className={classes.search_query}>
                        <input className={classes.search_query}
                               name="search_query"
                               placeholder="Search..." type="text"/>
                    </div>
                    <div className={classes.search_btn}
                         id={classes['s-cover']}>
                        <button type="submit">
                            <div id={classes['s-circle']}></div>
                            <span></span>
                        </button>
                    </div>
                </div>
            </form>
        </section>
    )
}
