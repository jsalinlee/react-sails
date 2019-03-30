import React, { PureComponent } from "react";
import MultiUploadCards from "../lib/components/MultiUploadCards/MultiUploadCards";

export default class FormDemo extends PureComponent {
  state = {
    output: ''
  }

  render = ()=> (
  <div>
    <form onSubmit={this.onSubmit}>
      <MultiUploadCards/>
      <input type="submit" value="Submit"/>
    </form>
    <div><pre>{this.state.output}</pre></div>
  </div>)

  onSubmit = (e)=> {
    e.preventDefault();
    const formData = new FormData(e.target);
    const output = [];
    for (var pair of formData.entries()) {
      output.push(pair[0]);
    }
    this.setState({
      output: output.join('\n')
    });
  }
}

