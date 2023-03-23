import React, { memo } from "react";

import Search from "../Search/Search";

import './Header.css';

function Header() {
  return (
    <div className="header">
      <p className="searchForBooks">Search for books</p>
      <Search />
    </div>
  );
}

export default memo(Header);