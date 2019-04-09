import React, { Component } from "react";
class Input extends Component {
  onKeyPress = (e, student) => {
    const { onCreateTag } = this.props;
    if (e.which === 13) {
      onCreateTag(e.currentTarget.value, student);
      e.currentTarget.value = "";
    }
  };
  render() {
    const { tags, student } = this.props;
    return (
      <input
        value={tags}
        type="text"
        placeholder="Add a tag"
        onKeyPress={e => this.onKeyPress(e, student)}
      />
    );
  }
}

export default Input;
