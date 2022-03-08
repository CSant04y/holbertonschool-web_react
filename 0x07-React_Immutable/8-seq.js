import { Seq } from 'immutable';

export default function printBestStudents(object) {
  const cap = (string) => string.charAt(0).toUpperCase() + string.slice(1);

  let filteredStudents = Seq(object)
    .filter((cal) => cal.score > 70)
    .map((stu) => {
      const newStudent = {
        ...stu,
        firstName: cap(stu.firstName),
        lastName: cap(stu.lastName),
      };
      return newStudent;
    });
  filteredStudents = filteredStudents.toJS();

  console.log(filteredStudents);
}
