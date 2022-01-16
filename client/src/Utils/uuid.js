export const uuid = () => {
  return (
    Math.round(Math.random() * 0x10000).toString(16) +
    Math.round(Math.random() * 0x10000).toString(16)
  );
};
