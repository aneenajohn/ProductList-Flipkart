export const isAddedInList = (_id, list) => {
  const itemFound = list?.find((item) => item._id === _id);
  return itemFound;
};

export const toggleActive = (isSelected, setSelected) =>
  setSelected(!isSelected);
