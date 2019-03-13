import React from "react";
import cancelIcon from "../../../public/assets/images-icons/cancel-icon.png";

export default (props) =>
  props.imageFiles.map((image) => {
    var imagePreview = URL.createObjectURL(image);
    return (
      <div key={image.id} className="preview-card">
        <img
          onClick={() => props.removeImage(image.id)}
          className="preview-card-cancel"
          src={cancelIcon}
          alt=""
        />
        <img className="preview-card-image" src={imagePreview} alt="" />
      </div>
    );
  });
