import MostWantedForm from "./MostWantedForm"
import { useSelector } from 'react-redux'
import MostWantedVillain from "./MostWantedVillain"

function MostWanted(){

    const characters = useSelector(state => state.characters)

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
        <div className="mostWantedForm">
            <MostWantedForm />
            {assignComponents(characters)}
        </div>
    )
}

export default MostWanted