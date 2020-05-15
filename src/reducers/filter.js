const initParameter = {
  categoryId: 0,
  pageNum: 1
}

const filter = (state = initParameter, action) => {
  switch (action.type) {
    case 'FILTER_CATEGORY':
      console.log("nguuuuuu")
      let arr = addParamRequest(action.item)
      let states = {
        categoryId: arr.join("%2C"),
        pageNum: 1
      }
      return states
    default:
      return state
  }
}

var array = []
const addParamRequest = (param) => {

  if (!param.status) {
    array.push(param.id)
  } else {
    const index = array.indexOf(param.id);
    array.splice(index, 1);
  }
  return array
}
export default filter