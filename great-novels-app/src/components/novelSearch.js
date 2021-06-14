import React from 'react'

const Search = props => {

  const novelSearch = (event) => {
    props.searchTerm(event.target.value)
  }

  return (

    <div className='App'>
      <h2>Great Novels</h2>
      <input type="text" name="search" onChange={novelSearch}/>
      {props.novelDataAsProps.map(novel => {
        return (
          <>
          <div>{novel.title} by {novel.author.nameFirst} {novel.author.nameLast}</div>
          </>
        )
      })}

    </div>
  )
}

export default Search