import React, {FC, ReactNode, useState} from "react";
import classes from "./Paginator.module.scss"

interface IPaginatorProps {
  portionSize?: number
  totalUsersCount: number
  pageSize: number
  currentPage: number
  onPageChanged: (p: number)=> void
}

export const Paginator: FC<IPaginatorProps> = ({
 portionSize = 10, totalUsersCount, pageSize, currentPage, onPageChanged }) => {

  const isMobile: boolean = document.documentElement.clientWidth <= 480;

  if (isMobile) portionSize = 5;

  const pagesCount: number = Math.ceil(totalUsersCount / pageSize);

  let pages: Array<number> = [];

  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }

  const portionCount: number = Math.ceil(pagesCount / portionSize);

  const [portionNumber, setPortionNumber] = useState<number>(Math.ceil(
      currentPage / portionSize));

  const leftPortionPageNumber: number = (
      portionNumber - 1
  ) * portionSize + 1;

  const rightPortionPageNumber: number = portionNumber * portionSize;

  const currentPages: Array<ReactNode> = pages
      .filter(
          p => p >= leftPortionPageNumber && p <= rightPortionPageNumber)
      .map((p) => {
        return <span
            className={p === currentPage ?
                `${classes.pageNumber} ${classes.selectedPage}` :
                classes.pageNumber}
            key={p}
            onClick={() => {
              onPageChanged(p);
            }}>{p}</span>
      });

  const onPortionNumber = (e: React.MouseEvent<HTMLDivElement>, k: number) => {
    setPortionNumber(portionNumber + k);
  };


  return (
      <div className={classes.paginator_wrapper}>

        <div className={classes.paginator}>
          {portionNumber > 1 &&
          <div
            onClick={(e: React.MouseEvent<HTMLDivElement>) => onPortionNumber(e, -1)}
            className={`${classes.icon} ${classes.left}`}>
            <div className={classes.arrow}/>
          </div>}
          {currentPages}
          {portionCount > portionNumber &&
          <div onClick={(e) => onPortionNumber(e, +1)}
            className={classes.icon}>
            <div className={classes.arrow}/>
          </div>
          }
        </div>

      </div>
  )
};