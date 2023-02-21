import { Seq } from 'immutable';

const printBestStudents = (object) => {
  const seq = Seq(object);

  const getThestudent = seq.filter((value) => value.score > 70);

  const theStudent = getThestudent.toJS();

  const formatName = (name) => name.charAt(0).toUpperCase() + name.slice(1);

  Object.keys(theStudent).map((key) => {
    theStudent[key].firstName = formatName(theStudent[key].firstName);
    theStudent[key].lastName = formatName(theStudent[key].lastName);
    return theStudent[key];
  });

  console.log(theStudent);
};

export default printBestStudents;
