import App from "./App"
import { connect } from 'react-redux'

const mapStateToAppProps = state=>(
    {page: state.page}
)
  
  
export default connect(
    mapStateToAppProps
)(App);