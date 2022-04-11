import React from "react";
import PropTypes from "prop-types";
import s from "./ImageGallery.module.css";
import ImageGalleryItem from "../ImageGalleryItem/ImageGalleryItem";

function ImageGallery({ images, onOpen }) {
  return (
    <ul className={s.ImageGallery}>
      {images.map((image) => (
        <ImageGalleryItem key={image.id} image={image} onOpen={onOpen} />
      ))}
    </ul>
  );
}

ImageGallery.propTypes = {
  images: PropTypes.array.isRequired,
  onOpen: PropTypes.func.isRequired,
};
export default ImageGallery;
