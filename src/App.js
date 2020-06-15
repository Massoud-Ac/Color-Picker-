import React, { Component } from 'react';
import $ from 'jquery'
import { SketchPicker, TwitterPicker, BlockPicker, CirclePicker } from 'react-color'
// import logo from './logo.svg';
import './App.css';


class App extends Component {
  state = {
    data: [
      { id: 1, class: "red", value: "#ff0000", text: "Red" },
      { id: 2, class: "green", value: "#adff2f", text: "GreenYellow" },
      { id: 3, class: "yellow", value: "#ffff00", text: "Yellow" },
      { id: 4, class: "blue", value: "#0000ff", text: "Blue" },
      { id: 5, class: "cyan", value: "#00ffff", text: "Cyan" },
      { id: 6, class: "khaki", value: "#f0e68c", text: "Khaki" },
      { id: 7, class: "purple", value: "#800080", text: "Purple" }
    ],
    colorPicker: "#fff",
    // background: "#fff",
    colors: [
      "#f44336", "#e91e63", "#9c27b0", "#673ab7", "#3f51b5", "#2196f3",
      "#03a9f4", "#00bcd4", "#009688", "#4caf50", "#8bc34a", "#cddc39",
      "#ffeb3b", "#ffc107", "#ff9800", "#ff5722", "#795548", "#607d8b"
    ]
  }
  componentDidMount() {
    $("#form-control").change(function () {
      var color = $("option:selected", this).attr("class");
      $("#form-control").attr("class", color);
    });
  }
  SeletColor = (e) => {
    console.log(e.target.value);
    this.setState({ background: e.target.value })
  }
  handleChangeComplete = (color) => {

    this.setState({ background: color.hex })
  }
  render() {
    const { data } = this.state

    return (
      <div className="app">
        <select id="form-control" onChange={this.SeletColor}>
          <option style={{ backgroundColor: "white" }} defaultValue="انتخاب کنید">  انتخاب کنید </option>
          {data.map((node, index) => {
            return <option key={index} className={node.class} value={node.value}>{node.text}</option>
          })}
        </select>
        <table>
          <tr>
            <td>Color</td>
          </tr>
          <tr>
            <td style={{ backgroundColor: `${this.state.background}` }}></td>
          </tr>
        </table>
        <div className="row">
          <div style={{ float: "left", margin: "25px" }}>
            <TwitterPicker
              color={this.state.background}
              colors={this.state.colors}
              onChangeComplete={this.handleChangeComplete}
            />
          </div>
          <div style={{ float: "right", margin: "25px" }}>
            <CirclePicker
              color={this.state.background}
              colors={this.state.colors}
              onChangeComplete={this.handleChangeComplete}
            />
          </div>
        </div>
      </div>

    );
  }
}

export default App;

