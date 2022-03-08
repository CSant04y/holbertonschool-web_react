import { Map } from 'immutable';

// Take in Object and returns Immutable object
export default function getImmutableObject(object) {
  return Map(object);
};

const object = {
  fear: true,
  smell: -1033575916.9145899,
  wall: false,
  thing: -914767132
};
const obj = getImmutableObject(object);

console.log(obj);
