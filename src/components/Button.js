import PropTypes from 'prop-types';

const Button = ({ item }) => {
  const { id, type, text } = item;
  return (
    <button key={id} type="button" className={type} id={`item${id}`}>
      {text}
    </button>
  );
};

Button.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.number.isRequired,
    type: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
  }).isRequired,
};

export default Button;
