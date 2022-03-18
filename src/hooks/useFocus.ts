import { useRef } from "react";

// https://stackoverflow.com/questions/28889826/how-to-set-focus-on-an-input-field-after-rendering
export const useFocus = () => {
  const htmlElRef = useRef(null);
  const setFocus = () => {
    htmlElRef.current && (htmlElRef.current as any).focus();
  };

  return [htmlElRef, setFocus];
};
