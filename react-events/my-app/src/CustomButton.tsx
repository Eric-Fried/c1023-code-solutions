type Props = {
  text: string;
  color: string;
};
export function CustomButton({ text, color }: Props) {
  function handleClick() {
    window.alert(text);
  }

  return (
    <button
      onClick={handleClick}
      style={{
        backgroundColor: color,
      }}>
      {text}
    </button>
  );
}
