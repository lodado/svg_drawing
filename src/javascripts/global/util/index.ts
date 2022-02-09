export function getAttr({
  shapeTag,
  offsetX,
  offsetY,
  startX,
  startY,
  debouncePixelColor,
  debouncePixelSize,
  width,
  height,
}) {
  const obj = {
    element: shapeTag,
    key: `${shapeTag}${Date.now()}`,
    stroke: debouncePixelColor,
    strokeWidth: debouncePixelSize,
  };

  const [Cx1, Cy1] = [startX / width, offsetY / height];
  const [Cx2, Cy2] = [offsetX / width, startY / height];

  switch (shapeTag) {
    case 'line':
      return {
        ...obj,
        x1: startX / width,
        y1: startY / height,
        x2: offsetX / width,
        y2: offsetY / height,
      };

    case 'circle':
      return {
        ...obj,
        x: (offsetX + startX) / (2 * width),
        y: (offsetY + startY) / (2 * height),
        offsetX: offsetX / width,
        startX: startX / width,
        offsetY: offsetY / height,
        startY: offsetY / height,
      };
    case 'rect':
      return {
        ...obj,
        x: Math.min(offsetX, startX) / width,
        y: Math.min(offsetY, startY) / height,
        width: Math.abs(offsetX - startX) / width,
        height: Math.abs(offsetY - startY) / height,
      };

    case 'ellipse':
      return {
        ...obj,
        cx: (offsetX + startX) / (2 * width),
        cy: (offsetY + startY) / (2 * height),
        rx: Math.abs(offsetX - startX) / (2 * width),
        ry: Math.abs(offsetY - startY) / (2 * height),
      };

    case 'curv':
      return {
        ...obj,
        startX: startX / width,
        startY: startY / height,
        Cx1,
        Cy1,
        Cx2,
        Cy2,
        endX: offsetX / width,
        endY: offsetY / height,
      };

    default:
      return {};
  }
}
