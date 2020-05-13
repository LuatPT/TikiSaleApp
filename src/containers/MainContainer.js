import * as MainAction from '../actions/index'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import Main from '../components/Main'
const mapDispatchToProps = dispatch => ({
  MainAction: bindActionCreators(MainAction, dispatch)
})
export default connect(null, mapDispatchToProps)(Main)