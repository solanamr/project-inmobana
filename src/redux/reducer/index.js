
const initalState= {
    info: []
}


export default function rootReducer(state = initalState, action){
    switch(action.type){
        case "GET_ALL_INFO":
            // console.log(action.payload, 'payload')
            
            return{
                ...state,
                info: action.payload
            }
            
            default: 
            console.log(action.type, 'type')
            return{...state}
    }
}