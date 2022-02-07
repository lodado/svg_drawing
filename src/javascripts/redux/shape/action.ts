/* constants */
export const PIXEL_SIZE = 'PIXEL_SIZE';

/* actions */
export function setPixelSize(pixelSize: number) {
  return { type: PIXEL_SIZE, payload: { pixelSize } };
}
