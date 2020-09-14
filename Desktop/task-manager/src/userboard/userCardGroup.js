import React from 'react';
import "./userBoard.css";
import UserCard from "./userCard.js";
import UserAddCard from "./userAddCard.js"

function UserCardGroup(){
    const [users,setUsers] = React.useState(JSON.parse(localStorage.users) || []);
    function addUser(obj){
        const tempUsers = [...users,obj];
        setUsers(tempUsers);
        localStorage.users = JSON.stringify(tempUsers);
    }

    function deleteUser(val){
        const tempUsers = users.filter(function deleteFilter(user) {
            return user.id!==val}
        );
        setUsers(tempUsers);
        localStorage.users = JSON.stringify(tempUsers);
    }

    function editUser(obj){
        const tempUsers = [...users];
        const index = tempUsers.findIndex(function editFind(user){
            return user.id===obj.id}
        );
        tempUsers[index] = obj;
        setUsers(tempUsers);
        localStorage.users = JSON.stringify(tempUsers);
    }

    return(
        <div class="user-card-group-container">
            <div className="user-card-group">
                {users.map(function userMap(x) {
                    return (<UserCard key ={x.id} user={x} handleDelete={deleteUser} handleEdit={editUser}/>);
                }
                )}
                <UserAddCard handleAddUser={addUser}/>
            </div>
        </div>
    )
}

export default UserCardGroup;