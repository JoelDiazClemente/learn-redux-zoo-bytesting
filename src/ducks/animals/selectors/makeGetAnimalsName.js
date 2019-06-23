import { createSelector } from "reselect";
import getAnimals from "./getAnimals";

function makeGetAnimalsName() {
  return createSelector(
    getAnimals,
    (animals) => {
      if(animals.length === 0) return [];
      else{
        var r = [];
        for(var i = 0; i < animals.length; i++){
          r[i] = animals[i].name;
        }
        return r;
      }
    }
  );
}

export default makeGetAnimalsName;
