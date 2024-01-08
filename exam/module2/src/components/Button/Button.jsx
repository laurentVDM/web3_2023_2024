const Button = ({ changeCount, delta, text }) => {

    const handleClick = (event) =>{
        const clickedDelta= parseInt(event.target.dataset.delta, 10);
        changeCount(clickedDelta) 
    }

    return (
        <button onClick={handleClick} data-delta={delta}>
        {text}
      </button>
    )
  }
  export default Button