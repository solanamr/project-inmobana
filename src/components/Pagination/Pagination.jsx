import React from "react";

export default function Pagination({infoApi, infoPerPage, paginado}){
    const pageNumbers = []

    for (let i = 1; i <= Math.ceil(infoApi/infoPerPage); i++) {
        pageNumbers.push(i)
    }


    return(
        <div>
            {
                pageNumbers && pageNumbers.map(n =>{
                    return <button key={n} onClick={() => paginado}>{n}</button>
                })
            }
        </div>
    )
}