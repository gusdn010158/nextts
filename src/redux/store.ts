// import { createStore } from 'redux';

// const ADD = 'ADD';

// const REMOVE = 'REMOVE';

// const REMOVEID = 'REMOVEID';

// export type Exhibition = {
//   title: string;
//   imageUrl: string;
//   place: string;
//   price: number;
//   id: number;
//   date: {
//     started: string;
//     ended: string;
//   };
// };

// export const add = (exhibition: Exhibition) => ({
//   type: ADD,
//   payload: exhibition,
// });
// export const remove = (exhibition: Exhibition) => ({
//   type: REMOVE,
//   payload: exhibition,
// });

// export const removeid = (id: number) => ({
//   type: REMOVEID,
//   payload: id,
// });

// const initialState: Exhibition[] = [];

// const Reducer = (state = initialState, action: any) => {
//   switch (action.type) {
//     case ADD:
//       return [...state, action.payload];
//     case REMOVEID:
//       return state.filter((exhibition: Exhibition) => exhibition.id !== action.payload);
//     case REMOVE:
//       return state.filter((exhibition: Exhibition) => exhibition !== action.payload);
//     default:
//       return state;
//   }
// };

// const store = createStore(Reducer);

// export default store;
import { createStore } from 'redux';

// 액션 타입 정의
const ADD = 'ADD';
const REMOVE = 'REMOVE';
const REMOVEID = 'REMOVEID';

// 전시회 타입 정의
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

// 액션 생성 함수
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

// 초기 상태 정의
const initialState: { favorites: Exhibition[] } = {
  favorites: [],
};

// 리듀서 함수
const reducer = (state = initialState, action: { type: string; payload: any }) => {
  switch (action.type) {
    case ADD:
      return {
        ...state,
        favorites: [...state.favorites, action.payload], // favorites 배열에 새 전시회 추가
      };
    case REMOVEID:
      return {
        ...state,
        favorites: state.favorites.filter((exhibition) => exhibition.id !== action.payload), // ID로 필터링하여 제거
      };
    case REMOVE:
      return {
        ...state,
        favorites: state.favorites.filter((exhibition) => exhibition !== action.payload), // 객체로 필터링하여 제거
      };
    default:
      return state;
  }
};

// 스토어 생성
const store = createStore(reducer);

export default store;
