export type ItemSchema = {
  key: string;
  label: string;
  width: number;
  height: number;
  backgroundColor: string;
};

const NUM_ITEMS = 10;

function getButtonBackgroundColor(i: number) {
  const multiplier = 255 / (NUM_ITEMS - 1);
  const colorVal = i * multiplier;
  return `rgb(${colorVal}, ${Math.abs(128 - colorVal)}, ${255 - colorVal})`;
}

export const initialData: ItemSchema[] = [...Array(NUM_ITEMS)].map(
  (_, index) => {
    const backgroundColor = getButtonBackgroundColor(index);

    return {
      height: 100,
      backgroundColor,
      key: `item-${index}`,
      label: String(index) + '',
      width: 60 + Math.random() * 40,
    };
  },
);
