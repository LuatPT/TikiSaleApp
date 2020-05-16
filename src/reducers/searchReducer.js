const searchReducer = (state = "", action) => {
  switch (action.type) {
    case "SEARCH_ACTION":
      return action.keyWord
    default:
      return state
  }
}
export default searchReducer