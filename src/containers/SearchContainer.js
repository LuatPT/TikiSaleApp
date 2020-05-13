import * as SearchAction from '../actions/index'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import Search from '../components/Search'
const mapDispatchToProps = dispatch => ({
  SearchAction: bindActionCreators(SearchAction, dispatch)
})
export default connect(null, mapDispatchToProps)(Search)