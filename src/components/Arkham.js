
import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { fetchCharacters } from '../actions/actions'
import Batman from './characters/Batman'
import Villains from './characters/Villains'

function Arkham() {
   const dispatch = useDispatch()
   const characters = useSelector(state => state.characters)
   
   useEffect(() => {
      dispatch(fetchCharacters())
   })

   function assignComponents(characters) {
      return characters.map(c => {
         if (c.name === "Batman") {
            return <Batman batman={c}/>
         } else {
            return <Villains villain={c} />
         }
      })
   }

   return (
      <div className="Arkham">
         {assignComponents(characters)}
      </div>
   )
}

export default Arkham