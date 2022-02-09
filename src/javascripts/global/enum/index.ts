export const SHAPE_TAG_OBJECT = {
  line: 'line',
  circle: 'circle',
  rect: 'rect',
  elipse: 'elipse',
} as const;

export type ShapeTagType = typeof SHAPE_TAG_OBJECT[keyof typeof SHAPE_TAG_OBJECT];
