import React from 'react'
import CategoryItem from './CategoryItem'
const Category = () => {
  return (
    <ul className="navbar-nav ulCate">
      {
        < CategoryItem />
      }
    </ul>
  )
}
export default Category