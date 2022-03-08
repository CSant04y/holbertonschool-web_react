import { List } from 'immutable';

// Returns List object as immutable object
export function getListObject(array) {
  return List(array);
}

// adds element to immutable object with push
export function addElementToList(list, element) {
  return list.push(element);
}
