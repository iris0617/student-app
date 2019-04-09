import React from "react";
const Image = ({ student }) => {
  return <img src={student.pic} className="mr-3 portrait" alt="portrait" />;
};

export default Image;
