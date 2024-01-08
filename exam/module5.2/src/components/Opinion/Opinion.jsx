import { useContext } from "react";
import { Context as OpinionContext } from "contexts/OpinionsContext";

const Opinion = () => {
    const { sortedOpinions, increaseOpinionScore } = useContext(OpinionContext);

    return (       
        <div>
            <h2>Opinions:</h2>
            <ul>
                {sortedOpinions.map((opinion) => (
                    <li key={opinion.id}>{opinion.text} {opinion.score}
                        <button onClick={() => increaseOpinionScore(opinion.id)}>Vote</button>
                    </li>
                ))}
                
            </ul>
        </div>        
    );
};

export default Opinion;
