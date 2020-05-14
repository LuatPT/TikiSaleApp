import React from 'react'
const ListItem = (ele) => {
  const percent = (ele.progress.qty_ordered / ele.progress.qty) * 100 + "%";
  const txt = (ele.progress.qty_ordered / ele.progress.qty) * 100 < 3 ? "Vừa mở bán" : ("Đã bán " + ele.progress.qty_ordered)
  return (
    <div className=" divItem col-md-3">
      <a href="google.com" className="deal-item">
        <div className="image">
          <div className="discount-badge">
            {ele.discount_percent + "%"}
          </div>
          {/* <p className="tikicon icon-tikinow-20" ></p> */}
          <img className="lazy" src={ele.product.thumbnail_url} alt="okbb" width="200px" />
        </div>
        <div className="title">
          <img className="tikicon icon-tikinow" width="35px" height="15px" src="https://salt.tikicdn.com/desktop/img/tiki-now-15.png" alt="ok"></img>
          {ele.product.name}
        </div>
        <div className="price-sale">
          {ele.product.price} ₫
          <span className="price-regular">{ele.product.list_price} ₫</span>
          <div className="countdown"></div>
        </div>
        <div className="deal-status">
          <div className="process-bar">
            <div style={{ width: percent }}></div>
            <span className="text" >{txt}</span>
          </div>
        </div>

      </a>



    </div>
  )
}
export default ListItem