import React, { memo } from 'react';

import './Search.css';

function Search() {
  return (
    <>
      <div className='search'>
        <input type="text" className='search-input' />
        <img src="/images/icon-search.png" alt="search" className='icon-search' />
      </div>
      <div className='categories'>
      <p className='categoriesText'>Categories</p>
      </div>
    </>
  );
}

export default memo(Search);