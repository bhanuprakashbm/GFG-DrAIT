import { useEffect, useState } from 'react';
import './GradientBackground.css';

const GradientBackground = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [pageHeight, setPageHeight] = useState('100vh');

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const updateHeight = () => {
      const height = Math.max(
        document.body.scrollHeight,
        document.documentElement.scrollHeight,
        document.body.offsetHeight,
        document.documentElement.offsetHeight,
        document.documentElement.clientHeight
      );
      setPageHeight(`${height}px`);
    };

    window.addEventListener('mousemove', handleMouseMove);
    updateHeight();
    
    // Update height when content changes
    const observer = new MutationObserver(updateHeight);
    observer.observe(document.body, { childList: true, subtree: true });
    window.addEventListener('resize', updateHeight);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', updateHeight);
      observer.disconnect();
    };
  }, []);

  return (
    <div className="gradient-bg-dark" style={{ zIndex: 1, height: pageHeight }}>
      <svg xmlns="http://www.w3.org/2000/svg" style={{ position: 'absolute', width: 0, height: 0 }}>
        <defs>
          <filter id="goo-dark">
            <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur" />
            <feColorMatrix
              in="blur"
              mode="matrix"
              values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 20 -10"
              result="goo"
            />
            <feBlend in="SourceGraphic" in2="goo" />
          </filter>
        </defs>
      </svg>
      <div className="gradients-container-dark">
        <div className="g1-dark"></div>
        <div className="g2-dark"></div>
        <div className="g3-dark"></div>
        <div className="g4-dark"></div>
        <div className="g5-dark"></div>
        <div
          className="interactive-dark"
          style={{
            transform: `translate(${mousePosition.x}px, ${mousePosition.y}px)`,
          }}
        ></div>
      </div>
    </div>
  );
};

export default GradientBackground;
