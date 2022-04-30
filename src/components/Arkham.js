
import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { fetchCharacters } from '../actions/actions'
import Batman from './characters/Batman'

function Arkham() {
   const dispatch = useDispatch()
   const characters = useSelector(state => state.characters)
   
   useEffect(() => {
      dispatch(fetchCharacters())
   })

   assignComponents(characters) {
      characters.map(c => {
         if (c.name == "Batman") {
            return <Batman />
         } else {
            return <Villain villain={c} />
         }
      })
   }

   return (
      <div>
         {assignComponents(characters)}
      </div>
   )
}

export default Arkham