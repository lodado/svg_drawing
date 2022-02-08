import { DEFAULT_PIXEL_VAULE } from '@Global/constant';
import { PIXEL_SIZE, PIXEL_COLOR, PIXEL_MODAL } from './action';

export interface ShapePayloadType {
  pixelSize: number;
  pixelColor: string;
  modalState: boolean;
}

export interface ShapeActionType {
  type: PIXEL_SIZE | PIXEL_COLOR | PIXEL_MODAL;
  payload?: ShapePayloadType;
}

const initState = {
  pixelSize: DEFAULT_PIXEL_VAULE,
  pixelColor: '#000000',
  modalState: false,
};

export default function shapeReducer(state = initState, action: ShapeActionType) {
  const { type, payload } = action;

  switch (type) {
    case PIXEL_SIZE:
      return { ...state, pixelSize: payload.pixelSize };
    case PIXEL_COLOR:
      return { ...state, pixelColor: payload.pixelColor };
    case PIXEL_MODAL:
      return { ...state, modalState: payload.modalState };
    default:
      return state;
  }
}
