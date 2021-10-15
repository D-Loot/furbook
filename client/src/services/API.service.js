import config from "../utils/config";
import ky from "ky";

const BASE_URL = `https://api.cloudinary.com/v1_1/${config.cloudinary.cloudName}/upload`;

export default {
  async create(file, userId) {
    // Will hold uploaded file contents
    const fd = new FormData();

    // https://codepen.io/team/Cloudinary/pen/QgpyOK?editors=1010
    fd.append("upload_preset", config.cloudinary.uploadPreset);
    fd.append("file", file);

    const { name } = file;

    fd.append("public_id", `${userId}-${name.slice(0, name.lastIndexOf("."))}`);

    return ky
      .post(BASE_URL, {
        body: fd,
      })
      .json();
  },
};
