import React from "react";
import addIcon from "../../../public/assets/images-icons/plus-icon.png";

export default (props) => (
  <div className="buttons fadein">
    <div className="button">
      <label htmlFor="multi">
        <img src={addIcon} alt="" />
      </label>
    </div>
    <input className="image-upload" type="file" id="multi" onChange={props.onChange} multiple />
  </div>
);
