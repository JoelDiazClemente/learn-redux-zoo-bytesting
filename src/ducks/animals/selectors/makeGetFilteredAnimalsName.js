import { createSelector } from "reselect";
import getAnimals from "./getAnimals";
import getPresenceFilter from "../../presenceFilter/selectors/getPresenceFilter";

function makeGetFilteredAnimalsName() {
  return createSelector(
    getPresenceFilter,
    getAnimals,
    (presenceFilter, animals) => {
      if(animals.length === 0) return [];
      else{
        var r = [];
        for(var i = 0; i < animals.length; i++){
          if(presenceFilter === 'present'){
            if(animals[i].present === true){
              r[r.length] = animals[i].name;
            }
          } 
          else if(presenceFilter === 'absent'){
            if(animals[i].present === false){
              r[r.length] = animals[i].name;
            }
          }
          else{
            r[i] = animals[i].name;
          } 
        }
        return r;
      }
    }
  );
}

export default makeGetFilteredAnimalsName;
