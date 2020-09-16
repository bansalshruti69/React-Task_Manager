import React from 'react';
import "./userBoard.css";
import UserCard from "./UserCard.js";
import UserAddCard from "./UserAddCard.js"

const UserCardGroup = ()=>{
    const [users,setUsers] = React.useState(JSON.parse(localStorage.users) || []);
    const addUser = React.useCallback((obj)=>{
        const tempUsers = [...users,obj];
        setUsers(tempUsers);
        localStorage.users = JSON.stringify(tempUsers);
    },[users]);

    const deleteUser = React.useCallback((val)=>{
        const tempUsers = users.filter(function deleteFilter(user) {
            return user.id!==val}
        );
        setUsers(tempUsers);
        localStorage.users = JSON.stringify(tempUsers);
    },[users]);

    const editUser = React.useCallback((obj)=>{
        const tempUsers = [...users];
        const index = tempUsers.findIndex(function editFind(user){
            return user.id===obj.id}
        );
        tempUsers[index] = obj;
        setUsers(tempUsers);
        localStorage.users = JSON.stringify(tempUsers);
    },[users]);

    const userMap = React.useCallback((x)=>{
        return (<UserCard key ={x.id} user={x} handleDelete={deleteUser} handleEdit={editUser}/>);
    },[editUser,deleteUser]);

    const userMapped = React.useMemo(()=>users.map(userMap),[users,userMap]);

    return(
        <div className="user-card-group-container">
            <div className="user-card-group">
                {userMapped}
                <UserAddCard handleAddUser={addUser}/>
            </div>
        </div>
    )
}

export default UserCardGroup;