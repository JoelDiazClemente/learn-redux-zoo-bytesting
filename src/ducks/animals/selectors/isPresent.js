function isPresent(state , action) {
  var trobat = false;
  for(var i = 0; i < state.animals.length; i++){
    if(state.animals[i].name === action.name && state.animals[i].present === true){
      trobat = true;  
    }
  }
  return trobat
}

export default isPresent;
