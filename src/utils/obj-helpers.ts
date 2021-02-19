import {UserType} from '../api/socialApi'


export const updateObjectInArray = (items: Array<UserType>,
  itemId:number,  newItemObjProps: {followed: boolean}):  Array<UserType> => {
  return items.map((item) => {
    if (item.id === itemId) {
      return {
        ...item, ...newItemObjProps
      };
    } else {
      return item;
    }
  })
};