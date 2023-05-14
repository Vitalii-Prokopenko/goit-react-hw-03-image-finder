import PropTypes from 'prop-types';
import css from 'components/Modal/modal.module.css';

const Modal = () => (
  <div className={css['overlay']}>
    <div className={css['modal']}>
      <img src="" alt="" />
    </div>
  </div>
);

Modal.propTypes = {
  //   : PropTypes.string.isRequired,
};

export default Modal;
