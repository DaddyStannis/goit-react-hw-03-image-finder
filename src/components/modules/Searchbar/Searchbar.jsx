import styles from './searchbar.module.css';
import { Component } from 'react';
import { ReactSVG } from 'react-svg';
import magnifyingGlass from '../../../shared/images/svg/magnifying-glass.svg';
import PropTypes from 'prop-types';

class Searchbar extends Component {
  state = {
    value: '',
  };

  handleSubmit = e => {
    const { onSubmit } = this.props;
    e.preventDefault();
    const { value } = e.target.elements['search'];
    onSubmit(value.trim());
  };

  handleChange = e => {
    const { value } = e.target;
    this.setState(() => {
      return { value: value };
    });
  };

  render() {
    const { value } = this.state;

    return (
      <header className={styles.searchbar}>
        <form onSubmit={this.handleSubmit} className={styles.form}>
          <div className={styles.wrapper}>
            <input
              className={styles.field}
              type="text"
              name="search"
              autoComplete="off"
              autoFocus
              placeholder="Search images and photos"
              value={value}
              onChange={this.handleChange}
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
