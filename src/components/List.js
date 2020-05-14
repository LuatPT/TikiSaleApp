import React from 'react'
import ListItem from './ListItem'
class List extends React.Component {
  componentDidMount = () => {
    const { ListAction } = this.props;
    ListAction.getDataAction();
  }
  render() {
    const { list } = this.props;
    console.log(list)
    if (list) {
      return (
        <div className="col-md-9" >
          < div className="divList row " >
            {
              list.map((ele, key) => (
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