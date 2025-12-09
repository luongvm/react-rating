/**
 * Draws a rectangle background on the canvas
 */
function drawRect(ctx: CanvasRenderingContext2D, dim: number, backColor: string): void {
  ctx.save();
  ctx.canvas.width = dim;
  ctx.canvas.height = dim;
  ctx.fillStyle = backColor;
  ctx.fillRect(0, 0, dim, dim);
  ctx.restore();
}

/**
 * Draws a star shape on the canvas
 */
function drawStar(
  ctx: CanvasRenderingContext2D,
  x: number,
  y: number,
  radius: number,
  points: number = 5,
  innerRadiusRatio: number = 0.5,
  options: { empty?: boolean; fillColor?: string } = {}
): void {
  const { empty = false, fillColor = 'gold' } = options;

  ctx.save();

  if (empty) {
    ctx.globalCompositeOperation = 'destination-out';
  } else {
    ctx.fillStyle = fillColor;
  }

  ctx.beginPath();
  ctx.translate(x, y);
  ctx.moveTo(0, -radius);

  for (let i = 0; i < points; i++) {
    ctx.rotate(Math.PI / points);
    ctx.lineTo(0, -radius * innerRadiusRatio);
    ctx.rotate(Math.PI / points);
    ctx.lineTo(0, -radius);
  }

  ctx.fill();
  ctx.restore();
}

/**
 * Draws an empty star (cutout) on a colored background
 */
export function drawEmptyStar(
  ctx: CanvasRenderingContext2D,
  radius: number,
  backgroundColor: string
): void {
  drawRect(ctx, radius * 2, backgroundColor);
  drawStar(ctx, radius, radius, radius, 5, 0.5, { empty: true });
}

// Legacy export for backward compatibility
export const StarDrawer = {
  emptyStar: drawEmptyStar,
};
