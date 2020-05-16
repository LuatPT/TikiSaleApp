import * as SearchAction from '../actions/index'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import Search from '../components/Search'
const mapStateToProps = state => ({
  keyWordSearch: state.searchReducer
})
const mapDispatchToProps = dispatch => ({
  SearchAction: bindActionCreators(SearchAction, dispatch)
})
export default connect(mapStateToProps, mapDispatchToProps)(Search)