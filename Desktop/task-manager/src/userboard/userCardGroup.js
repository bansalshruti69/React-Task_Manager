import React from 'react';
import "./userBoard.css";
import UserCard from "./UserCard";
import UserAddCard from "./UserAddCard"
import FloatingButton from "./FloatingButton";
import CustomModal from './CustomModal';
import {useState, useCallback, useEffect, useMemo, useRef} from 'react';
import {connect} from 'react-redux'

const UserCardGroup = ({users})=>{
    const [modalIsOpen,setIsOpen] = useState(false);
    const [val,setVal] = useState("hide");
    const [countries, setCountries] = useState([]);

    useEffect(()=>{
        fetch('https://restcountries.eu/rest/v2/all')
        .then(response => response.json())
        .then(data => {
            setCountries(data.map(x=>x.name));
        })
        .catch(err=>console.log("Error",err));
        
    },[countries])

    const userMap = useCallback((x)=>{
        return (<UserCard key ={x.id} user={x} countries={countries}/>);
    },[countries]);

    const userMapped = useMemo(()=>users.map(userMap),[users,userMap]);

    const element = useRef(null)

    const handleClick = useCallback(()=>{
        element.current.scrollBy(0,20);
    },[]);

    useEffect(()=>{
        if(element.current)
            (element.current.scrollHeight - element.current.scrollTop-element.current.clientHeight)>0 ? setVal("show"):setVal("hide");
    },[element,users]);

    const handleScroll = useCallback(()=>{
        (element.current.scrollHeight - element.current.scrollTop-element.current.clientHeight)>0 ? setVal("show"):setVal("hide");
    },[element]);

    const handleGlobalClick = useCallback(()=>{
        setIsOpen(true);
    },[])

    const closeModal = useCallback(()=>{
        setIsOpen(false);
    },[])

    return(
        <div ref ={element} className="user-card-group-container" onScroll={handleScroll} >
            <span className="add-user-global" onClick={handleGlobalClick} >Add User</span>
            <div className="user-card-group">
                {userMapped}
                <UserAddCard countries={countries} />
                <FloatingButton handleClick={handleClick} val={val}/>
                <CustomModal modalIsOpen={modalIsOpen} showUserCard={closeModal} countries={countries}/>
            </div>
        </div>
    )
}

const mapStateToUserCardGroupProps = state=>(
    {
        users: state.userBoard.users
    }
)
export default connect(mapStateToUserCardGroupProps)(UserCardGroup);