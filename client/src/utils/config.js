export default {
  cloudinary: {
    baseURL: import.meta.env.CLOUDINARY_BASE_URL,
    cloudName: import.meta.env.CLOUDINARY_CLOUD_NAME,

    // Make this an array with multiple types of transformations, if needed.
    // https://cloudinary.com/blog/transparent_webp_format_cdn_delivery_based_on_visitors_browsers
    // https://cloudinary.com/cookbook/resize_an_image
    transformation: "w_300,h_300,c_fill,f_auto",

    uploadPreset: import.meta.env.CLOUDINARY_UPLOAD_PRESET,
  },
};
