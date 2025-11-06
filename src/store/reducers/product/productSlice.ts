// store/productSlice.ts
import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { apiPrivate } from "@/services/api";
import { ProductResponse, ProductState } from "@/lib/type/typeProduct";

const initialState: ProductState = {
  rows: [],
  page: 1,
  totalPage: 1,
  totalData: 0,
  param: "",
  loading: false,
  error: null,
  url: "/product",
};

//  Thunk yang support pagination + search
export const fetchProducts = createAsyncThunk<
  ProductResponse,
  { page?: number; size?: number; param?: string },
  { rejectValue: string; state: { product: ProductState } }
>(
  "product/fetchProducts",
  async ({ page = 1, size = 10, param = "" }, thunkAPI) => {
    try {
      const state = thunkAPI.getState();
      const baseUrl = state.product.url || "/product"; // ambil dari state

      const response = await apiPrivate.get(`${baseUrl}`, {
        //const response = await apiPrivate.get("/product", {
        params: { page, size, param },
      });
      return response.data as ProductResponse;
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (err: any) {
      //console.log(err.response.data);
      // console.log(" List error:", err.response?.data);
      return thunkAPI.rejectWithValue(
        err.response?.data?.message || "Failed to fetch products"
      );
    }
  }
);

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    setPage: (state, action: PayloadAction<number>) => {
      state.page = action.payload;
    },
    setParam: (state, action: PayloadAction<string>) => {
      state.param = action.payload;
      state.page = 1; // reset ke halaman 1 kalau ganti keyword
    },
    setUrl: (state, action: PayloadAction<string>) => {
      state.url = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.loading = false;
        state.rows = action.payload.rows;
        state.totalPage = action.payload.totalPage;
        state.totalData = action.payload.totalData;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || "Failed to load data";
      });
  },
});

export const { setPage, setParam, setUrl } = productSlice.actions;
export default productSlice.reducer;
