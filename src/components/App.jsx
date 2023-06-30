import React, { Component } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Loader from './Loader/Loader';
import { fetchImages } from './FetchImages';
import SearchBar from './SearchBar/SearchBar';
import ImageGallery from './ImageGallery/ImageGallery';
import Button from './Button/Button';
import css from './App.module.css';

export default class App extends Component {
  state = {
    query: '',
    images: [],
    isLoading: false,
    error: '',
    page: 1,
    totalHits: null,
  };

  async componentDidUpdate(prevProps, prevState) {
    const { query, page, totalHits, images } = this.state;

    if (query === '') {
      toast.warn('Please enter your search request');
      return;
    }

    if (prevState.query !== query || prevState.page !== page) {
      try {
        this.setState({ isLoading: true });
        const { hits, totalHits } = await fetchImages(query, page);
        if (hits.length === 0) {
          toast.error(
            'Sorry, there are no images matching your search query. Please try again.'
          );
          return;
        }
        if (hits.length > 0 && page === 1) {
          toast.success(`Hooray! We found ${totalHits} images!`);
        }

        const images = hits.map(({ id, largeImageURL, webformatURL, tags }) => {
          return { id, largeImageURL, webformatURL, tags };
        });

        return this.setState(prevState => ({
          images: [...prevState.images, ...images],
          totalHits: totalHits,
        }));
      } catch (error) {
        this.setState({ error: error.message });
        console.log(error.message);
      } finally {
        this.setState({ isLoading: false });
      }
    }

    if (totalHits !== null && totalHits <= images.length) {
      toast.info(`We're sorry, but you've reached the end of search results.`);
    }
  }

  handleSearch = query => {
    this.setState({ query, images: [], page: 1 });
  };

  handleLoadMore = () => {
    this.setState(prevState => ({ page: prevState.page + 1 }));
  };

  render() {
    const { images, isLoading, page, totalHits } = this.state;
    const showButton = images.length > 0 && totalHits > page * 12 && !isLoading;

    return (
      <>
          <div className={css.App}>
        <SearchBar onSubmit={this.handleSearch} />
        {images?.length > 0 && <ImageGallery images={images} />}
        {showButton && <Button onClick={this.handleLoadMore} />}
        {isLoading && <Loader />}
         </div></>
    );
  }
}
