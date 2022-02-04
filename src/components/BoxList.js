import React from "react";
import BoxForm from "./BoxForm";
import Box from "./Box";
import "../css/BoxList.css";

class BoxList extends React.Component {
  constructor(props) {
    super(props);
    this.state = { boxes: [] };

    this.createColorBox = this.createColorBox.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }

  createColorBox(newColorBox) {
    this.setState({ boxes: [...this.state.boxes, newColorBox] });
  }

  handleDelete(whichBoxtoDelete) {
    this.setState({
      boxes: this.state.boxes.filter((box) => box.id !== whichBoxtoDelete),
    });
  }

  render() {
    const boxes =
      this.state.boxes.length === 0
        ? "No boxes at the moment. Fill the form above to generate a new color box."
        : this.state.boxes.map((box) => (
            <Box
              key={box.id}
              id={box.id}
              boxHeight={box.height}
              boxWidth={box.width}
              boxBgColor={box.backgroundColor}
              onDelete={this.handleDelete}
            />
          ));

    return (
      <div>
        <div>
          <BoxForm onSubmit={this.createColorBox} />
        </div>
        <div className="BoxList-Boxes">{boxes}</div>
      </div>
    );
  }
}

export default BoxList;
