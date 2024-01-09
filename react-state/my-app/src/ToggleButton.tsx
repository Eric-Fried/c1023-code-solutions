import { useState } from 'react';

type Props = {
  text: string;
  color: string;
};

export function ToggleButton({ text, color }: Props) {
  const [isClicked, setisClicked] = useState(false);
  console.log('useState', isClicked);

  function handleClick() {
    console.log('before setter', isClicked);
    setisClicked(!isClicked);
    console.log('after setter', isClicked);
  }
  let bgcolor;
  if (isClicked) {
    bgcolor = color;
  } else {
    bgcolor = 'white';
  }

  return (
    <button
      onClick={handleClick}
      style={{
        backgroundColor: bgcolor,
      }}>
      {text}
    </button>
  );
}
