import { BallTriangle } from 'react-loader-spinner';
import PropTypes from 'prop-types';
import css from 'components/Loader/loader.module.css';

const Loader = () => (
  <BallTriangle
    height={100}
    width={100}
    radius={5}
    color="#4fa94d"
    ariaLabel="ball-triangle-loading"
    wrapperClass={{}}
    wrapperStyle=""
    visible={true}
  />
);

Loader.propTypes = {
  //   : PropTypes.string.isRequired,
};

export default Loader;
