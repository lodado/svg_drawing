import { DEFAULT_PIXEL_VAULE } from '@Global/constant';
import { PIXEL_SIZE, PIXEL_COLOR } from './action';

export interface ShapePayloadType {
  pixelSize: number;
  pixelColor: string;
}

export interface ShapeActionType {
  type: PIXEL_SIZE | PIXEL_COLOR;
  payload?: ShapePayloadType;
}

const initState = {
  pixelSize: DEFAULT_PIXEL_VAULE,
  pixelColor: '#ffffff',
};

export default function shapeReducer(state = initState, action: ShapeActionType) {
  const { type, payload } = action;
  // const { pixelSize } = state;

  switch (type) {
    case PIXEL_SIZE:
      return { ...state, pixelSize: payload.pixelSize };
    case PIXEL_COLOR:
      return { ...state, pixelColor: payload.pixelColor };
    default:
      return state;
  }
}
