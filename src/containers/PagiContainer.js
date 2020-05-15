import { connect } from "react-redux"
import * as PagiAction from '../actions'
import { bindActionCreators } from "redux"
import Paginate from '../components/Paginate'
const mapStateToProps = state => {
  return {
    total: state.listReducer.totalItem,
    pageNum: state.pagiReducer,
    listIdCate: state.filter.categoryId
  }
}
const mapDispatchToProps = dispatch => ({
  PagiAction: bindActionCreators(PagiAction, dispatch)
})
export default connect(mapStateToProps, mapDispatchToProps)(Paginate)