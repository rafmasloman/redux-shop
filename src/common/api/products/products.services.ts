import { IProductsQueryResponse } from './products.interfaces';

export const apiGetAllProductsQuery = async (limit?: number) => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/products?limit=${limit}`,
      {
        method: 'GET',
      },
    );

    const data: IProductsQueryResponse[] = await response.json();

    return data;
  } catch (error) {
    throw error;
  }
};

export const apiGetAllProductDetailQuery = async (productId: number) => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/products/${productId}`,
      {
        method: 'GET',
      },
    );

    const data: IProductsQueryResponse = await response.json();

    return data;
  } catch (error) {
    throw error;
  }
};
