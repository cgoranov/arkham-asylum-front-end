import MostWantedForm from "./MostWantedForm"
import { useSelector, useDispatch } from 'react-redux'
import { fetchCharacters } from '../actions/actions'


function MostWanted(){

    const dispatch = useDispatch()
    const characters = useSelector(state => state.characters)

    
    return (
        <div className="mostWantedForm">
            <MostWantedForm />
        </div>
    )
}

export default MostWanted