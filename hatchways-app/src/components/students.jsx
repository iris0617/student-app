import React, { Component } from "react";
import { getStudents } from "../services/studentService";
import { createFullName, getAvg } from "./utils/initialCalculation";
import { filterStudents } from "./utils/filterStudents";
import SearchBox from "./common/searchBox";
import InfoList from "./infoList";

class Students extends Component {
  state = { students: [], grades: [], nameSearchQuery: "", tagSearchQuery: "" };
  async componentDidMount() {
    const { data } = await getStudents();
    let students = data.students;
    const fullName = students.map(student => createFullName(student));
    const grades = students.map(student => student.grades);
    const avg = grades.map(grade => getAvg(grade));
    students.map(student => {
      student.avg = avg[student.id - 1];
      student.fullName = fullName[student.id - 1];
      student.tags = [];
      return student;
    });
    this.setState({ students, grades });
  }

  handleNameSearch = query => {
    this.setState({ nameSearchQuery: query });
    this.setState({ tagSearchQuery: "" });
  };

  handleTagSearch = query => {
    this.setState({ tagSearchQuery: query });
    this.setState({ nameSearchQuery: "" });
  };

  handleClick = student => {
    let students = [...this.state.students];
    const index = students.indexOf(student);
    if (students[index].expanded === true) {
      students[index].expanded = false;
    } else {
      students[index].expanded = true;
    }
    this.setState({ students });
  };

  createTag = (value, student) => {
    console.log(value);
    const newTag = value;
    const students = [...this.state.students];
    const index = students.indexOf(student);
    let selectedStudent = students[index];
    selectedStudent.tags = [...selectedStudent.tags, newTag];
    this.setState({ students });
  };

  render() {
    const { students, nameSearchQuery, tagSearchQuery } = this.state;
    const filteredStudents = filterStudents(
      students,
      nameSearchQuery,
      tagSearchQuery
    );
    return (
      <div className="list-container">
        <SearchBox
          name="nameSearch"
          onChange={this.handleNameSearch}
          value={nameSearchQuery}
          placeholder="Search by name"
        />
        <SearchBox
          name="tagSearch"
          onChange={this.handleTagSearch}
          value={tagSearchQuery}
          placeholder="Search by tag"
        />
        <InfoList
          filteredStudents={filteredStudents}
          onClick={this.handleClick}
          tags={filteredStudents.tags}
          onCreateTag={this.createTag}
        />
      </div>
    );
  }
}

export default Students;
