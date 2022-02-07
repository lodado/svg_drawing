import React, { useEffect, useRef, useState } from 'react';

export default function Canvas() {
  const canvasRef = useRef(null);
  const [canvasTag, setCanvasTag] = useState([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    canvas.width = window.innerWidth * 0.7;
    canvas.height = window.innerHeight * 0.7;
    setCanvasTag(canvasTag);
  }, []);

  return (
    <div>
      12
      <canvas ref={canvasRef} />
      12
    </div>
  );
}
