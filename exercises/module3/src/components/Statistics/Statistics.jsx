import StatisticLine from "components/StatiscticLine/StatiticLine";

const Statistics = ({ good, neutral, bad }) => {
    const all = good + neutral + bad;
    const average = (good * 1 + neutral * 0 + bad * -1) / all;
    const positive = (good * 100) / all;
    return(
  
      all > 0 ? (
        <div>
        <h1>Statistics</h1>
        <StatisticLine text="good" value ={good} />
        <StatisticLine text="neutral" value ={neutral} />
        <StatisticLine text="bad" value ={bad} />
        <StatisticLine text="all" value ={all} />
        <StatisticLine text="average" value ={average} />
        <StatisticLine text="positive" value ={positive} />
        </div>
      ) : (
        <p>No feedback given yet.</p>
      )    
    )
}

export default Statistics