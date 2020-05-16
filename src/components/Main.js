import React from 'react'
import CategoryContainer from '../containers/CategoryContainer'
import ListContainer from '../containers/ListContainer'
const Main = () => {
  return (
    <div className=" divMain ">
      <div className="container divListCate row">
        <CategoryContainer />
        <ListContainer />
      </div>
    </div>
  )
}
export default Main