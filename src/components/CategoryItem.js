import React from 'react'
class CategoryItem extends React.Component {
  onChangeCate = (item) => {
    console.log(item)
    const { CateAction } = this.props;
    CateAction.filterCategory(item);
  }
  componentDidUpdate() {
    const { params, CateAction } = this.props;
    console.log(params)
    CateAction.getDataAction(params);
  }
  render() {
    const { listCategory } = this.props;
    return (
      <div>
        {
          listCategory.map((ele, key) => (
            < li key={key} >
              <input type="checkbox"
                className="checkBox"
                value={ele.id}
                onChange={() => this.onChangeCate(ele)}
              />
              {ele.name}
            </li>
          ))
        }
      </div>
    )
  }
}
export default CategoryItem