import React from "react";
import "./App.css";

import { useContextSelector } from "use-context-selector";
import { appStateContext } from "./AppStateProvider";
import Header from "./Header";
import UserList from "./UserList";
import useAPI from './useAPI';

function App() {
  const appStateDispatch = useContextSelector(appStateContext, (v) => v.appStateDispatch);
  const validUsers = useContextSelector(appStateContext, (v) => v.appState.validUsers);
  const apiPageNum = useContextSelector(appStateContext, (v) => v.appState.apiPageNum);
  const apiPageSize = useContextSelector(appStateContext, (v) => v.appState.apiPageSize);
  const listPageSize = useContextSelector(appStateContext, (v) => v.appState.listPageSize);
  const validUsersPageNum = useContextSelector(appStateContext, (v) => v.appState.validUsersPageNum);
  const apiResultsLength = useContextSelector(appStateContext, (v) => v.appState.apiResultsLength);

  const goToPrevPage = () => appStateDispatch({ type: 'goToPrevPage' });
  const goToNextPage = () => appStateDispatch({ type: "goToNextPage" });
  const addUsers = (resp) => {
    appStateDispatch({
      type: "addUsers",
      payload: { users: resp?.data?.results },
    });
  };

  const { status, isFetching, error } = useAPI(apiPageNum, apiPageSize, addUsers);

  if (status === "error") {
    return <h1>{JSON.stringify(error)}</h1>;
  }

  const start = listPageSize * validUsersPageNum;
  const end = listPageSize * validUsersPageNum + listPageSize;
  const validUsersForPage = validUsers.slice(start, end);

  return (
    <div className="App">

      <Header
        isFetching={isFetching}
        apiResultsLength={apiResultsLength}
        validUsersLength={validUsers.length}
        goToPrevPage={goToPrevPage}
        goToNextPage={goToNextPage}
        currentPage={validUsersPageNum + 1}
      />

      <UserList
        users={validUsersForPage}
      />
    </div>
  );
}

export default App;
