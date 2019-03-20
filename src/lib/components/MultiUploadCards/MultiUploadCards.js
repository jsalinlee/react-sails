import React, { PureComponent } from "react";
import uuidv4 from "uuid/v4";
import Cards from "./Cards";
import Buttons from "./Buttons";

import "./MultiUploadCards.css";

export default class MultiUploadCards extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      files: []
    };
  }

  onChange = (event) => {
    const files = Array.from(event.target.files);
    files.forEach((file) => {
      file.id = uuidv4();
      this.setState((prevState) => ({
        files: [...prevState.files, file]
      }));
    });
  };

  onDragStart = (event, index) => {
    this.draggedCard = this.state.files[index];
    event.dataTransfer.effectAllowed = "move";
    event.dataTransfer.setData("text/html", event.target.parentNode);
    event.dataTransfer.setDragImage(event.target.parentNode, 20, 20);
  };

  onDragOver = (event, index) => {
    const draggedOverCard = this.state.files[index];
    if (this.draggedCard === draggedOverCard) {
      return;
    }

    let files = this.state.files.filter((file) => file !== this.draggedCard);

    files.splice(index, 0, this.draggedCard);

    this.setState({ files: files });
  };

  onDragEnd = (index) => {
    this.draggedCard = null;
  };

  removeFile = (id) => {
    this.setState((prevState) => ({
      files: prevState.files.filter((file) => file.id !== id)
    }));
  };

  render() {
    const { files } = this.state;
    const content = () => {
      switch (true) {
        case files.length > 0:
          return (
            <div>
              <Buttons onChange={this.onChange} />
              <Cards
                files={files}
                removeFile={this.removeFile}
                onDragOver={this.onDragOver}
                onDragStart={this.onDragStart}
                onDragEnd={this.onDragEnd}
              />
            </div>
          );
        default:
          return <Buttons onChange={this.onChange} />;
      }
    };

    return <div>{content()}</div>;
  }
}
