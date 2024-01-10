import { useState } from 'react';
type Props = {
  items: string[];
};
export function RotatingBanner({ items }: Props) {
  const [activeIndex, setActiveIndex] = useState(0);
  return (
    <div>
      <Banner item={items[activeIndex]} />
      <Button
        label="Prev"
        onClick={() =>
          setActiveIndex((activeIndex - 1 + items.length) % items.length)
        }
      />
      <Indicators
        count={items.length}
        activeIndex={activeIndex}
        onSelect={(i) => setActiveIndex(i)}
      />
      <Button
        label="Next"
        onClick={() => setActiveIndex((activeIndex + 1) % items.length)}
      />
    </div>
  );
}
type BannerProps = {
  item: string;
};
function Banner({ item }: BannerProps) {
  return <h1>{item}</h1>;
}
type ButtonProps = {
  label: string;
  onClick: () => void;
};
function Button({ label, onClick }: ButtonProps) {
  return <button onClick={onClick}>{label}</button>;
}
type IndicatorProps = {
  count: number;
  activeIndex: number;
  onSelect: (index: number) => void;
};
function Indicators({ count, activeIndex, onSelect }: IndicatorProps) {
  activeIndex;
  const indicators = [];
  for (let i = 0; i < count; i++) {
    indicators.push(
      <button
        key={i}
        style={{
          backgroundColor: i === activeIndex ? 'lightblue' : undefined,
        }}
        onClick={() => onSelect(i)}>
        {i}
      </button>
    );
  }
  return <div>{indicators}</div>;
}
