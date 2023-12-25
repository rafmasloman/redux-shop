import { ILoginMutationRequestParams } from './auth.interfaces';

export const apiPostLoginMutation = async ({
  username,
  password,
}: ILoginMutationRequestParams) => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/auth/login`,
      {
        method: 'POST',
        body: JSON.stringify({ username, password }),
      },
    );

    const data = await response.json();

    return data;
  } catch (error) {
    throw error;
  }
};
