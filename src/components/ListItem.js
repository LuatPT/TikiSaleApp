import React from 'react'
const ListItem = (ele) => {
  return (
    <div className=" divItem">
      {ele.product.name}
    </div>
  )
}
export default ListItem