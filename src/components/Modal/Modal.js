import React, { Component } from 'react';
import PropTypes from 'prop-types';

import css from './Modal.module.css';

export default class Module extends Component {
  componentDidMount = () => {
    document.addEventListener('keydown', this.handleKeyDown);
  };
  componentWillUnmount = () => {
   document.removeEventListener('keydown', this.handleKeyDown);
  };

  handleKeyDown = e => {
    if (e.code === 'Escape') {
      this.props.onClose();
    }
  };
  handleBackDropClick = e => {
    if (e.target === e.currentTarget) {
      this.props.onClose();
    }
  };

  render() {
    const { src, alt } = this.props;
    return (
      <div className={css.overlay} onClick={this.handleBackDropClick}>
        <div className={css.modal}>
          <img src={src} alt={alt} />
        </div>
      </div>
    );
  }
}

Module.propTypes = {
  onClose: PropTypes.func,
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
};
