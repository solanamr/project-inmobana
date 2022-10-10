import React, {useEffect, useState } from 'react';
import axios from 'axios';
import Detail from '../Detail/Detail';
import { getAllInfo } from '../../redux/actions/index'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from "react-router-dom";
import Pagination from '../Pagination/Pagination';
import NavBar from '../NavBar/NavBar';
import video from '../../assets/video.mp4'
import style from './style.module.css'

export default function Home(){

    const infoApi = useSelector((state) => state.info)
    const [orden, setOrden] = useState("")
    const [currentPage, setCurrentPage] = useState(1)
    const [infoPerPage, setInforPerPage] = useState(10)
    const indexLastPage = currentPage * infoPerPage
    const indexFirstPage = indexLastPage - infoPerPage
    const currentInfo = infoApi.slice(indexFirstPage, indexLastPage)

    const dispatch = useDispatch()

    const paginado = (nroPagina) =>{
        setCurrentPage(nroPagina)
    }
    
    useEffect(()=>{
        dispatch(getAllInfo())
    },[dispatch])
    


    return(
        <div>
            <div className={style.container}>
                <video autoPlay loop muted playsInline className={style.video}>
                  <source src={video} type="video/mp4"/>
                </video>
            <NavBar setCurrentPage={setCurrentPage} setOrden= {setOrden}/>
            <h1 className={style.title}>HOTELS</h1>
            <div className={style.containerCards}>
            {
                currentInfo.length > 0 ? currentInfo.map((h, i) =>{
                    return(
                        <div key={i} className={style.cards}>
                            <Link to ={`/detail/${h.id}`} style={{ textDecoration: "none" }}>
                        <Detail hotel ={h}/>
                            </Link>
                    </div>
                    )
                })
                : 
                <div className={style.progressLoader}>
                    <div className={style.progress}></div>
                </div>
            }
            </div>
        <Pagination
        infoPerPage={infoPerPage}
        infoApi={infoApi.length}
        paginado={paginado}
        />
        </div>
    </div>
    )
}

