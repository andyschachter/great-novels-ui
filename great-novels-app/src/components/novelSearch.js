import React from 'react'

const Search = props => {

  const novelSearch = (event) => {
    props.setSearchTerm(event.target.value)
  }

  return (

    <div className='App'>
      <h1>Great Novels</h1>
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