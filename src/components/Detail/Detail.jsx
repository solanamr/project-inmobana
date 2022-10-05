import React from 'react'


export default function Detail({hotel}){
    return(
        <div>
            <h1>{hotel.name}</h1>
            <h4>Review: {hotel.review}</h4>
            <h4>{hotel.address}</h4>
            <h4>Rating: {hotel.rating}</h4>
            <h4>{hotel.summary}</h4>
            <img src={hotel.hotel_photo} alt={hotel.name} width={400} height={300}/>
            <h4>Average price per night: ${hotel.avg_price_per_night}</h4>
            <h4>{hotel.distance_from_downtown}</h4>
            <p>{hotel.origin}</p>
        </div>
    )
}

