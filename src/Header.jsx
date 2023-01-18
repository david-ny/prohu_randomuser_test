import React from "react";
import "./App.css";

function Header(props) {
  const {
    isFetching,
    apiResultsLength,
    validUsersLength,
    currentPage,
    goToPrevPage,
    goToNextPage,
  } = props;

  return (
    <div className="sticky top-0 mb-8 grid w-full grid-cols-3 justify-around p-4 bg-white drop-shadow-2xl">
      <div className="flex justify-start">
        {isFetching ? (
          <div className="mr-5 h-8 w-8 animate-spin rounded-md bg-indigo-700 p-2"></div>
        ) : null}
        {isFetching ? <span> Loading...</span> : null} <br />
      </div>
      <div className="justify-between align-middle">
        <button onClick={goToPrevPage}>Previous Page</button>
        <span> | Current Page: {currentPage} | </span>
        <button onClick={goToNextPage}>Next Page</button>
      </div>
      <div className="text-end">
        users fetched from API: {apiResultsLength}
        <br />
        valid Users: {validUsersLength}
      </div>
    </div>
  );
}

export default Header;
