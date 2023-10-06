
const Total = ({parts}) => {
  let total=0;
    parts.forEach((part) => {
      total += parseInt(part.exercises)
    });
    return(
      <div>      
        <p>Number of exercises {total}</p>
      </div>
    )
}
export default Total