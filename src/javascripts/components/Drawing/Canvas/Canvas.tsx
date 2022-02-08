import React, { useEffect, useRef, useState } from 'react';
import { DEBOUNCE_CYCLE } from '@Global/constant';
import Container from './style';

export default function Canvas(): JSX.Element {
  const canvasRef = useRef(null);
  const [canvasTag, setCanvasTag] = useState([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    let resizeEventId = 0;

    const resizeCanvasEvent = () => {
      if (resizeEventId > 0) {
        clearTimeout(resizeEventId);
      }

      const resizeEvent = () => {
        const rect = canvas.parentNode.getBoundingClientRect();
        canvas.width = rect.width;
        canvas.height = rect.height;
        resizeEventId = 0;
      };

      resizeEventId = Number(setTimeout(resizeEvent, DEBOUNCE_CYCLE));
    };

    setCanvasTag(canvas);
    window.addEventListener('resize', resizeCanvasEvent, { passive: true });
    resizeCanvasEvent();

    return () => {
      window.removeEventListener('resize', resizeCanvasEvent);
    };
  }, []);

  return (
    <Container>
      <canvas ref={canvasRef} />
    </Container>
  );
}
