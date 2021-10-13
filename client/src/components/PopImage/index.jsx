import React from "react";
import config from "./utils/config";

const PopImage = () => {
  return (
    const [images, setImages] = React.useState([]);

    {images.map(({ format, id, version }) => (
    <img
      key={id}
      src={`${config.cloudinary.baseURL}/${config.cloudinary.transformation}/v${version}/${id}.${format}`}
      // TODO: Add a proper alt tag ♿
      alt=""
      width="500"
    />
  ))}
)};

export default PopImage;