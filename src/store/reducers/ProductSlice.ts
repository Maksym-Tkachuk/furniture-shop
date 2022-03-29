import { ProductSell } from "../../Modules/ProductSell";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ProductState {
  product: ProductSell[];
  isLoading: boolean;
  error: string;
}

const initialState: ProductState = {
  product: [],
  isLoading: false,
  error: "",
};

export const ProductSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    setNewProduct(state, action: PayloadAction<ProductSell>) {
      let manifestness = state.product.some(elem=>elem.id == action.payload.id)
      if(manifestness){
        state.product.filter(elem=>elem.id == action.payload.id)[0].count +=1
      }else{
          state.product = [...state.product, action.payload];
      }
    },
    plusProduct(state, action: PayloadAction<number>) {
      state.product.filter(elem=>elem.id === action.payload)[0].count+=1;
    },
    minusProduct(state, action: PayloadAction<number>) {
      let product = state.product.filter(elem=>elem.id == action.payload)[0];
      if(  product.count == 0){ product.count=0}else{ product.count-=1 }
    },
    deleteProduct(state, action: PayloadAction<number>) {
      state.product = [...state.product.filter(elem=>elem.id !== action.payload)]
    },
    clearListProduct(state) {
      state.product = []
    },
  },
});

export default ProductSlice.reducer;
