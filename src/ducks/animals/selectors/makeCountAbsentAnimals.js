import { createSelector } from "reselect";
import getAnimals from "./getAnimals";
import getPresenceFilter from "../../presenceFilter/selectors/getPresenceFilter";

function makeCountAbsentAnimals() {
  return createSelector(
    getAnimals,
    (animals) => {
      for(var i = 0; i < animals.length; i++){
        if(animals[i].present === false){
          return animals.length;
        }
      }
      return 0;
    }
  );
}

export default makeCountAbsentAnimals;
