import React from "react";
import PropTypes from "prop-types";
import s from "./ImageGalleryItem.module.css";

function ImageGalleryItem({ image, onOpen }) {
  const { webformatURL, tags, largeImageURL } = image;
  return (
    <li className={s.ImageGalleryItem}>
      <img
        className={s.ImageGalleryItemImage}
        src={webformatURL}
        alt={tags}
        onClick={onOpen}
        data-source={largeImageURL}
      />
    </li>
  );
}
ImageGalleryItem.propTypes = {
  image: PropTypes.object.isRequired,
  onOpen: PropTypes.func.isRequired,
};
export default ImageGalleryItem;
