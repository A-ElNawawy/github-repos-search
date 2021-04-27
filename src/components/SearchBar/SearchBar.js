import "./SearchBar.css";

import { useContext } from "react";
import SearchContext from "./../../context/SearchContext";

const SearchBar = () => {
  const searchContext = useContext(SearchContext);
  //console.log(searchContext);
  return (
    <div className="SearchBar">
      <input
        type="search"
        value={searchContext.SearchField}
        //autoFocus
        //defaultValue=""
        onChange={(e) => {
          searchContext.setSearchField(e.target.value);
        }}
      />
      <button
        onClick={() =>
          searchContext.handleSearchButton(searchContext.SearchField)
        }
      >
        search
      </button>
    </div>
  );
};

export default SearchBar;
