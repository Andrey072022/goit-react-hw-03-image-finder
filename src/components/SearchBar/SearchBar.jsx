import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import styles from './SearchBar.module.css';

export default class SearchBar extends Component {
  state = {
    name: '',
   
  };

  handleOnChange = e => {
    this.setState({ name: e.currentTarget.value.toLowerCase() });
  };

  handleOnSubmit = e => {
    e.preventDefault();

    if (this.state.name.trim() === '') {
      toast('Please, enter a name for the image :)');
    }

    this.props.onSubmit(this.state.name);
    this.setState({name: '' });
  };

  render() {
        return (
          <header className={styles.Searchbar}>
            <form className={styles.SearchForm} onSubmit={this.handleOnSubmit}>
              <button type="submit" className={styles['SearchForm-button']}>
                <span className={styles['SearchForm-button-label']}>
                  Search
                </span>
              </button>

              <input
                onChange={this.handleOnChange}
                value={this.state.name}
                className={styles['SearchForm-input']}
                type="text"
                autoComplete="off"
                autoFocus
                placeholder="Search images and photos"
                />
            </form>
          </header>
        );
  }
}

SearchBar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
