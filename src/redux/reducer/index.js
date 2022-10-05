
const initalState= {
    info: [],
    infoCopy: []
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
            
            default: 
            console.log(action.type, 'type')
            return{...state}
    }
}