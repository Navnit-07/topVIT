import React from 'react';
import style from './SearchBar.module.css'; // Import CSS file

function SearchBar({ search, setSearch }) {
  return (
    <div className={style.searchContainer}>
      <input
        type="text"
        value={search}
        onChange={(e)=>setSearch(e.target.value.toLowerCase().trimStart())} 
        placeholder="Search subjects..."
        className={style.searchInput}
      />
      {search && (
        <button className={style.clearButton} onClick={() => setSearch('')}>
          ✕
        </button>
      )}
    </div>
  );
}

export default SearchBar;
