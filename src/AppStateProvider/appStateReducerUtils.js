import { isValidUser } from './usersFfilterUtils';

const addUsers = (state, action) => {
    const { users = [] } = action?.payload;

    const validUsers = [
        ...state.validUsers,
        ...users.filter((user) => isValidUser(user)),
    ]

    return {
        ...state,
        validUsers,
        apiResultsLength: state.apiResultsLength + users.length,
    };
};

const goToPrevPage = (state) => {
    const validUsersPageNum = Math.max(state.validUsersPageNum - 1, 0);
    return {
        ...state,
        validUsersPageNum,
    };
};

const goToNextPage = (state, action) => {
    const { isFetching } = action?.payload;
    const { validUsers, listPageSize, prefetchThreshold } = state;
    const next = state.validUsersPageNum + 1;
    const validUsersPageNum = next;
    const nextPageStart = listPageSize * validUsersPageNum;
    const apiPageNum = (
        nextPageStart > validUsers.length - prefetchThreshold
        && !isFetching
    )
        ? state.apiPageNum + 1
        : state.apiPageNum;
    return {
        ...state,
        validUsersPageNum,
        apiPageNum,
    };
};

export {
    addUsers,
    goToPrevPage,
    goToNextPage,
};
