import { BREAK_OUT } from "./actions/breakOut";
import { RECEIVE_ANIMAL } from "./actions/receiveAnimal";

function reduceAnimals(state, action) {
  switch (action.type) {
    case RECEIVE_ANIMAL:
      if(state === undefined){
        state = [{"name" : action.name, "present" : true}];
      }
      else if(action.name === undefined){
        state = [{"name" : "", "present" : true}];
      }
      else{
        for(var i = 0; i < state.length; i++){
          if(state[i].name === action.name){
            if(state[i].present === false){
              const state2 = [...state];
              state2[i] = {"name" : action.name, "present" : true};
              return state2;
            }  
            return state;
          }
        }
        return[
          ...state.filter(animal => animal.name != action.name),
          {
            name:action.name,
            present:true,
          },
        ];
      }
      return state;

    default:
      if(state === undefined){
        state = [];
      }
      return state;
    
    case BREAK_OUT:
      const state2 = [...state];
      for(var i = 0; i < state2.length; i++){
        if(state2[i].name === action.name && state2[i].present === true){
            state2[i] = {"name" : action.name, "present" : false};
            return state2;
        }
      }
      return state2;
  }  
}
export default reduceAnimals;
