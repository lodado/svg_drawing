/* constants */
export const PIXEL_SIZE = 'PIXEL_SIZE';
export const PIXEL_COLOR = 'PIXEL_COLOR';
export const PIXEL_MODAL = 'PIXEL_MODAL';

export const SHAPE_TAG = 'SHAPE_TAG';
export const SHAPE_ZOOM = 'SHAPE_ZOOM';
export const SHAPE_DATA = 'SHAPE_DATA';

export const CLEAR_DATA = 'CLEAR_DATA';
export const UNDO_DATA = 'UNDO_DATA';
export const REDO_DATA = 'REDO_DATA';

/* actions */
export function setPixelSize(pixelSize: number) {
  return { type: PIXEL_SIZE, payload: { pixelSize } };
}

export function setPixelColor(pixelColor: string) {
  return { type: PIXEL_COLOR, payload: { pixelColor } };
}

export function setPixelModalState(modalState: boolean) {
  return { type: PIXEL_MODAL, payload: { modalState } };
}

export function setShapeTag(shapeTag: string) {
  return { type: SHAPE_TAG, payload: { shapeTag } };
}

export function setShapeZoomPercent(zoomPercent: number) {
  return { type: SHAPE_ZOOM, payload: { zoomPercent } };
}

export function setShapeData(data) {
  return { type: SHAPE_DATA, payload: { data } };
}

export function clearData() {
  return { type: CLEAR_DATA };
}
export function undoData() {
  return { type: UNDO_DATA };
}

export function redoData() {
  return { type: REDO_DATA };
}
