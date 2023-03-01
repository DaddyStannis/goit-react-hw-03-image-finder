import { Component } from 'react';
import ImageGallery from './modules/ImageGallery/ImageGallery';
import Searchbar from './modules/Searchbar/Searchbar';
import LoadMoreButton from 'components/modules/LoadMoreButton/LoadMoreButton';
import Modal from 'shared/Modal/Modal';

import { getImages } from './api/images-api';
import Loader from 'shared/Loader/Loader';
import ErrorField from 'shared/ErrorField/ErrorField';

class App extends Component {
  state = {
    images: [],
    total: 0,
    search: '',
    page: 1,
    loading: false,
    error: null,
    imgId: null,
  };

  componentDidUpdate(_, prevState) {
    const { search, page } = this.state;

    if (prevState.search !== search || prevState.page !== page) {
      this.updateImages();
    }
  }

  handleSubmit = value => {
    if (value && value !== this.state.search) {
      this.setState({ search: value, page: 1, images: [] });
    }
  };

  handleLoadMoreClick = () => {
    this.setState((state, _) => {
      return { page: state.page + 1 };
    });
  };

  handleImgOpen = id => {
    this.setState({ imgId: id });
  };

  handleImgClose = () => {
    this.setState({ imgId: null });
  };

  async updateImages() {
    const { search, page } = this.state;

    if (search) {
      this.setState({ loading: true, error: null });

      try {
        const data = await getImages(search, page);

        if (!data.hits.length) {
          this.setState({ total: 0 });
          throw new Error('Nothing found!');
        }

        this.setState((prevState, _) => {
          return {
            images: [...prevState.images, ...data.hits],
            total: data.total,
            error: null,
          };
        });
      } catch (e) {
        this.setState({ error: e });
      } finally {
        this.setState({ loading: false });
      }
    }
  }

  render() {
    const { images, total, imgId, loading, error } = this.state;
    const img = images.find(img => img.id === imgId);

    const showButtonLoadMore = Boolean(images.length < total);

    return (
      <div className="container">
        <Searchbar onSubmit={this.handleSubmit} />
        <ImageGallery images={images} onClick={this.handleImgOpen} />
        {loading && <Loader />}
        {showButtonLoadMore && (
          <LoadMoreButton text="Load more" onClick={this.handleLoadMoreClick} />
        )}
        {error && <ErrorField error={error.message} />}

        {imgId && (
          <Modal isOpen={Boolean(imgId)} onClose={this.handleImgClose}>
            <img
              src={img.largeImageURL}
              alt={img.tag}
              style={{ maxWidth: '100vw', maxHeight: '100vh' }}
            />
          </Modal>
        )}
      </div>
    );
  }
}

export default App;
