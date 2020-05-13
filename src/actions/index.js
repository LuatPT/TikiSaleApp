import axios from 'axios';

export const getDataAction = () => {//keyword, category_ids, page
  return dispatch => {
    axios.get('https://tiki.vn/api/v2/events/deals/?category_ids=&type=now&page=1&per_page=20')
      .then(res => {
        dispatch(getData(res.data))
      })
      .catch(err => console.log(err))
  }
}
const getData = (data) => ({
  type: "GET_DATA",
  data
})