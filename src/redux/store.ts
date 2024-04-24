import { createStore } from 'redux';

const ADD = 'ADD';

const REMOVE = 'REMOVE';

const REMOVEID = 'REMOVEID';

export type Exhibition = {
  title: string;
  imageUrl: string;
  place: string;
  price: number;
  id: number;
  date: {
    started: string;
    ended: string;
  };
};

export const add = (exhibition: Exhibition) => ({
  type: ADD,
  payload: exhibition,
});
export const remove = (exhibition: Exhibition) => ({
  type: REMOVE,
  payload: exhibition,
});

export const removeid = (id: number) => ({
  type: REMOVEID,
  payload: id,
});

const initialState: Exhibition[] = [];

const Reducer = (state = initialState, action: any) => {
  switch (action.type) {
    case ADD:
      return [...state, action.payload];
    case REMOVEID:
      return state.filter((exhibition: Exhibition) => exhibition.id !== action.payload);
    case REMOVE:
      return state.filter((exhibition: Exhibition) => exhibition !== action.payload);
    default:
      return state;
  }
};

const store = createStore(Reducer);

export default store;
