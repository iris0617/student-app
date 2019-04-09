import _ from "lodash";
function filterByName(students, nameSearchQuery) {
  let nameFilteredStudents = students.filter(student =>
    student.fullName.toLowerCase().includes(nameSearchQuery.toLowerCase())
  );
  return nameFilteredStudents;
}
function filterByTag(students, tagSearchQuery) {
  let tagFilteredStudents = students.filter(student =>
    _.some(student.tags, _.unary(_.partialRight(_.includes, tagSearchQuery)))
  );
  return tagFilteredStudents;
}
export function filterStudents(students, nameSearchQuery, tagSearchQuery) {
  let filteredStudents = students;
  if (tagSearchQuery) {
    filteredStudents = filterByTag(students, tagSearchQuery);
  }
  if (nameSearchQuery) {
    filteredStudents = filterByName(students, nameSearchQuery);
  }
  return filteredStudents;
}
