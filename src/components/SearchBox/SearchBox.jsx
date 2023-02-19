import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import "./SearchBox.css";
import SearchIcon from "@mui/icons-material/Search";
import FilterListIcon from "@mui/icons-material/FilterList";
import { useDispatch } from "react-redux";
import { onSearchTextDown, onSearchTextUp } from "../../features/searchSlice";

const SearchBox = () => {
  const [searchInput, setSearchInput] = useState("");
  const dispatch = useDispatch();

  useEffect(() => {
    if (searchInput.length == 0) {
      dispatch(onSearchTextDown(null));
    } else {
      dispatch(onSearchTextUp({ searchText: searchInput }));
    }
  }, [searchInput]);

  return (
    <div className="chatSearch">
      <div className="chatSearch__input">
        <SearchIcon></SearchIcon>
        <input
          onChange={(e) => setSearchInput(e.target.value)}
          value={searchInput}
          placeholder="Search or start a new chat"
          type="text"
        />
      </div>
      <FilterListIcon></FilterListIcon>
    </div>
  );
};

SearchBox.propTypes = {};

SearchBox.defaultProps = {};

export default SearchBox;
