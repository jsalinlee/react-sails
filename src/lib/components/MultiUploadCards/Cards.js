import React from "react";
import cancelIcon from "../../../../public/assets/images-icons/cancel-icon.png";

export default (props) => {
  return props.files.map((file, index) => {
    const fileURL = URL.createObjectURL(file);
    return (
      <div
        className="preview-card"
        key={file.id}
        draggable
        onDragOver={(event) => props.onDragOver(event, index)}
        onDragStart={(event) => props.onDragStart(event, index)}
        onDragEnd={(event) => props.onDragEnd(index)}
      >
        <img
          onClick={() => props.removeFile(file.id)}
          className="preview-card-cancel"
          src={cancelIcon}
          alt=""
        />
        <img className="preview-card-image" src={fileURL} alt="" />
      </div>
    );
  });
};
