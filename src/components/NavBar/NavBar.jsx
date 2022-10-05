import React from "react";
import { Link } from "react-router-dom";
import SearchBar from "../SearchBar/SearchBar";
import style from './style.module.css'

export default function NavBar({setCurrentPage}){
    return(
        <div>
            <div>
                <div className={style.container}>
                    <Link to='/' style={{ textDecoration: "none" }}>
                    <p className={style.p}>Info hoteles</p>
                    </Link>
                    <SearchBar setCurrentPage={setCurrentPage}/>
                </div>
            </div>
        </div>
    )
}