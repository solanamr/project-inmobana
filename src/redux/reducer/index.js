
const initalState= {
    info: [],
    infoCopy: [],
    reset: []
}


export default function rootReducer(state = initalState, action){
    switch(action.type){
        case "GET_ALL_INFO":
            // console.log(action.payload, 'payload')
            
            return{
                ...state,
                info: action.payload,
                infoCopy: action.payload
            }

            case "SEARCH_HOTEL":
                let nombres =
                action.payload === "" ? state.infoCopy : state.infoCopy.filter((e) => 
                e.name.toLowerCase().includes(action.payload));
                
            return {
            ...state,
            info: nombres
            }

            case "RESET_DETAIL":
                const reset = []
                return{
                    ...state,
                    infoCopy: reset
                }

                case "DISTANCE_SORT":
                    const array = action.payload === "closer" ? state.info.sort(function(a, b){
                        if(a.distance_from_downtown > b.distance_from_downtown){
                          return 1
                        }
                        if(b.distance_from_downtown > a.distance_from_downtown){
      
                          return -1
                        }
                        return 0
                      }) :
                      state.info.sort(function(a, b){
                        if(a.distance_from_downtown > b.distance_from_downtown){
                          return -1
                        }
                        if(b.distance_from_downtown > a.distance_from_downtown){
      
                          return 1
                        }
                        return 0
                      })
                       console.log(array)
      
                    return{
                        ...state,
                        info: array
                    }

                    case "PRICE_SORT":
                      const priceArray = action.payload === "cheaper" ? state.info.sort(function(a, b){
                        if(a.avg_price_per_night > b.avg_price_per_night){
                          return 1
                        }
                        if(b.avg_price_per_night > a.avg_price_per_night){
      
                          return -1
                        }
                        return 0
                      }) :
                      state.info.sort(function(a, b){
                        if(a.avg_price_per_night > b.avg_price_per_night){
                          return -1
                        }
                        if(b.avg_price_per_night > a.avg_price_per_night){
      
                          return 1
                        }
                        return 0
                      })

                      return{
                        ...state,
                        info: priceArray
                      }

                      case "REVIEW_SORT":
                        const reviewArray = action.payload === "lowest" ? state.info.sort(function(a, b){
                          if(a.review > b.review){
                            return 1
                          }
                          if(b.review > a.review){
        
                            return -1
                          }
                          return 0
                        }) :
                        state.info.sort(function(a, b){
                          if(a.review > b.review){
                            return -1
                          }
                          if(b.review > a.review){
        
                            return 1
                          }
                          return 0
                        })
                        return{
                          ...state,
                          info: reviewArray
                        }

                        case "RATING_SCORE":
                          const ratingArray = action.payload === "low" ? state.info.sort(function(a, b){
                            if(a.rating > b.rating){
                              return 1
                            }
                            if(b.rating > a.rating){
          
                              return -1
                            }
                            return 0
                          }) :
                          state.info.sort(function(a, b){
                            if(a.rating > b.rating){
                              return -1
                            }
                            if(b.rating > a.rating){
          
                              return 1
                            }
                            return 0
                          })
                          return{
                            ...state,
                            info: ratingArray
                          }

            default: 
            return{...state}
    }
}