import { useEffect, useState } from 'react';

type State = {
  width: number;
  height: number;
};

export function useWindowSize() {
  const [windowSize, setWindowSize] = useState<State>({
    width: 1200,
    height: 800,
  });

  useEffect(() => {
    function handleResize() {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }
    window.addEventListener('resize', handleResize);

    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return windowSize;
}
