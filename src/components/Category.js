import React from 'react'
import CategoryItem from './CategoryItem'
const Category = () => {
  return (
    <ul className="navbar-nav ulCate col-md-3">
      {
        < CategoryItem />
      }
    </ul>
  )
}
export default Category