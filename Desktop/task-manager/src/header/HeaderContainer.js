import { connect } from "react-redux"
import Header from "./Header"

const { navigatePage } = require("../reducer/actions/header")

const mapStateToHeaderprops = state=>({
    currState: state.page
})

const mapDispatchToHeaderProps = dispatch=>({
    handleClick: page=>dispatch(navigatePage(page))
})

export default connect(
    mapStateToHeaderprops,
    mapDispatchToHeaderProps
)(Header)

