const Button = ({ changeCount, text, delta }) => {
  const handleClick = (e) => {
    const clickedDelta = parseInt(e.target.dataset.delta, 10);
    
    changeCount(clickedDelta);
  };

  return (
    <button onClick={handleClick} data-delta={delta}>
      {text}
    </button>
  );
};

export default Button;