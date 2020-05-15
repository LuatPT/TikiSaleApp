import * as CateAction from '../actions/index'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import CategoryItem from '../components/CategoryItem'
const mapStateToProps = state => ({
  listCategory: state.categoryReducer,
  params: state.filter
})
const mapDispatchToProps = dispatch => ({
  CateAction: bindActionCreators(CateAction, dispatch)
})
export default connect(mapStateToProps, mapDispatchToProps)(CategoryItem)