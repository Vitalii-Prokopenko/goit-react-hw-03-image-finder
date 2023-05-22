// import PropTypes from 'prop-types';
import css from 'components/button/button.module.css';

const Button = ({handleLoadMore}) => (
  <button
    type="button"
    className={css['button-load-more']}
    onClick={handleLoadMore}
  >
    Load more
  </button>
);

// Button.propTypes = {
// //   : PropTypes.string.isRequired,
//   };

export default Button;
