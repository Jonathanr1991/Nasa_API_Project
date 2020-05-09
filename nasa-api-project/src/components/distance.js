import React, { Component } from "react";
import Sketch from "react-p5";

export default class Distance extends Component {
  constructor(props) {
    super(props);
    this.handleCheckedSun = this.handleCheckedSun.bind(this);
    this.state = {
      canvasWidth: 1120,
      canvusHeight: 500,
      showSun: false,
      sun: 0,
      showEdgeSS: false,
      ss: 0,
      showCenterMilkyWay: false,
      milkyWay: 0,
      showM31: false,
      m31: 0,
      distance: 0,
    };
  }
  setup = (p5, canvasParentRef) => {
    p5.createCanvas(1120, 500).parent(canvasParentRef); // use parent to render canvas in this ref (without that p5 render this canvas outside your component)
  };
  draw = (p5) => {
    p5.background(0);
    p5.ellipse(10, 250, 10, 10);
    p5.fill(0, 102, 153);
    p5.text("earth", 10, 270);

    if (this.state.showSun == true) {
      p5.ellipse(
        (this.state.sun * 1100) / this.state.distance + 10,
        240,
        10,
        10
      );
      p5.fill(255, 204, 153);
      p5.text("sun", (this.state.sun * 1100) / this.state.distance, 230);
    }
    if (this.state.showEdgeSS == true) {
      p5.ellipse(
        (this.state.ss * 1100) / this.state.distance + 10,
        265,
        10,
        10
      );
      p5.fill(255, 204, 153);
      if (this.state.distance == 1) {
        p5.text(
          "Edge of Solar System",
          (this.state.ss * 1100) / this.state.distance - 100,
          280
        );
      } else {
        p5.text(
          "Edge of Solar System",
          (this.state.ss * 1100) / this.state.distance,
          280
        );
      }
    }
    if (this.state.showCenterMilkyWay == true) {
      p5.ellipse(
        (this.state.milkyWay / this.state.distance) * 1100 + 10,
        250,
        10,
        10
      );
      p5.fill(255, 204, 153);
      if (this.state.distance == 167000) {
        p5.text(
          "Center of Milky Way",
          (this.state.milkyWay * 1100) / this.state.distance - 100,
          270
        );
      } else {
        p5.text(
          "Center of Milky Way",
          (this.state.milkyWay * 1100) / this.state.distance + 20,
          250
        );
      }
    }
    if (this.state.showM31 == true) {
      p5.ellipse(1110, 250, 10, 10);
      p5.fill(255, 204, 153);
      p5.text("Andromeda (M31)", 1010, 270);
    }
    // NOTE: Do not use setState in draw function or in functions that is executed in draw function... pls use normal variables or class properties for this purposes
  };
  handleCheckedSun = (e) => {
    this.setState({ showSun: !this.showSun, sun: 0.01, distance: 0.01 });
    if (this.state.showEdgeSS == true) {
      this.setState({ distance: 1 });
      console.log((this.state.sun * 1100) / this.state.distance);
    }
    if (this.state.showCenterMilkyWay == true) {
      this.setState({ distance: 167000 });
      console.log((this.state.sun * 1100) / this.state.distance);
    }
    if (this.state.showM31 == true) {
      this.setState({ distance: 16700000 });
    }
  };
  handleCheckedSS = (e) => {
    this.setState({ showEdgeSS: !this.showEdgeSS, ss: 1, distance: 1 });
    if (this.state.showCenterMilkyWay == true) {
      this.setState({ distance: 167000 });
      console.log((this.state.sun * 1100) / this.state.distance);
    }
    if (this.state.showM31 == true) {
      this.setState({ distance: 16700000 });
    }
  };
  handleCheckedMW = (e) => {
    this.setState({
      showCenterMilkyWay: !this.showCenterMilkyWay,
      milkyWay: 167000,
      distance: 167000,
    });
    if (this.state.showM31 == true) {
      this.setState({ distance: 16700000 });
    }
  };
  handleCheckedM31 = (e) => {
    this.setState({
      showM31: !this.showM31,
      m31: 16700000,
      distance: 16700000,
    });
  };
  render() {
    if (this.props.data.distance) {
      return (
        <div>
          <div className="container mt-3">
            <Sketch setup={this.setup} draw={this.draw} />
          </div>

          <div className="container">
            <h2>Check the boxes you want to compare distances from Earth</h2>
            <div className="form-check form-check-inline">
              <input
                className="form-check-input"
                type="checkbox"
                id="inlineCheckbox1"
                value="earth"
                checked
              />
              <label className="form-check-label">Earth</label>
            </div>
            <div className="form-check form-check-inline">
              <input
                className="form-check-input"
                type="checkbox"
                id="inlineCheckbox2"
                value="sun"
                onClick={this.handleCheckedSun}
              />
              <label className="form-check-label">Sun</label>
            </div>
            <div className="form-check form-check-inline">
              <input
                className="form-check-input"
                type="checkbox"
                id="inlineCheckbox2"
                value="solarsystem"
                onClick={this.handleCheckedSS}
              />
              <label className="form-check-label">Edge of Solar System</label>
            </div>
            <div className="form-check form-check-inline">
              <input
                class="form-check-input"
                type="checkbox"
                id="inlineCheckbox2"
                value="Milkyway"
                onClick={this.handleCheckedMW}
              />
              <label className="form-check-label">Center of Milky Way</label>
            </div>
            <div className="form-check form-check-inline">
              <input
                className="form-check-input"
                type="checkbox"
                id="inlineCheckbox2"
                value="Andromeda"
                onClick={this.handleCheckedM31}
              />
              <label className="form-check-label">Andromeda (M31)</label>
            </div>
          </div>
        </div>
      );
    } else {
      return <div></div>;
    }
  }
}
