export function getSortedData(productList, sortBy) {
  // console.log("sortBy inside sorting function", sortBy);
  switch (sortBy) {
    case "PRICE_HIGH_TO_LOW":
      return productList.sort(
        (a, b) => b["discountedPrice"] - a["discountedPrice"]
      );
    case "PRICE_LOW_TO_HIGH":
      return productList.sort((a, b) => a.discountedPrice - b.discountedPrice);
    case "OPINA":
      return productList.filter((product) => product.brand === "OPINA");
    case "VAN HEUSEN SPORT":
      return productList.filter(
        (product) => product.brand === "VAN HEUSEN SPORT"
      );
    case "HELMONT":
      return productList.filter((product) => product.brand === "HELMONT");
    case "HARPA":
      return productList.filter((product) => product.brand === "HARPA");
    case "THE DRY STATE":
      return productList.filter((product) => product.brand === "THE DRY STATE");
    case "Exortic Fashion":
      return productList.filter(
        (product) => product.brand === "Exortic Fashion"
      );
    case "Men":
      return productList.filter((product) => product.suitableFor === "Men");
    case "Women":
      return productList.filter((product) => product.suitableFor === "Women");
    case "XS":
      return productList.filter((product) =>
        product.availableSizes.includes("XS")
      );
    case "S":
      return productList.filter((product) =>
        product.availableSizes.includes("S")
      );
    case "M":
      return productList.filter((product) =>
        product.availableSizes.includes("M")
      );
    case "L":
      return productList.filter((product) =>
        product.availableSizes.includes("L")
      );
    case "XL":
      return productList.filter((product) =>
        product.availableSizes.includes("XL")
      );
    case "XXL":
      return productList.filter((product) =>
        product.availableSizes.includes("XXL")
      );
    case "3XL":
      return productList.filter((product) =>
        product.availableSizes.includes("3XL")
      );
    case "All":
      return productList;
    default:
      return productList;
  }
}
