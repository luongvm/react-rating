import React, { useEffect, useRef, useMemo } from 'react';
import { drawEmptyStar } from './ShapeDrawer';
import styles from './ReactRatingFloat.module.css';

export interface ReactRatingFloatProps {
  /** Diameter of a star */
  raterDim?: number;
  /** Set your rating */
  rate?: number;
  /** Set your total stars */
  total?: number;
  /** Active Star Color */
  activeColor?: string;
  /** Inactive Star Color */
  inactiveColor?: string;
  /** Background for the component */
  raterBg?: string;
  /** Additional CSS class name */
  className?: string;
}

const ReactRatingFloat: React.FC<ReactRatingFloatProps> = ({
  raterDim = 20,
  rate = 0.5,
  total = 1,
  activeColor = '#FFB600',
  inactiveColor = '#bebebe',
  raterBg = '#fff',
  className = '',
}) => {
  const canvasRefs = useRef<(HTMLCanvasElement | null)[]>([]);

  const totalStarCount = useMemo(() => Math.max(Math.ceil(rate), total), [rate, total]);
  const totalWidth = useMemo(() => totalStarCount * raterDim, [totalStarCount, raterDim]);
  const rating = useMemo(() => (rate / totalStarCount) * 100, [rate, totalStarCount]);

  useEffect(() => {
    canvasRefs.current.forEach((canvas) => {
      if (canvas) {
        const ctx = canvas.getContext('2d');
        if (ctx) {
          drawEmptyStar(ctx, raterDim / 2, raterBg);
        }
      }
    });
  }, [raterDim, raterBg, totalStarCount]);

  return (
    <div
      className={`${styles.container} ${className}`.trim()}
      style={{
        width: `${totalWidth}px`,
        height: `${raterDim}px`,
        backgroundColor: inactiveColor,
      }}
    >
      <div
        className={styles.fill}
        style={{
          width: `${rating}%`,
          backgroundColor: activeColor,
        }}
      />
      <div className={styles.stars}>
        {Array.from({ length: totalStarCount }, (_, i) => (
          <canvas
            key={i}
            ref={(el) => (canvasRefs.current[i] = el)}
            width={raterDim}
            height={raterDim}
            className={styles.star}
          />
        ))}
      </div>
    </div>
  );
};

export default ReactRatingFloat;
