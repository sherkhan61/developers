import React, {FC, ReactNode} from "react";
import classes from "./Contacts.module.scss"
import {ContactsType} from '../../../../../api/socialApi'


const capitalizeFirstLetter = (string: string): string => {
  return string.charAt(0).toUpperCase() + string.slice(1);
};

type PropsType = {
  contacts?: ContactsType | null
}

export const Contacts: FC<PropsType> = ({contacts}) => {

  const newElements: Array<ReactNode> = Object.entries(contacts!).map((item) => {
    return <p className={classes.contacts_item}
        key={item[0]}>{capitalizeFirstLetter(item[0])}: {item[1] ?
        <a className={classes.contacts_link}
            href={item[1]}>{item[1]}</a> :
        "..."}</p>
  });

  return (
      <>
        <h3 className={classes.contacts_header}>Contacts</h3>
        <section className={classes.contacts}>

          {newElements}
        </section>
      </>
  )
};