import React from 'react'
import Pagination from "react-js-pagination"
class Paginate extends React.Component {
  onClickPageNum(pNum) {
    const { PagiAction, listIdCate, pageNum } = this.props;
    PagiAction.changePagination(pNum);
    console.log(listIdCate)
    PagiAction.getDataAction({
      categoryId: listIdCate,
      pageNum: pageNum
    })
  }
  render() {
    const { total, pageNum } = this.props;
    return (
      <div className="divPagi" >
        <div>
          <Pagination
            itemClass="page-item"
            linkClass="page-link"
            activePage={pageNum}
            itemsCountPerPage={20}
            totalItemsCount={total}
            onChange={this.onClickPageNum.bind(this)}
          />
        </div>
      </div>
    )
  }
}
export default Paginate