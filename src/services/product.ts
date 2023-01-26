import { get } from "./generics";

export interface Product {
  code: number;
  status: string;
  imported_t: Date;
  url: string;
  creator: string;
  created_t: number;
  last_modified_t: number;
  product_name: string;
  quantity: string;
  brands: string;
  categories: string;
  labels: string;
  cities: string;
  purchase_places: string;
  stores: string;
  ingredients_text: string;
  traces: string;
  serving_size: string;
  serving_quantity: number;
  nutriscore_score: number;
  nutriscore_grade: string;
  image_url: string;
  image_small_url: string;
  main_category: string;
  energy_100g: number;
}

export interface ProductCursor {
  data: Product[];
  next_cursor: string;
}

export const getProducts = async (limit: number, cursor: string) => {
  try {
    const { data } = await get(`/product?limit=${limit}&cursor=${cursor || '63d19d06a0331c6c1790e29c'}`);
    return data;
  } catch (error) {
    console.log(error);
  }
};
