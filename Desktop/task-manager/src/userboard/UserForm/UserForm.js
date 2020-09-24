import { incrementUserId, addUser, editUser } from '../../reducer/actions/userboard';
import { connect } from 'react-redux';
import UserForm from './index';

const mapStateToUserFormProps = state=>({
    userId:state.userBoard.userId
})

const mapDispatchToUserFormProps = dispatch => ({
    setUserId: ()=>dispatch(incrementUserId()),
    handleAddUser: (obj)=>dispatch(addUser(obj)),
    handleEdit: (obj) => dispatch(editUser(obj))
})

export default connect(
    mapStateToUserFormProps,
    mapDispatchToUserFormProps
)(UserForm)