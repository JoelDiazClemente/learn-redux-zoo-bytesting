import { createSelector } from "reselect";
import getAnimals from "./getAnimals";

function isAbsent() {
  return createSelector(
    getName,
    getAnimals,
    (name, animals) => {
      for(var i = 0; i < animals.length; i++){
        if(animals[i].name === name && animals[i]. present == true){
          return true;
        }
      }
      return false;
    }
  );
}
function getName(state,{name}){return name;}

export default isAbsent;
