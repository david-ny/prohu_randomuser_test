import React, { useReducer } from "react";
import { createContext } from "use-context-selector";
import appStateReducer from "./appStateReducer";

const appStateContext = createContext(null);

const API_PAGE_SIZE = 200;
const LIST_PAGE_SIZE = 10;
const PREFETCH_THRESHOLD = 60;

const AppStateProvider = ({ children }) => {
  const defaultAppState = {
    apiPageSize: API_PAGE_SIZE,
    listPageSize: LIST_PAGE_SIZE,
    prefetchThreshold: PREFETCH_THRESHOLD,
    apiResultsLength: 0,
    apiPageNum: 1,
    validUsersPageNum: 0,
    validUsers: [],
    // filteredUsers: [], // male-female
  };

  const [appState, appStateDispatch] = useReducer(
    appStateReducer,
    defaultAppState
  );

  return (
    <appStateContext.Provider
      value={{
        appState,
        appStateDispatch,
      }}
    >
      {children}
    </appStateContext.Provider>
  );
};

export { AppStateProvider, appStateContext };
