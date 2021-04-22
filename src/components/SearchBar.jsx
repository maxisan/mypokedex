import React, { useState } from 'react'

export default function SearchBar({pokeSearch}) {

  const [search, setSearch] = useState('');

  const handleChange = (e) => {
    setSearch(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    pokeSearch(search)
    
  }
  
  return (
    <nav className="navbar navbar-light bg-light">
      <div className="container-fluid">
        <form className="d-flex" onSubmit={handleSubmit}>
          <input className="form-control me-2" type="text" name='search' value={search} onChange={handleChange}/>
          <button className="btn btn-outline-success" type="submit">Buscar</button>
        </form>
      </div>
    </nav>
  )
}
