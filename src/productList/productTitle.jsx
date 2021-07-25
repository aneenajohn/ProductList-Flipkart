export const ProductTitle = ({ title }) => {
  if (title.length > 25) {
    let trimmedTitle = title.substr(0, 20);
    trimmedTitle = trimmedTitle.concat("...");
    return trimmedTitle;
  } else return title;
};
