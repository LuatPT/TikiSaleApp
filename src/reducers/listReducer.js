var init = {
  list: [],
  totalItem: 20
}
const listReducer = (state = init, action) => {
  switch (action.type) {
    case 'GET_DATA':
      return {
        list: action.data.data,
        totalItem: action.data.paging.total
      }
    default:
      return state
  }
}
export default listReducer