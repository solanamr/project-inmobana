import React from 'react';
import style from './style.module.css';


export default function Detail({hotel}){
    return(
        <div className={style.container}>
            <h1 className={style.name}>{hotel.name}</h1>
            <h4 className={style.address}>{hotel.address}</h4>
            <h4 className={style.review}>Review: {hotel.review === null ? "Hotel doesn't have a review" : hotel.review}</h4>
            <h4 className={style.rating}>Rating: {hotel.rating === null ? "Hotel doesn't have a rating" : hotel.rating}</h4>
            <div className={style.divSummary}>
            <h4 className={style.summary}>{hotel.summary}</h4>
            </div>
            <h4 className={style.avg}>Average price per night: €{Math.ceil(hotel.avg_price_per_night)*100}</h4>
            <h4 className={style.distance}>Distance from downtown: {Math.ceil(hotel.distance_from_downtown)} km</h4>
            <p className={style.origin}>Origin: {hotel.origin}</p>
            <img src={hotel.hotel_photo} alt={hotel.name} width={500} height={300} className={style.img}/>
        </div>
    )
}

