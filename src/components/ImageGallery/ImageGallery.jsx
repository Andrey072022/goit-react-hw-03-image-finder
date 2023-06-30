import React from 'react';
import PropTypes from 'prop-types';

import ImageGalleryItem from 'components/ImageGalleryItem/ImageGalleryItem';

import css from './ImageGallery.module.css';

export const imageGallery = ({ images }) => {
  return (
    <ul className={css.imageGallery}>
      {images &&
        images.map(({ id, webformatURL, tags, largeImageURL }) => (
          <ImageGalleryItem
            key={id}
            image={webformatURL}
            tags={tags}
            modalImage={largeImageURL}
          />
        ))}
    </ul>
  );
};

export default imageGallery;

imageGallery.propTypes = {
  images: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      webformatURL: PropTypes.string.isRequired,
      tags: PropTypes.string.isRequired,
      largeImageURL: PropTypes.string.isRequired,
    })
  ).isRequired,
};
