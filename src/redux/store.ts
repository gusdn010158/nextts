import { createStore } from 'redux';

const ADD = 'ADD';

const REMOVE = 'REMOVE';

const REMOVEB = 'REMOVEB';
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
export const removeb = (exhibition: Exhibition) => ({
  type: REMOVEB,
  payload: exhibition,
});

export const remove = (id: number) => ({
  type: REMOVE,
  payload: id,
});

const initialState: Exhibition[] = [];

const Reducer = (state = initialState, action: any) => {
  switch (action.type) {
    case ADD:
      return [...state, action.payload];
    case REMOVE:
      return state.filter((exhibition: Exhibition) => exhibition.id !== action.payload);
    case REMOVEB:
      return state.filter((exhibition: Exhibition) => exhibition !== action.payload);
    default:
      return state;
  }
};

const store = createStore(Reducer);

export default store;

// export const TOGGLE = 'TOGGLE';

// export interface ToggleStarAction {
//   type: typeof TOGGLE;
// }

// export const toggleStar = (): ToggleStarAction => ({
//   type: TOGGLE,
// });
// interface State {
//   starred: boolean;
// }

// const initialState: State = {
//   starred: false,
// };

// const rootReducer = (state: State = initialState, action: ToggleStarAction): State => {
//   switch (action.type) {
//     case TOGGLE:
//       return {
//         ...state,
//         starred: !state.starred,
//       };
//     default:
//       return state;
//   }
// };

// export default rootReducer;
