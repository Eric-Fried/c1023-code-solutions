import { useState } from 'react';
export function HotButton() {
  const [count, setCount] = useState(0);
  let bgcolor;
  if (count <= 3) {
    bgcolor = 'hot-button3';
  } else if (count <= 6 && count > 3) {
    bgcolor = 'hot-button6';
  } else if (count <= 9 && count > 6) {
    bgcolor = 'hot-button9';
  } else if (count <= 12 && count > 9) {
    bgcolor = 'hot-button12';
  } else if (count <= 15 && count > 12) {
    bgcolor = 'hot-button15';
  } else if (count <= 18 && count > 15) {
    bgcolor = 'hot-button18';
  }

  return (
    <div>
      <button
        className={bgcolor}
        onClick={() => setCount((count) => count + 1)}>
        count is {count}
      </button>
    </div>
  );
}
