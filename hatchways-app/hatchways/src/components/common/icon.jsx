import React, { Component } from "react";
class Icon extends Component {
  renderIcon = student => {
    let className = "fa fa-2x mr-4 fa-";
    student.expanded === true ? (className += "minus") : (className += "plus");
    return className;
  };
  render() {
    const { student, onClick } = this.props;
    return (
      <i
        className={this.renderIcon(student)}
        onClick={() => onClick(student)}
      />
    );
  }
}

export default Icon;
