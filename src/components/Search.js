import React from 'react'
const Search = () => {
  return (
    <div className="container divSearch">
      <form className="formSearch">
        <input type="text" name="keySearch" className="inputSearch" />
        <button type="submit" className="btnSubmit" >Tìm kiếm</button>
      </form>
    </div>
  )
}
export default Search