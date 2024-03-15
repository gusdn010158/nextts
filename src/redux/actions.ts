export const TOGGLE_STAR = 'TOGGLE_STAR';

export interface ToggleStarAction {
  type: typeof TOGGLE_STAR;
}

export const toggleStar = (): ToggleStarAction => ({
  type: TOGGLE_STAR,
});
