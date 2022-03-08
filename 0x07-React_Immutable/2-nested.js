import { fromJS } from 'immutable';

// Coverts object into Map and finds nested value with getIn
export default function accessImmutableObject(object, array) {
  const mapObj = fromJS(object);
  return mapObj.getIn(array, undefined);
}
