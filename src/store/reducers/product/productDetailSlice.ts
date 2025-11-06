// store/productDetailSlice.ts
import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { apiPrivate } from "@/services/api";
import {
  ProductDetailState,
  ProductDetailResponse,
} from "@/lib/type/typeProduct";


const initialState: ProductDetailState = {
  product: null,
  loading: false,
  error: null,
};

// Thunk untuk fetch product detail by ID
export const fetchProductDetail = createAsyncThunk<
  ProductDetailResponse,
  string, // productId
  { rejectValue: string }
>("productDetail/fetchProductDetail", async (productId: string, thunkAPI) => {
  try {
   const response = await apiPrivate.get(`/product/${productId}`);
    //  const response = await apiPrivate.get(`/product`, {
    //    params: {
    //      id: productId,
    //      action: "detail", // tambah identifier
    //    },
    //  });
     console.log("Detail response:", response.data);
    return response.data as ProductDetailResponse;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (err: any) {
            console.log(" List error:", err.response?.data);

    return thunkAPI.rejectWithValue(
      err.response?.data?.message || "Failed to fetch product detail"
    );
  }
});

const productDetailSlice = createSlice({
  name: "productDetail",
  initialState,
  reducers: {
    clearProductDetail: (state) => {
      state.product = null;
      state.error = null;
    },
    clearError: (state) => {
      state.error = null;
    },
    // Optional: Update specific field jika perlu
    updateProductPrice: (
      state,
      action: PayloadAction<{ modelId: string; newPrice: number }>
    ) => {
      if (state.product) {
        const model = state.product.productModels.find(
          (model) => model.id === action.payload.modelId
        );
        if (model) {
          model.price = action.payload.newPrice;
        }
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProductDetail.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchProductDetail.fulfilled, (state, action) => {
        state.loading = false;
        state.product = action.payload.data;
        state.error = null;
      })
      .addCase(fetchProductDetail.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || "Failed to load product detail";
        state.product = null;
      });
  },
});

export const { clearProductDetail, clearError, updateProductPrice } =
  productDetailSlice.actions;
export default productDetailSlice.reducer;
