import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector} from 'react-redux';
import { getAllInfo, resetDetail } from "../../redux/actions";
import style from './hotels.module.css';


export default function Hotels(){

    const dispatch= useDispatch()
    const apiInfo = useSelector((state) => state.info)
    const { id } = useParams()
    // console.log(id)
    const apiFilter = apiInfo.filter(f => f.id == id)
    // console.log(apiFilter[0].name, 'sd')

    useEffect(()=>{
        dispatch(resetDetail())
        dispatch(getAllInfo())
    }, [dispatch])

    return(
        <div>
            <div className={style.container}>
                <div className={style.pContainer}>
                    <Link to= '/' style={{ textDecoration: "none" }}>
                    <h1>H</h1>
                    </Link>
                </div>
                <div className={style.box}>
                {
                     apiFilter.length > 0 ? apiFilter.map(a =>{
                        return(
                            <div >
                                <h1 className={style.name}>{a.name}</h1> 
                                <h4 className={style.address}>{a.address}</h4>
                                <div className={style.summaryBox}>
                                <h4 className={style.summary}>{a.summary}</h4>
                                </div>
                                <h4 className={style.review}>Review: {a.review === null ? "Hotel doesn't have a review" : a.review}</h4>
                                <h4 className={style.rating}>Rating: {a.rating === null ? "Hotel doesn't have a rating" : a.rating}</h4> 
                                <h4 className={style.avg}>Average price per nigth: €{Math.ceil(a.avg_price_per_night)*100}</h4>
                                <h4 className={style.dt}>Distance from downtown: {Math.ceil(a.distance_from_downtown)}km</h4>
                                <p className={style.or}>Origin: {a.origin}</p>
                                <img src={a.hotel_photo} alt={a.name} className={style.img}/>
                            </div>
                        )
                    })
                    :
                    <p>Loading...</p>
                }
                </div>
                
                <div className={style.btnContainer}>
                <Link to= '/' style={{ textDecoration: "none" }}>
                    <button className={style.btn}>Go back to home</button>
                </Link>
                </div>
            </div>
        </div>
    )
}