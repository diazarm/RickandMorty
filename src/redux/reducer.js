import { ADD_FAVORITE, REMOVE_FAVORITE } from "./actions";


const initialState = {
    myFavorites: [],
  };

const rootReducer = (state = initialState, action) => {
// action.type responde a que quiero que haga el reducer. 
    switch (action.state){
       case ADD_FAVORITE:
        return {...state, myFavorites: [...state.myFavorites, action.payload]};
        
        case REMOVE_FAVORITE:
            return {...state, myFavorites: state.myFavorites.filter((char) => char.id !== action.payload),
            };
       
        default:
            return {...state};
    }
};

export default rootReducer;