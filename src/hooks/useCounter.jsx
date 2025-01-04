import { useCallback, useState } from "react";

export const useCounter = () => {
  const [count, setCount] = useState(1);
  const [isShow, setIsShow] = useState(false);

  const handleClick = useCallback(
    (e) => {
      console.log(count);
      if (count < 10) {
        setCount((prevcount) => prevcount + 1);
      }
    },
    [count]
  );
  const handleShow = useCallback(() => {
    setIsShow((isShow) => {
      return !isShow;
    });
  });
  return { count, isShow, handleClick, handleShow };
};
