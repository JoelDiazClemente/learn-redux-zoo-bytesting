import { SET_PRESENCE_FILTER } from "./actions/setPresenceFilter";

function reducePresenceFilter(state = "all", action) {
  switch (action.type) {
    case SET_PRESENCE_FILTER:
      return  action.filter;
    default:
      return state;
  }  
}

export default reducePresenceFilter;

