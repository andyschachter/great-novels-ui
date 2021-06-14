import React from 'react'

const search = props => {

  const novelSearch = (event) => {
    props.searchTerm(event.target.value)
  }

  return (

    <div className='App'>
      <h2>Great Novels</h2>
      <input type="text" name="search" onChange={novelSearch}/>
    </div>
  )
}

export default search