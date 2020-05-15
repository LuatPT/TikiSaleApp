import axios from 'axios';

export const getDataAction = (params) => {//keyword, category_ids, page
  return dispatch => {
    axios.get('https://tiki.vn/api/v2/events/deals/?category_ids=' + params.categoryId + '=&type=now&page=' + params.pageNum + '&per_page=20')
      .then(res => {
        console.log(res.data)
        // console.log(params)
        dispatch(getData(res.data, params))
      })
      .catch(err => console.log(err))
  }
}
const getData = (data, params) => ({
  type: "GET_DATA",
  data,
  params
})

export const filterCategory = (item) => ({
  type: "FILTER_CATEGORY",
  item
})

export const changePagination = (pageNum) => ({
  type: "CHANGE_PAGINATION",
  pageNum
})
