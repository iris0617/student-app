import React from "react";
const BasicList = ({ student }) => {
  return (
    <React.Fragment>
      <h5 className="mt-0 mb-1 title">{student.fullName}</h5>
      <ul className="list-unstyled">
        <li>Email: {student.email}</li>
        <li>Company: {student.company}</li>
        <li>Skill: {student.skill}</li>
        <li>Average: {student.avg}</li>
      </ul>{" "}
    </React.Fragment>
  );
};

export default BasicList;
