import { DEFAULT_PIXEL_VAULE } from '@Global/constant';
import { PIXEL_SIZE, PIXEL_COLOR, PIXEL_MODAL, CANVAS_TAG } from './action';

export interface ShapePayloadType {
  pixelSize: string;
  pixelColor: string;
  modalState: boolean;
  canvasTag;
}

export interface ShapeActionType {
  type: PIXEL_SIZE | PIXEL_COLOR | PIXEL_MODAL | CANVAS_TAG;
  payload?: ShapePayloadType;
}

const initState = {
  pixelSize: DEFAULT_PIXEL_VAULE,
  pixelColor: '#000000',
  modalState: false,
  canvasTag: undefined,
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
    case CANVAS_TAG:
      return { ...state, canvasTag: payload.canvasTag };
    default:
      return state;
  }
}
