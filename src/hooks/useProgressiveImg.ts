import { useState, useEffect } from 'react';

/**
 * Porgressively load an image
 * @param {string} lowQualitySrc
 * @param {string} highQualitySrc
 * @returns {Array} an array that contains `src` to use and `isLoading` that defines whether the image is still loading
 */
const useProgressiveImg = (
  lowQualitySrc: string,
  highQualitySrc: string
): Array<any> => {
  const [src, setSrc] = useState(lowQualitySrc);

  useEffect(() => {
    setSrc(lowQualitySrc);
    const img = new Image();
    img.src = highQualitySrc;
    img.onload = () => {
      setTimeout(() => {
        setSrc(highQualitySrc);
      }, 500);
    };
  }, [lowQualitySrc, highQualitySrc]);

  return [src, src === lowQualitySrc];
};

export default useProgressiveImg;
