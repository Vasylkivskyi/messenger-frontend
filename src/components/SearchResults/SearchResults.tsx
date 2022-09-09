import React from "react";
import { SearchResultsType } from "../../types";
import Icon from "../Icon/Icon";
import "./searchResults.scss";

const SearchResults: React.FC<SearchResultsType> = ({
  searchResults,
  clear,
}) => (
  <ul className="search-results">
    <div className="curtain" onClick={clear} />
    {searchResults.map((user) => (
      <li>
        <Icon name="face" className="result-icon-wrapper" />
        {user.username}
      </li>
    ))}
  </ul>
);

export default SearchResults;
