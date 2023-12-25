import { ICartPostRequestMutation } from './cart.interface';

export const apiPostCartCreateMutation = async (
  payload: ICartPostRequestMutation,
) => {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/carts`, {
      method: 'POST',
      body: JSON.stringify(payload),
    });

    const data = await response.json();

    return data;
  } catch (error) {
    throw error;
  }
};

export const apiGetAllCartQuery = async () => {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/carts`, {
      method: 'GET',
    });

    const data = await response.json();

    return data;
  } catch (error) {
    throw error;
  }
};

export const apiPutCartUpdateMutation = async (
  payload: ICartPostRequestMutation,
  cartId: number,
) => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/carts/${cartId}`,
      {
        method: 'PUT',
        body: JSON.stringify(payload),
      },
    );

    const data = await response.json();

    return data;
  } catch (error) {
    throw error;
  }
};

export const apiDeleteCardMutation = async (cartId: number) => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/carts/${cartId}`,
      {
        method: 'DELETE',
      },
    );

    const data = await response.json();

    return data;
  } catch (error) {
    throw error;
  }
};
