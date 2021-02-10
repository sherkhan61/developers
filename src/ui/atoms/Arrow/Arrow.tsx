import React, {FC} from "react";
import styles from "./Arrow.module.scss"

interface IArrowProps {
 back: React.EventHandler<React.MouseEvent>
}
export const Arrow: FC<IArrowProps> = ({back}) => {
 return <i className={`fa fa-angle-left ${styles.back}`} onClick={back} aria-hidden="true"/>
};