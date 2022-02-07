import { PIXEL_SIZE } from './action';

export interface ShapeActionType {
  type: PIXEL_SIZE;
  payload?: { pixelSize: number };
}

const initState = {
  pixelSize: 0,
};

export default function shapeReducer(state = initState, action: ShapeActionType) {
  const { type, payload } = action;
  // const { pixelSize } = state;

  switch (type) {
    case PIXEL_SIZE:
      return { ...state, pixelSize: payload.pixelSize };
    default:
      return state;
  }
}
