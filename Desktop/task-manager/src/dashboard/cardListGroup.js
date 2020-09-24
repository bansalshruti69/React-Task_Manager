import React from 'react';
import "./dashBoard.css";
import CardList from "./CardList";
import AddCardList from "./AddCardList"
import CustomModal from "./CustomModal";
import {useState, useCallback} from 'react';

const CardListGroup = ({cardLists,deleteCardListFunction})=>{

    const [modalIsOpen,setIsOpen] = useState(false);

    const mapCardListGroup = useCallback((cardList)=>
    (<CardList key={cardList.id} cardList={cardList} deleteCardList={deleteCardListFunction}/>),[deleteCardListFunction]);
    
    const handleGlobalClick = useCallback(()=>{
        setIsOpen(true);
    },[])

    const closeModal = useCallback(()=>{
        setIsOpen(false);
    },[])

    return(
        <>
        <span className="add-card-global" onClick={handleGlobalClick} >Add Card</span>
        <div className="card-list-group">
            {cardLists.map(mapCardListGroup)}
            <AddCardList/>
            <CustomModal modalIsOpen={modalIsOpen} cardLists={cardLists} hideForm={closeModal} />
        </div>
        </>
    );
}

export default CardListGroup;