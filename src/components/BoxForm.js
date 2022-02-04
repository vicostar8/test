import React from "react";
import { v4 as uuidv4 } from "uuid";

class BoxForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { height: "", width: "", backgroundColor: "" };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(evt) {
    this.setState({ [evt.target.name]: evt.target.value });
  }

  handleSubmit(evt) {
    evt.preventDefault();
    const newColorBox = { ...this.state, id: uuidv4() };
    this.props.onSubmit(newColorBox);

    this.setState({ height: "", width: "", backgroundColor: "" });
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <label htmlFor="height">INALTIME:</label>
          <input
            type="text"
            name="height"
            id="height"
            value={this.state.height}
            placeholder="Height"
            onChange={this.handleChange}
          />
        </div>
        <div>
          <label htmlFor="width">LATIME:</label>
          <input
            type="text"
            name="width"
            id="width"
            value={this.state.width}
            placeholder="Width"
            onChange={this.handleChange}
          />
        </div>
        <div>
          <label htmlFor="backgroundColor">Background Color:</label>
          <input
            type="text"
            name="backgroundColor"
            id="backgroundColor"
            value={this.state.backgroundColor}
            placeholder="Background Color"
            onChange={this.handleChange}
          />
        </div>
        <button>Generate</button>
      </form>
    );
  }
}

export default BoxForm;
