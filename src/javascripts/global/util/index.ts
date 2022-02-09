export function getAttr({
  shapeTag,
  offsetX,
  offsetY,
  startX,
  startY,
  debouncePixelColor,
  debouncePixelSize,
}) {
  const obj = {
    element: shapeTag,
    key: `${shapeTag}${Date.now()}`,
    stroke: debouncePixelColor,
    strokeWidth: debouncePixelSize,
  };

  const [Cx1, Cy1] = [startX, offsetY];
  const [Cx2, Cy2] = [offsetX, startY];

  switch (shapeTag) {
    case 'line':
      return {
        ...obj,
        x1: startX,
        y1: startY,
        x2: offsetX,
        y2: offsetY,
      };

    case 'circle':
      return {
        ...obj,
        x: (offsetX + startX) / 2,
        y: (offsetY + startY) / 2,
        r: Math.sqrt((offsetX - startX) ** 2 + (offsetY - startY) ** 2) / 2,
      };
    case 'rect':
      return {
        ...obj,
        x: Math.min(offsetX, startX),
        y: Math.min(offsetY, startY),
        width: Math.abs(offsetX - startX),
        height: Math.abs(offsetY - startY),
      };

    case 'ellipse':
      return {
        ...obj,
        cx: (offsetX + startX) / 2,
        cy: (offsetY + startY) / 2,
        rx: Math.abs(offsetX - startX) / 2,
        ry: Math.abs(offsetY - startY) / 2,
      };

    case 'curv':
      return {
        ...obj,
        d: `M${startX},${startY}, C${Cx1},${Cy1} ${Cx2},${Cy2} ${offsetX},${offsetY}`,
      };

    default:
      return {};
  }
}
