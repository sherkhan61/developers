import styles from "./Cards.module.scss";
import React, {FC} from "react";
import {Preloader} from '../../../../../ui/atoms/preloader/Preloader'

interface ICardsProps {
  header: string
  // we have children in FC type
}

export const Cards: FC<ICardsProps>= ({children, header}) => {


  return (
    <>
      <h3 className={styles.cards_header}>{header}</h3>
      <div className={styles.cards}>
        {children || <Preloader/>}
      </div>
    </>
  )
};