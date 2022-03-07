import { fromJS, Map } from "immutable";

export default function accessImmutableObject(object, array) {
    const mapObj = fromJS(object);

    return mapObj.getIn(array, undefined);
}
