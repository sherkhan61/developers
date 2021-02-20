import React, {FC} from "react";
import {CommonTemplate} from '@ui/templates/Common'
import {News} from '@news/News'


export const NewsPage:FC= () => {
  return(
    <CommonTemplate>
      <News/>
    </CommonTemplate>
  )
};