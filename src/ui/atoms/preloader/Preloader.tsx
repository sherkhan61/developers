import React, {FC} from 'react'
import classes from './Preloader.module.scss'


export const Preloader: FC = () => {
    return (
        <div className={classes.cssload_loader}>
            <div className={`${classes.cssload_inner} ${classes.cssload_one} `}></div>
            <div className={`${classes.cssload_inner} ${classes.cssload_two} `}></div>
            <div className={`${classes.cssload_inner} ${classes.cssload_three} `}></div>
        </div>
    )
}

