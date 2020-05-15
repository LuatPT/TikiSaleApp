const pagiReducer = (state = 1, action) => {
  switch (action.type) {
    case 'CHANGE_PAGINATION':
      console.log("nguu" + action.pageNum)
      return action.pageNum
    default:
      return state
  }
}
export default pagiReducer