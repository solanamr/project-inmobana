import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { searchByName } from '../../redux/actions';
import style from './style.module.css';


export default function SearchBar({setCurrentPage}){

    const dispatch = useDispatch()

    const [name, setName] = useState("");

    useEffect(() => {
      dispatch(searchByName());
    }, [dispatch]);
  
    function handleInputChange(e) {
      dispatch(searchByName(e));
      setCurrentPage(1);
    }
  
    return (
      <div>
        <div>
          <input onChange={(e) => {setName(e.target.value); handleInputChange(e.target.value);}} 
          type="text" placeholder="Search hotel" value={name} className={style.input}/>
        </div>
      </div>
    );
  }