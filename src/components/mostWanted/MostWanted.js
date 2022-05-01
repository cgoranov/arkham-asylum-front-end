import MostWantedForm from "./MostWantedForm"
import { useSelector,useDispatch } from 'react-redux'
import MostWantedVillain from "./MostWantedVillain"
import { useEffect } from 'react'
import { fetchCharacters } from '../../actions/actions'

function MostWanted(){

    const characters = useSelector(state => state.characters)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchCharacters())
     })

    function assignComponents(characters) {
        return characters.map(c => {
           let v
           if(c.id > 4) {
              v = <MostWantedVillain villain={c}/>
           }
           return v
        })
     }
      
    return (
        <div className="MostWantedContainer">
            <MostWantedForm />
            {assignComponents(characters)}
        </div>
    )
}

export default MostWanted