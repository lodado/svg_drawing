/* constants */
export const PIXEL_SIZE = 'PIXEL_SIZE';
export const PIXEL_COLOR = 'PIXEL_COLOR';
export const PIXEL_MODAL = 'PIXEL_MODAL';

export const CANVAS_TAG = 'CANVAS_TAG';
export const CANVAS_ZOOM = 'CANVAS_ZOOM';

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

export function setCanvasTag(canvasTag) {
  return { type: CANVAS_TAG, payload: { canvasTag } };
}

export function setCanvasZoomPercent(zoomPercent: number) {
  return { type: CANVAS_ZOOM, payload: { zoomPercent } };
}
