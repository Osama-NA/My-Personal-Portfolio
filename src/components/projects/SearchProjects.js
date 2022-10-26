import React, {useState, useEffect} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass} from '@fortawesome/free-solid-svg-icons'

const SearchProjects = ({setProjectsFilter}) => {
  const [searchInput, setSearchInput] = useState('')

  useEffect(() => {
    setProjectsFilter(searchInput.toLowerCase())
  }, [searchInput, setProjectsFilter])

  return (
    <div className='search-container'>
        <input 
            type='text' 
            placeholder='Search by language / framework'
            value={searchInput}
            onChange={e => setSearchInput(e.target.value)}
        />
        <FontAwesomeIcon icon={faMagnifyingGlass} />
    </div>
  )
}

export default SearchProjects