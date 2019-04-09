import React from "react";
import Input from "./common/input";

const ExpandedList = ({ student, tags, onCreateTag }) => {
  return (
    <div>
      {student.grades.map((grade, index) => (
        <li key={`student.id${grade}`}>
          Test{index + 1}: {grade}
        </li>
      ))}
      <div className="row m-1">
        {student.tags.map(tag => (
          <button className="btn btn-secondary m-1" key={`student.id${tag}`}>
            {tag}
          </button>
        ))}
      </div>
      <Input value={tags} student={student} onCreateTag={onCreateTag} />
    </div>
  );
};

export default ExpandedList;
