import React from 'react'
import Pagination from "react-js-pagination"
class Paginate extends React.Component {
  onClickPageNum(pNum) {
    const { PagiAction, listIdCate, pageNum } = this.props;
    PagiAction.changePagination(pNum);
    console.log(pageNum)
    PagiAction.getDataAction({
      categoryId: listIdCate,
      pageNum: pageNum
    })
  }
  render() {
    const { total, pageNum } = this.props;
    console.log("render" + pageNum)
    return (
      <div className="divPagi" >
        <div>
          <Pagination
            itemClass="page-item"
            linkClass="page-link"
            activePage={pageNum}
            itemsCountPerPage={20}
            totalItemsCount={total}
            onChange={() => this.onClickPageNum(pageNum)}
          />
        </div>
      </div>
    )
  }
}
export default Paginate