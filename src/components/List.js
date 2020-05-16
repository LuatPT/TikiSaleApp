import React from 'react'
import ListItem from './ListItem'
class List extends React.Component {
  componentDidMount = () => {
    const { ListAction } = this.props;
    ListAction.getDataAction({
      categoryId: 0,
      pageNum: 1
    });
  }
  render() {
    const { listData, timeCountDown, keySearch, ListAction } = this.props;

    console.log(keySearch)
    if (listData) {
      var arr = listData.filter(element => element.product.name.toLowerCase().includes(keySearch.toLowerCase()))
      return (
        <div className="col-md-9 divAllList" >
          < div className="divList row " >
            {
              arr.map((ele, key) => (
                < ListItem
                  key={key}
                  {...ele}
                  timeCountDown={timeCountDown}
                  itemAction={ListAction}
                />
              ))
            }
          </div >
        </div >
      )
    }
    else {
      return (
        <div className="divList" >
          aaaa
        </div >
      )
    }
  }

}
export default List