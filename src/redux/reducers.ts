// reducers.ts

import { TOGGLE_STAR, ToggleStarAction } from './actions';

interface State {
  starred: boolean;
}

const initialState: State = {
  starred: false,
};

const rootReducer = (state: State = initialState, action: ToggleStarAction): State => {
  switch (action.type) {
    case TOGGLE_STAR:
      return {
        ...state,
        starred: !state.starred, // 찜 상태를 반전시킵니다.
      };
    default:
      return state;
  }
};

export default rootReducer;
