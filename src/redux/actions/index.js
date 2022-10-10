

export function getAllInfo(){
    return async function(dispatch){
            const result = await fetch(`https://59jwubnb4d.execute-api.us-east-1.amazonaws.com/Prod/hotels`)
           const json = await result.json()
        //    console.log(json, 'json')
          
            
            const array = []

            if(json.hotels){
                for (let i = 0; i < 150; i++) {
                    const hotel = {
                        id: i,
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
            
            return dispatch({
                type: "GET_ALL_INFO",
                payload: array
            })
    }
}

export function searchByName(name){
        return{
            type: "SEARCH_HOTEL",
            payload: name
        }
        
}

export function resetDetail(){
    return({
        type: "RESET_DETAIL"
    })
}


export function distanceSort(payload){
    return({
        type: "DISTANCE_SORT",
        payload: payload
    })
}

export function priceSort(payload){
    return({
        type: "PRICE_SORT",
        payload: payload
    })
}

export function reviewSort(payload){
    return({
        type: "REVIEW_SORT",
        payload: payload
    })
}

export function ratingScore(payload){
    return({
        type: "RATING_SCORE",
        payload: payload
    })
}

