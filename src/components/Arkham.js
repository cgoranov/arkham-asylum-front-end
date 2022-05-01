
import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { fetchCharacters } from '../actions/actions'
import Villains from './characters/Villains'

function Arkham() {
   const dispatch = useDispatch()
   const characters = useSelector(state => state.characters)
   
   useEffect(() => {
      dispatch(fetchCharacters())
   })

   function assignComponents(characters) {
      characters.map(c => {
         let v
         if(c.id < 5) {
            v = <Villains villain={c}/>
         }
         return v
      })
   }

   return (
      <div className="Arkham">
         {assignComponents(characters)}
      </div>
   )
}

export default Arkham