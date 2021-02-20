import React, {FC} from 'react'
import {useForm} from 'react-hook-form'
import styles from './Search.module.scss'
import {DispatchType} from '@store/root-reducer'
import {search} from '@music/modules/music/actions'

interface ISearchProps {
  dispatch: DispatchType
}

interface ISearchForm {
  query: string
}

export const Search: FC<ISearchProps> = ({dispatch}) => {

  const {register, handleSubmit} = useForm<ISearchForm>();
  const onSearch = ({query}: ISearchForm) => {
    dispatch(search(query));
  };

  return (
      <div className={styles.search}>
        <form onSubmit={handleSubmit(onSearch)}>
          <input autoComplete="off" ref={register({required: true})}
              name="query"
              type="text"/>
          <i className="fa fa-search"/>
        </form>
      </div>
  )
};