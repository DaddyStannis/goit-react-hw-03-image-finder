import styles from './searchbar.module.css';
import { Component } from 'react';
import { ReactSVG } from 'react-svg';
import magnifyingGlass from '../../../shared/images/svg/magnifying-glass.svg';
import PropTypes from 'prop-types';

class Searchbar extends Component {
  render() {
    const { onSubmit } = this.props;

    return (
      <header className={styles.searchbar}>
        <form
          onSubmit={e => {
            e.preventDefault();
            const { value } = e.target.elements['search'];
            onSubmit(value);
          }}
          className={styles.form}
        >
          <div className={styles.wrapper}>
            <input
              className={styles.field}
              type="text"
              name="search"
              autoComplete="off"
              autoFocus
              placeholder="Search images and photos"
            />
            <button type="submit" className={styles.button}>
              <ReactSVG className={styles.image} src={magnifyingGlass} />
            </button>
          </div>
        </form>
      </header>
    );
  }
}

export default Searchbar;

Searchbar.propTypes = {
  onSubmit: PropTypes.func,
};
