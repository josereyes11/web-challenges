import { useEffect, useState } from "react";

export default function useMouse() {
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);

  useEffect(() => {
    document.body.addEventListener("mousemove", (event) => {
      setX(event.clientX);
      setY(event.clientY);
    });
  }, []);
  return [x, y];
}
