import React, { Component } from "react";
import ExpandedList from "./expandedList";
import BasicList from "./basicList";
import Image from "./common/image";
import Icon from "./common/icon";
class InfoList extends Component {
  render() {
    const { filteredStudents, onClick, onCreateTag, tags } = this.props;
    return (
      <ul className="list-unstyled list">
        {filteredStudents.map(student => (
          <div className="card-content" key={student.id}>
            <li className="media" key={student.id}>
              <Image student={student} />
              <div className="media-body">
                <BasicList student={student} />
                {student.expanded && (
                  <ExpandedList
                    student={student}
                    tags={tags}
                    onCreateTag={onCreateTag}
                  />
                )}
              </div>
              <Icon student={student} onClick={onClick} />
            </li>
          </div>
        ))}
      </ul>
    );
  }
}

export default InfoList;
