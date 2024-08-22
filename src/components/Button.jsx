import PropTypes from 'prop-types';

function Button({title, onClick, size = "sm"}) {
    console.log(size)
  return (
    <div>
    
     <button onClick={onClick}>{title}</button>
    </div>


)

}

Button.propTypes = {
  title:PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  size:PropTypes.string.isRequired,
}

export default Button;