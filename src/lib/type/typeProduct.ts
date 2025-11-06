export interface Product {
  id: number;
  name: string;
  image: string;
  minPrice: number;
  maxPrice: number;
  totalStock: number;
  market: string;
}

export interface ProductResponse {
  rows: Product[];
  page: number;
  totalPage: number;
  totalData: number;
}

export interface ProductState {
  rows: Product[];
  page: number;
  totalPage: number;
  totalData: number;
  param: string;
  loading: boolean;
  error: string | null;
  url: string | null;
}


// Interfaces untuk Product Detail
export interface ProductTag {
  id: string;
  name: string;
  group: {
    id: string;
    name: string;
  };
}

export interface ProductImage {
  id: string;
  image: string;
  sequence: number;
}

export interface ProductInformation {
  id: string;
  paramName: string;
  paramValue: string;
}

export interface ProductModel {
  id: string;
  name: string;
  sku: string;
  price: number;
  stock: number;
  currency: string | null;
  length: number;
  width: number;
  height: number;
  dimensionType: string;
  weight: number;
  weightType: string;
  isMeasurement: boolean;
  image: string;
}

export interface ProductDetail {
  id: string;
  name: string;
  description: string;
  image: string;
  tag: ProductTag[];
  productImages: ProductImage[];
  productInformations: ProductInformation[];
  productModels: ProductModel[];
}

export interface ProductDetailResponse {
  responseCode: string;
  responseDesc: string;
  data: ProductDetail;
}

export interface ProductDetailState {
  product: ProductDetail | null;
  loading: boolean;
  error: string | null;
}