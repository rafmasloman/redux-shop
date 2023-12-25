import { IProductsQueryResponse } from '../products/products.interfaces';

export const apiGetAllCategoriesQuery = async () => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/products/categories`,
      {
        method: 'GET',
      },
    );

    const data: string[] = await response.json();

    return data;
  } catch (error) {
    throw error;
  }
};

export const apiGetSpecificCategoryQuery = async (categoryName: string) => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/products/category/${categoryName}`,
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
