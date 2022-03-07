import { fromJS } from 'immutable';

// Take in Object and returns Immutable object
export default function getImmutableObject(object) {
    return fromJS(object);
};
