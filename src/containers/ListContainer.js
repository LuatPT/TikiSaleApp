import { connect } from "react-redux"
import * as ListAction from '../actions'
import { bindActionCreators } from "redux"
import List from "../components/List"
const mapStateToProps = state => ({
  list: state.listReducer.data
})
const mapDispatchToProps = dispatch => ({
  ListAction: bindActionCreators(ListAction, dispatch)
})
export default connect(mapStateToProps, mapDispatchToProps)(List)