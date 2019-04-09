export function createFullName(student) {
  const firstName = student.firstName.toUpperCase();
  const lastName = student.lastName.toUpperCase();
  const fullName = `${firstName} ${lastName}`;
  return fullName;
}
export function getAvg(grade) {
  let sum = 0;
  const len = grade.length;
  grade.map(g => (sum += parseInt(g)));
  let avg = sum / len + "%";
  return avg;
}
