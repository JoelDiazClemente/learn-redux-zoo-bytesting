import getAnimals from "./getAnimals";
function countPresentAnimals(state) {
  var count = 0;
  for(var i = 0; i < state.animals.length; i++){
    if(state.animals[i].present === true){
      count = count + 1;
    }
  }
  return count;
}

export default countPresentAnimals;
