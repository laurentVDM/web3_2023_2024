import StatiscticLine from "components/StatiscticLine/StatiscticLine"

const Statisctics = (props) => {
    const all = props.goodCounter + props.neutralCounter + props.badCounter
    return(
        all > 0 ? (
            <div>
                <StatiscticLine text="good" value={props.goodCounter} />
                <StatiscticLine text="neutral" value={props.neutralCounter}/>
                <StatiscticLine text="bad" value={props.badCounter}/>
                <StatiscticLine text="all" value={all}/>
            </div>
        ) : (
            <p>No feedback yet</p>
        )
        
    )
}
export default Statisctics