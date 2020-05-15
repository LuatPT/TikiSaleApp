import React from 'react'
const Search = () => {
  return (
    <div className="container divSearch">
      <form className="formSearch">
        <input type="text" name="keySearch" className="inputSearch" placeholder="Tìm sản phẩm, danh mục hay thương hiệu mong muốn ..." />
      </form>
    </div>
  )
}
export default Search