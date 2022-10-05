import React from "react";
import style from './style.module.css';

export default function Pagination({infoApi, infoPerPage, paginado}){
    const pageNumbers = []
    for (let i = 1; i <= Math.ceil(infoApi/infoPerPage); i++) {
        pageNumbers.push(i)
    }


    return(
        <div>
            <div className={style.container}>
            {
                pageNumbers && pageNumbers.map(n =>{
                    window.scrollTo(0,0)
                    return <button key={n} onClick={() => paginado(n)} className={style.btn} active>{n}</button>
                })
            }
            </div>
        </div>
    )
}