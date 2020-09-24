import { connect } from "react-redux"
import { incrementCardListId, addCardList } from "../../reducer/actions/dashboard"
import AddCardListForm from "./index"

const mapStateToAddCardListFormProps = state=>({
    cardListId: state.dashBoard.cardListId
})

const mapDispatchToAddCardListFormProps = dispatch=>({
    setCardListId:()=>dispatch(incrementCardListId()),
    addCardListFunction: obj=>dispatch(addCardList(obj))
})

export default connect(
    mapStateToAddCardListFormProps,
    mapDispatchToAddCardListFormProps
)(AddCardListForm)