import { DEFAULT_PIXEL_VAULE } from '@Global/constant';
import { ShapeTagType } from '@Global/enum';
import { PIXEL_SIZE, PIXEL_COLOR, PIXEL_MODAL, SHAPE_TAG, SHAPE_ZOOM, SHAPE_DATA } from './action';

export interface ShapePayloadType {
  pixelSize: string;
  pixelColor: string;
  modalState: boolean;
  shapeTag: ShapeTagType;
  zoomPercent: number;
  data;
}

export interface ShapeActionType {
  type: PIXEL_SIZE | PIXEL_COLOR | PIXEL_MODAL | SHAPE_TAG | SHAPE_ZOOM | SHAPE_DATA;
  payload?: ShapePayloadType;
}

const initState = {
  pixelSize: DEFAULT_PIXEL_VAULE,
  pixelColor: '#000000',
  modalState: false,
  shapeTag: 'line',
  zoomPercent: 100,
  data: [],
};

function getVaildShapeZoomPercent({ state, payload }) {
  let { zoomPercent } = payload;

  if (zoomPercent < 10) zoomPercent = 10;
  else if (zoomPercent > 400) zoomPercent = 400;

  return { ...state, zoomPercent };
}

export default function shapeReducer(state = initState, action: ShapeActionType) {
  const { type, payload } = action;

  switch (type) {
    case PIXEL_SIZE:
      return { ...state, pixelSize: payload.pixelSize };
    case PIXEL_COLOR:
      return { ...state, pixelColor: payload.pixelColor };
    case PIXEL_MODAL:
      return { ...state, modalState: payload.modalState };
    case SHAPE_TAG:
      return { ...state, shapeTag: payload.shapeTag };
    case SHAPE_ZOOM:
      return getVaildShapeZoomPercent({ state, payload });
    case SHAPE_DATA:
      return { ...state, data: state.data.concat(payload.data) };
    default:
      return state;
  }
}
