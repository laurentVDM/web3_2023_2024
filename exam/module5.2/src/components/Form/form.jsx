import { useContext, useState } from "react";
import { Context as OpinionContext } from "contexts/OpinionsContext";

const Form = () => {

    const [newOpinion, setNewOpinion] = useState('');
    const {createOpinion} = useContext(OpinionContext)

    const handleOpinionChange = (event) => {
        setNewOpinion(event.target.value)
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        createOpinion(newOpinion);
        setNewOpinion('');
    }

    return (
        <form onSubmit={handleSubmit}>
            <div>
                name: <input value={newOpinion} onChange={handleOpinionChange} />
                <button type="submit">add opinion</button>
            </div>
        </form>
    )
}
export default Form