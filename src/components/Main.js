import React from 'react'
import CategoryContainer from '../containers/CategoryContainer'
import ListContainer from '../containers/ListContainer'
const Main = () => {
  return (
    <div className="container divMain row">
      <CategoryContainer />
      <ListContainer />
    </div>
  )
}
export default Main