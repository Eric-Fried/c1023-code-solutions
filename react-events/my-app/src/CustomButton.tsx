type Props = {
  text: string;
  color: string;
  onCustomClick: (text: string, color: string) => void;
};
export function CustomButton({ onCustomClick, text, color }: Props) {
  function handleClick() {
    onCustomClick(text, color);
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
``;
