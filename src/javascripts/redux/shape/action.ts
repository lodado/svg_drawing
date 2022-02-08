/* constants */
export const PIXEL_SIZE = 'PIXEL_SIZE';
export const PIXEL_COLOR = 'PIXEL_COLOR';
export const PIXEL_MODAL = 'PIXEL_MODAL';

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
