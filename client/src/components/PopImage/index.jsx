import React from "react";
import config from "../../utils/config";

const PopImage = () => {
  const [images, setImages] = React.useState([]);

  return images.map(({ format, id, version }) => (
    <img
      key={id}
      src={`${config.cloudinary.baseURL}/${config.cloudinary.transformation}/v${version}/${id}.${format}`}
      alt="post-image"
      width="500"
    />
  ));
};

export default PopImage;
