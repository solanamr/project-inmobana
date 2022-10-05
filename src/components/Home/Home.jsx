import React, {useEffect, useState } from 'react';
import axios from 'axios';
import Detail from '../Detail/Detail';
import { getAllInfo } from '../../redux/actions/index'
import { useDispatch } from 'react-redux'

export default function Home(){

    const [hoteles, setHoteles] = useState([])
    const [error, setError] = useState(false)

    const dispatch = useDispatch()
    
    useEffect(()=>{
        dispatch(getAllInfo())
        // console.log(getAllInfo())
    },[])
    
    
    useEffect(() =>{

        let isMount = true

        const resultado = async () =>{
              const result = await fetch(`https://59jwubnb4d.execute-api.us-east-1.amazonaws.com/Prod/hotels`)
             const json = await result.json()
            //  console.log(json)
            
              // console.log(json)
              const array = []
              if(json.message){
                  setError(!error)
              }
              if(json.hotels){
                  for (let i = 0; i < 150; i++) {
                      const hotel = {
                          name: json.hotels.name[i],
                          address: json.hotels.address[i],
                          rating: json.hotels.hotel_rating[i],
                          summary: json.hotels.hotel_summary[i],
                          review: json.hotels.review_score[i],
                          hotel_photo: json.hotels.hotel_photos[i],
                          avg_price_per_night: json.hotels["avg_price_per_night (€)"][i],
                          distance_from_downtown: json.hotels["distance_from_downtown (km)"][i],
                          origin: json.hotels.origin[i]
                      }
                      array.push(hotel)
                    
                  }
              }
              // console.log(prueba, 'prueba')
              
              if(isMount){
                setHoteles(array)
              }


          
         }

       resultado()
       .catch(err => setError(!error))
   

    return () => isMount = false;
   }, [error])

//    console.log(hoteles, 'hoteles')

   

    // console.log(hoteles)
    return(
        <div>
            {
                hoteles.length > 0 ? hoteles.map((h, i) =>{
                    // console.log(h)
                    return(
                    <div key={i}>
                        <Detail hotel ={h}/>


                    </div>
                    )
                })
                : <p>Loading...</p>
            }
        </div>
    )
}

