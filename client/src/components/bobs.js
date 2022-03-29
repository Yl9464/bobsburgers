import React, { useEffect, useState } from 'react'
import Axios from 'axios'

const Bobs = () => {

  const [name, setName] = useState('')
  const [members, setMembers] = useState([])
  const [filteredMembers, setFilteredMembers] = useState([])

  const [trait, setTrait] = useState('')
  const [characteristics, setCharacteristics] = useState([])
  const [filteredCharacteristics, setFiltereCharacteristics] = useState([])
  
  useEffect(() => {
    const fetchName = async () => {
      const fetchedName = await Axios.get('http://localhost:1337/api/members')
      setMembers(fetchedName.data)
    }

    fetchName()
  }, [])

  useEffect(() => {
    setFilteredMembers(members.filter((member) => member.name.toUpperCase().includes(name.toUpperCase())))
  }, [name, members])


  useEffect(() => {
    const fetchTrait = async () => {
    const fetchedTrait = await Axios.get('http://localhost:1337/api/traits')

      setCharacteristics(fetchedTrait.data)
    }
    fetchTrait()
  }, [])

  useEffect(() => {
    setFiltereCharacteristics(characteristics.filter((characteristic) => characteristic.trait.toUpperCase().includes(trait.toUpperCase())))
  }, [trait, characteristics])



  return (
    <div className='Bobs' >
      <h1  >Bobs Burgers</h1>

<h2 className='NameHeading'> <u>Search</u> <u>Character's</u> <u>Names</u> </h2>
 <div className='SearchName'>
      <input type="text" name='Name' onChange={(event) => setName(event.target.value)} />
    <div>{filteredMembers.map(member => {
        return (
          <div> 
          <h2 className='Member'><u>{member.name}</u> Of {member.characterGroup}</h2>
          <p className='Quotes'>"{member.bestQuote}"</p>
          </div>
        )
      })
     } </div>
      </div>

   <h2 className='TraitHeading'> <u>Search</u> <u>Character's</u> <u>Trait</u> </h2> 
<div className='SearchTrait'>
  <input type="text" name='Trait' onChange={(event) => setTrait(event.target.value)} />

<div>{filteredCharacteristics.map(characteristic =>{
    return(
      <div> 
        <h2 className='Traits'> <u>{characteristic.trait}</u> - Members Include: <u>{characteristic.members.name}</u> </h2>
       <ul className='NamesList'>
         {characteristic.members.map((person) => 
         <li className='Names'>
           {person.name}
         </li>
         )}
       </ul>
      </div>
        )
    })
    } </div>
</div>
    </div>
  )
}

export default Bobs