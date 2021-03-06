import { createContext, useContext } from "react";
import { productReducer } from "./productReducer";
import { useReducer } from "react";
export const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  const [state, dispatch] = useReducer(productReducer, {
    products: [],
    sortBy: "All",
    showInventoryAll: true,
    showFastDeliveryOnly: false,
    idealFor: null
  });

  return (
    <ProductContext.Provider
      value={
        (productReducer,
        {
          products: state.products,
          sortBy: state.sortBy,
          idealFor: state.suitableFor,
          showInventoryAll: state.showInventoryAll,
          showFastDeliveryOnly: state.showFastDeliveryOnly,
          dispatch
        })
      }
    >
      {children}
    </ProductContext.Provider>
  );
};

export function useProduct() {
  return useContext(ProductContext);
}
