import { createStore } from 'redux';

// 액션 타입 정의
const ADD = 'ADD';

const REMOVE = 'REMOVE';

export type Exhibition = {
  title: string;
  imageUrl: string;
  place: string;
  price: number;
  id: number;
};
// 액션 생성자 함수

export const add = (exhibition: Exhibition) => ({
  // 찜하기 버튼 클릭 시 스토어에 추가
  type: ADD,
  payload: exhibition,
});

export const remove = (id: number) => ({
  // 이미 찜된 상태이면 제거
  type: REMOVE,
  payload: id,
});

// 초기 상태 정의
const initialState: Exhibition[] = [];

// 리듀서 함수
const Reducer = (state = initialState, action: any) => {
  switch (action.type) {
    case ADD:
      return [...state, action.payload];
    case REMOVE:
      return state.filter((exhibition: Exhibition) => exhibition.id !== action.payload);
    default:
      return state;
  }
};

// 스토어 생성
const store = createStore(Reducer);

export default store;
