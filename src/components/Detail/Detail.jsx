import React from 'react';
import style from './style.module.css';


export default function Detail({hotel}){
    return(
        <div className={style.container}>
            <img src={hotel.hotel_photo} alt={hotel.name} width={300} height={170} className={style.img}/>
            <h1 className={style.name}>{hotel.name}</h1>
            <h4 className={style.address}>{hotel.address}</h4>
            <h4 className={style.rating}>Rating: {hotel.rating === null ? "Hotel doesn't have a rating" : hotel.rating}</h4>
            <h4 className={style.avg}>Average price per night: €{Math.ceil(hotel.avg_price_per_night)*100}</h4>
        </div>
    )
}

