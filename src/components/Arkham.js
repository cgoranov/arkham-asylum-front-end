
import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { fetchCharacters } from '../actions/actions'

function Arkham() {
   const dispatch = useDispatch()
   const characters = useSelector(state => state.characters)
   
   useEffect(() => {
      dispatch(fetchCharacters())
   })

   return (
      <div>
         {characters.map(c => <p> {c.name}  </p>)}
      </div>
   )
}

export default Arkham