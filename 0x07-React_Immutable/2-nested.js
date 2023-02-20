import { fromJS } from 'immutable';

const accessImmutableObject = (object, array) => {
  const objMapped = fromJS(object);
  return objMapped.getIn(array, undefined);
};

export default accessImmutableObject;
