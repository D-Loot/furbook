import React from "react";
// import { v4 as uuid } from "uuid";
import { APIService } from "../../services";
import config from "../../utils/config";

import Auth from "../../utils/auth.js";

const PostImage = () => {
  // Array of strings - ids of images on cloudinary
  const [images, setImages] = React.useState([]);
  const inputRef = React.useRef();

  const handleChange = async (event) => {
    // Get the file from the input before clearing it
    const file = event.target.files[0];

    inputRef.current.value = "";
    APIService.create(
      file,
      Auth.getProfile().data.username
      // TODO: Replace this with the user's id from Context
      // uuid()
    ).then(({ format, public_id: imageId, version }) => {
      setImages([
        ...images,

        // TODO: Send this info ℹ️ to the backend
        { format, imageId, version },
      ]);
    });
  };

  return (
    <main className="h-screen w-full flex justify-center items-center">
      {/* 🎵 This is firing immediately upon user's upload. Maybe you want a form with a submit confirmation? */}
      <input
        type="file"
        onChange={handleChange}
        accept="image/*"
        ref={inputRef}
      />
      {images.map(({ format, imageId, version }) => (
        <img
          key={imageId}
          src={`${config.cloudinary.baseURL}/${config.cloudinary.transformation}/v${version}/${imageId}.${format}`}
          // TODO: Add a proper alt tag ♿
          alt="a proper alt tag"
          width="500"
        />
      ))}

      {/*
https://res.cloudinary.com/codefinity/image/upload/w_240,h_53,c_scale,f_auto/v1633704232/furbook/456c9b09-6031-4d2f-86a8-571d4da7e451-uma-schedule.jpg
      */}
    </main>
  );
};

export default PostImage;
