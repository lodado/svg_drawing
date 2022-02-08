/* constants */
export const PIXEL_SIZE = 'PIXEL_SIZE';
export const PIXEL_COLOR = 'PIXEL_COLOR';

/* actions */
export function setPixelSize(pixelSize: number) {
  return { type: PIXEL_SIZE, payload: { pixelSize } };
}
export function setPixelColor(pixelColor: string) {
  return { type: PIXEL_COLOR, payload: { pixelColor } };
}
