import React from 'react'
class CategoryItem extends React.Component {
  onChangeCate = (item) => {
    const { CateAction } = this.props;
    CateAction.filterCategory(item);
    CateAction.changeCategory(item.id);
  }
  componentDidUpdate() {
    const { params, CateAction } = this.props;
    CateAction.getDataAction(params);
  }
  render() {
    const { listCategory } = this.props;
    return (
      <div className=" navbar-nav ulCate col-md-3 ">
        {
          listCategory.map((ele, key) => (
            < label key={key} className="container1">
              <input type="checkbox" className="checkBox" checked={ele.status} value={ele.id}
                onChange={() => this.onChangeCate(ele)}
              />
              <span className="itemCategoryName">{ele.name}</span>
            </label>
          ))

        }
      </div>
    )
  }
}
export default CategoryItem