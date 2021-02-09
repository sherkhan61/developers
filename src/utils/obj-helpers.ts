import {UserType} from '../api/social-api'


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