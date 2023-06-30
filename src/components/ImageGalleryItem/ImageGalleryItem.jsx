import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Modal from 'components/Modal/Modal';
import css from './ImageGalleryItem.module.css';

export default class ImageGalleryItem extends Component {
  state = {
    showModal: false,
  };
  toggleModal = () => {
    this.setState(({ showModal }) => ({
      showModal: !showModal,
    }));
  };

  render() {
    const { showModal } = this.state;
    const { modalImage, image, tags } = this.props;
    return (
      <li className={css.imageGalleryItem}>
        <img
          className={css.imageGalleryItem_image}
          src={image}
          alt={tags}
          onClick={this.toggleModal}
        />
        {showModal && (
          <Modal onClose={this.toggleModal} src={modalImage} alt={tags}></Modal>
        )}
      </li>
    );
  }
}

ImageGalleryItem.propTypes = {
  modalImage: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  tags: PropTypes.string.isRequired,
};