import React, {FC} from "react";
import styles from "./UsersSearch.module.scss"

interface IUsesrsSearchProps {
  searchTerm: string
  onSearch: React.EventHandler<React.KeyboardEvent>
  onChange: React.EventHandler<React.ChangeEvent>
}

export const UsersSearch: FC<IUsesrsSearchProps> = ({searchTerm, onSearch, onChange}) => {
  return (

      <div className={styles.usersSearch}>
        <p><input autoComplete="off" onKeyDown={onSearch}
            placeholder="Find User" type="text"
            value={searchTerm} onChange={onChange}/>
          <i className="fa fa-search"/>
        </p>
      </div>

  )
};