import React from "react";
import "../css/Box.css";

class Box extends React.Component {
  constructor(props) {
    super(props);

    this.handleDelete = this.handleDelete.bind(this);
  }

  handleDelete() {
    this.props.onDelete(this.props.id);
  }

  render() {
    const myStyle = {
      height: `${this.props.boxHeight}em`,
      width: `${this.props.boxWidth}em`,
      backgroundColor: this.props.boxBgColor,
    };
    return (
      <div className="rest">
        <div className="Box" style={myStyle}></div>
        <button className="Box-Button" onClick={this.handleDelete}>
          X
        </button>
      </div>
    );
  }
}

export default Box;
