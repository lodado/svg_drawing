import { TEST } from './action';

export interface ShapeActionType {
  type: TEST;
  payload?: never;
}

const initState = {
  value: 0,
};

export default function shapeReducer(state = initState, action: ShapeActionType) {
  const { type, payload } = action;
  const { value } = state;

  switch (type) {
    case TEST:
      return { ...state };
    default:
      return state;
  }
}
