import React, {FC, useState} from "react";
import {useHistory} from "react-router";
import {UsersSearch} from "@users/ui/moleculs/UsersSearch/UsersSearch";


export const Search: FC = () => {
  const history = useHistory();
  const [searchTerm, setSearchTerm] = useState<string>('');

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };
  const onSearch = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") history.push(`/search/${searchTerm}`)
  };
  return (
      <UsersSearch searchTerm={searchTerm}
          onChange={onChange} onSearch={onSearch}/>
  )
};