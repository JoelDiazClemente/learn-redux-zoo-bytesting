export const RECEIVE_ANIMAL = "RECEIVE_ANIMAL";

export const receiveAnimal = (name, present) => (
  {
    type: RECEIVE_ANIMAL, 
    name,
    present
  }
)
;

