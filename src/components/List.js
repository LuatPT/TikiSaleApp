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
    const { listData } = this.props;
    // console.log(list)
    if (listData) {
      return (
        <div className="col-md-9" >

          < div className="divList row " >
            {
              listData.map((ele, key) => (
                < ListItem
                  key={key}
                  {...ele}
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