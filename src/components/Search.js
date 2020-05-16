import React from 'react'
class Search extends React.Component {
  constructor(props) {
    super(props);
    this.myRef = React.createRef();
  }

  onChangeInput = () => {
    const { SearchAction } = this.props;
    console.log(this.myRef.current.value)
    SearchAction.search(this.myRef.current.value)
  }
  render() {
    const { keyWordSearch } = this.props;
    return (
      <div className=" divSearch">
        <form className="formSearch">
          <input type="text" name="keySearch" className="inputSearch"
            placeholder="Tìm sản phẩm, danh mục hay thương hiệu mong muốn ..."
            value={keyWordSearch}
            ref={this.myRef}
            onChange={this.onChangeInput}
          />
        </form>
      </div>
    )
  }
}
export default Search