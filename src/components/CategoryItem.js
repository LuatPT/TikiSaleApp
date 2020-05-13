import React from 'react'
const CategoryItem = ({ listCategory, CateAction }) => {
  return (
    <div>
      {
        listCategory.map((ele, key) => (
          < li key={key} >
            <input type="checkbox" className="checkBox" value={ele.id} onChange={() => CateAction.getDataAction()} />
            {ele.name}
          </li>
        ))
      }
    </div>
  )
}
export default CategoryItem