import React, { Component } from "react";
import uuidv4 from "uuid/v4";
import Images from "./Images";
import Buttons from "./Buttons";

import "./MultiImageUpload.css";

export default class MultiImageUpload extends Component {
  constructor(props) {
    super(props);
    this.state = {
      imageFiles: []
    };
  }

  onChange = (event) => {
    const files = Array.from(event.target.files);
    files.forEach((file) => {
      file.id = uuidv4();
      this.setState((prevState) => ({
        imageFiles: [...prevState.imageFiles, file]
      }));
    });
  };

  removeImage = (id) => {
    this.setState((prevState) => ({
      imageFiles: prevState.imageFiles.filter((image) => image.id !== id)
    }));
  };

  render() {
    const { imageFiles } = this.state;
    const content = () => {
      switch (true) {
        case imageFiles.length > 0:
          return (
            <div>
              <Buttons onChange={this.onChange} />
              <Images imageFiles={imageFiles} removeImage={this.removeImage} />
            </div>
          );
        default:
          return <Buttons onChange={this.onChange} />;
      }
    };

    return (
      <div>
        <div className="buttons">{content()}</div>
      </div>
    );
  }
}
