import React, {FC} from "react";
import {ITracks} from '@api/musicApi'
import {Tracks} from './Tracks/Tracks'
import {Arrow} from '@ui/atoms/Arrow/Arrow'
import {musicActions} from '@music/modules/music/actions'
import {DispatchType} from '@store/root-reducer'


export interface ISearchResultsProps {
  searchResults: undefined | Array<ITracks>
  dispatch: DispatchType
}

export const SearchResults: FC<ISearchResultsProps> = ({searchResults, dispatch}) => {


  const onBackToChart = (): void => {
    dispatch(musicActions.setSearchResults(null));
  };


  return (

      <Tracks tracks={searchResults}>
        <>
          <Arrow back={onBackToChart}/> Search Results
        </>
      </Tracks>
  )
};