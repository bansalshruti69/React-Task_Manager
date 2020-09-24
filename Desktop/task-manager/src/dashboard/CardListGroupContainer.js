import { connect } from "react-redux"
import { deleteCardList } from "../reducer/actions/dashboard"
import CardListGroup from "./CardListGroup"

const mapStateToCardListGroupProps = state=>({
    cardLists: state.dashBoard.cardLists
})

const mapDispatchToCardListGroupProps = dispatch=>({
    deleteCardListFunction : (id)=>dispatch(deleteCardList(id))
})

export default connect(
    mapStateToCardListGroupProps,
    mapDispatchToCardListGroupProps
)(CardListGroup)