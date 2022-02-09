export const SHAPE_TAG_OBJECT = {
  line: 'line',
  curv: 'curv',
  circle: 'circle',
  rect: 'rect',
  ellipse: 'ellipse',
} as const;

export type ShapeTagType = typeof SHAPE_TAG_OBJECT[keyof typeof SHAPE_TAG_OBJECT];
