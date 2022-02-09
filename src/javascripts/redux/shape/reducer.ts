import { DEFAULT_PIXEL_VAULE, UNDO_LIMIT } from '@Global/constant';
import { ShapeTagType } from '@Global/enum';
import {
  PIXEL_SIZE,
  PIXEL_COLOR,
  PIXEL_MODAL,
  SHAPE_TAG,
  SHAPE_ZOOM,
  SHAPE_DATA,
  UNDO_DATA,
  REDO_DATA,
} from './action';

type Shape = any;

export interface ShapePayloadType {
  pixelSize: string;
  pixelColor: string;
  modalState: boolean;
  shapeTag: ShapeTagType;
  zoomPercent: number;
  data: Shape;
}

export interface ShapeActionType {
  type: PIXEL_SIZE | PIXEL_COLOR | PIXEL_MODAL | SHAPE_TAG | SHAPE_ZOOM | SHAPE_DATA | UNDO_DATA;
  payload?: ShapePayloadType;
}

const initState = {
  pixelSize: DEFAULT_PIXEL_VAULE,
  pixelColor: '#000000',
  modalState: false,
  shapeTag: 'line',
  zoomPercent: 100,
  data: [],
  undoArray: [],
};

function getVaildShapeZoomPercent({ state, payload }) {
  let { zoomPercent } = payload;

  if (zoomPercent < 10) zoomPercent = 10;
  else if (zoomPercent > 400) zoomPercent = 400;

  return { ...state, zoomPercent };
}

function setUndo({ state }) {
  const { data, undoArray } = state;

  if (data.length === 0 || undoArray.length >= UNDO_LIMIT) return state;

  const newData = data;
  const newUndoArray = undoArray.concat(newData.pop());

  return { ...state, data: newData, undoArray: newUndoArray };
}

function setRedo({ state }) {
  const { data, undoArray } = state;

  if (undoArray.length === 0) return state;

  const newUndoArray = undoArray;
  const newData = data.concat(newUndoArray.pop());

  return { ...state, data: newData, undoArray: newUndoArray };
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
      if (state.undoArray.length > 0) {
        state.undoArray.shift();
      }
      return { ...state, data: state.data.concat(payload.data) };
    case UNDO_DATA:
      return setUndo({ state });
    case REDO_DATA:
      return setRedo({ state });

    default:
      return state;
  }
}
